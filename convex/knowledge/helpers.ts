import { v } from "convex/values";

import type { Doc } from "../_generated/dataModel";
import type { QueryCtx } from "../_generated/server";
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
  type KnowledgeEntryStatus,
  type KnowledgeEntryType,
} from "./types";

export const KNOWLEDGE_ENTRY_READ_ROLES = [
  USER_PROFILE_ROLES.admin,
  USER_PROFILE_ROLES.editor,
  USER_PROFILE_ROLES.reviewer,
] as const;

export const knowledgeEntryListFiltersValidator = {
  search: v.optional(v.string()),
  status: v.optional(knowledgeEntryStatusValidator),
  type: v.optional(knowledgeEntryTypeValidator),
} as const;

type KnowledgeEntryRecord = Doc<"knowledgeEntries">;

export type SafeKnowledgeEntry = {
  answer: string | null;
  archivedAt: number | null;
  content: string | null;
  createdAt: number;
  createdBy: string;
  id: KnowledgeEntryRecord["_id"];
  keywords: string[];
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

export function toSafeKnowledgeEntry(entry: KnowledgeEntryRecord): SafeKnowledgeEntry {
  return {
    answer: entry.answer ?? null,
    archivedAt: entry.archivedAt ?? null,
    content: entry.content ?? null,
    createdAt: entry.createdAt,
    createdBy: entry.createdBy,
    id: entry._id,
    keywords: entry.keywords ?? [],
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

export function canReadAllKnowledgeStatuses(role: UserProfileRole) {
  return role === USER_PROFILE_ROLES.admin || role === USER_PROFILE_ROLES.editor;
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
