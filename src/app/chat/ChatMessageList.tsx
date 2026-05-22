"use client";

import { ArrowDownIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { ChatMessageBubble } from "@/app/chat/ChatMessageBubble";
import { ChatTypingIndicator } from "@/app/chat/ChatTypingIndicator";
import type { ChatMessage } from "@/app/chat/chat-types";
import { Button } from "@/components/ui/button";

type ChatMessageListProps = {
  messages: ChatMessage[];
  pending: boolean;
};

export function ChatMessageList({ messages, pending }: ChatMessageListProps) {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [showScrollToBottom, setShowScrollToBottom] = useState(false);

  function updateScrollButtonVisibility() {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) return;

    const distanceFromBottom =
      scrollContainer.scrollHeight -
      scrollContainer.scrollTop -
      scrollContainer.clientHeight;

    setShowScrollToBottom(distanceFromBottom > 64);
  }

  function scrollToBottom() {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) return;

    scrollContainer.scrollTo({
      behavior: "smooth",
      top: scrollContainer.scrollHeight,
    });
  }

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) return;

    scrollContainer.scrollTop = scrollContainer.scrollHeight;
    updateScrollButtonVisibility();
  }, [messages.length, pending]);

  if (messages.length === 0 && !pending) {
    return (
      <div className="flex flex-1 items-center justify-center px-4 text-center">
        <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Any admission question?
        </h1>
      </div>
    );
  }

  return (
    <div
      className="chat-scrollbar relative min-h-0 flex-1 overflow-y-auto px-2 py-4 pb-8 sm:px-4 sm:pb-32"
      onScroll={updateScrollButtonVisibility}
      ref={scrollContainerRef}
    >
      <div className="flex min-h-full flex-col justify-end gap-5">
        {messages.map((message) => (
          <ChatMessageBubble key={message.id} message={message} />
        ))}
        {pending && <ChatTypingIndicator />}
      </div>
      {showScrollToBottom ? (
        <div className="sticky -bottom-30 z-10 flex justify-center">
          <Button
            aria-label="Scroll to latest message"
            className="size-10 rounded-full border border-violet-300/25 bg-violet-600 text-white shadow-lg shadow-violet-950/40 hover:bg-violet-500"
            onClick={scrollToBottom}
            size="icon"
            type="button"
          >
            <ArrowDownIcon className="size-4" aria-hidden="true" />
          </Button>
        </div>
      ) : null}
    </div>
  );
}
