import { v, type Infer } from "convex/values";

import {
  KNOWLEDGE_RETRIEVAL_INTENTS,
  KNOWLEDGE_RETRIEVAL_STATUSES,
  knowledgeEntryTypeValidator,
} from "../knowledge/types";
import { LLM_RESPONSE_STATUSES } from "../llm/types";

export const CHAT_STATUSES = {
  active: "active",
  closed: "closed",
  archived: "archived",
} as const;

export const CHAT_SOURCES = {
  publicFaq: "public_faq",
  adminTest: "admin_test",
} as const;

export const CHAT_MESSAGE_ROLES = {
  user: "user",
  assistant: "assistant",
} as const;

export const CHAT_MESSAGE_STATUSES = {
  sent: "sent",
  answered: LLM_RESPONSE_STATUSES.answered,
  noMatch: LLM_RESPONSE_STATUSES.noMatch,
  lowConfidence: LLM_RESPONSE_STATUSES.lowConfidence,
  insufficientContext: LLM_RESPONSE_STATUSES.insufficientContext,
  outOfDomain: LLM_RESPONSE_STATUSES.outOfDomain,
  missingConfiguration: LLM_RESPONSE_STATUSES.missingConfiguration,
  rateLimited: LLM_RESPONSE_STATUSES.rateLimited,
  generationFailed: LLM_RESPONSE_STATUSES.generationFailed,
  invalidResponse: LLM_RESPONSE_STATUSES.invalidResponse,
  failed: "failed",
} as const;

export const chatStatusValidator = v.union(
  v.literal(CHAT_STATUSES.active),
  v.literal(CHAT_STATUSES.closed),
  v.literal(CHAT_STATUSES.archived),
);

export const chatSourceValidator = v.union(
  v.literal(CHAT_SOURCES.publicFaq),
  v.literal(CHAT_SOURCES.adminTest),
);

export const chatMessageRoleValidator = v.union(
  v.literal(CHAT_MESSAGE_ROLES.user),
  v.literal(CHAT_MESSAGE_ROLES.assistant),
);

export const chatMessageStatusValidator = v.union(
  v.literal(CHAT_MESSAGE_STATUSES.sent),
  v.literal(CHAT_MESSAGE_STATUSES.answered),
  v.literal(CHAT_MESSAGE_STATUSES.noMatch),
  v.literal(CHAT_MESSAGE_STATUSES.lowConfidence),
  v.literal(CHAT_MESSAGE_STATUSES.insufficientContext),
  v.literal(CHAT_MESSAGE_STATUSES.outOfDomain),
  v.literal(CHAT_MESSAGE_STATUSES.missingConfiguration),
  v.literal(CHAT_MESSAGE_STATUSES.rateLimited),
  v.literal(CHAT_MESSAGE_STATUSES.generationFailed),
  v.literal(CHAT_MESSAGE_STATUSES.invalidResponse),
  v.literal(CHAT_MESSAGE_STATUSES.failed),
);

export const chatRetrievalStatusValidator = v.union(
  v.literal(KNOWLEDGE_RETRIEVAL_STATUSES.matched),
  v.literal(KNOWLEDGE_RETRIEVAL_STATUSES.noMatch),
);

export const chatRetrievalIntentValidator = v.union(
  v.literal(KNOWLEDGE_RETRIEVAL_INTENTS.programmeList),
  v.literal(KNOWLEDGE_RETRIEVAL_INTENTS.jambRequirement),
  v.literal(KNOWLEDGE_RETRIEVAL_INTENTS.olevelRequirement),
  v.literal(KNOWLEDGE_RETRIEVAL_INTENTS.fullProgrammeRequirement),
  v.literal(KNOWLEDGE_RETRIEVAL_INTENTS.generalAdmission),
  v.literal(KNOWLEDGE_RETRIEVAL_INTENTS.unknown),
);

export const chatResponseStatusValidator = v.union(
  v.literal(LLM_RESPONSE_STATUSES.answered),
  v.literal(LLM_RESPONSE_STATUSES.noMatch),
  v.literal(LLM_RESPONSE_STATUSES.lowConfidence),
  v.literal(LLM_RESPONSE_STATUSES.insufficientContext),
  v.literal(LLM_RESPONSE_STATUSES.outOfDomain),
  v.literal(LLM_RESPONSE_STATUSES.missingConfiguration),
  v.literal(LLM_RESPONSE_STATUSES.rateLimited),
  v.literal(LLM_RESPONSE_STATUSES.generationFailed),
  v.literal(LLM_RESPONSE_STATUSES.invalidResponse),
);

export const chatSourceMetadataValidator = v.object({
  entryId: v.id("knowledgeEntries"),
  sourceLabel: v.union(v.string(), v.null()),
  sourceUrl: v.union(v.string(), v.null()),
  title: v.string(),
  type: knowledgeEntryTypeValidator,
});

export const chatMessageMetadataValidator = v.object({
  model: v.optional(v.string()),
  sourceCount: v.optional(v.number()),
});

export type ChatStatus = Infer<typeof chatStatusValidator>;
export type ChatSource = Infer<typeof chatSourceValidator>;
export type ChatMessageRole = Infer<typeof chatMessageRoleValidator>;
export type ChatMessageStatus = Infer<typeof chatMessageStatusValidator>;
export type ChatRetrievalStatus = Infer<typeof chatRetrievalStatusValidator>;
export type ChatRetrievalIntent = Infer<typeof chatRetrievalIntentValidator>;
export type ChatResponseStatus = Infer<typeof chatResponseStatusValidator>;
export type ChatSourceMetadata = Infer<typeof chatSourceMetadataValidator>;
export type ChatMessageMetadata = Infer<typeof chatMessageMetadataValidator>;
