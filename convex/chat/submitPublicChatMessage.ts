import { v } from "convex/values";
import type { RegisteredAction } from "convex/server";

import { api, internal } from "../_generated/api";
import type { Id } from "../_generated/dataModel";
import type { ActionCtx } from "../_generated/server";
import { action } from "../_generated/server";
import { KNOWLEDGE_RETRIEVAL_INTENTS } from "../knowledge/types";
import {
  LLM_RESPONSE_STATUSES,
  type LlmResponseStatus,
  type SafeLlmAnswerResponse,
} from "../llm/types";
import type { SafeChatMessageSummary, SafeChatSummary } from "./helpers";

const PUBLIC_CHAT_QUESTION_MAX_LENGTH = 500;
const RECENT_MESSAGE_CONTEXT_LIMIT = 6;
const CONTEXTUAL_RETRIEVAL_QUERY_MAX_LENGTH = 1000;
const PUBLIC_CHAT_FAILURE_MESSAGE =
  "Your question could not be sent. Please try again.";

type SafePublicChatMessage = {
  content: string;
  createdAt: number;
  role: "user" | "assistant";
};

type SubmitPublicChatMessageArgs = {
  chatId?: Id<"chats">;
  question: string;
};

type SubmitPublicChatMessageResponse =
  | {
      answer: string;
      assistantMessage: SafePublicChatMessage;
      chatId: Id<"chats">;
      status: LlmResponseStatus;
      userMessage: SafePublicChatMessage;
    }
  | {
      issues: string[];
      status: "invalid_input";
    }
  | {
      answer: string;
      status: typeof LLM_RESPONSE_STATUSES.generationFailed;
    };

type SavedChatExchange =
  | {
      assistantMessage: SafeChatMessageSummary;
      chat: SafeChatSummary;
      status: "created";
      userMessage: SafeChatMessageSummary;
    }
  | {
      issues: string[];
      status: "invalid_input";
    }
  | {
      status: "failed" | "invalid_source" | "not_found";
    };

type RecentChatMessageContext = {
  content: string;
  role: "user" | "assistant";
};

export const submitPublicChatMessage: RegisteredAction<
  "public",
  SubmitPublicChatMessageArgs,
  Promise<SubmitPublicChatMessageResponse>
> = action({
  args: {
    chatId: v.optional(v.id("chats")),
    question: v.string(),
  },
  handler: async (ctx, args): Promise<SubmitPublicChatMessageResponse> => {
    const validation = validatePublicChatQuestion(args.question);

    if (!validation.isValid) {
      return {
        issues: validation.issues,
        status: "invalid_input",
      } as const;
    }

    try {
      const recentMessages = await loadRecentMessageContext({
        chatId: args.chatId,
        ctx,
      });
      const isContextualFollowUp = isLikelyContextualFollowUp(
        validation.question,
      );
      const retrievalQuestion =
        isContextualFollowUp && recentMessages.length > 0
          ? buildContextualRetrievalQuery({
              question: validation.question,
              recentMessages,
            })
          : validation.question;
      const answerResult: SafeLlmAnswerResponse = await ctx.runAction(
        api.llm.generateAnswer.generateAnswer,
        {
          conversationContext: recentMessages,
          isContextualFollowUp,
          question: validation.question,
          retrievalQuestion,
        },
      );
      const safeAnswer = shouldNormalizeSubjectRequirementAnswer({
        intent: answerResult.retrieval.intent,
        question: validation.question,
      })
        ? normalizeSubjectRequirementAnswer(answerResult.answer)
        : answerResult.answer;
      const saveResult: SavedChatExchange = await ctx.runMutation(
        api.chat.mutations.saveChatExchange,
        {
          assistantContent: safeAnswer,
          chatId: args.chatId,
          retrievalIntent: answerResult.retrieval.intent,
          retrievalStatus: answerResult.retrieval.status,
          responseStatus: answerResult.status,
          sources: answerResult.sources,
          title: buildChatTitle(validation.question),
          userContent: validation.question,
        },
      );

      if (saveResult.status !== "created") {
        return toFailedPublicChatResponse();
      }

      return {
        answer: safeAnswer,
        assistantMessage: toSafePublicChatMessage(saveResult.assistantMessage),
        chatId: saveResult.chat.id,
        status: answerResult.status,
        userMessage: toSafePublicChatMessage(saveResult.userMessage),
      } as const;
    } catch {
      return toFailedPublicChatResponse();
    }
  },
});

