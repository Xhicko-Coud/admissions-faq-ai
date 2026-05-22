import type { ChatMessage, ChatSubmitResult } from "@/app/chat/chat-types";

export const CHAT_QUESTION_MAX_LENGTH = 500;
export const CHAT_RESPONSE_TIMEOUT_MS = 30_000;

export function validateChatQuestion(value: string): string | null {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return "Enter an admission question before sending.";
  }

  if (trimmedValue.length > CHAT_QUESTION_MAX_LENGTH) {
    return `Keep your admission question under ${CHAT_QUESTION_MAX_LENGTH} characters.`;
  }

  return null;
}

export function createUserChatMessage(value: string): ChatMessage {
  return {
    content: value.trim(),
    createdAt: Date.now(),
    id:
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}`,
    role: "user",
  };
}

export function prepareLocalChatSubmission(value: string): ChatSubmitResult {
  const error = validateChatQuestion(value);

  if (error) {
    return {
      error,
      ok: false,
    };
  }

  return {
    message: createUserChatMessage(value),
    ok: true,
  };
}
