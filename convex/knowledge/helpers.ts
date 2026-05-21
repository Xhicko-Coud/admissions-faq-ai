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
  DEFAULT_RETRIEVAL_SNIPPET_LENGTH,
  DEFAULT_RETRIEVAL_TOP_K,
  DEFAULT_RETRIEVAL_GROUNDING_LENGTH,
  KNOWLEDGE_ENTRY_STATUSES,
  KNOWLEDGE_RETRIEVAL_INTENTS,
  MAX_RETRIEVAL_TOP_K,
  knowledgeEntryStatusValidator,
  knowledgeEntryTypeValidator,
  type KnowledgeEntryMetadata,
  type KnowledgeEntryStatus,
  type KnowledgeEntryType,
  type KnowledgeRequiredSubjectGroup,
  type KnowledgeRetrievalIntent,
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
const ADMISSIONS_DOMAIN_PHRASES = [
  "nsuk",
  "nasarawa state university",
  "admission",
  "admissions",
  "post utme",
  "utme",
  "jamb",
  "olevel",
  "o level",
  "o'level",
  "waec",
  "neco",
  "nabteb",
  "screening",
  "subject combination",
  "requirement",
  "requirements",
  "programme",
  "programmes",
  "program",
  "course",
  "courses",
  "department",
  "faculty",
  "direct entry",
  "application",
  "applicant",
  "apply",
  "cutoff",
  "cut off",
  "credit pass",
  "credits",
  "result",
  "awaiting result",
  "undergraduate",
  "study",
  "studying",
  "subjects",
] as const;
const PROGRAMME_LIST_PHRASES = [
  "programme list",
  "programmes list",
  "course list",
  "courses list",
  "available programmes",
  "available programs",
  "available courses",
  "list all undergraduate programmes",
  "list all undergraduate programs",
  "what programmes are available",
  "what programs are available",
  "what courses are available",
  "what can i study",
  "show me nsuk undergraduate programmes",
] as const;
const JAMB_INTENT_PHRASES = [
  "jamb",
  "utme",
  "subject combination",
  "jamb combination",
  "jamb subjects",
  "utme subjects",
  "four jamb subjects",
] as const;
const OLEVEL_INTENT_PHRASES = [
  "o level",
  "olevel",
  "o'level",
  "waec",
  "neco",
  "nabteb",
  "ssce",
  "credit",
  "credit pass",
  "five credits",
  "5 credits",
  "subject required",
  "o level subjects",
] as const;
const FULL_PROGRAMME_REQUIREMENT_PHRASES = [
  "admission requirement",
  "admission requirements",
  "requirements for",
  "requirement for",
  "can i study",
  "eligible for",
  "qualify for",
  "what do i need for",
  "how can i apply for",
] as const;
const RETRIEVAL_STOP_WORDS = new Set([
  "a",
  "about",
  "all",
  "an",
  "and",
  "are",
  "at",
  "available",
  "be",
  "can",
  "do",
  "does",
  "for",
  "from",
  "how",
  "i",
  "in",
  "is",
  "it",
  "list",
  "me",
  "my",
  "need",
  "of",
  "or",
  "required",
  "show",
  "study",
  "the",
  "to",
  "what",
  "with",
]);

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

export type KnowledgeSearchTextInput = {
  answer?: string | null;
  content?: string | null;
  keywords?: string[] | null;
  metadata?: KnowledgeEntryMetadata | null;
  question?: string | null;
  sourceLabel?: string | null;
  title: string;
  type: KnowledgeEntryType;
};

