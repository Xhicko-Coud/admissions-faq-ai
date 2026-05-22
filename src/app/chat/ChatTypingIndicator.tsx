import { GraduationCap } from "lucide-react";

export function ChatTypingIndicator() {
  return (
    <div className="flex w-full justify-start gap-3" role="status" aria-live="polite">
      <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full border border-violet-400/25 bg-violet-500/10 text-violet-200">
        <GraduationCap className="size-4" aria-hidden="true" />
      </div>
      <div
        className="flex min-h-11 items-center gap-1.5 rounded-2xl rounded-bl-md border border-white/10 bg-[#15151c] px-4 py-3 shadow-sm shadow-black/20"
        aria-label="Assistant is typing"
      >
        <span className="size-2 animate-bounce rounded-full bg-violet-300 [animation-delay:-0.2s]" />
        <span className="size-2 animate-bounce rounded-full bg-violet-300 [animation-delay:-0.1s]" />
        <span className="size-2 animate-bounce rounded-full bg-violet-300" />
      </div>
    </div>
  );
}
