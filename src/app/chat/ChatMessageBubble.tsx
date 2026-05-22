"use client";

import { CheckIcon, CopyIcon, GraduationCap } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { SafeMarkdownText } from "@/components/assistant-ui/markdown-text";
import type { ChatMessage } from "@/app/chat/chat-types";
import { cn } from "@/lib/utils";

type ChatMessageBubbleProps = {
  message: ChatMessage;
};

export function ChatMessageBubble({ message }: ChatMessageBubbleProps) {
  const isUser = message.role === "user";
  const [copied, setCopied] = useState(false);

  function copyMessage() {
    if (
      !message.content ||
      typeof navigator === "undefined" ||
      !navigator.clipboard
    ) {
      return;
    }

    void navigator.clipboard.writeText(message.content).then(
      () => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      },
      () => {},
    );
  }

  return (
    <article
      className={cn(
        "group/message flex w-full gap-3",
        isUser ? "justify-end" : "justify-start",
      )}
    >
      {!isUser && <AssistantAvatar />}
      <div
        className={cn(
          "flex max-w-[86%] flex-col sm:max-w-[76%]",
          isUser ? "items-end" : "items-start",
        )}
      >
        <div
          className={cn(
            "break-words rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm",
            isUser
              ? "whitespace-pre-wrap rounded-br-md bg-violet-600 text-white shadow-violet-950/20"
              : "rounded-bl-md border border-white/10 bg-[#15151c] text-zinc-100 shadow-black/20",
          )}
        >
          {isUser ? (
            message.content
          ) : (
            <SafeMarkdownText
              className="[&_ol]:marker:text-violet-300 [&_ul]:marker:text-violet-300"
              content={message.content}
            />
          )}
        </div>
        <div
          className={cn(
            "mt-1 flex",
            isUser ? "justify-end" : "justify-start",
          )}
        >
          <Button
            aria-label={isUser ? "Copy question" : "Copy answer"}
            className={cn(
              "size-7 rounded-full p-0 text-violet-200 transition-colors hover:bg-violet-500/15 hover:text-violet-100 focus-visible:opacity-100",
              isUser
                ? "opacity-100 sm:opacity-0 sm:group-hover/message:opacity-100 sm:group-focus-within/message:opacity-100"
                : "opacity-100",
            )}
            onClick={copyMessage}
            type="button"
            variant="ghost"
          >
            {copied ? (
              <CheckIcon className="size-3" aria-hidden="true" />
            ) : (
              <CopyIcon className="size-3" aria-hidden="true" />
            )}
            <span className="sr-only">{copied ? "Copied" : "Copy"}</span>
          </Button>
        </div>
      </div>
    </article>
  );
}

function AssistantAvatar() {
  return (
    <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full border border-violet-400/25 bg-violet-500/10 text-violet-200">
      <GraduationCap className="size-4" aria-hidden="true" />
      <span className="sr-only">Admissions Assistant</span>
    </div>
  );
}
