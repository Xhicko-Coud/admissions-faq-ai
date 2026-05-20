import { v } from "convex/values";

import { query } from "../_generated/server";
import {
  getKnowledgeReadContext,
  knowledgeEntryListFiltersValidator,
  loadKnowledgeEntries,
  matchesKnowledgeSearch,
  restrictKnowledgeFiltersForReviewer,
  toPublicKnowledgeEntry,
  toSafeKnowledgeEntry,
} from "./helpers";
import { KNOWLEDGE_ENTRY_STATUSES } from "./types";

const KNOWLEDGE_ENTRY_LIST_LIMIT = 200;

export const listKnowledgeEntries = query({
  args: knowledgeEntryListFiltersValidator,
  handler: async (ctx, args) => {
    const access = await getKnowledgeReadContext(ctx);

    if (access.status !== "success") {
      return access;
    }

    const appliedFilters = access.canViewAllStatuses
      ? {
          status: args.status,
          type: args.type,
        }
      : restrictKnowledgeFiltersForReviewer({
          status: args.status,
          type: args.type,
        });

    const records = await loadKnowledgeEntries(ctx, appliedFilters);
    const entries = records
      .filter((entry) => matchesKnowledgeSearch(entry, args.search))
      .slice()
      .sort((first, second) => second.updatedAt - first.updatedAt)
      .slice(0, KNOWLEDGE_ENTRY_LIST_LIMIT)
      .map(toSafeKnowledgeEntry);

    return {
      entries,
      status: "success",
    } as const;
  },
});

export const getKnowledgeEntry = query({
  args: {
    knowledgeEntryId: v.id("knowledgeEntries"),
  },
  handler: async (ctx, args) => {
    const access = await getKnowledgeReadContext(ctx);

    if (access.status !== "success") {
      return access;
    }

    const entry = await ctx.db.get(args.knowledgeEntryId);

    if (!entry) {
      return { status: "not_found" } as const;
    }

    if (!access.canViewAllStatuses && entry.status !== KNOWLEDGE_ENTRY_STATUSES.published) {
      return { status: "not_found" } as const;
    }

    return {
      entry: toSafeKnowledgeEntry(entry),
      status: "success",
    } as const;
  },
});

export const listPublishedKnowledgeEntries = query({
  args: {
    type: knowledgeEntryListFiltersValidator.type,
  },
  handler: async (ctx, args) => {
    const records = await loadKnowledgeEntries(ctx, {
      status: KNOWLEDGE_ENTRY_STATUSES.published,
      type: args.type,
    });

    const entries = records
      .slice()
      .sort((first, second) => {
        const firstPublishedAt = first.publishedAt ?? first.updatedAt;
        const secondPublishedAt = second.publishedAt ?? second.updatedAt;

        return secondPublishedAt - firstPublishedAt;
      })
      .slice(0, KNOWLEDGE_ENTRY_LIST_LIMIT)
      .map(toPublicKnowledgeEntry);

    return {
      entries,
      status: "success",
    } as const;
  },
});
