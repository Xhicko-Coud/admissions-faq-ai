import type { PublicKnowledgeRetrievalMatch } from "../knowledge/helpers";
import {
  KNOWLEDGE_RETRIEVAL_INTENTS,
  KNOWLEDGE_RETRIEVAL_STATUSES,
  type KnowledgeRetrievalIntent,
} from "../knowledge/types";
import {
  LLM_RESPONSE_STATUSES,
  type LlmPromptInput,
  type LlmResponseStatus,
  type LlmSourceContext,
  type SafeLlmAnswerResponse,
} from "./types";

export const DEFAULT_LLM_CONTEXT_MAX_LENGTH = 6000;

const FALLBACK_ANSWERS: Record<LlmResponseStatus, string> = {
  [LLM_RESPONSE_STATUSES.answered]: "",
  [LLM_RESPONSE_STATUSES.noMatch]:
    "I don't have enough approved admissions information to answer that.",
  [LLM_RESPONSE_STATUSES.lowConfidence]:
    "I don't have enough approved admissions information to answer that.",
  [LLM_RESPONSE_STATUSES.insufficientContext]:
    "I don't have enough approved admissions information to answer that.",
  [LLM_RESPONSE_STATUSES.outOfDomain]:
    [
      "I can help with admissions-related questions. Please ask about:",
      "",
      "- Admissions",
      "- Programmes",
      "- Requirements",
      "- Screening",
      "- Documents",
      "- Fees",
      "- Deadlines",
      "- Application steps",
    ].join("\n"),
  [LLM_RESPONSE_STATUSES.missingConfiguration]:
    "I cannot generate an admissions answer right now. Please contact the admissions office for accurate guidance.",
  [LLM_RESPONSE_STATUSES.rateLimited]:
    "I cannot answer right now because too many requests are being handled. Please try again shortly or contact the admissions office.",
  [LLM_RESPONSE_STATUSES.generationFailed]:
    "I could not prepare a reliable admissions answer right now. Please contact the admissions office for accurate guidance.",
  [LLM_RESPONSE_STATUSES.invalidResponse]:
    "I could not verify a reliable admissions answer from the approved information. Please contact the admissions office for accurate guidance.",
};

export function getLlmFallbackAnswer(status: LlmResponseStatus) {
  return FALLBACK_ANSWERS[status];
}

export function toLlmSourceContext(
  match: PublicKnowledgeRetrievalMatch,
): LlmSourceContext {
  return {
    categoryId: match.categoryId ?? null,
    entryId: match.entryId,
    groundingText: match.groundingText,
    snippet: match.snippet,
    sourceLabel: match.sourceLabel,
    sourceUrl: match.sourceUrl,
    title: match.title,
    type: match.type,
  };
}

export function formatLlmSourceContext(
  sources: LlmSourceContext[],
  maxLength = DEFAULT_LLM_CONTEXT_MAX_LENGTH,
) {
  const boundedMaxLength = Math.max(0, Math.floor(maxLength));

  if (boundedMaxLength === 0 || sources.length === 0) {
    return "";
  }

  const formattedSources = sources
    .map((source, index) => {
      const text = normalizeWhitespace(source.groundingText || source.snippet);

      if (!text) {
        return null;
      }

      return [
        `Source ${index + 1}: ${source.title}`,
        source.sourceLabel ? `Label: ${source.sourceLabel}` : null,
        `Type: ${source.type}`,
        text,
      ]
        .filter(Boolean)
        .join("\n");
    })
    .filter((source): source is string => Boolean(source));

  return truncatePromptText(formattedSources.join("\n\n"), boundedMaxLength);
}

export function hasUsableLlmContext(sources: LlmSourceContext[]) {
  return sources.some((source) =>
    Boolean(normalizeWhitespace(source.groundingText || source.snippet)),
  );
}

