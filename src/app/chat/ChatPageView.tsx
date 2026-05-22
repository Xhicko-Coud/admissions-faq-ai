"use client";

import { GraduationCap, MessagesSquare, RotateCcwIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ChatMessageInput } from "@/app/chat/ChatMessageInput";
import { ChatMessageList } from "@/app/chat/ChatMessageList";
import type { ChatMessage } from "@/app/chat/chat-types";
import { siteConfig } from "@/config/site";

type ChatPageViewProps = {
  canRetry: boolean;
  inputValue: string;
  messages: ChatMessage[];
  onInputChange: (value: string) => void;
  onRetry: () => void;
  onSubmit: () => void;
  pending: boolean;
};

export function ChatPageView({
  canRetry,
  inputValue,
  messages,
  onInputChange,
  onRetry,
  onSubmit,
  pending,
}: ChatPageViewProps) {
  return (
    <main className="fixed inset-0 h-[100dvh] max-h-[100dvh] overflow-hidden bg-[#09090f] text-white">
      <div className="mx-auto flex h-full max-h-full min-h-0 w-full max-w-6xl flex-col overflow-hidden px-3 pt-3 sm:px-6 sm:pt-5 lg:px-8">
        <header className="sticky top-0 z-20 flex shrink-0 items-center justify-between gap-2 border-b border-white/10 bg-[#09090f]/95 pb-3 backdrop-blur sm:gap-3 sm:pb-4">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-violet-600 text-white shadow-sm shadow-violet-950/40 sm:size-10">
              <GraduationCap className="size-4 sm:size-5" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-xs font-medium text-zinc-400 sm:text-sm">
                {siteConfig.name}
              </p>
            </div>
          </div>
          <div className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2 py-1.5 text-xs text-zinc-300 shadow-xs sm:gap-2 sm:px-3 sm:py-2 sm:text-sm">
            <MessagesSquare className="size-3.5 text-violet-300 sm:size-4" aria-hidden="true" />
            Public Chat
          </div>
        </header>

        <section className="grid min-h-0 flex-1 overflow-hidden pt-4 sm:pt-5">
          <div className="flex min-h-0 w-full flex-1 flex-col overflow-hidden">
            <ChatMessageList messages={messages} pending={pending} />
            <div className="sticky bottom-0 z-10 bg-[#09090f]/95 pt-2 backdrop-blur">
              {canRetry ? (
                <div className="flex justify-end px-2 pb-3 sm:px-4">
                  <Button
                    className="h-8 rounded-full border-white/10 bg-white/5 px-3 text-xs text-violet-100 hover:bg-violet-500/20"
                    disabled={pending}
                    onClick={onRetry}
                    type="button"
                    variant="outline"
                  >
                    <RotateCcwIcon className="size-3.5" aria-hidden="true" />
                    Retry
                  </Button>
                </div>
              ) : null}
              <ChatMessageInput
                onChange={onInputChange}
                onSubmit={onSubmit}
                pending={pending}
                value={inputValue}
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
