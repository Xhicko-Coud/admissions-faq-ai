import { GraduationCap, MessagesSquare } from "lucide-react";

import { Thread } from "@assistant-ui-components/thread";
import { siteConfig } from "@/config/site";

export function ChatPageView() {
  return (
    <main className="min-h-screen bg-[#09090f] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-3 py-4 sm:px-6 sm:py-5 lg:px-8">
        <header className="flex items-center justify-between gap-2 border-b border-white/10 pb-3 sm:gap-3 sm:pb-4">
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

        <section className="grid min-h-0 flex-1 py-4 sm:py-5">
          <div className="min-h-[680px] overflow-hidden">
            <Thread />
          </div>
        </section>
      </div>
    </main>
  );
}