export function selectLlmSourcesForIntent(args: {
  intent: KnowledgeRetrievalIntent;
  question: string;
  sources: LlmSourceContext[];
}) {
  if (args.sources.length === 0) {
    return [];
  }

  if (args.intent === KNOWLEDGE_RETRIEVAL_INTENTS.programmeList) {
    const programmeListSource = args.sources.find(isProgrammeListSource);

    return programmeListSource ? [programmeListSource] : [];
  }

  if (
    args.intent === KNOWLEDGE_RETRIEVAL_INTENTS.jambRequirement ||
    args.intent === KNOWLEDGE_RETRIEVAL_INTENTS.olevelRequirement ||
    args.intent === KNOWLEDGE_RETRIEVAL_INTENTS.fullProgrammeRequirement
  ) {
    return args.sources.slice(0, 1);
  }

  return args.sources
    .filter((source) => isSourceRelevantToQuestion(args.question, source))
    .slice(0, 3);
}

export function isProgrammeSpecificIntent(intent: KnowledgeRetrievalIntent) {
  return (
    intent === KNOWLEDGE_RETRIEVAL_INTENTS.jambRequirement ||
    intent === KNOWLEDGE_RETRIEVAL_INTENTS.olevelRequirement ||
    intent === KNOWLEDGE_RETRIEVAL_INTENTS.fullProgrammeRequirement
  );
}

export function hasSufficientLlmContext(args: {
  intent: KnowledgeRetrievalIntent;
  question: string;
  sources: LlmSourceContext[];
}) {
  if (!hasUsableLlmContext(args.sources)) {
    return false;
  }

  if (args.intent === KNOWLEDGE_RETRIEVAL_INTENTS.programmeList) {
    return args.sources.some(isProgrammeListSource);
  }

  if (isProgrammeSpecificIntent(args.intent)) {
    const requestedProgramme = extractRequestedProgrammeName(args.question);

    if (!requestedProgramme) {
      return false;
    }

    return sourceContainsProgramme(args.sources[0], requestedProgramme);
  }

  return true;
}

export function extractRequestedProgrammeName(question: string) {
  const normalizedQuestion = normalizeMatchText(question);

  if (!normalizedQuestion) {
    return "";
  }

  const candidate =
    extractProgrammeCandidate(normalizedQuestion) ??
    normalizeQuestionForProgrammeExtraction(normalizedQuestion);
  const cleanedCandidate = removeProgrammeTrailingClauses(candidate)
    .split(" ")
    .filter((term) => !PROGRAMME_EXTRACTION_STOP_WORDS.has(term))
    .join(" ")
    .trim();

  if (!cleanedCandidate) {
    return "";
  }

  return cleanedCandidate;
}

export function shouldUseOutOfDomainFallback(input: LlmPromptInput) {
  return (
    input.retrieval.status === KNOWLEDGE_RETRIEVAL_STATUSES.noMatch &&
    input.retrieval.intent === KNOWLEDGE_RETRIEVAL_INTENTS.unknown
  );
}

export function buildFallbackLlmAnswerResponse(args: {
  input: LlmPromptInput;
  status: Exclude<LlmResponseStatus, "answered">;
}): SafeLlmAnswerResponse {
  return {
    answer: FALLBACK_ANSWERS[args.status],
    retrieval: {
      intent: args.input.retrieval.intent,
      sourceCount: args.input.sources.length,
      status: args.input.retrieval.status,
    },
    sources: toSafeLlmAnswerSources(args.input.sources),
    status: args.status,
  };
}

export function toSafeLlmAnswerResponse(args: {
  answer: string;
  input: LlmPromptInput;
}): SafeLlmAnswerResponse {
  return {
    answer: args.answer,
    retrieval: {
      intent: args.input.retrieval.intent,
      sourceCount: args.input.sources.length,
      status: args.input.retrieval.status,
    },
    sources: toSafeLlmAnswerSources(args.input.sources),
    status: LLM_RESPONSE_STATUSES.answered,
  };
}

export function toSafeLlmAnswerSources(sources: LlmSourceContext[]) {
  return sources.map((source) => ({
    entryId: source.entryId,
    sourceLabel: source.sourceLabel,
    sourceUrl: source.sourceUrl,
    title: source.title,
    type: source.type,
  }));
}

function truncatePromptText(value: string, maxLength: number) {
  const normalizedValue = normalizePromptText(value);

  if (!normalizedValue || maxLength === 0) {
    return "";
  }

  if (normalizedValue.length <= maxLength) {
    return normalizedValue;
  }

  return `${normalizedValue.slice(0, Math.max(0, maxLength - 3)).trimEnd()}...`;
}

