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

export const generateAnswer = action({
  args: {
    question: v.string(),
  },
  handler: async (ctx, args) => {
    const question = args.question.trim();

    if (!question || question.length > MAX_STUDENT_QUESTION_LENGTH) {
      return buildFallbackLlmAnswerResponse({
        input: buildEmptyPromptInput(question),
        status: LLM_RESPONSE_STATUSES.noMatch,
      });
    }

    const retrieval = await ctx.runQuery(
      api.knowledge.queries.retrievePublishedKnowledge,
      {
        question,
      },
    );
    const sources = retrieval.matches.map(toLlmSourceContext);
    const selectedSources = selectLlmSourcesForIntent({
      intent: retrieval.intent,
      question: retrieval.query,
      sources,
    });
    const promptInput: LlmPromptInput = {
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
        status: LLM_RESPONSE_STATUSES.outOfDomain,
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
            question: retrieval.query,
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

function buildEmptyPromptInput(question: string): LlmPromptInput {
  return {
    question,
    retrieval: {
      intent: KNOWLEDGE_RETRIEVAL_INTENTS.unknown,
      query: question,
      status: KNOWLEDGE_RETRIEVAL_STATUSES.noMatch,
      topK: DEFAULT_RETRIEVAL_TOP_K,
    },
    sources: [],
  };
}
