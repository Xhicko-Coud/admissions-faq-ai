import { v, type Infer } from "convex/values";

export const KNOWLEDGE_ENTRY_TYPES = {
  faq: "faq",
  admissionRequirement: "admission_requirement",
  applicationProcess: "application_process",
  programme: "programme",
  fee: "fee",
  deadline: "deadline",
  documentRequirement: "document_requirement",
  screening: "screening",
  contact: "contact",
  generalInformation: "general_information",
} as const;

export const KNOWLEDGE_ENTRY_STATUSES = {
  draft: "draft",
  published: "published",
  archived: "archived",
} as const;

export const KNOWLEDGE_RETRIEVAL_STATUSES = {
  matched: "matched",
  noMatch: "no_match",
} as const;

export const KNOWLEDGE_RETRIEVAL_INTENTS = {
  programmeList: "programme_list",
  jambRequirement: "jamb_requirement",
  olevelRequirement: "olevel_requirement",
  fullProgrammeRequirement: "full_programme_requirement",
  generalAdmission: "general_admission",
  unknown: "unknown",
} as const;

export const DEFAULT_RETRIEVAL_TOP_K = 3;
export const MAX_RETRIEVAL_TOP_K = 5;
export const DEFAULT_RETRIEVAL_SNIPPET_LENGTH = 800;
export const DEFAULT_RETRIEVAL_GROUNDING_LENGTH = 1600;
export const PROGRAMME_LIST_RETRIEVAL_GROUNDING_LENGTH = 6000;

export const knowledgeEntryTypeValidator = v.union(
  v.literal(KNOWLEDGE_ENTRY_TYPES.faq),
  v.literal(KNOWLEDGE_ENTRY_TYPES.admissionRequirement),
  v.literal(KNOWLEDGE_ENTRY_TYPES.applicationProcess),
  v.literal(KNOWLEDGE_ENTRY_TYPES.programme),
  v.literal(KNOWLEDGE_ENTRY_TYPES.fee),
  v.literal(KNOWLEDGE_ENTRY_TYPES.deadline),
  v.literal(KNOWLEDGE_ENTRY_TYPES.documentRequirement),
  v.literal(KNOWLEDGE_ENTRY_TYPES.screening),
  v.literal(KNOWLEDGE_ENTRY_TYPES.contact),
  v.literal(KNOWLEDGE_ENTRY_TYPES.generalInformation),
);

export const knowledgeEntryStatusValidator = v.union(
  v.literal(KNOWLEDGE_ENTRY_STATUSES.draft),
  v.literal(KNOWLEDGE_ENTRY_STATUSES.published),
  v.literal(KNOWLEDGE_ENTRY_STATUSES.archived),
);

export const knowledgeReviewLevelValidator = v.union(
  v.literal("normal"),
  v.literal("manual_check_recommended"),
);

export const knowledgeRequiredSubjectGroupMetadataValidator = v.object({
  choose: v.number(),
  options: v.array(v.string()),
  slot: v.string(),
});

export const knowledgeJambRequirementMetadataValidator = v.object({
  compulsorySubjects: v.array(v.string()),
  optionalChooseCount: v.number(),
  optionalSubjects: v.array(v.string()),
  requiredSubjectGroups: v.array(knowledgeRequiredSubjectGroupMetadataValidator),
  ruleSummary: v.string(),
  totalRequiredSubjects: v.number(),
});

export const knowledgeOlevelRequirementMetadataValidator = v.object({
  acceptedExamTypes: v.array(v.string()),
  compulsorySubjects: v.array(v.string()),
  globalCompulsorySubjects: v.array(v.string()),
  minimumCredits: v.number(),
  optionalSubjects: v.array(v.string()),
  programmeSpecificCompulsorySubjects: v.array(v.string()),
  ruleSummary: v.string(),
});

export const knowledgeEntryMetadataValidator = v.object({
  academicSession: v.optional(v.string()),
  jamb: v.optional(knowledgeJambRequirementMetadataValidator),
  needsReview: v.optional(v.boolean()),
  olevel: v.optional(knowledgeOlevelRequirementMetadataValidator),
  programme: v.optional(v.string()),
  programmeSlug: v.optional(v.string()),
  questionVariants: v.optional(v.array(v.string())),
  reviewLevel: v.optional(knowledgeReviewLevelValidator),
  school: v.optional(v.string()),
  schoolShortName: v.optional(v.string()),
  sourceNotes: v.optional(v.array(v.string())),
  sourcePages: v.optional(v.array(v.number())),
  warnings: v.optional(v.array(v.string())),
});

export type KnowledgeEntryType = Infer<typeof knowledgeEntryTypeValidator>;
export type KnowledgeEntryStatus = Infer<typeof knowledgeEntryStatusValidator>;
export type KnowledgeRetrievalStatus =
  (typeof KNOWLEDGE_RETRIEVAL_STATUSES)[keyof typeof KNOWLEDGE_RETRIEVAL_STATUSES];
export type KnowledgeRetrievalIntent =
  (typeof KNOWLEDGE_RETRIEVAL_INTENTS)[keyof typeof KNOWLEDGE_RETRIEVAL_INTENTS];
export type KnowledgeReviewLevel = Infer<typeof knowledgeReviewLevelValidator>;
export type KnowledgeRequiredSubjectGroup = Infer<
  typeof knowledgeRequiredSubjectGroupMetadataValidator
>;
export type KnowledgeJambRequirementMetadata = Infer<
  typeof knowledgeJambRequirementMetadataValidator
>;
export type KnowledgeOlevelRequirementMetadata = Infer<
  typeof knowledgeOlevelRequirementMetadataValidator
>;
export type KnowledgeEntryProgrammeMetadata = Infer<
  typeof knowledgeEntryMetadataValidator
>;
export type KnowledgeEntryMetadata = Infer<typeof knowledgeEntryMetadataValidator>;
