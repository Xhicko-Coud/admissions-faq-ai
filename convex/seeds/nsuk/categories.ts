import type { Doc, Id } from "../../_generated/dataModel";
import type { MutationCtx, QueryCtx } from "../../_generated/server";
import {
  getCategoryDuplicateByName,
  getCategoryDuplicateBySlug,
  normalizeCategoryName,
  normalizeCategorySlug,
  validateCategoryPayload,
} from "../../categories/helpers";
import { CATEGORY_STATUSES } from "../../categories/types";
import { mapNsukSeedCategory } from "./helpers";
import type {
  NsukCategorySeedValidationResult,
  NsukCategorySlugResolution,
  NsukCategoryUpsertResult,
  NsukPreparedCategorySeed,
  NsukProgrammeRequirementSeedRecord,
  NsukSeedCategory,
} from "./types";

type CategoryRecord = Doc<"categories">;

export type NsukSeedActor = {
  userId: string;
};

export type NsukCategoryUpsertSummary =
  | {
      created: number;
      results: NsukCategoryUpsertResult[];
      reused: number;
      status: "success";
      updated: number;
    }
  | {
      issues: string[];
      results: [];
      status: "blocked";
    };

export async function upsertNsukSeedCategories(
  ctx: MutationCtx,
  args: {
    actor: NsukSeedActor;
    categories: readonly NsukSeedCategory[];
    programmeRequirements: readonly Pick<NsukProgrammeRequirementSeedRecord, "categorySlug">[];
  },
): Promise<NsukCategoryUpsertSummary> {
  const validation = validateNsukSeedCategories({
    categories: args.categories,
    programmeRequirements: args.programmeRequirements,
  });

  if (!validation.isValid) {
    return {
      issues: validation.issues,
      results: [],
      status: "blocked",
    };
  }

  const duplicateCheck = await checkNsukSeedCategoryConflicts(
    ctx,
    validation.categories,
  );

  if (duplicateCheck.status === "blocked") {
    return duplicateCheck;
  }

  const results: NsukCategoryUpsertResult[] = [];

  for (const category of validation.categories) {
    const result = await upsertNsukSeedCategory(ctx, {
      actor: args.actor,
      category,
    });
    results.push(result);
  }

  return {
    created: results.filter((result) => result.status === "created").length,
    results,
    reused: results.filter((result) => result.status === "reused").length,
    status: "success",
    updated: results.filter((result) => result.status === "updated").length,
  };
}

export function validateNsukSeedCategories(args: {
  categories: readonly NsukSeedCategory[];
  programmeRequirements: readonly Pick<NsukProgrammeRequirementSeedRecord, "categorySlug">[];
}): NsukCategorySeedValidationResult {
  const issues: string[] = [];
  const normalizedCategorySlugs = new Set<string>();
  const normalizedCategoryNames = new Set<string>();
  const preparedCategories: NsukPreparedCategorySeed[] = [];

  args.categories.forEach((category, index) => {
    const preparedCategory = mapNsukSeedCategory(category);
    const normalizedSlug = normalizeCategorySlug(preparedCategory.slug);
    const normalizedName = normalizeCategoryName(preparedCategory.name);

    collectCategoryIssues({
      category: preparedCategory,
      index,
      issues,
      normalizedName,
      normalizedSlug,
    });

    if (normalizedCategorySlugs.has(normalizedSlug)) {
      issues.push(`Seed category ${index + 1} duplicates slug "${normalizedSlug}".`);
    }

    if (normalizedCategoryNames.has(normalizedName.toLocaleLowerCase())) {
      issues.push(`Seed category ${index + 1} duplicates name "${normalizedName}".`);
    }

    normalizedCategorySlugs.add(normalizedSlug);
    normalizedCategoryNames.add(normalizedName.toLocaleLowerCase());
    preparedCategories.push({
      ...preparedCategory,
      name: normalizedName,
      slug: normalizedSlug,
    });
  });

  collectProgrammeCategoryReferenceIssues({
    issues,
    normalizedCategorySlugs,
    programmeRequirements: args.programmeRequirements,
  });

  if (issues.length > 0) {
    return {
      isValid: false,
      issues,
      status: "invalid_seed_categories",
    };
  }

  return {
    categories: preparedCategories,
    isValid: true,
    normalizedCategorySlugs: Array.from(normalizedCategorySlugs),
    status: "success",
  };
}

export async function resolveNsukCategoryIdsBySlug(
  ctx: MutationCtx | QueryCtx,
  categorySlugs: string[],
): Promise<
  | {
      resolutions: NsukCategorySlugResolution[];
      status: "success";
    }
  | {
      issues: string[];
      resolutions: [];
      status: "blocked";
    }
> {
  const issues: string[] = [];
  const resolutions: NsukCategorySlugResolution[] = [];

  for (const categorySlug of categorySlugs) {
    const normalizedSlug = normalizeCategorySlug(categorySlug);

    if (!normalizedSlug) {
      issues.push("Category slug is required for resolution.");
      continue;
    }

    const category = await getActiveCategoryByNormalizedSlug(ctx, normalizedSlug);

    if (!category) {
      issues.push(`Active category not found for slug "${normalizedSlug}".`);
      continue;
    }

    resolutions.push({
      categoryId: category._id,
      categorySlug: normalizedSlug,
    });
  }

  if (issues.length > 0) {
    return {
      issues,
      resolutions: [],
      status: "blocked",
    };
  }

  return {
    resolutions,
    status: "success",
  };
}

export function buildNsukCategoryIdMap(
  resolutions: NsukCategorySlugResolution[],
) {
  return new Map(
    resolutions.map((resolution) => [
      resolution.categorySlug,
      resolution.categoryId,
    ]),
  );
}