export type PublicKnowledgeRetrievalMatch = {
  categoryId: KnowledgeEntryRecord["categoryId"] | null;
  entryId: KnowledgeEntryRecord["_id"];
  groundingText: string;
  snippet: string;
  sourceLabel: string | null;
  sourceUrl: string | null;
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

export function buildKnowledgeSearchText(entry: KnowledgeSearchTextInput) {
  const metadata = entry.metadata ?? null;
  const parts = [
    entry.title,
    entry.question,
    entry.answer,
    entry.content,
    entry.keywords,
    entry.type,
    entry.sourceLabel,
    metadata?.academicSession,
    metadata?.programme,
    metadata?.school,
    metadata?.schoolShortName,
    metadata?.questionVariants,
    metadata?.warnings,
    metadata?.jamb?.ruleSummary,
    metadata?.olevel?.ruleSummary,
    metadata?.sourceNotes,
    metadata?.sourcePages?.map((page) => `page ${page}`),
  ];

  const searchText = normalizeSearchTextParts(parts);

  return searchText || normalizeWhitespace(entry.title);
}

export function buildKnowledgeSnippet(
  text: string | null | undefined,
  maxLength = DEFAULT_RETRIEVAL_SNIPPET_LENGTH,
) {
  const normalizedText = normalizeWhitespace(text ?? "");
  const boundedMaxLength = Math.max(0, Math.floor(maxLength));

  if (!normalizedText || boundedMaxLength === 0) {
    return "";
  }

  if (normalizedText.length <= boundedMaxLength) {
    return normalizedText;
  }

  return `${normalizedText.slice(0, Math.max(0, boundedMaxLength - 3)).trimEnd()}...`;
}

export function clampRetrievalTopK(topK: number | undefined) {
  if (!topK || !Number.isFinite(topK)) {
    return DEFAULT_RETRIEVAL_TOP_K;
  }

  return Math.min(MAX_RETRIEVAL_TOP_K, Math.max(1, Math.floor(topK)));
}

export function normalizeRetrievalQuestion(question: string) {
  return normalizeWhitespace(question);
}

export function isAdmissionsRelatedQuery(question: string) {
  const normalizedQuestion = normalizeRetrievalMatchText(question);

  if (!normalizedQuestion) {
    return false;
  }

  return ADMISSIONS_DOMAIN_PHRASES.some((phrase) =>
    normalizedQuestion.includes(normalizeRetrievalMatchText(phrase)),
  );
}

export function isProgrammeListQuery(question: string) {
  const normalizedQuestion = normalizeRetrievalMatchText(question);

  if (!normalizedQuestion) {
    return false;
  }

  return PROGRAMME_LIST_PHRASES.some((phrase) =>
    normalizedQuestion.includes(normalizeRetrievalMatchText(phrase)),
  );
}

export function detectRetrievalIntent(question: string): KnowledgeRetrievalIntent {
  const normalizedQuestion = normalizeRetrievalMatchText(question);

  if (!normalizedQuestion) {
    return KNOWLEDGE_RETRIEVAL_INTENTS.unknown;
  }

  if (containsAnyRetrievalPhrase(normalizedQuestion, OLEVEL_INTENT_PHRASES)) {
    return KNOWLEDGE_RETRIEVAL_INTENTS.olevelRequirement;
  }

  if (containsAnyRetrievalPhrase(normalizedQuestion, JAMB_INTENT_PHRASES)) {
    return KNOWLEDGE_RETRIEVAL_INTENTS.jambRequirement;
  }

  if (isProgrammeListQuery(question)) {
    return KNOWLEDGE_RETRIEVAL_INTENTS.programmeList;
  }

  if (
    containsAnyRetrievalPhrase(
      normalizedQuestion,
      FULL_PROGRAMME_REQUIREMENT_PHRASES,
    )
  ) {
    return KNOWLEDGE_RETRIEVAL_INTENTS.fullProgrammeRequirement;
  }

  return isAdmissionsRelatedQuery(question)
    ? KNOWLEDGE_RETRIEVAL_INTENTS.generalAdmission
    : KNOWLEDGE_RETRIEVAL_INTENTS.unknown;
}

export function filterRelevantKnowledgeRetrievalMatches(
  question: string,
  matches: PublicKnowledgeRetrievalMatch[],
) {
  if (isProgrammeListQuery(question)) {
    return matches;
  }

  const queryTerms = getMeaningfulRetrievalTerms(question);

  if (queryTerms.length === 0) {
    return matches;
  }

  return matches.filter((match) =>
    hasRetrievalTermOverlap(queryTerms, [
      match.title,
      match.type,
      match.snippet,
      match.sourceLabel,
    ]),
  );
}

export function toPublicKnowledgeRetrievalMatch(
  entry: KnowledgeEntryRecord,
  intent: KnowledgeRetrievalIntent = KNOWLEDGE_RETRIEVAL_INTENTS.generalAdmission,
): PublicKnowledgeRetrievalMatch {
  return {
    categoryId: entry.categoryId ?? null,
    entryId: entry._id,
    groundingText: buildKnowledgeGroundingText(entry, intent),
    snippet: buildKnowledgeSnippet(entry.answer ?? entry.content ?? entry.question),
    sourceLabel: entry.sourceLabel ?? null,
    sourceUrl: entry.sourceUrl ?? null,
    title: entry.title,
    type: entry.type,
  };
}

export function buildKnowledgeGroundingText(
  entry: KnowledgeEntryRecord,
  intent: KnowledgeRetrievalIntent,
) {
  if (intent === KNOWLEDGE_RETRIEVAL_INTENTS.jambRequirement) {
    return buildJambGroundingText(entry);
  }

  if (intent === KNOWLEDGE_RETRIEVAL_INTENTS.olevelRequirement) {
    return buildOlevelGroundingText(entry);
  }

  if (intent === KNOWLEDGE_RETRIEVAL_INTENTS.fullProgrammeRequirement) {
    return buildFullProgrammeRequirementGroundingText(entry);
  }

  if (intent === KNOWLEDGE_RETRIEVAL_INTENTS.programmeList) {
    return buildProgrammeListGroundingText(entry);
  }

  return buildGeneralGroundingText(entry);
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

function normalizeSearchTextParts(
  parts: Array<string | string[] | null | undefined>,
) {
  const flattenedParts = parts.flatMap((part) => {
    if (Array.isArray(part)) {
      return part.map((value) => String(value));
    }

    return part ? [part] : [];
  });

  return normalizeWhitespace(flattenedParts.join(" "));
}

function normalizeWhitespace(value: string) {
  return value.trim().replace(/\s+/g, " ");
}

function getMeaningfulRetrievalTerms(value: string) {
  return normalizeRetrievalMatchText(value)
    .split(" ")
    .filter((term) => term.length >= 3 && !RETRIEVAL_STOP_WORDS.has(term));
}

function hasRetrievalTermOverlap(
  queryTerms: string[],
  values: Array<string | null | undefined>,
) {
  const targetText = normalizeRetrievalMatchText(values.filter(Boolean).join(" "));

  return queryTerms.some((term) => targetText.includes(term));
}

function buildJambGroundingText(entry: KnowledgeEntryRecord) {
  const metadata = entry.metadata ?? null;
  const jamb = metadata?.jamb;

  if (!jamb) {
    return buildGeneralGroundingText(entry);
  }

  return buildBoundedGroundingText([
    metadata?.programme ? `Programme: ${metadata.programme}` : null,
    `Title: ${entry.title}`,
    entry.question ? `Question: ${entry.question}` : null,
    `JAMB requirement: ${jamb.ruleSummary}`,
    `Total required JAMB subjects: ${jamb.totalRequiredSubjects}`,
    formatList("Compulsory JAMB subjects", jamb.compulsorySubjects),
    `Optional JAMB subjects to choose: ${jamb.optionalChooseCount}`,
    formatList("Optional JAMB subjects", jamb.optionalSubjects),
    formatRequiredSubjectGroups(jamb.requiredSubjectGroups),
    formatList("Warnings", metadata?.warnings),
    entry.sourceLabel ? `Source: ${entry.sourceLabel}` : null,
  ]);
}

function buildOlevelGroundingText(entry: KnowledgeEntryRecord) {
  const metadata = entry.metadata ?? null;
  const olevel = metadata?.olevel;

  if (!olevel) {
    return buildGeneralGroundingText(entry);
  }

  return buildBoundedGroundingText([
    metadata?.programme ? `Programme: ${metadata.programme}` : null,
    `Title: ${entry.title}`,
    entry.question ? `Question: ${entry.question}` : null,
    `O'Level requirement: ${olevel.ruleSummary}`,
    `Minimum credits: ${olevel.minimumCredits}`,
    formatList("Accepted exam types", olevel.acceptedExamTypes),
    formatList("Global compulsory O'Level subjects", olevel.globalCompulsorySubjects),
    formatList(
      "Programme-specific compulsory O'Level subjects",
      olevel.programmeSpecificCompulsorySubjects,
    ),
    formatList("Compulsory O'Level subjects", olevel.compulsorySubjects),
    formatList("Optional O'Level subjects", olevel.optionalSubjects),
    formatList("Warnings", metadata?.warnings),
    entry.sourceLabel ? `Source: ${entry.sourceLabel}` : null,
  ]);
}

function buildFullProgrammeRequirementGroundingText(entry: KnowledgeEntryRecord) {
  const metadata = entry.metadata ?? null;

  return buildBoundedGroundingText([
    metadata?.programme ? `Programme: ${metadata.programme}` : null,
    `Title: ${entry.title}`,
    metadata?.jamb ? buildJambGroundingText(entry) : null,
    metadata?.olevel ? buildOlevelGroundingText(entry) : null,
    !metadata?.jamb && !metadata?.olevel
      ? entry.answer ?? entry.content ?? entry.question
      : null,
    entry.sourceLabel ? `Source: ${entry.sourceLabel}` : null,
  ]);
}

function buildProgrammeListGroundingText(entry: KnowledgeEntryRecord) {
  return buildBoundedGroundingText([
    `Title: ${entry.title}`,
    entry.answer ?? entry.content ?? entry.question,
    entry.sourceLabel ? `Source: ${entry.sourceLabel}` : null,
  ]);
}

function buildGeneralGroundingText(entry: KnowledgeEntryRecord) {
  return buildBoundedGroundingText([
    `Title: ${entry.title}`,
    entry.question ? `Question: ${entry.question}` : null,
    entry.answer ?? entry.content,
    entry.sourceLabel ? `Source: ${entry.sourceLabel}` : null,
  ]);
}

function buildBoundedGroundingText(parts: Array<string | null | undefined>) {
  return buildKnowledgeSnippet(
    parts.filter(Boolean).join("\n"),
    DEFAULT_RETRIEVAL_GROUNDING_LENGTH,
  );
}

function formatList(label: string, values: readonly string[] | undefined) {
  if (!values || values.length === 0) {
    return null;
  }

  return `${label}: ${values.join(", ")}`;
}

function formatRequiredSubjectGroups(
  groups: readonly KnowledgeRequiredSubjectGroup[] | undefined,
) {
  if (!groups || !Array.isArray(groups) || groups.length === 0) {
    return null;
  }

  return groups
    .map((group) => `${group.slot}: choose ${group.choose} from ${group.options.join(", ")}`)
    .join("\n");
}

function containsAnyRetrievalPhrase(
  normalizedQuestion: string,
  phrases: readonly string[],
) {
  return phrases.some((phrase) =>
    normalizedQuestion.includes(normalizeRetrievalMatchText(phrase)),
  );
}

function normalizeRetrievalMatchText(value: string) {
  return normalizeWhitespace(value)
    .toLowerCase()
    .replace(/[’`]/g, "'")
    .replace(/o'level/g, "olevel")
    .replace(/[^a-z0-9']+/g, " ");
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
