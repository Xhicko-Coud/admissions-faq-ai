import { v } from "convex/values";

import type { Doc } from "../_generated/dataModel";
import type { MutationCtx, QueryCtx } from "../_generated/server";
import { authComponent } from "../auth";
import {
  getCurrentAuthUser,
  USER_PROFILE_ROLES,
  USER_PROFILE_STATUSES,
  type UserProfileRole,
} from "../auth/authorization";
import {
  KNOWLEDGE_ENTRY_STATUSES,
  knowledgeEntryStatusValidator,
  knowledgeEntryTypeValidator,
  type KnowledgeEntryMetadata,
  type KnowledgeEntryStatus,
  type KnowledgeEntryType,
} from "./types";

export const KNOWLEDGE_ENTRY_READ_ROLES = [
  USER_PROFILE_ROLES.admin,
  USER_PROFILE_ROLES.editor,
  USER_PROFILE_ROLES.reviewer,
] as const;

export const KNOWLEDGE_ENTRY_WRITE_ROLES = [
  USER_PROFILE_ROLES.admin,
  USER_PROFILE_ROLES.editor,
] as const;

export const knowledgeEntryListFiltersValidator = {
  search: v.optional(v.string()),
  status: v.optional(knowledgeEntryStatusValidator),
  type: v.optional(knowledgeEntryTypeValidator),
} as const;

export const knowledgeEntryWritePayloadValidator = {
  answer: v.optional(v.string()),
  categoryId: v.optional(v.id("categories")),
  content: v.optional(v.string()),
  keywords: v.optional(v.array(v.string())),
  question: v.optional(v.string()),
  sourceLabel: v.optional(v.string()),
  sourceUrl: v.optional(v.string()),
  title: v.string(),
  type: knowledgeEntryTypeValidator,
} as const;

type KnowledgeEntryRecord = Doc<"knowledgeEntries">;
const MAX_TITLE_LENGTH = 200;
const MAX_QUESTION_LENGTH = 300;
const MAX_BODY_LENGTH = 10000;
const MAX_SOURCE_LABEL_LENGTH = 160;
const MAX_SOURCE_URL_LENGTH = 2048;
const MAX_KEYWORD_COUNT = 20;
const MAX_KEYWORD_LENGTH = 50;

export type SafeKnowledgeEntry = {
  answer: string | null;
  archivedAt: number | null;
  categoryId: KnowledgeEntryRecord["categoryId"] | null;
  content: string | null;
  createdAt: number;
  createdBy: string;
  id: KnowledgeEntryRecord["_id"];
  keywords: string[];
  metadata: KnowledgeEntryMetadata | null;
  publishedAt: number | null;
  question: string | null;
  sourceLabel: string | null;
  sourceUrl: string | null;
  status: KnowledgeEntryStatus;
  title: string;
  type: KnowledgeEntryType;
  updatedAt: number;
  updatedBy: string;
};

export type PublicKnowledgeEntry = {
  answer: string | null;
  content: string | null;
  id: KnowledgeEntryRecord["_id"];
  keywords: string[];
  publishedAt: number | null;
  question: string | null;
  sourceLabel: string | null;
  title: string;
  type: KnowledgeEntryType;
  updatedAt: number;
};

export type KnowledgeEntryWritePayloadInput = {
  answer?: string;
  categoryId?: KnowledgeEntryRecord["categoryId"];
  content?: string;
  keywords?: string[];
  question?: string;
  sourceLabel?: string;
  sourceUrl?: string;
  title: string;
  type: KnowledgeEntryType;
};

export type ValidatedKnowledgeEntryPayload = {
  answer?: string;
  categoryId?: KnowledgeEntryRecord["categoryId"];
  content?: string;
  keywords?: string[];
  question?: string;
  sourceLabel?: string;
  sourceUrl?: string;
  title: string;
  type: KnowledgeEntryType;
};

export type KnowledgeEntryValidationResult =
  | {
      data: ValidatedKnowledgeEntryPayload;
      isValid: true;
      status: "success";
    }
  | {
      issues: string[];
      isValid: false;
      status: "invalid_input";
    };

export function toSafeKnowledgeEntry(entry: KnowledgeEntryRecord): SafeKnowledgeEntry {
  return {
    answer: entry.answer ?? null,
    archivedAt: entry.archivedAt ?? null,
    categoryId: entry.categoryId ?? null,
    content: entry.content ?? null,
    createdAt: entry.createdAt,
    createdBy: entry.createdBy,
    id: entry._id,
    keywords: entry.keywords ?? [],
    metadata: entry.metadata ?? null,
    publishedAt: entry.publishedAt ?? null,
    question: entry.question ?? null,
    sourceLabel: entry.sourceLabel ?? null,
    sourceUrl: entry.sourceUrl ?? null,
    status: entry.status,
    title: entry.title,
    type: entry.type,
    updatedAt: entry.updatedAt,
    updatedBy: entry.updatedBy,
  };
}

