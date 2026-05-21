import { v } from "convex/values";

import type { Doc, Id } from "../../_generated/dataModel";
import { mutation, type MutationCtx } from "../../_generated/server";
import { authComponent } from "../../auth";
import {
  USER_PROFILE_ROLES,
  USER_PROFILE_STATUSES,
} from "../../auth/authorization";
import { CATEGORY_STATUSES } from "../../categories/types";
import {
  getCategoryDuplicateByName,
  normalizeCategoryName,
  normalizeCategorySlug,
} from "../../categories/helpers";
import { KNOWLEDGE_ENTRY_STATUSES } from "../../knowledge/types";
import { buildKnowledgeSearchText } from "../../knowledge/helpers";
import {
  nsukAdmissionSeedData,
  nsukCategoriesSeed,
  nsukProgrammeRequirementsSeed,
} from "../nsuk-programme-requirements.seed";
import {
  buildNsukCategoryIdMap,
  getNsukCategoryIdFromMap,
  resolveNsukCategoryIdsBySlug,
  upsertNsukSeedCategories,
  validateNsukSeedCategories,
} from "./categories";
import {
  buildNsukProgrammeListKnowledgePayload,
  dedupeTrimmedStrings,
  mapNsukProgrammeToKnowledgePayload,
} from "./helpers";
import type {
  NsukKnowledgeEntrySeedPayload,
  NsukProgrammeRequirementSeedRecord,
} from "./types";

const MAX_IMPORT_KEYWORDS = 20;
const MAX_SUMMARY_WARNINGS = 20;

type KnowledgeEntryRecord = Doc<"knowledgeEntries">;

type NsukImportSummary = {
  categoriesCreated: number;
  categoriesReused: number;
  categoriesUpdated: number;
  categoryConflicts: number;
  draftDueToReview: number;
  dryRun: boolean;
  invalidRecords: number;
  knowledgeEntriesCreated: number;
  knowledgeEntriesSkipped: number;
  knowledgeEntriesUpdated: number;
  publishedRecords: number;
  status: "blocked" | "completed" | "dry_run" | "forbidden" | "unauthenticated";
  totalProgrammeRecords: number;
  totalSeedCategories: number;
  warnings: string[];
};

type ExistingKnowledgeMatch = {
  entry: KnowledgeEntryRecord;
  payload: NsukKnowledgeEntrySeedPayload;
};

