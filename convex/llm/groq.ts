import { getLlmFallbackAnswer } from "./helpers";
import {
  LLM_RESPONSE_STATUSES,
  type LlmGenerationFailureStatus,
} from "./types";

const GROQ_CHAT_COMPLETIONS_URL =
  "https://api.groq.com/openai/v1/chat/completions";
const DEFAULT_GROQ_TEMPERATURE = 0.2;
const DEFAULT_GROQ_MAX_TOKENS = 500;
const MIN_GROQ_TEMPERATURE = 0;
const MAX_GROQ_TEMPERATURE = 1;
const MIN_GROQ_MAX_TOKENS = 64;
const MAX_GROQ_MAX_TOKENS = 1200;

type GroqConfig =
  | {
      apiKey: string;
      maxTokens: number;
      model: string;
      status: "ready";
      temperature: number;
    }
  | {
      status: "missing_configuration";
    };

export type GroqChatMessage = {
  content: string;
  role: "system" | "user";
};

export type GroqGenerationResult =
  | {
      answer: string;
      model: string;
      ok: true;
    }
  | {
      ok: false;
      safeMessage: string;
      status: LlmGenerationFailureStatus;
    };

type GroqChatCompletionResponse = {
  choices?: Array<{
    message?: {
      content?: unknown;
    };
  }>;
};

export async function generateGroqChatCompletion(args: {
  messages: GroqChatMessage[];
}): Promise<GroqGenerationResult> {
  const config = getGroqConfig();

  if (config.status === "missing_configuration") {
    return toGroqFailure(LLM_RESPONSE_STATUSES.missingConfiguration);
  }

  try {
    const response = await fetch(GROQ_CHAT_COMPLETIONS_URL, {
      body: JSON.stringify({
        max_tokens: config.maxTokens,
        messages: args.messages,
        model: config.model,
        temperature: config.temperature,
      }),
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (response.status === 429) {
      return toGroqFailure(LLM_RESPONSE_STATUSES.rateLimited);
    }

    if (response.status === 401 || response.status === 403) {
      return toGroqFailure(LLM_RESPONSE_STATUSES.missingConfiguration);
    }

    if (!response.ok) {
      return toGroqFailure(LLM_RESPONSE_STATUSES.generationFailed);
    }

    const json = await parseGroqJson(response);

    if (!json) {
      return toGroqFailure(LLM_RESPONSE_STATUSES.invalidResponse);
    }

    const answer = extractGroqAnswer(json);

    if (!answer) {
      return toGroqFailure(LLM_RESPONSE_STATUSES.invalidResponse);
    }

    return {
      answer,
      model: config.model,
      ok: true,
    };
  } catch {
    return toGroqFailure(LLM_RESPONSE_STATUSES.generationFailed);
  }
}

function getGroqConfig(): GroqConfig {
  const apiKey = process.env.GROQ_API_KEY?.trim();
  const model = process.env.GROQ_MODEL?.trim();

  if (!apiKey || !model) {
    return { status: "missing_configuration" };
  }

  return {
    apiKey,
    maxTokens: parseOptionalNumberConfig({
      defaultValue: DEFAULT_GROQ_MAX_TOKENS,
      max: MAX_GROQ_MAX_TOKENS,
      min: MIN_GROQ_MAX_TOKENS,
      value: process.env.GROQ_MAX_TOKENS,
    }),
    model,
    status: "ready",
    temperature: parseOptionalNumberConfig({
      defaultValue: DEFAULT_GROQ_TEMPERATURE,
      max: MAX_GROQ_TEMPERATURE,
      min: MIN_GROQ_TEMPERATURE,
      value: process.env.GROQ_TEMPERATURE,
    }),
  };
}

function parseOptionalNumberConfig(args: {
  defaultValue: number;
  max: number;
  min: number;
  value: string | undefined;
}) {
  const parsed = Number(args.value);

  if (!args.value || !Number.isFinite(parsed)) {
    return args.defaultValue;
  }

  return Math.min(args.max, Math.max(args.min, parsed));
}

async function parseGroqJson(
  response: Response,
): Promise<GroqChatCompletionResponse | null> {
  try {
    const json: unknown = await response.json();

    if (!isGroqChatCompletionResponse(json)) {
      return null;
    }

    return json;
  } catch {
    return null;
  }
}

function extractGroqAnswer(response: GroqChatCompletionResponse) {
  const content = response.choices?.[0]?.message?.content;

  if (typeof content !== "string") {
    return "";
  }

  return content.trim();
}

function isGroqChatCompletionResponse(
  value: unknown,
): value is GroqChatCompletionResponse {
  return typeof value === "object" && value !== null;
}

function toGroqFailure(
  status: LlmGenerationFailureStatus,
): GroqGenerationResult {
  return {
    ok: false,
    safeMessage: getLlmFallbackAnswer(status),
    status,
  };
}