function validatePublicChatQuestion(question: string):
  | {
      isValid: true;
      question: string;
    }
  | {
      isValid: false;
      issues: string[];
    } {
  const normalizedQuestion = question.trim().replace(/\s+/g, " ");

  if (!normalizedQuestion) {
    return {
      isValid: false,
      issues: ["Enter an admission question before sending."],
    };
  }

  if (normalizedQuestion.length > PUBLIC_CHAT_QUESTION_MAX_LENGTH) {
    return {
      isValid: false,
      issues: [
        `Keep your admission question under ${PUBLIC_CHAT_QUESTION_MAX_LENGTH} characters.`,
      ],
    };
  }

  return {
    isValid: true,
    question: normalizedQuestion,
  };
}

function buildChatTitle(question: string) {
  return question.slice(0, 80);
}

async function loadRecentMessageContext(args: {
  chatId: Id<"chats"> | undefined;
  ctx: ActionCtx;
}): Promise<RecentChatMessageContext[]> {
  if (!args.chatId) {
    return [];
  }

  const result = await args.ctx.runQuery(
    internal.chat.queries.getRecentChatMessagesForContext,
    {
      chatId: args.chatId,
      limit: RECENT_MESSAGE_CONTEXT_LIMIT,
    },
  );

  if (result.status !== "success") {
    return [];
  }

  return result.messages.map((message) => ({
    content: message.content,
    role: message.role,
  }));
}

function isLikelyContextualFollowUp(question: string) {
  const normalizedQuestion = question.toLowerCase().trim();
  const wordCount = normalizedQuestion.split(/\s+/).filter(Boolean).length;

  if (wordCount <= 5) {
    return true;
  }

  return CONTEXTUAL_FOLLOW_UP_PATTERNS.some((pattern) =>
    pattern.test(normalizedQuestion),
  );
}

function buildContextualRetrievalQuery(args: {
  question: string;
  recentMessages: RecentChatMessageContext[];
}) {
  const contextText = args.recentMessages
    .slice(-4)
    .map((message) => message.content)
    .join(" ");

  return truncateContextualRetrievalQuery(`${args.question} ${contextText}`);
}

function truncateContextualRetrievalQuery(value: string) {
  const normalizedValue = value.trim().replace(/\s+/g, " ");

  if (normalizedValue.length <= CONTEXTUAL_RETRIEVAL_QUERY_MAX_LENGTH) {
    return normalizedValue;
  }

  return `${normalizedValue
    .slice(0, Math.max(0, CONTEXTUAL_RETRIEVAL_QUERY_MAX_LENGTH - 3))
    .trimEnd()}...`;
}

function shouldNormalizeSubjectRequirementAnswer(args: {
  intent: SafeLlmAnswerResponse["retrieval"]["intent"];
  question: string;
}) {
  return (
    args.intent === KNOWLEDGE_RETRIEVAL_INTENTS.jambRequirement ||
    args.intent === KNOWLEDGE_RETRIEVAL_INTENTS.olevelRequirement ||
    args.intent === KNOWLEDGE_RETRIEVAL_INTENTS.fullProgrammeRequirement ||
    isJambSubjectQuestion(args.question)
  );
}

function isJambSubjectQuestion(question: string) {
  const value = question.toLowerCase();

  return (
    value.includes("jamb") &&
    (value.includes("subject") ||
      value.includes("subjects") ||
      value.includes("combination"))
  );
}

const CONTEXTUAL_FOLLOW_UP_PATTERNS = [
  /\b(it|that|this|they|those|these)\b/,
  /\byes\s+or\s+no\b/,
  /\bwhat\s+(about|of)\b/,
  /\band\s+\w+\b/,
  /\bdoes\s+that\s+mean\b/,
  /\bdo\s+i\s+qualify\b/,
  /\bam\s+i\s+qualified\b/,
  /\bcan\s+i\s+use\b/,
  /\bexplain\s+that\b/,
  /\bsummarize\s+it\b/,
  /\bwhat\s+does\s+that\s+mean\b/,
];