export const importNsukProgrammeRequirements = mutation({
  args: {
    dryRun: v.boolean(),
    seedKey: v.optional(v.string()),
  },
  handler: async (ctx, args): Promise<NsukImportSummary> => {
    const access = await getNsukImportAccess(ctx, {
      seedKey: args.seedKey,
    });

    if (access.status !== "success") {
      return buildImportSummary({
        dryRun: args.dryRun,
        status: access.status,
      });
    }

    const categoryValidation = validateNsukSeedCategories({
      categories: nsukCategoriesSeed,
      programmeRequirements: nsukProgrammeRequirementsSeed,
    });

    if (!categoryValidation.isValid) {
      return buildImportSummary({
        dryRun: args.dryRun,
        invalidRecords: nsukProgrammeRequirementsSeed.length,
        status: "blocked",
        warnings: categoryValidation.issues,
      });
    }

    const categoryPlan = await planNsukCategoryImport(ctx);
    const knowledgePlan = await planNsukKnowledgeImport(ctx);

    if (categoryPlan.conflicts.length > 0) {
      return buildImportSummary({
        categoryConflicts: categoryPlan.conflicts.length,
        dryRun: args.dryRun,
        invalidRecords: knowledgePlan.invalidRecords,
        status: "blocked",
        warnings: [...categoryPlan.conflicts, ...knowledgePlan.warnings],
      });
    }

    if (args.dryRun) {
      return buildImportSummary({
        categoriesCreated: categoryPlan.toCreate,
        categoriesReused: categoryPlan.toReuse,
        categoriesUpdated: categoryPlan.toUpdate,
        dryRun: true,
        draftDueToReview: knowledgePlan.draftDueToReview,
        invalidRecords: knowledgePlan.invalidRecords,
        knowledgeEntriesCreated: knowledgePlan.toCreate,
        knowledgeEntriesSkipped: knowledgePlan.toSkip,
        knowledgeEntriesUpdated: knowledgePlan.toUpdate,
        publishedRecords: knowledgePlan.publishedRecords,
        status: "dry_run",
        warnings: knowledgePlan.warnings,
      });
    }

    const categoryUpsert = await upsertNsukSeedCategories(ctx, {
      actor: { userId: access.actorUserId },
      categories: nsukCategoriesSeed,
      programmeRequirements: nsukProgrammeRequirementsSeed,
    });

    if (categoryUpsert.status === "blocked") {
      return buildImportSummary({
        categoryConflicts: categoryUpsert.issues.length,
        dryRun: false,
        invalidRecords: knowledgePlan.invalidRecords,
        status: "blocked",
        warnings: categoryUpsert.issues,
      });
    }

    const resolution = await resolveNsukCategoryIdsBySlug(
      ctx,
      categoryValidation.categories,
    );

    if (resolution.status === "blocked") {
      return buildImportSummary({
        dryRun: false,
        invalidRecords: nsukProgrammeRequirementsSeed.length,
        status: "blocked",
        warnings: resolution.issues,
      });
    }

    const importResult = await importNsukKnowledgeEntries(ctx, {
      actorUserId: access.actorUserId,
      categoryMap: buildNsukCategoryIdMap(resolution.resolutions),
    });

    return buildImportSummary({
      categoriesCreated: categoryUpsert.created,
      categoriesReused: categoryUpsert.reused,
      categoriesUpdated: categoryUpsert.updated,
      dryRun: false,
      draftDueToReview: importResult.draftDueToReview,
      invalidRecords: importResult.invalidRecords,
      knowledgeEntriesCreated: importResult.created,
      knowledgeEntriesSkipped: importResult.skipped,
      knowledgeEntriesUpdated: importResult.updated,
      publishedRecords: importResult.publishedRecords,
      status: "completed",
      warnings: importResult.warnings,
    });
  },
});

async function getNsukImportAccess(
  ctx: MutationCtx,
  args: {
    seedKey?: string;
  },
) {
  const user = await getCurrentAuthUser(ctx);

  if (user) {
    const profile = await ctx.db
      .query("userProfiles")
      .withIndex("by_userId", (lookup) => lookup.eq("userId", user._id))
      .unique();

    if (
      profile &&
      profile.status === USER_PROFILE_STATUSES.active &&
      profile.role === USER_PROFILE_ROLES.admin
    ) {
      return {
        actorUserId: user._id,
        status: "success",
      } as const;
    }
  }

  const seedKey = args.seedKey?.trim() ?? "";

  if (!seedKey) {
    return { status: user ? "forbidden" : "unauthenticated" } as const;
  }

  const expectedSeedKey = getSeedEnvValue("ADMIN_SEED_KEY");

  if (!expectedSeedKey || !isValidSeedKey(seedKey, expectedSeedKey)) {
    return { status: "forbidden" } as const;
  }

  return {
    actorUserId: "system-nsuk-seed",
    status: "success",
  } as const;
}

