import type { KnowledgeEntry } from "./KnowledgeLogic";

export const knowledgeTypeOptions = [
  "faq",
  "admission_requirement",
  "application_process",
  "programme",
  "fee",
  "deadline",
  "document_requirement",
  "screening",
  "contact",
  "general_information",
] satisfies KnowledgeEntry["type"][];

export const knowledgeTypeLabels = {
  faq: "Question And Answer",
  admission_requirement: "Admission Requirement",
  application_process: "Application Process",
  programme: "Programme",
  fee: "Fee",
  deadline: "Deadline",
  document_requirement: "Document Requirement",
  screening: "Screening",
  contact: "Contact",
  general_information: "General Information",
} satisfies Record<KnowledgeEntry["type"], string>;

export const knowledgeStatusLabels = {
  draft: "Draft",
  published: "Published",
  archived: "Archived",
} satisfies Record<KnowledgeEntry["status"], string>;
