import { v } from "convex/values";
import type { RegisteredAction } from "convex/server";

import { api, internal } from "../_generated/api";
import type { Id } from "../_generated/dataModel";
import type { ActionCtx } from "../_generated/server";
import { action } from "../_generated/server";
import {
  KNOWLEDGE_RETRIEVAL_INTENTS,
  KNOWLEDGE_RETRIEVAL_STATUSES,
} from "../knowledge/types";
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
const PUBLIC_CHAT_GREETING_MESSAGE =
  "Hi. What admission question can I help you with today?";
const PUBLIC_CHAT_OUT_OF_SCOPE_MESSAGE =
  "I'm focused on admissions questions. Ask me about programmes, requirements, screening, documents, fees, deadlines, or application steps.";

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
      const deterministicResponse = getDeterministicPublicChatResponse(
        validation.question,
      );

      if (deterministicResponse) {
        return await saveAndReturnPublicChatExchange({
          answer: deterministicResponse.answer,
          chatId: args.chatId,
          ctx,
          question: validation.question,
          responseStatus: deterministicResponse.status,
          retrievalIntent: deterministicResponse.retrievalIntent,
          retrievalStatus: deterministicResponse.retrievalStatus,
        });
      }

      const programmeAvailabilityCandidate =
        extractProgrammeAvailabilityCandidate(validation.question);
      const programmeAvailability = programmeAvailabilityCandidate
        ? await ctx.runQuery(api.knowledge.queries.resolveProgrammeAvailability, {
            programme: programmeAvailabilityCandidate,
          })
        : null;
      const hasSubjectCondition = hasProgrammeSubjectCondition(validation.question);

      if (
        programmeAvailability?.status === "available" &&
        !hasSubjectCondition &&
        (isDirectProgrammeAvailabilityQuestion(validation.question) ||
          isWhatAboutProgrammeQuestion(validation.question))
      ) {
        return await saveAndReturnPublicChatExchange({
          answer: `Yes, ${programmeAvailability.programme} is listed as an available programme at NSUK.`,
          chatId: args.chatId,
          ctx,
          question: validation.question,
          responseStatus: LLM_RESPONSE_STATUSES.answered,
          retrievalIntent: KNOWLEDGE_RETRIEVAL_INTENTS.generalAdmission,
          retrievalStatus: KNOWLEDGE_RETRIEVAL_STATUSES.matched,
        });
      }

      if (
        programmeAvailability?.status === "not_found" &&
        (isDirectProgrammeAvailabilityQuestion(validation.question) ||
          hasSubjectCondition)
      ) {
        return await saveAndReturnPublicChatExchange({
          answer: `I don't have approved information showing ${programmeAvailability.programme} as an available NSUK programme. Please contact the admissions office for confirmation.`,
          chatId: args.chatId,
          ctx,
          question: validation.question,
          responseStatus: LLM_RESPONSE_STATUSES.noMatch,
          retrievalIntent: KNOWLEDGE_RETRIEVAL_INTENTS.generalAdmission,
          retrievalStatus: KNOWLEDGE_RETRIEVAL_STATUSES.noMatch,
        });
      }

      const isStandaloneLookup = isStandaloneAdmissionsLookupQuestion(
        validation.question,
      );
      const isCombinationCheck =
        !isStandaloneLookup && isSubjectCombinationCheck(validation.question);
      const isContextualFollowUp =
        !isStandaloneLookup &&
        (isCombinationCheck || isLikelyContextualFollowUp(validation.question));
      const retrievalQuestion =
        isContextualFollowUp && recentMessages.length > 0
          ? buildContextualRetrievalQuery({
              isCombinationCheck,
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
      const contextualAnswer =
        buildContextualJambCombinationAnswer({
          question: validation.question,
          recentMessages,
        }) ??
        buildContextualAdmissionGuaranteeAnswer(validation.question) ??
        buildProgrammeAvailabilityNoMatchAnswer({
          question: validation.question,
          status: answerResult.status,
        });
      const answerToReturn = contextualAnswer ?? answerResult.answer;
      const safeAnswer = shouldNormalizeSubjectRequirementAnswer({
        answer: answerToReturn,
        intent: answerResult.retrieval.intent,
        question: validation.question,
      })
        ? normalizeSubjectRequirementAnswer(answerToReturn)
        : answerToReturn;
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

async function saveAndReturnPublicChatExchange(args: {
  answer: string;
  chatId: Id<"chats"> | undefined;
  ctx: ActionCtx;
  question: string;
  responseStatus: LlmResponseStatus;
  retrievalIntent: typeof KNOWLEDGE_RETRIEVAL_INTENTS.generalAdmission;
  retrievalStatus:
    (typeof KNOWLEDGE_RETRIEVAL_STATUSES)[keyof typeof KNOWLEDGE_RETRIEVAL_STATUSES];
}): Promise<SubmitPublicChatMessageResponse> {
  const saveResult: SavedChatExchange = await args.ctx.runMutation(
    api.chat.mutations.saveChatExchange,
    {
      assistantContent: args.answer,
      chatId: args.chatId,
      retrievalIntent: args.retrievalIntent,
      retrievalStatus: args.retrievalStatus,
      responseStatus: args.responseStatus,
      sources: [],
      title: buildChatTitle(args.question),
      userContent: args.question,
    },
  );

  if (saveResult.status !== "created") {
    return toFailedPublicChatResponse();
  }

  return {
    answer: args.answer,
    assistantMessage: toSafePublicChatMessage(saveResult.assistantMessage),
    chatId: saveResult.chat.id,
    status: args.responseStatus,
    userMessage: toSafePublicChatMessage(saveResult.userMessage),
  } as const;
}

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

function getDeterministicPublicChatResponse(question: string) {
  if (isGreetingQuestion(question)) {
    return {
      answer:
        PUBLIC_CHAT_GREETING_MESSAGE,
      responseKind: "greeting",
      retrievalIntent: KNOWLEDGE_RETRIEVAL_INTENTS.generalAdmission,
      retrievalStatus: KNOWLEDGE_RETRIEVAL_STATUSES.noMatch,
      status: LLM_RESPONSE_STATUSES.answered,
    } as const;
  }

  if (isClearlyNonAdmissionsQuestion(question)) {
    return {
      answer: PUBLIC_CHAT_OUT_OF_SCOPE_MESSAGE,
      responseKind: "out_of_domain",
      retrievalIntent: KNOWLEDGE_RETRIEVAL_INTENTS.generalAdmission,
      retrievalStatus: KNOWLEDGE_RETRIEVAL_STATUSES.noMatch,
      status: LLM_RESPONSE_STATUSES.outOfDomain,
    } as const;
  }

  return null;
}

function isGreetingQuestion(question: string) {
  const normalizedQuestion = normalizePublicChatQuestionText(question);

  return GREETING_QUESTIONS.has(normalizedQuestion);
}

function isClearlyNonAdmissionsQuestion(question: string) {
  const normalizedQuestion = normalizePublicChatQuestionText(question);

  if (isLikelyAdmissionsQuestion(normalizedQuestion)) {
    return false;
  }

  return CLEARLY_NON_ADMISSIONS_PATTERNS.some((pattern) =>
    pattern.test(normalizedQuestion),
  );
}

function isLikelyAdmissionsQuestion(normalizedQuestion: string) {
  return ADMISSIONS_CONTEXT_TERMS.some((term) =>
    normalizedQuestion.includes(term),
  );
}

function normalizePublicChatQuestionText(question: string) {
  return question
    .toLowerCase()
    .replace(/[’`]/g, "'")
    .replace(/[^a-z0-9'\s]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
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

  if (isSubjectListFollowUpQuestion(normalizedQuestion)) {
    return true;
  }

  if (wordCount <= 5) {
    return true;
  }

  return CONTEXTUAL_FOLLOW_UP_PATTERNS.some((pattern) =>
    pattern.test(normalizedQuestion),
  );
}

function isSubjectCombinationCheck(question: string) {
  const normalizedQuestion = question.toLowerCase();

  if (isStandaloneAdmissionsLookupQuestion(question)) {
    return false;
  }

  return (
    /\b(jamb|subject|subjects|combination|optional|qualif(?:y|ies)|satisf(?:y|ies)|meet|meets|valid|allowed|okay|ok)\b/.test(
      normalizedQuestion,
    ) &&
    /\b(does|can|qualif(?:y|ies)|satisf(?:y|ies)|meet|meets|valid|allowed|okay|ok|use)\b/.test(
      normalizedQuestion,
    )
  );
}

function isStandaloneAdmissionsLookupQuestion(question: string) {
  const normalizedQuestion = normalizePublicChatQuestionText(question);

  if (extractProgrammeAvailabilityCandidate(question)) {
    return true;
  }

  return (
    /\b(what|which|list|show|tell)\b/.test(normalizedQuestion) &&
    /\b(jamb|utme|olevel|o level|o'level|waec|neco|nabteb|subject|subjects|requirement|requirements)\b/.test(
      normalizedQuestion,
    ) &&
    /\b(for|need for|required for|requirements for)\b/.test(normalizedQuestion)
  );
}

function isSubjectListFollowUpQuestion(normalizedQuestion: string) {
  return (
    /\bi\s+(?:have|got|offer|offered)\b/.test(normalizedQuestion) &&
    /\b(english|mathematics|maths|math|physics|chemistry|biology|government|literature|economics|geography|commerce|accounting|further)\b/.test(
      normalizedQuestion,
    )
  );
}

function buildContextualRetrievalQuery(args: {
  isCombinationCheck: boolean;
  question: string;
  recentMessages: RecentChatMessageContext[];
}) {
  if (args.isCombinationCheck) {
    const programme = extractRecentProgrammeName(args.recentMessages);
    const facts = extractRecentJambSubjectFacts(args.recentMessages);
    const currentSubjects = facts
      ? extractApprovedSubjectsFromQuestion(args.question, facts)
      : extractSubjectTerms(args.question);

    if (programme && currentSubjects.length > 0) {
      return truncateContextualRetrievalQuery(
        `${programme} JAMB subjects ${currentSubjects.join(" ")}`,
      );
    }
  }

  const contextText = args.recentMessages
    .slice(-4)
    .map((message) => message.content)
    .join(" ");

  return truncateContextualRetrievalQuery(`${args.question} ${contextText}`);
}

function extractRecentProgrammeName(messages: RecentChatMessageContext[]) {
  const contextText = messages.map((message) => message.content).join(" ");
  const nsukMatch = /\bFor\s+(.+?)\s+at\s+NSUK\b/i.exec(contextText);

  if (nsukMatch?.[1]) {
    return nsukMatch[1].trim();
  }

  const studyMatch = /\bstudy\s+(.+?)\s+at\s+NSUK\b/i.exec(contextText);

  return studyMatch?.[1]?.trim() ?? "";
}

function extractSubjectTerms(question: string) {
  return question
    .replace(/[,&]/g, " ")
    .replace(/\band\b/gi, " ")
    .split(/\s+/)
    .map((term) => term.trim())
    .filter((term) => term.length > 0)
    .filter((term) => !COMBINATION_CHECK_STOP_WORDS.has(term.toLowerCase()));
}

function extractApprovedSubjectsFromQuestion(
  question: string,
  facts: {
    optionalSubjects: string[];
    requiredSubjects: string[];
  },
) {
  const approvedSubjects = [...facts.requiredSubjects, ...facts.optionalSubjects];

  return approvedSubjects.filter((subject) =>
    questionContainsApprovedSubject(question, subject),
  );
}

function questionContainsApprovedSubject(question: string, approvedSubject: string) {
  const normalizedQuestion = normalizeSubjectName(question);
  const normalizedSubject = normalizeSubjectName(approvedSubject);
  const aliases = getSubjectAliases(normalizedSubject);

  return aliases.some((alias) =>
    new RegExp(`(?:^|\\s)${escapeRegExp(alias)}(?:\\s|$)`, "i").test(
      normalizedQuestion,
    ),
  );
}

function getSubjectAliases(normalizedSubject: string) {
  const aliases = new Set([normalizedSubject]);

  if (normalizedSubject === "english") {
    aliases.add("use of english");
  }

  if (normalizedSubject === "mathematics") {
    aliases.add("maths");
    aliases.add("math");
  }

  if (normalizedSubject === "further mathematics") {
    aliases.add("further maths");
    aliases.add("further math");
  }

  return Array.from(aliases);
}

function buildContextualJambCombinationAnswer(args: {
  question: string;
  recentMessages: RecentChatMessageContext[];
}) {
  const facts = extractRecentJambSubjectFacts(args.recentMessages);

  if (!facts || !isSubjectCombinationCheck(args.question)) {
    return null;
  }

  const currentSubjects = extractApprovedSubjectsFromQuestion(
    args.question,
    facts,
  );
  const validationMode = getJambSubjectValidationMode({
    facts,
    question: args.question,
    subjects: currentSubjects,
  });
  const referencedSubject =
    currentSubjects.find((subject) =>
      facts.optionalSubjects.some((optionalSubject) =>
        subjectsMatch(subject, optionalSubject),
      ),
    ) ?? extractLastReferencedSubject(args.recentMessages, facts);

  if (validationMode === "full_combination_check") {
    const missingRequiredSubjects = facts.requiredSubjects.filter(
      (requiredSubject) =>
        !currentSubjects.some((subject) => subjectsMatch(subject, requiredSubject)),
    );
    const selectedOptionalSubjects = currentSubjects.filter((subject) =>
      facts.optionalSubjects.some((optionalSubject) =>
        subjectsMatch(subject, optionalSubject),
      ),
    );

    if (missingRequiredSubjects.length > 0) {
      return `No. Based on the listed JAMB subject combination for ${facts.programme} at NSUK, ${missingRequiredSubjects.join(", ")} ${missingRequiredSubjects.length === 1 ? "is" : "are"} required. ${formatSubjectList(currentSubjects)} do not satisfy the JAMB subject-combination requirement because ${missingRequiredSubjects.join(", ")} ${missingRequiredSubjects.length === 1 ? "is" : "are"} missing.`;
    }

    if (selectedOptionalSubjects.length > 0) {
      return `Yes. Based on the listed JAMB subject combination for ${facts.programme} at NSUK, ${formatSubjectList(currentSubjects)} satisfy the JAMB subject-combination requirement. ${formatSubjectList(facts.requiredSubjects)} are required, and ${formatSubjectList(selectedOptionalSubjects)} ${selectedOptionalSubjects.length === 1 ? "is" : "are"} listed as optional. This only covers the JAMB subject-combination requirement; it does not guarantee admission.`;
    }
  }

  if (referencedSubject) {
    const isOptionalSubject = facts.optionalSubjects.some((optionalSubject) =>
      subjectsMatch(referencedSubject, optionalSubject),
    );

    if (isOptionalSubject) {
      if (validationMode === "clarification_follow_up") {
        return `Yes. ${referencedSubject} is allowed as an optional JAMB subject for ${facts.programme} at NSUK. The full valid JAMB combination would include ${formatSubjectList([...facts.requiredSubjects, referencedSubject])}.`;
      }

      return `Yes. ${referencedSubject} is listed as an optional JAMB subject for ${facts.programme} at NSUK. You still need the required JAMB subjects: ${formatSubjectList(facts.requiredSubjects)}.`;
    }

    return `No. ${referencedSubject} is not listed as an optional JAMB subject for ${facts.programme} at NSUK based on the approved context. The listed optional subjects are: ${formatSubjectList(facts.optionalSubjects)}.`;
  }

  return null;
}

function getJambSubjectValidationMode(args: {
  facts: {
    optionalSubjects: string[];
    requiredSubjects: string[];
  };
  question: string;
  subjects: string[];
}): "clarification_follow_up" | "full_combination_check" | "single_optional_subject_check" {
  const normalizedQuestion = args.question.toLowerCase();
  const requiredSubjectCount = args.facts.requiredSubjects.length;
  const hasFullCombinationLanguage =
    /\b(qualif(?:y|ies)|satisf(?:y|ies)|meet|meets|valid|combination|jamb part|four subjects|4 subjects)\b/.test(
      normalizedQuestion,
    );
  const hasSingleOptionalLanguage =
    /\b(optional|accepted|allowed|pick|use)\b/.test(normalizedQuestion) &&
    args.subjects.length <= 1;
  const hasClarificationLanguage =
    /\byes\s+or\s+no\b/.test(normalizedQuestion) ||
    /\bbut\b/.test(normalizedQuestion) ||
    /\bwhat\s+do\s+you\s+mean\b/.test(normalizedQuestion) ||
    /\bexplain\b/.test(normalizedQuestion);

  if (hasClarificationLanguage && args.subjects.length <= 1) {
    return "clarification_follow_up";
  }

  if (hasSingleOptionalLanguage) {
    return "single_optional_subject_check";
  }

  if (hasFullCombinationLanguage || args.subjects.length >= requiredSubjectCount + 1) {
    return "full_combination_check";
  }

  return "single_optional_subject_check";
}

function buildContextualAdmissionGuaranteeAnswer(question: string) {
  const normalizedQuestion = question.toLowerCase();

  if (
    normalizedQuestion.includes("guarantee") &&
    normalizedQuestion.includes("admission")
  ) {
    return "No. Meeting the JAMB subject-combination requirement does not guarantee admission. Admission may still depend on O'Level requirements, score, screening, and other NSUK conditions if provided in the approved admissions context.";
  }

  return null;
}

function buildProgrammeAvailabilityNoMatchAnswer(args: {
  question: string;
  status: LlmResponseStatus;
}) {
  if (
    args.status !== LLM_RESPONSE_STATUSES.noMatch &&
    args.status !== LLM_RESPONSE_STATUSES.insufficientContext
  ) {
    return null;
  }

  const programme = extractProgrammeAvailabilityCandidate(args.question);

  if (!programme) {
    return null;
  }

  return `I don't have approved information showing ${programme} as an available NSUK programme. Please contact the admissions office for confirmation.`;
}

function extractProgrammeAvailabilityCandidate(question: string) {
  const normalizedQuestion = normalizePublicChatQuestionText(question);
  const patterns = [
    /\bcan i study\s+(.+?)\s+(?:in|at)\s+nsuk\b/,
    /\bcan i study\s+(.+?)(?:\s+with\s+|\s+using\s+|$)/,
    /\bis\s+(.+?)\s+available\s+(?:in|at)\s+nsuk\b/,
    /\bdoes\s+nsuk\s+offer\s+(.+?)\b/,
    /\bcan i apply for\s+(.+?)\s+(?:in|at)\s+nsuk\b/,
    /\bwhat\s+about\s+(.+?)\??$/,
  ];

  for (const pattern of patterns) {
    const match = pattern.exec(normalizedQuestion);
    const candidate = match?.[1]?.trim();

    if (candidate) {
      return toDisplayProgrammeName(candidate);
    }
  }

  return "";
}

function hasProgrammeSubjectCondition(question: string) {
  const normalizedQuestion = normalizePublicChatQuestionText(question);

  return /\b(?:with|using)\s+.+/.test(normalizedQuestion);
}

function isDirectProgrammeAvailabilityQuestion(question: string) {
  const normalizedQuestion = normalizePublicChatQuestionText(question);

  return (
    /\bcan i study\s+.+\s+(?:in|at)\s+nsuk\b/.test(normalizedQuestion) ||
    /\bis\s+.+\s+available\s+(?:in|at)\s+nsuk\b/.test(normalizedQuestion) ||
    /\bdoes\s+nsuk\s+offer\s+.+\b/.test(normalizedQuestion) ||
    /\bcan i apply for\s+.+\s+(?:in|at)\s+nsuk\b/.test(normalizedQuestion)
  );
}

function isWhatAboutProgrammeQuestion(question: string) {
  return /\bwhat\s+about\s+.+\??$/i.test(normalizePublicChatQuestionText(question));
}

function toDisplayProgrammeName(value: string) {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(" ");
}

function extractRecentJambSubjectFacts(messages: RecentChatMessageContext[]) {
  const assistantMessages = messages
    .filter((message) => message.role === "assistant")
    .map((message) => message.content)
    .reverse();

  for (const content of assistantMessages) {
    const programme = extractProgrammeFromText(content);
    const requiredSubjects = extractSubjectsFromSection(content, "Required");
    const optionalSubjects = extractSubjectsFromSection(content, "Optional");

    if (programme && requiredSubjects.length > 0 && optionalSubjects.length > 0) {
      return {
        optionalSubjects,
        programme,
        requiredSubjects,
      };
    }
  }

  return null;
}

function extractProgrammeFromText(value: string) {
  const match = /\bFor\s+(.+?)\s+at\s+NSUK\b/i.exec(value);

  return match?.[1]?.trim() ?? "";
}

function extractSubjectsFromSection(value: string, sectionLabel: string) {
  const sectionMatch = new RegExp(
    `${sectionLabel}:\\s*([\\s\\S]*?)(?:\\n\\s*(?:Required|Optional|For JAMB|For O'?Level):|$)`,
    "i",
  ).exec(value);

  if (!sectionMatch?.[1]) {
    return [];
  }

  return sectionMatch[1]
    .split("\n")
    .map((line) => line.trim().replace(/^[-*.·]\s+/, ""))
    .filter(Boolean);
}

function extractLastReferencedSubject(
  messages: RecentChatMessageContext[],
  facts: {
    optionalSubjects: string[];
    requiredSubjects: string[];
  },
) {
  const recentUserText = messages
    .filter((message) => message.role === "user")
    .map((message) => message.content)
    .reverse()
    .join(" ");
  const allSubjects = [...facts.optionalSubjects, ...facts.requiredSubjects];

  return allSubjects.find((subject) =>
    recentUserText
      .toLowerCase()
      .includes(normalizeSubjectName(subject).toLowerCase()),
  );
}

function subjectsMatch(inputSubject: string, approvedSubject: string) {
  const inputValue = normalizeSubjectName(inputSubject);
  const approvedValue = normalizeSubjectName(approvedSubject);

  if (approvedValue === "english") {
    return inputValue === "english" || inputValue === "use of english";
  }

  return inputValue === approvedValue;
}

function normalizeSubjectName(value: string) {
  return value
    .toLowerCase()
    .replace(/\bo'?level\b/g, "")
    .replace(/\bliterature in english\b/g, "literature-in-english")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\buse of english\b/g, "english")
    .trim();
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function formatSubjectList(subjects: string[]) {
  if (subjects.length <= 1) {
    return subjects[0] ?? "";
  }

  if (subjects.length === 2) {
    return `${subjects[0]} and ${subjects[1]}`;
  }

  return `${subjects.slice(0, -1).join(", ")}, and ${subjects[subjects.length - 1]}`;
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
  answer: string;
  intent: SafeLlmAnswerResponse["retrieval"]["intent"];
  question: string;
}) {
  const answer = args.answer.toLowerCase();

  return (
    args.intent === KNOWLEDGE_RETRIEVAL_INTENTS.jambRequirement ||
    args.intent === KNOWLEDGE_RETRIEVAL_INTENTS.olevelRequirement ||
    args.intent === KNOWLEDGE_RETRIEVAL_INTENTS.fullProgrammeRequirement ||
    isJambSubjectQuestion(args.question) ||
    (answer.includes("jamb") &&
      (answer.includes("o'level") || answer.includes("o’level"))) ||
    answer.includes("o'level requirements") ||
    answer.includes("o’level requirements")
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
  /\bthen\b/,
  /\byes\s+or\s+no\b/,
  /\bwhat\s+(about|of)\b/,
  /\band\s+\w+\b/,
  /\bdoes\s+that\s+mean\b/,
  /\bdo\s+i\s+qualify\b/,
  /\bdoes\s+.+\s+qualif(?:y|ies)\b/,
  /\bdoes\s+.+\s+satisf(?:y|ies)\b/,
  /\bdoes\s+.+\s+meet\b/,
  /\bam\s+i\s+qualified\b/,
  /\bcan\s+i\s+use\b/,
  /\bis\s+.+\s+(allowed|okay|ok)\b/,
  /\bexplain\s+that\b/,
  /\bsummarize\s+it\b/,
  /\bwhat\s+does\s+that\s+mean\b/,
];

const COMBINATION_CHECK_STOP_WORDS = new Set([
  "and",
  "can",
  "does",
  "do",
  "for",
  "i",
  "is",
  "it",
  "jamb",
  "meet",
  "meets",
  "ok",
  "okay",
  "part",
  "qualify",
  "satisfy",
  "satisfies",
  "subject",
  "subjects",
  "that",
  "the",
  "then",
  "use",
]);

const GREETING_QUESTIONS = new Set([
  "good afternoon",
  "good evening",
  "good morning",
  "hello",
  "hey",
  "hi",
  "hi there",
]);

const ADMISSIONS_CONTEXT_TERMS = [
  "admission",
  "admissions",
  "apply",
  "course",
  "courses",
  "credit",
  "deadline",
  "document",
  "fee",
  "jamb",
  "nsuk",
  "olevel",
  "o level",
  "o'level",
  "programme",
  "programmes",
  "requirement",
  "requirements",
  "screening",
  "subject",
  "subjects",
  "utme",
  "waec",
];

const CLEARLY_NON_ADMISSIONS_PATTERNS = [
  /\bhow\s+(are|is)\s+(you|your)\b/,
  /\bdo you\b/,
  /\bcan you\b/,
  /\bare you\b/,
  /\byou\s+(do\s+not|don't|dont)\s+have\b/,
  /\bwhat is your\b/,
  /\bwho are you\b/,
  /\bhead\b/,
  /\bsmoke\b/,
  /\bdrink\b/,
  /\bweather\b/,
  /\bfootball\b/,
  /\bmovie\b/,
  /\bmusic\b/,
  /\bjoke\b/,
];

function normalizeSubjectRequirementAnswer(answer: string) {
  const normalizedSections = answer
    .replace(/\s+(For JAMB,\s+you\s+must\s+include:)\s*/gi, "\n\n$1\n")
    .replace(/\s+(For O['’]?Level,\s+you\s+need[^:]*:)\s*/gi, "\n\n$1\n")
    .replace(/(For\s+.+?\s+at\s+NSUK,\s+the\s+O['’]?Level)\s+(?=Required:)/gi, "$1 subjects are:\n\n")
    .replace(/:\s*(?:Required|Compulsory)(?:\s+subjects?)?:\s*/gi, ":\n\nRequired:\n")
    .replace(/\s+(?:The\s+)?(?:required|compulsory)\s+subjects\s+(?:are|include):\s*/gi, "\n\nRequired:\n")
    .replace(/\s+Optional\s+O['’]?Level\s+subjects(?:\s+for\s+.+?)?\s+(?:are|include):\s*/gi, "\n\nOptional:\n")
    .replace(/\s+(?:Optional|Alternative|Additional)(?:\s+subjects?)?:\s*/gi, "\n\nOptional:\n")
    .replace(/\s+(?:You\s+can\s+also\s+include\s+any\s+of\s+the\s+following\s+additional\s+subjects?:)\s*/gi, "\n\nYou can also include any of the following additional subjects:\n")
    .replace(/\s+[-*.·]\s*(Any\s+other\s+\w+\s+subjects?\s+from\s+the\s+following:)\s*/gi, "\n\n$1\n")
    .replace(/\s+(Any\s+other\s+\w+\s+subjects?\s+from\s+the\s+following:)\s*/gi, "\n\n$1\n")
    .replace(/\s+(?:You\s+also\s+need\s+to\s+)?(?:choose|select)\s+(\d+)\s+subjects?\(s\)\s+from:\s*/gi, "\n\nChoose $1 subjects from:\n")
    .replace(/\s+(?:You\s+also\s+need\s+to\s+)?(?:choose|select)\s+one\s+of\s+the\s+following(?:\s+optional\s+subjects?)?:\s*/gi, "\n\nOptional:\n")
    .replace(/\s+[-*.·]\s*(O['’]?Level Requirements)\s*/gi, "\n\n$1\n")
    .replace(/\s+[-*.·]\s*(The O['’]?Level requirements are:)\s*/gi, "\n\n$1\n")
    .replace(/\s+[-*.·]\s*(Global compulsory O['’]?Level subjects:)\s*/gi, "\n\n$1\n")
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

  const normalizedAnswer = answer
    .split("\n")
    .map((line) => {
      const trimmedLine = line.trim();
      const unbulletedLine = trimmedLine.replace(/^[-*.·]\s+/, "");

      if (/^(?:JAMB Requirements|O['’]?Level Requirements)$/i.test(unbulletedLine)) {
        activeSection = null;
        return unbulletedLine;
      }

      if (/^The O['’]?Level requirements are:$/i.test(unbulletedLine)) {
        activeSection = "olevel";
        return unbulletedLine;
      }

      if (/^Global compulsory O['’]?Level subjects:$/i.test(unbulletedLine)) {
        activeSection = "choice";
        return unbulletedLine;
      }

      if (/^(?:Required|Compulsory)(?:\s+subjects?)?:$/i.test(trimmedLine)) {
        activeSection = "required";
        return "Required:";
      }

      if (/^(?:Optional|Alternative|Additional)(?:\s+subjects?)?:$/i.test(trimmedLine)) {
        activeSection = "optional";
        return "Optional:";
      }

      if (/^Optional\s+O['’]?Level\s+subjects(?:\s+for\s+.+?)?\s+(?:are|include):$/i.test(unbulletedLine)) {
        activeSection = "optional";
        return "Optional:";
      }

      if (/^For JAMB,.*:$/i.test(trimmedLine)) {
        activeSection = "jamb";
        return trimmedLine;
      }

      if (/^For O['’]?Level,.*:$/i.test(trimmedLine)) {
        activeSection = "olevel";
        return trimmedLine;
      }

      if (/^(?:Choose\s+\d+\s+subjects?\s+from|Any\s+other\s+\w+\s+subjects?\s+from\s+the\s+following|You can also include any of the following additional subjects):$/i.test(unbulletedLine)) {
        activeSection = "choice";
        return unbulletedLine;
      }

      if (!trimmedLine) {
        return "";
      }

      if (isSubjectRequirementAdviceLine(unbulletedLine)) {
        activeSection = null;
        return unbulletedLine;
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

  return compactSubjectRequirementListSpacing(normalizedAnswer);
}

function compactSubjectRequirementListSpacing(answer: string) {
  const lines = answer.split("\n");

  return lines
    .filter((line, index) => {
      if (line.trim()) {
        return true;
      }

      const previousLine = findNearestNonEmptyLine(lines, index, -1);
      const nextLine = findNearestNonEmptyLine(lines, index, 1);

      if (
        previousLine &&
        nextLine &&
        ((isMarkdownBulletLine(previousLine) && isMarkdownBulletLine(nextLine)) ||
          (isSubjectRequirementSectionHeading(previousLine) &&
            isMarkdownBulletLine(nextLine)))
      ) {
        return false;
      }

      return true;
    })
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function findNearestNonEmptyLine(
  lines: string[],
  startIndex: number,
  direction: -1 | 1,
) {
  for (
    let index = startIndex + direction;
    index >= 0 && index < lines.length;
    index += direction
  ) {
    const line = lines[index]?.trim();

    if (line) {
      return line;
    }
  }

  return "";
}

function isMarkdownBulletLine(line: string) {
  return /^-\s+/.test(line.trim());
}

function isSubjectRequirementSectionHeading(line: string) {
  return /^(?:Required|Optional|Compulsory|JAMB Requirements|O['’]?Level Requirements):?$/i.test(
    line.trim(),
  );
}

function isSubjectRequirementAdviceLine(value: string) {
  return /^(?:it|this)\s+only\s+covers\b/i.test(value) ||
    /^meeting\s+.+\s+does\s+not\s+guarantee\s+admission\b/i.test(value) ||
    /^correct\s+jamb\s+subjects\s+do\s+not\s+automatically\b/i.test(value) ||
    /^(?:yes|no),?\s+/i.test(value) ||
    /^you\s+(?:can|cannot|can't|have|selected|are|need|still)\b/i.test(value) ||
    /^please\s+contact\s+the\s+admissions\s+office\b/i.test(value);
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