async function planNsukCategoryImport(ctx: MutationCtx) {
  const conflicts: string[] = [];
  let toCreate = 0;
  let toReuse = 0;
  let toUpdate = 0;

  for (const category of nsukCategoriesSeed) {
    const normalizedSlug = normalizeCategorySlug(category.slug);
    const normalizedName = normalizeCategoryName(category.name);
    const existingCategory = await getCategoryBySlug(ctx, normalizedSlug);
    const duplicateByName = await getCategoryDuplicateByName(ctx, {
      normalizedName,
    });

    if (
      duplicateByName &&
      duplicateByName.slug !== normalizedSlug &&
      duplicateByName.status !== CATEGORY_STATUSES.active
    ) {
      conflicts.push(
        `Category name "${normalizedName}" conflicts with non-active existing slug "${duplicateByName.slug}".`,
      );
      continue;
    }

    if (!existingCategory) {
      toCreate += 1;
      continue;
    }

    if (existingCategory.status === CATEGORY_STATUSES.archived) {
      conflicts.push(`Category slug "${normalizedSlug}" matches an archived category.`);
      continue;
    }

    if (hasCategorySeedChanges(existingCategory, category)) {
      toUpdate += 1;
    } else {
      toReuse += 1;
    }
  }

  return {
    conflicts,
    toCreate,
    toReuse,
    toUpdate,
  };
}

async function planNsukKnowledgeImport(ctx: MutationCtx) {
  const records = await ctx.db.query("knowledgeEntries").collect();
  const warnings: string[] = [];
  let draftDueToReview = 0;
  let invalidRecords = 0;
  let publishedRecords = 0;
  let toCreate = 0;
  let toSkip = 0;
  let toUpdate = 0;

  for (const payload of buildNsukKnowledgeImportPayloads(warnings)) {

    if (!isValidImportPayload(payload)) {
      invalidRecords += 1;
      toSkip += 1;
      continue;
    }

    if (payload.status === KNOWLEDGE_ENTRY_STATUSES.draft) {
      draftDueToReview += 1;
    } else {
      publishedRecords += 1;
    }

    const existingEntry = findNsukKnowledgeEntry(records, payload);

    if (!existingEntry) {
      toCreate += 1;
      continue;
    }

    if (hasKnowledgeSeedChanges(existingEntry, payload, null)) {
      toUpdate += 1;
    } else {
      toSkip += 1;
    }
  }

  return {
    draftDueToReview,
    invalidRecords,
    publishedRecords,
    toCreate,
    toSkip,
    toUpdate,
    warnings: limitWarnings(warnings),
  };
}

async function importNsukKnowledgeEntries(
  ctx: MutationCtx,
  args: {
    actorUserId: string;
    categoryMap: Map<string, Id<"categories">>;
  },
) {
  const records = await ctx.db.query("knowledgeEntries").collect();
  const warnings: string[] = [];
  let created = 0;
  let draftDueToReview = 0;
  let invalidRecords = 0;
  let publishedRecords = 0;
  let skipped = 0;
  let updated = 0;

  for (const payload of buildNsukKnowledgeImportPayloads(warnings)) {
    const categoryId = getNsukCategoryIdFromMap(args.categoryMap, payload.categorySlug);

    if (!categoryId || !isValidImportPayload(payload)) {
      invalidRecords += 1;
      skipped += 1;
      warnings.push(
        `Knowledge entry "${payload.title}" could not be imported because its category or required fields are invalid.`,
      );
      continue;
    }

    if (payload.status === KNOWLEDGE_ENTRY_STATUSES.draft) {
      draftDueToReview += 1;
    } else {
      publishedRecords += 1;
    }

    const existingEntry = findNsukKnowledgeEntry(records, payload);

    if (existingEntry) {
      const changed = await updateNsukKnowledgeEntry(ctx, {
        actorUserId: args.actorUserId,
        categoryId,
        entry: existingEntry,
        payload,
      });

      if (changed) {
        updated += 1;
      } else {
        skipped += 1;
      }

      continue;
    }

    const entryId = await createNsukKnowledgeEntry(ctx, {
      actorUserId: args.actorUserId,
      categoryId,
      payload,
    });

    const insertedEntry = await ctx.db.get(entryId);
    if (insertedEntry) {
      records.push(insertedEntry);
    }
    created += 1;
  }

  return {
    created,
    draftDueToReview,
    invalidRecords,
    publishedRecords,
    skipped,
    updated,
    warnings: limitWarnings(warnings),
  };
}

