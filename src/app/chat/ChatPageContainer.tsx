"use client";

import { useRef, useState } from "react";
import { useAction } from "convex/react";

import {
  CHAT_RESPONSE_TIMEOUT_MS,
  prepareLocalChatSubmission,
} from "@/app/chat/chat-logic";
import { ChatPageView } from "@/app/chat/ChatPageView";
import type { ChatMessage } from "@/app/chat/chat-types";
import { useNotificationContext } from "@/components/providers/NotificationProvider";
import { api } from "@convex/_generated/api";
import type { Id } from "@convex/_generated/dataModel";

type ClientTimeoutResult = {
  status: "client_timeout";
};

const SAFE_SUBMISSION_FAILURE_MESSAGE =
  "Your question could not be sent. Please try again.";
const SAFE_TIMEOUT_MESSAGE =
  "This is taking longer than expected. Please try again.";

export function ChatPageContainer() {
  const submitPublicChatMessage = useAction(
    api.chat.submitPublicChatMessage.submitPublicChatMessage,
  );
  const { dismissNotification, showNotification } = useNotificationContext();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [pending, setPending] = useState(false);
  const [chatId, setChatId] = useState<Id<"chats"> | null>(null);
  const [retryQuestion, setRetryQuestion] = useState<string | null>(null);
  const activeRequestIdRef = useRef<string | null>(null);

  function handleInputChange(value: string) {
    setInputValue(value);
  }

  function handleSubmit() {
    if (pending) return;

    const result = prepareLocalChatSubmission(inputValue);

    if (!result.ok) {
      showNotification({
        description: result.error,
        title: "Message not sent",
        variant: "error",
      });
      return;
    }

    setMessages((currentMessages) => [...currentMessages, result.message]);
    setInputValue("");
    void submitQuestion({
      appendUserMessage: false,
      question: result.message.content,
    });
  }

  function handleRetry() {
    if (pending || !retryQuestion) return;

    void submitQuestion({
      appendUserMessage: false,
      question: retryQuestion,
    });
  }

  async function submitQuestion(args: {
    appendUserMessage: boolean;
    question: string;
  }) {
    const requestId = createRequestId();
    activeRequestIdRef.current = requestId;
    setPending(true);
    setRetryQuestion(null);

    if (args.appendUserMessage) {
      const localMessage = prepareLocalChatSubmission(args.question);

      if (localMessage.ok) {
        setMessages((currentMessages) => [
          ...currentMessages,
          localMessage.message,
        ]);
      }
    }

    try {
      const response = await raceWithTimeout(
        submitPublicChatMessage({
          chatId: chatId ?? undefined,
          question: args.question,
        }),
      );

      if (activeRequestIdRef.current !== requestId) return;

      if (response.status === "client_timeout") {
        setMessages((currentMessages) => [
          ...currentMessages,
          createAssistantMessage(SAFE_TIMEOUT_MESSAGE),
        ]);
        setRetryQuestion(args.question);
        showNotification({
          description: SAFE_TIMEOUT_MESSAGE,
          title: "Response delayed",
          variant: "warning",
        });
        return;
      }

      if (response.status === "invalid_input") {
        showNotification({
          description: response.issues[0] ?? SAFE_SUBMISSION_FAILURE_MESSAGE,
          title: "Message not sent",
          variant: "error",
        });
        return;
      }

      if (!("assistantMessage" in response)) {
        setRetryQuestion(args.question);
        showNotification({
          description: SAFE_SUBMISSION_FAILURE_MESSAGE,
          title: "Message not sent",
          variant: "error",
        });
        return;
      }

      setChatId(response.chatId);
      setMessages((currentMessages) => [
        ...currentMessages,
        createAssistantMessage(response.assistantMessage.content),
      ]);
      dismissNotification();
    } catch {
      if (activeRequestIdRef.current !== requestId) return;

      setRetryQuestion(args.question);
      showNotification({
        description: SAFE_SUBMISSION_FAILURE_MESSAGE,
        title: "Message not sent",
        variant: "error",
      });
    } finally {
      if (activeRequestIdRef.current === requestId) {
        activeRequestIdRef.current = null;
        setPending(false);
      }
    }
  }

  return (
    <ChatPageView
      canRetry={Boolean(retryQuestion)}
      inputValue={inputValue}
      messages={messages}
      onInputChange={handleInputChange}
      onRetry={handleRetry}
      onSubmit={handleSubmit}
      pending={pending}
    />
  );
}

async function raceWithTimeout<T>(
  request: Promise<T>,
): Promise<T | ClientTimeoutResult> {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  const timeout = new Promise<ClientTimeoutResult>((resolve) => {
    timeoutId = setTimeout(
      () => resolve({ status: "client_timeout" }),
      CHAT_RESPONSE_TIMEOUT_MS,
    );
  });
  const result = await Promise.race([request, timeout]);

  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  return result;
}

function createAssistantMessage(content: string): ChatMessage {
  return {
    content,
    createdAt: Date.now(),
    id: createRequestId(),
    role: "assistant",
  };
}

function createRequestId() {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}`;
}
