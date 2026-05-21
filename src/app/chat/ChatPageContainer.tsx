"use client";

import {
  AssistantRuntimeProvider,
  type ChatModelAdapter,
  useLocalRuntime,
} from "@assistant-ui/react";
import { useMemo } from "react";

import { ChatPageView } from "@/app/chat/ChatPageView";

export function ChatPageContainer() {
  const chatModel = useMemo<ChatModelAdapter>(
    () => ({
      async run() {
        return { content: [] };
      },
    }),
    [],
  );
  const runtime = useLocalRuntime(chatModel);

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <ChatPageView />
    </AssistantRuntimeProvider>
  );
}