function normalizeWhitespace(value: string) {
  return value.trim().replace(/\s+/g, " ");
}

function normalizePromptText(value: string) {
  return value
    .split("\n")
    .map((line) => normalizeWhitespace(line))
    .filter(Boolean)
    .join("\n");
}

function isProgrammeListSource(source: LlmSourceContext) {
  const sourceText = normalizeMatchText(
    [source.title, source.sourceLabel, source.groundingText, source.snippet]
      .filter(Boolean)
      .join(" "),
  );

  return (
    sourceText.includes("undergraduate programmes list") ||
    sourceText.includes("undergraduate programs list") ||
    sourceText.includes("programme list") ||
    sourceText.includes("programmes list") ||
    sourceText.includes("course list")
  );
}

function isSourceRelevantToQuestion(question: string, source: LlmSourceContext) {
  const questionTerms = normalizeMatchText(question)
    .split(" ")
    .filter((term) => term.length >= 3 && !GENERAL_SOURCE_STOP_WORDS.has(term));

  if (questionTerms.length === 0) {
    return true;
  }

  const sourceText = normalizeMatchText(
    [source.title, source.sourceLabel, source.groundingText, source.snippet]
      .filter(Boolean)
      .join(" "),
  );

  return questionTerms.some((term) => sourceText.includes(term));
}

function sourceContainsProgramme(
  source: LlmSourceContext | undefined,
  programme: string,
) {
  if (!source) {
    return false;
  }

  const normalizedProgramme = normalizeMatchText(programme);
  const sourceText = normalizeMatchText(
    [source.title, source.groundingText, source.snippet].join(" "),
  );

  return normalizedProgramme
    .split(" ")
    .filter(Boolean)
    .every((term) => sourceText.includes(term));
}

function extractProgrammeCandidate(question: string) {
  const patterns = [
    /\bstudy\s+(.+?)(?:\s+with\s+|\s+using\s+|\s+at\s+|$)/,
    /\bstudying\s+(.+?)(?:\s+with\s+|\s+using\s+|\s+at\s+|$)/,
    /\bfor\s+(.+?)(?:\s+with\s+|\s+using\s+|\s+at\s+|$)/,
    /\babout\s+(.+?)(?:\s+with\s+|\s+using\s+|\s+at\s+|$)/,
    /\bin\s+(.+?)(?:\s+with\s+|\s+using\s+|\s+at\s+|$)/,
    /\binto\s+(.+?)(?:\s+with\s+|\s+using\s+|\s+at\s+|$)/,
  ];

  for (const pattern of patterns) {
    const match = question.match(pattern);
    const candidate = match?.[1]?.trim();

    if (candidate) {
      return candidate;
    }
  }

  return null;
}

function removeProgrammeTrailingClauses(value: string) {
  return value
    .replace(/\bwith\b.*$/, "")
    .replace(/\busing\b.*$/, "")
    .replace(/\bsubjects?\b.*$/, "")
    .replace(/\brequirements?\b.*$/, "")
    .trim();
}

function normalizeQuestionForProgrammeExtraction(question: string) {
  return question
    .replace(/\b(?:what|which|tell|me|please|need|needs|requirement|requirements|subjects|subject|combination|jamb|utme|olevel|level|screening|admission|admissions|can|i|do|does|is|are|the|a|an|to|of)\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeMatchText(value: string) {
  return normalizeWhitespace(value)
    .toLowerCase()
    .replace(/[’`]/g, "'")
    .replace(/\bo[\s-]*'?level\b/g, "olevel")
    .replace(/\bolevl\b/g, "olevel")
    .replace(/\bscreeninge\b/g, "screening")
    .replace(/[^a-z0-9']+/g, " ")
    .trim();
}

const GENERAL_SOURCE_STOP_WORDS = new Set([
  "about",
  "admission",
  "admissions",
  "for",
  "how",
  "need",
  "please",
  "requirements",
  "requirement",
  "tell",
  "the",
  "what",
]);

const PROGRAMME_EXTRACTION_STOP_WORDS = new Set([
  ...GENERAL_SOURCE_STOP_WORDS,
  "and",
  "apply",
  "course",
  "courses",
  "department",
  "government",
  "literature",
  "programme",
  "programmes",
  "program",
  "programs",
]);