export function toPublicKnowledgeEntry(
  entry: KnowledgeEntryRecord,
): PublicKnowledgeEntry {
  return {
    answer: entry.answer ?? null,
    content: entry.content ?? null,
    id: entry._id,
    keywords: entry.keywords ?? [],
    publishedAt: entry.publishedAt ?? null,
    question: entry.question ?? null,
    sourceLabel: entry.sourceLabel ?? null,
    title: entry.title,
    type: entry.type,
    updatedAt: entry.updatedAt,
  };
}

export async function getKnowledgeReadContext(ctx: QueryCtx) {
  const user = await getCurrentAuthUser(ctx);

  if (!user) {
    return { status: "unauthenticated" } as const;
  }

  const profile = await ctx.db
    .query("userProfiles")
    .withIndex("by_userId", (lookup) => lookup.eq("userId", user._id))
    .unique();

  if (!profile || profile.status !== USER_PROFILE_STATUSES.active) {
    return { status: "forbidden" } as const;
  }

  if (!KNOWLEDGE_ENTRY_READ_ROLES.includes(profile.role)) {
    return { status: "forbidden" } as const;
  }

  return {
    canViewAllStatuses:
      profile.role === USER_PROFILE_ROLES.admin ||
      profile.role === USER_PROFILE_ROLES.editor,
    profile,
    status: "success",
    user,
  } as const;
}

export async function getKnowledgeWriteContext(ctx: MutationCtx) {
  const user = await getCurrentMutationAuthUser(ctx);

  if (!user) {
    return { status: "unauthenticated" } as const;
  }

  const profile = await ctx.db
    .query("userProfiles")
    .withIndex("by_userId", (lookup) => lookup.eq("userId", user._id))
    .unique();

  if (!profile || profile.status !== USER_PROFILE_STATUSES.active) {
    return { status: "forbidden" } as const;
  }

  const canWriteKnowledgeEntries =
    profile.role === USER_PROFILE_ROLES.admin ||
    profile.role === USER_PROFILE_ROLES.editor;

  if (!canWriteKnowledgeEntries) {
    return { status: "forbidden" } as const;
  }

  return {
    profile,
    status: "success",
    user,
  } as const;
}

export function canReadAllKnowledgeStatuses(role: UserProfileRole) {
  return role === USER_PROFILE_ROLES.admin || role === USER_PROFILE_ROLES.editor;
}

export function toKnowledgeMutationEntrySummary(entry: KnowledgeEntryRecord) {
  return {
    id: entry._id,
    status: entry.status,
    title: entry.title,
    type: entry.type,
    updatedAt: entry.updatedAt,
  };
}

export function toPublishedKnowledgeMutationEntrySummary(
  entry: KnowledgeEntryRecord,
) {
  return {
    id: entry._id,
    publishedAt: entry.publishedAt ?? null,
    status: entry.status,
    title: entry.title,
    type: entry.type,
    updatedAt: entry.updatedAt,
  };
}

export function toArchivedKnowledgeMutationEntrySummary(
  entry: KnowledgeEntryRecord,
) {
  return {
    archivedAt: entry.archivedAt ?? null,
    id: entry._id,
    status: entry.status,
    title: entry.title,
    type: entry.type,
    updatedAt: entry.updatedAt,
  };
}

export async function loadKnowledgeEntries(
  ctx: QueryCtx,
  filters: {
    status?: KnowledgeEntryStatus;
    type?: KnowledgeEntryType;
  },
) {
  if (filters.status && filters.type) {
    return await ctx.db
      .query("knowledgeEntries")
      .withIndex("by_status_type", (lookup) =>
        lookup.eq("status", filters.status!).eq("type", filters.type!),
      )
      .collect();
  }

  if (filters.status) {
    return await ctx.db
      .query("knowledgeEntries")
      .withIndex("by_status", (lookup) => lookup.eq("status", filters.status!))
      .collect();
  }

  if (filters.type) {
    return await ctx.db
      .query("knowledgeEntries")
      .withIndex("by_type", (lookup) => lookup.eq("type", filters.type!))
      .collect();
  }

  return await ctx.db.query("knowledgeEntries").collect();
}

export function matchesKnowledgeSearch(
  entry: KnowledgeEntryRecord,
  search: string | undefined,
) {
  const normalizedSearch = search?.trim().toLowerCase() ?? "";

  if (!normalizedSearch) {
    return true;
  }

  return [
    entry.title,
    entry.question ?? "",
    entry.answer ?? "",
    entry.content ?? "",
    entry.type,
    entry.status,
    entry.sourceLabel ?? "",
    entry.sourceUrl ?? "",
    entry.keywords?.join(" ") ?? "",
    entry.createdBy,
    entry.updatedBy,
  ]
    .join(" ")
    .toLowerCase()
    .includes(normalizedSearch);
}