export function getNsukCategoryIdFromMap(
  categoryMap: Map<string, Id<"categories">>,
  categorySlug: string,
) {
  const normalizedSlug = normalizeCategorySlug(categorySlug);
  return categoryMap.get(normalizedSlug) ?? null;
}

async function checkNsukSeedCategoryConflicts(
  ctx: MutationCtx,
  categories: NsukPreparedCategorySeed[],
): Promise<NsukCategoryUpsertSummary> {
  const issues: string[] = [];

  for (const category of categories) {
    const duplicateBySlug = await getCategoryDuplicateBySlug(ctx, {
      slug: category.slug,
    });
    const duplicateByName = await getCategoryDuplicateByName(ctx, {
      normalizedName: category.name,
    });

    if (duplicateBySlug?.status === CATEGORY_STATUSES.archived) {
      issues.push(`Seed category slug "${category.slug}" matches an archived category.`);
    }

    if (
      duplicateByName &&
      duplicateByName.slug !== category.slug
    ) {
      issues.push(
        `Seed category name "${category.name}" conflicts with existing slug "${duplicateByName.slug}".`,
      );
    }
  }

  if (issues.length > 0) {
    return {
      issues,
      results: [],
      status: "blocked",
    };
  }

  return {
    created: 0,
    results: [],
    reused: 0,
    status: "success",
    updated: 0,
  };
}

async function upsertNsukSeedCategory(
  ctx: MutationCtx,
  args: {
    actor: NsukSeedActor;
    category: NsukPreparedCategorySeed;
  },
): Promise<NsukCategoryUpsertResult> {
  const existingCategory = await getActiveCategoryByNormalizedSlug(
    ctx,
    args.category.slug,
  );

  if (existingCategory) {
    return await syncExistingNsukSeedCategory(ctx, {
      actor: args.actor,
      category: args.category,
      existingCategory,
    });
  }

  const now = Date.now();
  const categoryId = await ctx.db.insert("categories", {
    description: args.category.description,
    displayOrder: args.category.displayOrder,
    createdAt: now,
    createdBy: args.actor.userId,
    name: args.category.name,
    slug: args.category.slug,
    status: CATEGORY_STATUSES.active,
    updatedAt: now,
    updatedBy: args.actor.userId,
  });

  return {
    categoryId,
    categorySlug: args.category.slug,
    status: "created",
  };
}

async function syncExistingNsukSeedCategory(
  ctx: MutationCtx,
  args: {
    actor: NsukSeedActor;
    category: NsukPreparedCategorySeed;
    existingCategory: CategoryRecord;
  },
): Promise<NsukCategoryUpsertResult> {
  const validation = validateCategoryPayload({
    description: args.category.description,
    displayOrder: args.category.displayOrder,
    name: args.category.name,
  });

  if (!validation.isValid) {
    return {
      categoryId: args.existingCategory._id,
      categorySlug: args.category.slug,
      status: "reused",
    };
  }

  const hasChanges =
    (args.existingCategory.description ?? undefined) !==
      validation.data.description ||
    args.existingCategory.displayOrder !== validation.data.displayOrder ||
    args.existingCategory.name !== validation.data.normalizedName;

  if (!hasChanges) {
    return {
      categoryId: args.existingCategory._id,
      categorySlug: args.category.slug,
      status: "reused",
    };
  }

  await ctx.db.patch(args.existingCategory._id, {
    description: validation.data.description,
    displayOrder: validation.data.displayOrder,
    name: validation.data.normalizedName,
    updatedAt: Date.now(),
    updatedBy: args.actor.userId,
  });

  return {
    categoryId: args.existingCategory._id,
    categorySlug: args.category.slug,
    status: "updated",
  };
}

async function getActiveCategoryByNormalizedSlug(
  ctx: MutationCtx | QueryCtx,
  normalizedSlug: string,
) {
  const category = await ctx.db
    .query("categories")
    .withIndex("by_slug", (lookup) => lookup.eq("slug", normalizedSlug))
    .unique();

  if (!category || category.status !== CATEGORY_STATUSES.active) {
    return null;
  }

  return category;
}

function collectCategoryIssues(args: {
  category: NsukPreparedCategorySeed;
  index: number;
  issues: string[];
  normalizedName: string;
  normalizedSlug: string;
}) {
  if (!args.normalizedName) {
    args.issues.push(`Seed category ${args.index + 1} is missing a name.`);
  }

  if (!args.normalizedSlug) {
    args.issues.push(`Seed category ${args.index + 1} is missing a slug.`);
  }

  if (args.category.status !== CATEGORY_STATUSES.active) {
    args.issues.push(`Seed category ${args.index + 1} must be active.`);
  }

  const validation = validateCategoryPayload({
    description: args.category.description,
    displayOrder: args.category.displayOrder,
    name: args.normalizedName,
  });

  if (!validation.isValid) {
    args.issues.push(
      ...validation.issues.map(
        (issue) => `Seed category ${args.index + 1}: ${issue}`,
      ),
    );
  }
}

function collectProgrammeCategoryReferenceIssues(args: {
  issues: string[];
  normalizedCategorySlugs: Set<string>;
  programmeRequirements: readonly Pick<NsukProgrammeRequirementSeedRecord, "categorySlug">[];
}) {
  args.programmeRequirements.forEach((record, index) => {
    const normalizedSlug = normalizeCategorySlug(record.categorySlug);

    if (!normalizedSlug) {
      args.issues.push(
        `Programme requirement ${index + 1} is missing a categorySlug.`,
      );
      return;
    }

    if (!args.normalizedCategorySlugs.has(normalizedSlug)) {
      args.issues.push(
        `Programme requirement ${index + 1} references unknown categorySlug "${normalizedSlug}".`,
      );
    }
  });
}
