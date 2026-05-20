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

export type KnowledgeEntryType = Infer<typeof knowledgeEntryTypeValidator>;
export type KnowledgeEntryStatus = Infer<typeof knowledgeEntryStatusValidator>;
