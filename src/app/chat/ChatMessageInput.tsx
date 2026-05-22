"use client";

import { FormEvent } from "react";
import { ArrowUpIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CHAT_QUESTION_MAX_LENGTH } from "@/app/chat/chat-logic";

type ChatMessageInputProps = {
  onChange: (value: string) => void;
  onSubmit: () => void;
  pending: boolean;
  value: string;
};

export function ChatMessageInput({
  onChange,
  onSubmit,
  pending,
  value,
}: ChatMessageInputProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit();
  }

  return (
    <form className="px-2 pb-4 sm:px-4 sm:pb-6" onSubmit={handleSubmit}>
      <div className="rounded-[28px] border border-white/10 bg-[#15151c] p-3 shadow-xl shadow-black/20 transition-shadow focus-within:border-violet-400/75 focus-within:ring-2 focus-within:ring-violet-500/25">
        <div className="flex items-end gap-3">
          <textarea
            aria-label="Admissions chat message input"
            className="chat-input-scrollbar max-h-32 min-h-10 flex-1 resize-none overflow-y-auto bg-transparent px-2 py-2 text-sm text-zinc-100 outline-none placeholder:text-zinc-400 disabled:cursor-not-allowed disabled:opacity-80"
            disabled={pending}
            maxLength={CHAT_QUESTION_MAX_LENGTH}
            onChange={(event) => onChange(event.target.value)}
            onKeyDown={(event) => {
              if (event.key !== "Enter" || event.shiftKey) return;
              event.preventDefault();
              onSubmit();
            }}
            placeholder="Type your admission question here..."
            rows={1}
            value={value}
          />
          <Button
            aria-label="Send admission question"
            className="size-9 shrink-0 rounded-full bg-violet-600 text-white shadow-sm shadow-violet-950/50 hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={pending}
            size="icon"
            type="submit"
          >
            <ArrowUpIcon className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </form>
  );
}