async function createNsukKnowledgeEntry(
  ctx: MutationCtx,
  args: {
    actorUserId: string;
    categoryId: Id<"categories">;
    payload: NsukKnowledgeEntrySeedPayload;
  },
) {
  const now = Date.now();
  const publishedAt =
    args.payload.status === KNOWLEDGE_ENTRY_STATUSES.published ? now : undefined;

  return await ctx.db.insert("knowledgeEntries", {
    answer: args.payload.answer,
    categoryId: args.categoryId,
    content: args.payload.content,
    createdAt: now,
    createdBy: args.actorUserId,
    keywords: args.payload.keywords,
    metadata: args.payload.metadata,
    publishedAt,
    question: args.payload.question,
    searchText: buildKnowledgeSearchText(args.payload),
    sourceLabel: args.payload.sourceLabel,
    status: args.payload.status,
    title: args.payload.title,
    type: args.payload.type,
    updatedAt: now,
    updatedBy: args.actorUserId,
  });
}

async function updateNsukKnowledgeEntry(
  ctx: MutationCtx,
  args: {
    actorUserId: string;
    categoryId: Id<"categories">;
    entry: KnowledgeEntryRecord;
    payload: NsukKnowledgeEntrySeedPayload;
  },
) {
  if (!hasKnowledgeSeedChanges(args.entry, args.payload, args.categoryId)) {
    return false;
  }

  const now = Date.now();
  const nextPublishedAt =
    args.payload.status === KNOWLEDGE_ENTRY_STATUSES.published
      ? args.entry.publishedAt ?? now
      : undefined;

  await ctx.db.patch(args.entry._id, {
    answer: args.payload.answer,
    categoryId: args.categoryId,
    content: args.payload.content,
    keywords: args.payload.keywords,
    metadata: args.payload.metadata,
    publishedAt: nextPublishedAt,
    question: args.payload.question,
    searchText: buildKnowledgeSearchText(args.payload),
    sourceLabel: args.payload.sourceLabel,
    status: args.payload.status,
    title: args.payload.title,
    type: args.payload.type,
    updatedAt: now,
    updatedBy: args.actorUserId,
  });

  return true;
}

function mapNsukProgrammeToImportPayload(
  record: NsukProgrammeRequirementSeedRecord,
  warnings: string[],
) {
  const payload = mapNsukProgrammeToKnowledgePayload(record);
  return limitNsukImportKeywords({
    payload,
    warningLabel: `Programme "${record.programme}"`,
    warnings,
  });
}

function mapNsukProgrammeListToImportPayload(warnings: string[]) {
  const payload = buildNsukProgrammeListKnowledgePayload({
    meta: nsukAdmissionSeedData.meta,
    records: nsukProgrammeRequirementsSeed,
  });

  return limitNsukImportKeywords({
    payload,
    warningLabel: `Knowledge entry "${payload.title}"`,
    warnings,
  });
}

function buildNsukKnowledgeImportPayloads(warnings: string[]) {
  return [
    mapNsukProgrammeListToImportPayload(warnings),
    ...nsukProgrammeRequirementsSeed.map((record) =>
      mapNsukProgrammeToImportPayload(record, warnings),
    ),
  ];
}

function limitNsukImportKeywords(args: {
  payload: NsukKnowledgeEntrySeedPayload;
  warningLabel: string;
  warnings: string[];
}) {
  const keywords = dedupeTrimmedStrings(args.payload.keywords);

  if (keywords.length > MAX_IMPORT_KEYWORDS) {
    args.warnings.push(
      `${args.warningLabel} keywords were truncated from ${keywords.length} to ${MAX_IMPORT_KEYWORDS}.`,
    );
  }

  return {
    ...args.payload,
    keywords: keywords.slice(0, MAX_IMPORT_KEYWORDS),
  };
}

