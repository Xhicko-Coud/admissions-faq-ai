import { v } from "convex/values";

import type { Doc } from "../_generated/dataModel";
import { query, type QueryCtx } from "../_generated/server";
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
  KNOWLEDGE_ENTRY_TYPES,
  KNOWLEDGE_RETRIEVAL_INTENTS,
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

export const resolveProgrammeAvailability = query({
  args: {
    programme: v.string(),
  },
  handler: async (ctx, args) => {
    const requestedProgramme = cleanExtractedProgrammeName(
      normalizeProgrammeNameForExactMatch(args.programme),
    );

    if (!requestedProgramme) {
      return {
        programme: "",
        status: "invalid_input",
      } as const;
    }

    const programmeEntries = await ctx.db
      .query("knowledgeEntries")
      .withIndex("by_status_type", (lookup) =>
        lookup
          .eq("status", KNOWLEDGE_ENTRY_STATUSES.published)
          .eq("type", KNOWLEDGE_ENTRY_TYPES.programme),
      )
      .collect();
    const exactRequirementEntry = findExactProgrammeEntryInRecords(
      programmeEntries,
      requestedProgramme,
    );

    if (exactRequirementEntry) {
      return {
        programme: exactRequirementEntry.metadata?.programme ?? requestedProgramme,
        source: "programme_record",
        status: "available",
      } as const;
    }

    const programmeListEntry = programmeEntries.find((entry) =>
      isProgrammeListEntry(entry),
    );
    const exactProgrammeFromList = programmeListEntry
      ? findExactProgrammeInProgrammeList(
          programmeListEntry.content ?? programmeListEntry.answer ?? "",
          requestedProgramme,
        )
      : "";

    if (exactProgrammeFromList) {
      return {
        programme: exactProgrammeFromList,
        source: "programme_list",
        status: "available",
      } as const;
    }

    return {
      programme: toDisplayProgrammeNameFromNormalized(requestedProgramme),
      status: "not_found",
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
    const searchQuestion =
      intent === KNOWLEDGE_RETRIEVAL_INTENTS.programmeList
        ? "NSUK undergraduate programmes available programmes course list programme list"
        : question;

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
              .search("searchText", searchQuestion)
              .eq("status", KNOWLEDGE_ENTRY_STATUSES.published)
              .eq("type", args.type!),
          )
          .take(topK)
      : await ctx.db
          .query("knowledgeEntries")
          .withSearchIndex("search_text", (lookup) =>
            lookup
              .search("searchText", searchQuestion)
              .eq("status", KNOWLEDGE_ENTRY_STATUSES.published),
          )
          .take(topK);
    const shouldResolveExactProgramme = shouldResolveExactProgrammeForRetrieval(
      intent,
      question,
    );
    const isProgrammeAvailabilityQuestion =
      isProgrammeAvailabilityRetrievalQuestion(question);
    const requestedProgramme = shouldResolveExactProgramme
      ? extractProgrammeNameFromRetrievalQuestion(question)
      : "";
    const exactProgrammeEntry = requestedProgramme
      ? await findExactProgrammeRequirementEntry(ctx, requestedProgramme)
      : null;
    const rankedResults = exactProgrammeEntry
      ? [
          exactProgrammeEntry,
          ...results.filter((entry) => entry._id !== exactProgrammeEntry._id),
        ]
      : isProgrammeAvailabilityQuestion && requestedProgramme
        ? []
      : results;
    const matches = filterRelevantKnowledgeRetrievalMatches(
      question,
      rankedResults.map((entry) => toPublicKnowledgeRetrievalMatch(entry, intent)),
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

async function findExactProgrammeRequirementEntry(
  ctx: QueryCtx,
  requestedProgramme: string,
) {
  if (!requestedProgramme) {
    return null;
  }

  const programmeEntries = await ctx.db
    .query("knowledgeEntries")
    .withIndex("by_status_type", (lookup) =>
      lookup
        .eq("status", KNOWLEDGE_ENTRY_STATUSES.published)
        .eq("type", KNOWLEDGE_ENTRY_TYPES.programme),
    )
    .collect();
  const normalizedRequestedProgramme = normalizeProgrammeNameForExactMatch(
    requestedProgramme,
  );

  return findExactProgrammeEntryInRecords(programmeEntries, requestedProgramme);
}

function findExactProgrammeEntryInRecords(
  entries: Doc<"knowledgeEntries">[],
  requestedProgramme: string,
) {
  const normalizedRequestedProgramme = normalizeProgrammeNameForExactMatch(
    requestedProgramme,
  );

  return (
    entries.find(
      (entry) =>
        !isProgrammeListEntry(entry) &&
        normalizeProgrammeNameForExactMatch(entry.metadata?.programme ?? "") ===
          normalizedRequestedProgramme,
    ) ?? null
  );
}

function isProgrammeListEntry(entry: Doc<"knowledgeEntries">) {
  const normalizedTitle = normalizeProgrammeNameForExactMatch(entry.title);
  const normalizedProgramme = normalizeProgrammeNameForExactMatch(
    entry.metadata?.programme ?? "",
  );

  return (
    normalizedTitle.includes("undergraduate programmes list") ||
    normalizedProgramme.includes("undergraduate programmes list") ||
    normalizedProgramme.includes("programme list")
  );
}

function findExactProgrammeInProgrammeList(
  content: string,
  requestedProgramme: string,
) {
  const normalizedRequestedProgramme = normalizeProgrammeNameForExactMatch(
    requestedProgramme,
  );
  const lines = content
    .split("\n")
    .map((line) => line.trim().replace(/^[-*.·]\s+/, ""))
    .filter(Boolean);

  return (
    lines.find(
      (line) =>
        normalizeProgrammeNameForExactMatch(line) === normalizedRequestedProgramme,
    ) ?? ""
  );
}

function toDisplayProgrammeNameFromNormalized(value: string) {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(" ");
}

function shouldResolveExactProgrammeForRetrieval(
  intent: (typeof KNOWLEDGE_RETRIEVAL_INTENTS)[keyof typeof KNOWLEDGE_RETRIEVAL_INTENTS],
  question: string,
) {
  return (
    intent === KNOWLEDGE_RETRIEVAL_INTENTS.jambRequirement ||
    intent === KNOWLEDGE_RETRIEVAL_INTENTS.olevelRequirement ||
    intent === KNOWLEDGE_RETRIEVAL_INTENTS.fullProgrammeRequirement ||
    isProgrammeAvailabilityRetrievalQuestion(question)
  );
}

function isProgrammeAvailabilityRetrievalQuestion(question: string) {
  const normalizedQuestion = normalizeProgrammeNameForExactMatch(question);

  return (
    /\bcan i study\s+.+\s+(?:in|at)\s+nsuk\b/.test(normalizedQuestion) ||
    /\bis\s+.+\s+available\s+(?:in|at)\s+nsuk\b/.test(normalizedQuestion) ||
    /\bdoes\s+nsuk\s+offer\s+.+\b/.test(normalizedQuestion)
  );
}

function extractProgrammeNameFromRetrievalQuestion(question: string) {
  const normalizedQuestion = normalizeProgrammeNameForExactMatch(question);
  const patterns = [
    /\bcan i study\s+(.+?)(?:\s+with\s+|\s+using\s+|\s+in\s+nsuk\b|\s+at\s+nsuk\b|$)/,
    /\bfor\s+(.+?)(?:\s+with\s+|\s+using\s+|\s+in\s+nsuk\b|\s+at\s+nsuk\b|$)/,
    /\bof\s+(.+?)(?:\s+with\s+|\s+using\s+|\s+in\s+nsuk\b|\s+at\s+nsuk\b|$)/,
  ];

  for (const pattern of patterns) {
    const match = pattern.exec(normalizedQuestion);
    const candidate = match?.[1]?.trim();

    if (candidate) {
      return cleanExtractedProgrammeName(candidate);
    }
  }

  return "";
}

function cleanExtractedProgrammeName(value: string) {
  return value
    .replace(/\b(?:jamb|utme|olevel|o level|o'level|subjects?|requirements?|required|need|needs|do|does|i|the|a|an|in|at|nsuk)\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeProgrammeNameForExactMatch(value: string) {
  return value
    .toLowerCase()
    .replace(/[’`]/g, "'")
    .replace(/\bo[\s-]*'?level\b/g, "olevel")
    .replace(/[^a-z0-9']+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
