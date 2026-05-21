import { v } from "convex/values";

import { query } from "../_generated/server";
import {
  clampRetrievalTopK,
  detectRetrievalIntent,
  filterRelevantKnowledgeRetrievalMatches,
  isAdmissionsRelatedQuery,
  normalizeRetrievalQuestion,
  getKnowledgeReadContext,
  knowledgeEntryListFiltersValidator,
  loadKnowledgeEntries,
  matchesKnowledgeSearch,
  restrictKnowledgeFiltersForReviewer,
  toPublicKnowledgeEntry,
  toPublicKnowledgeRetrievalMatch,
  toSafeKnowledgeEntry,
} from "./helpers";
import {
  KNOWLEDGE_ENTRY_STATUSES,
  KNOWLEDGE_RETRIEVAL_STATUSES,
  knowledgeEntryTypeValidator,
} from "./types";

const KNOWLEDGE_ENTRY_LIST_LIMIT = 200;
const MIN_RETRIEVAL_QUESTION_LENGTH = 2;

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

export const retrievePublishedKnowledge = query({
  args: {
    question: v.string(),
    topK: v.optional(v.number()),
    type: v.optional(knowledgeEntryTypeValidator),
  },
  handler: async (ctx, args) => {
    const question = normalizeRetrievalQuestion(args.question);
    const topK = clampRetrievalTopK(args.topK);
    const intent = detectRetrievalIntent(question);

    if (question.length < MIN_RETRIEVAL_QUESTION_LENGTH) {
      return {
        intent,
        matches: [],
        query: question,
        status: KNOWLEDGE_RETRIEVAL_STATUSES.noMatch,
        topK,
      } as const;
    }

    if (!isAdmissionsRelatedQuery(question)) {
      return {
        intent,
        matches: [],
        query: question,
        status: KNOWLEDGE_RETRIEVAL_STATUSES.noMatch,
        topK,
      } as const;
    }

    const results = args.type
      ? await ctx.db
          .query("knowledgeEntries")
          .withSearchIndex("search_text", (lookup) =>
            lookup
              .search("searchText", question)
              .eq("status", KNOWLEDGE_ENTRY_STATUSES.published)
              .eq("type", args.type!),
          )
          .take(topK)
      : await ctx.db
          .query("knowledgeEntries")
          .withSearchIndex("search_text", (lookup) =>
            lookup
              .search("searchText", question)
              .eq("status", KNOWLEDGE_ENTRY_STATUSES.published),
          )
          .take(topK);
    const matches = filterRelevantKnowledgeRetrievalMatches(
      question,
      results.map((entry) => toPublicKnowledgeRetrievalMatch(entry, intent)),
    );

    return {
      intent,
      matches,
      query: question,
      status:
        matches.length > 0
          ? KNOWLEDGE_RETRIEVAL_STATUSES.matched
          : KNOWLEDGE_RETRIEVAL_STATUSES.noMatch,
      topK,
    } as const;
  },
});