export function restrictKnowledgeFiltersForReviewer(args: {
  status?: KnowledgeEntryStatus;
  type?: KnowledgeEntryType;
}) {
  const status =
    args.status && args.status !== KNOWLEDGE_ENTRY_STATUSES.published
      ? KNOWLEDGE_ENTRY_STATUSES.published
      : args.status ?? KNOWLEDGE_ENTRY_STATUSES.published;

  return {
    status,
    type: args.type,
  };
}

export function validateKnowledgeEntryPayload(
  input: KnowledgeEntryWritePayloadInput,
): KnowledgeEntryValidationResult {
  const title = input.title.trim();
  const question = normalizeOptionalText(input.question);
  const answer = normalizeOptionalText(input.answer);
  const content = normalizeOptionalText(input.content);
  const sourceLabel = normalizeOptionalText(input.sourceLabel);
  const sourceUrl = normalizeOptionalText(input.sourceUrl);
  const keywords = normalizeKeywords(input.keywords);
  const issues: string[] = [];

  if (!title) {
    issues.push("Title is required.");
  }

  if (title.length > MAX_TITLE_LENGTH) {
    issues.push(`Title must be ${MAX_TITLE_LENGTH} characters or fewer.`);
  }

  if (question && question.length > MAX_QUESTION_LENGTH) {
    issues.push(`Question must be ${MAX_QUESTION_LENGTH} characters or fewer.`);
  }

  if (answer && answer.length > MAX_BODY_LENGTH) {
    issues.push(`Answer must be ${MAX_BODY_LENGTH} characters or fewer.`);
  }

  if (content && content.length > MAX_BODY_LENGTH) {
    issues.push(`Content must be ${MAX_BODY_LENGTH} characters or fewer.`);
  }

  if (!answer && !content) {
    issues.push("At least one of answer or content is required.");
  }

  if (sourceLabel && sourceLabel.length > MAX_SOURCE_LABEL_LENGTH) {
    issues.push(
      `Source label must be ${MAX_SOURCE_LABEL_LENGTH} characters or fewer.`,
    );
  }

  if (sourceUrl && sourceUrl.length > MAX_SOURCE_URL_LENGTH) {
    issues.push(`Source URL must be ${MAX_SOURCE_URL_LENGTH} characters or fewer.`);
  }

  if (sourceUrl && !isValidUrl(sourceUrl)) {
    issues.push("Source URL must be a valid URL.");
  }

  if (input.keywords && keywords.length === 0) {
    issues.push("Keywords must include at least one non-empty value when provided.");
  }

  if (!isKnowledgeEntryType(input.type)) {
    issues.push("Knowledge entry type is invalid.");
  }

  if (issues.length > 0) {
    return {
      isValid: false,
      issues,
      status: "invalid_input",
    };
  }

  return {
    data: {
      ...(answer ? { answer } : {}),
      ...(input.categoryId ? { categoryId: input.categoryId } : {}),
      ...(content ? { content } : {}),
      ...(keywords.length > 0 ? { keywords } : {}),
      ...(question ? { question } : {}),
      ...(sourceLabel ? { sourceLabel } : {}),
      ...(sourceUrl ? { sourceUrl } : {}),
      title,
      type: input.type,
    },
    isValid: true,
    status: "success",
  };
}

export function canArchiveKnowledgeEntries(role: UserProfileRole) {
  return role === USER_PROFILE_ROLES.admin;
}

export function isKnowledgeEntryPublishReady(entry: KnowledgeEntryRecord) {
  return validateKnowledgeEntryPayload({
    answer: entry.answer,
    categoryId: entry.categoryId,
    content: entry.content,
    keywords: entry.keywords,
    question: entry.question,
    sourceLabel: entry.sourceLabel,
    sourceUrl: entry.sourceUrl,
    title: entry.title,
    type: entry.type,
  });
}

async function getCurrentMutationAuthUser(ctx: MutationCtx) {
  try {
    return await authComponent.getAuthUser(ctx);
  } catch {
    return null;
  }
}

function normalizeOptionalText(value: string | null | undefined) {
  const normalizedValue = value?.trim() ?? "";
  return normalizedValue ? normalizedValue : undefined;
}

function normalizeKeywords(keywords: string[] | undefined) {
  if (!keywords) {
    return [];
  }

  const normalizedKeywords = keywords
    .map((keyword) => keyword.trim())
    .filter((keyword) => keyword.length > 0 && keyword.length <= MAX_KEYWORD_LENGTH);

  return Array.from(new Set(normalizedKeywords)).slice(0, MAX_KEYWORD_COUNT);
}

function isKnowledgeEntryType(value: string): value is KnowledgeEntryType {
  return value === "faq" ||
    value === "admission_requirement" ||
    value === "application_process" ||
    value === "programme" ||
    value === "fee" ||
    value === "deadline" ||
    value === "document_requirement" ||
    value === "screening" ||
    value === "contact" ||
    value === "general_information";
}

function isValidUrl(value: string) {
  try {
    const parsedUrl = new URL(value);
    return Boolean(parsedUrl.protocol && parsedUrl.hostname);
  } catch {
    return false;
  }
}
