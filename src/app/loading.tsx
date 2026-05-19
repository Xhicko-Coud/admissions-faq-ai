import { GraduationCap, Loader2 } from "lucide-react";

import { siteConfig } from "@/config/site";

export default function Loading() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-50 px-4 py-10 text-foreground">
      <div
        aria-hidden="true"
        className="absolute inset-0 flex opacity-90 blur-[1.5px]"
      >
        <aside className="hidden w-72 shrink-0 border-r border-primary/15 bg-sidebar text-sidebar-foreground md:flex md:flex-col">
          <div className="p-4">
            <div className="flex h-14 items-center gap-3 rounded-xl px-2">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <GraduationCap className="size-5" />
              </div>
              <div className="grid min-w-0 flex-1 leading-tight">
                <span className="truncate text-sm font-semibold">
                  {siteConfig.name}
                </span>
                <span className="truncate text-xs text-muted-foreground">
                  Admin Shell
                </span>
              </div>
            </div>
          </div>

          <div className="h-px bg-primary/10" />

          <nav className="flex-1 px-4 py-4">
            <p className="mb-3 px-2 text-xs font-medium text-muted-foreground">
              Navigation
            </p>
            <div className="grid gap-2">
              {["Dashboard", "FAQs", "Categories", "Query Logs"].map(
                (item, index) => (
                  <div
                    key={item}
                    className={
                      index === 0
                        ? "flex h-10 items-center rounded-xl bg-primary/10 px-3 text-sm font-medium text-primary"
                        : "flex h-10 items-center rounded-xl px-3 text-sm text-muted-foreground"
                    }
                  >
                    <span>{item}</span>
                  </div>
                ),
              )}
            </div>
          </nav>
        </aside>

        <section className="flex min-w-0 flex-1 flex-col">
          <header className="flex h-16 shrink-0 items-center border-b border-primary/10 bg-sidebar px-4">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-md border border-primary/10 text-primary">
                <GraduationCap className="size-4" />
              </div>
              <div className="grid gap-1">
                <div className="h-3 w-24 rounded-full bg-primary/20" />
                <div className="h-2 w-40 rounded-full bg-primary/10" />
              </div>
            </div>
          </header>

          <div className="grid flex-1 gap-4 p-4">
            <div className="grid gap-4 md:grid-cols-3">
              {[0, 1, 2].map((item) => (
                <div
                  key={item}
                  className="min-h-32 rounded-2xl border border-primary/10 bg-white/75 p-4 shadow-sm"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className="h-3 w-24 rounded-full bg-primary/15" />
                    <div className="size-8 rounded-md bg-primary/10" />
                  </div>
                  <div className="h-8 w-20 rounded-full bg-primary/20" />
                  <div className="mt-4 h-2 w-32 rounded-full bg-primary/10" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="absolute inset-0 bg-zinc-50/70 backdrop-blur-[2px]" />
      <div
        aria-live="polite"
        className="relative z-10 grid w-full max-w-md justify-items-center gap-5 rounded-2xl border border-primary/10 bg-white/95 px-6 py-10 text-center shadow-xl shadow-primary/10"
        role="status"
      >
        <div className="relative flex size-24 items-center justify-center">
          <Loader2
            aria-hidden="true"
            className="absolute inset-0 size-24 animate-spin text-primary"
            strokeWidth={1.5}
          />
          <div className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground ring-8 ring-primary/8">
            <GraduationCap aria-hidden="true" className="size-8" />
          </div>
        </div>
        <div className="grid gap-2">
          <p className="text-base font-semibold text-primary">
            Loading workspace
          </p>
          <p className="text-sm leading-6 text-primary/70">
            Preparing admissions FAQ support.
          </p>
        </div>
      </div>
    </main>
  );
}
