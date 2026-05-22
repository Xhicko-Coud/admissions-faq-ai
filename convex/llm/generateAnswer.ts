"use node";

import { v } from "convex/values";

import { api } from "../_generated/api";
import { action } from "../_generated/server";
import {
  formatLlmSourceContext,
  hasUsableLlmContext,
  hasSufficientLlmContext,
  selectLlmSourcesForIntent,
  shouldUseOutOfDomainFallback,
  buildFallbackLlmAnswerResponse,
  toLlmSourceContext,
  toSafeLlmAnswerResponse,
} from "./helpers";
import { generateGroqChatCompletion } from "./groq";
import {
  buildGroundedAdmissionsUserPrompt,
  GROUNDED_ADMISSIONS_SYSTEM_PROMPT,
} from "./prompts";
import {
  DEFAULT_RETRIEVAL_TOP_K,
  KNOWLEDGE_RETRIEVAL_INTENTS,
  KNOWLEDGE_RETRIEVAL_STATUSES,
} from "../knowledge/types";
import { LLM_RESPONSE_STATUSES, type LlmPromptInput } from "./types";

const MAX_STUDENT_QUESTION_LENGTH = 500;
const MAX_RETRIEVAL_QUERY_LENGTH = 1000;
const MAX_CONVERSATION_CONTEXT_MESSAGES = 8;
const MAX_CONVERSATION_CONTEXT_LENGTH = 2400;

export const generateAnswer = action({
  args: {
    conversationContext: v.optional(
      v.array(
        v.object({
          content: v.string(),
          role: v.union(v.literal("user"), v.literal("assistant")),
        }),
      ),
    ),
    isContextualFollowUp: v.optional(v.boolean()),
    question: v.string(),
    retrievalQuestion: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const question = args.question.trim();

    if (!question || question.length > MAX_STUDENT_QUESTION_LENGTH) {
      return buildFallbackLlmAnswerResponse({
        input: buildEmptyPromptInput({
          conversationContext: [],
          isContextualFollowUp: false,
          question,
        }),
        status: LLM_RESPONSE_STATUSES.noMatch,
      });
    }

    const conversationContext = sanitizeConversationContext(
      args.conversationContext,
    );
    const retrievalQuestion = normalizeRetrievalQuery(
      args.retrievalQuestion ?? question,
    );
    const isContextualFollowUp = Boolean(args.isContextualFollowUp);
    const retrieval = await ctx.runQuery(
      api.knowledge.queries.retrievePublishedKnowledge,
      {
        question: retrievalQuestion,
      },
    );
    const sources = retrieval.matches.map(toLlmSourceContext);
    const selectedSources = selectLlmSourcesForIntent({
      intent: retrieval.intent,
      question: retrieval.query,
      sources,
    });
    const promptInput: LlmPromptInput = {
      conversationContext,
      isContextualFollowUp,
      question: retrieval.query,
      retrieval: {
        intent: retrieval.intent,
        query: retrieval.query,
        status: retrieval.status,
        topK: retrieval.topK,
      },
      sources: selectedSources,
    };

    if (shouldUseOutOfDomainFallback(promptInput)) {
      return buildFallbackLlmAnswerResponse({
        input: promptInput,
        status: isContextualFollowUp
          ? LLM_RESPONSE_STATUSES.insufficientContext
          : LLM_RESPONSE_STATUSES.outOfDomain,
      });
    }

    if (retrieval.status === KNOWLEDGE_RETRIEVAL_STATUSES.noMatch) {
      return buildFallbackLlmAnswerResponse({
        input: promptInput,
        status: LLM_RESPONSE_STATUSES.noMatch,
      });
    }

    if (!hasUsableLlmContext(selectedSources)) {
      return buildFallbackLlmAnswerResponse({
        input: promptInput,
        status: LLM_RESPONSE_STATUSES.insufficientContext,
      });
    }

    if (
      !hasSufficientLlmContext({
        intent: retrieval.intent,
        question: retrieval.query,
        sources: selectedSources,
      })
    ) {
      return buildFallbackLlmAnswerResponse({
        input: promptInput,
        status: LLM_RESPONSE_STATUSES.insufficientContext,
      });
    }

    const context = formatLlmSourceContext(selectedSources);

    if (!context) {
      return buildFallbackLlmAnswerResponse({
        input: promptInput,
        status: LLM_RESPONSE_STATUSES.insufficientContext,
      });
    }

    const generation = await generateGroqChatCompletion({
      messages: [
        {
          content: GROUNDED_ADMISSIONS_SYSTEM_PROMPT,
          role: "system",
        },
        {
          content: buildGroundedAdmissionsUserPrompt({
            context,
            conversationContext:
              formatRecentConversationContext(conversationContext),
            question,
          }),
          role: "user",
        },
      ],
    });

    if (!generation.ok) {
      return buildFallbackLlmAnswerResponse({
        input: promptInput,
        status: generation.status,
      });
    }

    return toSafeLlmAnswerResponse({
      answer: generation.answer,
      input: promptInput,
    });
  },
});

function buildEmptyPromptInput(args: {
  conversationContext: LlmPromptInput["conversationContext"];
  isContextualFollowUp: boolean;
  question: string;
}): LlmPromptInput {
  return {
    conversationContext: args.conversationContext,
    isContextualFollowUp: args.isContextualFollowUp,
    question: args.question,
    retrieval: {
      intent: KNOWLEDGE_RETRIEVAL_INTENTS.unknown,
      query: args.question,
      status: KNOWLEDGE_RETRIEVAL_STATUSES.noMatch,
      topK: DEFAULT_RETRIEVAL_TOP_K,
    },
    sources: [],
  };
}

function sanitizeConversationContext(
  messages: LlmPromptInput["conversationContext"] | undefined,
): LlmPromptInput["conversationContext"] {
  return (messages ?? [])
    .filter((message) => message.role === "user" || message.role === "assistant")
    .map((message) => ({
      content: normalizePromptLine(message.content),
      role: message.role,
    }))
    .filter((message) => message.content.length > 0)
    .slice(-MAX_CONVERSATION_CONTEXT_MESSAGES);
}

function formatRecentConversationContext(
  messages: LlmPromptInput["conversationContext"],
) {
  const formattedContext = messages
    .map((message) => `${message.role === "user" ? "Student" : "Assistant"}: ${message.content}`)
    .join("\n");

  return truncateText(formattedContext, MAX_CONVERSATION_CONTEXT_LENGTH);
}

function normalizeRetrievalQuery(value: string) {
  return truncateText(
    value.trim().replace(/\s+/g, " "),
    MAX_RETRIEVAL_QUERY_LENGTH,
  );
}

function normalizePromptLine(value: string) {
  return value.trim().replace(/\s+/g, " ");
}

function truncateText(value: string, maxLength: number) {
  if (value.length <= maxLength) {
    return value;
  }

  return `${value.slice(0, Math.max(0, maxLength - 3)).trimEnd()}...`;
}
