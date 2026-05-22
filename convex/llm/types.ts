import type { Id } from "../_generated/dataModel";
import type {
  KnowledgeEntryType,
  KnowledgeRetrievalIntent,
  KnowledgeRetrievalStatus,
} from "../knowledge/types";

export const LLM_RESPONSE_STATUSES = {
  answered: "answered",
  noMatch: "no_match",
  lowConfidence: "low_confidence",
  insufficientContext: "insufficient_context",
  outOfDomain: "out_of_domain",
  missingConfiguration: "missing_configuration",
  rateLimited: "rate_limited",
  generationFailed: "generation_failed",
  invalidResponse: "invalid_response",
} as const;

export type LlmResponseStatus =
  (typeof LLM_RESPONSE_STATUSES)[keyof typeof LLM_RESPONSE_STATUSES];

export type LlmGenerationFailureStatus = Extract<
  LlmResponseStatus,
  | "generation_failed"
  | "invalid_response"
  | "missing_configuration"
  | "rate_limited"
>;

export type LlmSourceContext = {
  categoryId: Id<"categories"> | null;
  entryId: Id<"knowledgeEntries">;
  groundingText: string;
  snippet: string;
  sourceLabel: string | null;
  sourceUrl: string | null;
  title: string;
  type: KnowledgeEntryType;
};

export type LlmRetrievalMetadata = {
  intent: KnowledgeRetrievalIntent;
  query: string;
  status: KnowledgeRetrievalStatus;
  topK: number;
};

export type LlmPromptInput = {
  conversationContext: LlmRecentConversationMessage[];
  isContextualFollowUp: boolean;
  question: string;
  retrieval: LlmRetrievalMetadata;
  sources: LlmSourceContext[];
};

export type LlmRecentConversationMessage = {
  content: string;
  role: "user" | "assistant";
};

export type SafeLlmAnswerSource = {
  entryId: Id<"knowledgeEntries">;
  sourceLabel: string | null;
  sourceUrl: string | null;
  title: string;
  type: KnowledgeEntryType;
};

export type SafeLlmAnswerResponse = {
  answer: string;
  retrieval: {
    intent: KnowledgeRetrievalIntent;
    sourceCount: number;
    status: KnowledgeRetrievalStatus;
  };
  sources: SafeLlmAnswerSource[];
  status: LlmResponseStatus;
};