function findNsukKnowledgeEntry(
  records: KnowledgeEntryRecord[],
  payload: NsukKnowledgeEntrySeedPayload,
) {
  return (
    records.find((entry) => isNsukKnowledgeMatch({ entry, payload })) ?? null
  );
}

function isNsukKnowledgeMatch(args: ExistingKnowledgeMatch) {
  const metadata = args.entry.metadata;

  return (
    metadata?.programmeSlug === args.payload.metadata.programmeSlug &&
    metadata?.schoolShortName === args.payload.metadata.schoolShortName &&
    metadata?.academicSession === args.payload.metadata.academicSession &&
    args.entry.sourceLabel === args.payload.sourceLabel
  );
}

function hasKnowledgeSeedChanges(
  entry: KnowledgeEntryRecord,
  payload: NsukKnowledgeEntrySeedPayload,
  categoryId: Id<"categories"> | null,
) {
  return (
    entry.title !== payload.title ||
    entry.question !== payload.question ||
    entry.answer !== payload.answer ||
    entry.content !== payload.content ||
    entry.type !== payload.type ||
    entry.status !== payload.status ||
    (categoryId !== null && entry.categoryId !== categoryId) ||
    entry.sourceLabel !== payload.sourceLabel ||
    !areStringListsEqual(entry.keywords ?? [], payload.keywords) ||
    JSON.stringify(entry.metadata ?? null) !== JSON.stringify(payload.metadata)
  );
}

function isValidImportPayload(payload: NsukKnowledgeEntrySeedPayload) {
  return Boolean(
    payload.title &&
      payload.answer &&
      payload.content &&
      payload.question &&
      payload.categorySlug &&
      payload.metadata.programmeSlug,
  );
}

function hasCategorySeedChanges(
  category: Doc<"categories">,
  seedCategory: (typeof nsukCategoriesSeed)[number],
) {
  return (
    category.name !== seedCategory.name.trim() ||
    (category.description ?? "") !== seedCategory.description.trim() ||
    category.displayOrder !== seedCategory.displayOrder
  );
}

async function getCategoryBySlug(ctx: MutationCtx, slug: string) {
  return await ctx.db
    .query("categories")
    .withIndex("by_slug", (lookup) => lookup.eq("slug", slug))
    .unique();
}

function buildImportSummary(
  overrides: Partial<NsukImportSummary>,
): NsukImportSummary {
  return {
    categoriesCreated: 0,
    categoriesReused: 0,
    categoriesUpdated: 0,
    categoryConflicts: 0,
    draftDueToReview: 0,
    dryRun: overrides.dryRun ?? false,
    invalidRecords: 0,
    knowledgeEntriesCreated: 0,
    knowledgeEntriesSkipped: 0,
    knowledgeEntriesUpdated: 0,
    publishedRecords: 0,
    status: "blocked",
    totalProgrammeRecords: nsukAdmissionSeedData.meta.recordCount,
    totalSeedCategories: nsukCategoriesSeed.length,
    ...overrides,
    warnings: limitWarnings(overrides.warnings ?? []),
  };
}

function limitWarnings(warnings: string[]) {
  return warnings.slice(0, MAX_SUMMARY_WARNINGS);
}

function areStringListsEqual(current: string[], next: string[]) {
  if (current.length !== next.length) {
    return false;
  }

  return current.every((value, index) => value === next[index]);
}

async function getCurrentAuthUser(ctx: MutationCtx) {
  try {
    return await authComponent.getAuthUser(ctx);
  } catch {
    return null;
  }
}

function getSeedEnvValue(name: string) {
  const value = process.env[name];
  return value?.trim() ? value : null;
}

function isValidSeedKey(inputSeedKey: string, expectedSeedKey: string) {
  if (inputSeedKey.length !== expectedSeedKey.length) {
    return false;
  }

  let difference = 0;

  for (let index = 0; index < expectedSeedKey.length; index += 1) {
    difference |= inputSeedKey.charCodeAt(index) ^ expectedSeedKey.charCodeAt(index);
  }

  return difference === 0;
}