function normalizeSubjectRequirementAnswer(answer: string) {
  const normalizedSections = answer
    .replace(/\s+(For JAMB,\s+you\s+must\s+include:)\s*/gi, "\n\n$1\n")
    .replace(/\s+(For O'?Level,\s+you\s+need[^:]*:)\s*/gi, "\n\n$1\n")
    .replace(/:\s*(?:Required|Compulsory)(?:\s+subjects?)?:\s*/gi, ":\n\nRequired:\n")
    .replace(/\s+(?:The\s+)?(?:required|compulsory)\s+subjects\s+(?:are|include):\s*/gi, "\n\nRequired:\n")
    .replace(/\s+(?:Optional|Alternative|Additional)(?:\s+subjects?)?:\s*/gi, "\n\nOptional:\n")
    .replace(/\s+(?:You\s+can\s+also\s+include\s+any\s+of\s+the\s+following\s+additional\s+subjects?:)\s*/gi, "\n\nYou can also include any of the following additional subjects:\n")
    .replace(/\s+(?:You\s+also\s+need\s+to\s+)?(?:choose|select)\s+(\d+)\s+subjects?\(s\)\s+from:\s*/gi, "\n\nChoose $1 subjects from:\n")
    .replace(/\s+(?:You\s+also\s+need\s+to\s+)?(?:choose|select)\s+one\s+of\s+the\s+following(?:\s+optional\s+subjects?)?:\s*/gi, "\n\nOptional:\n")
    .replace(/^-+\s*((?:Required|Compulsory|Optional|Alternative|Additional)(?:\s+subjects?)?):/gim, "$1:")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  return normalizeSubjectRequirementSectionBullets(normalizedSections);
}

function normalizeSubjectRequirementSectionBullets(answer: string) {
  let activeSection:
    | "choice"
    | "jamb"
    | "olevel"
    | "optional"
    | "required"
    | null = null;

  return answer
    .split("\n")
    .map((line) => {
      const trimmedLine = line.trim();

      if (/^(?:Required|Compulsory)(?:\s+subjects?)?:$/i.test(trimmedLine)) {
        activeSection = "required";
        return "Required:";
      }

      if (/^(?:Optional|Alternative|Additional)(?:\s+subjects?)?:$/i.test(trimmedLine)) {
        activeSection = "optional";
        return "Optional:";
      }

      if (/^For JAMB,.*:$/i.test(trimmedLine)) {
        activeSection = "jamb";
        return trimmedLine;
      }

      if (/^For O'?Level,.*:$/i.test(trimmedLine)) {
        activeSection = "olevel";
        return trimmedLine;
      }

      if (/^(?:Choose\s+\d+\s+subjects?\s+from|You can also include any of the following additional subjects):$/i.test(trimmedLine)) {
        activeSection = "choice";
        return trimmedLine;
      }

      if (!trimmedLine) {
        return "";
      }

      if (!activeSection) {
        return line;
      }

      if (/^[-*.·]\s+/.test(trimmedLine)) {
        return `- ${trimmedLine.replace(/^[-*.·]\s+/, "")}`;
      }

      if (/^\d+[.)]\s+/.test(trimmedLine)) {
        return `- ${trimmedLine.replace(/^\d+[.)]\s+/, "")}`;
      }

      return `- ${trimmedLine}`;
    })
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function toSafePublicChatMessage(message: {
  content: string;
  createdAt: number;
  role: "user" | "assistant";
}): SafePublicChatMessage {
  return {
    content: message.content,
    createdAt: message.createdAt,
    role: message.role,
  };
}

function toFailedPublicChatResponse(): SubmitPublicChatMessageResponse {
  return {
    answer: PUBLIC_CHAT_FAILURE_MESSAGE,
    status: LLM_RESPONSE_STATUSES.generationFailed,
  } as const;
}
