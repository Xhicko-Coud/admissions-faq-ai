import { GraduationCap, LockKeyholeIcon } from "lucide-react";
import type { ReactNode } from "react";

import { siteConfig } from "@/config/site";

const previewNavigationItems = [
  { label: "Dashboard", isActive: true },
  { label: "FAQs" },
  { label: "Categories" },
  { label: "Query Logs" },
  { label: "Settings" },
];

export function AuthGateBackdrop({ children }: { children: ReactNode }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F6F1E8] text-foreground">
      <div
        aria-hidden="true"
        className="absolute inset-0 flex opacity-90 blur-[1.5px]"
      >
        <aside className="hidden w-72 shrink-0 border-r border-primary/20 bg-sidebar text-sidebar-foreground md:flex md:flex-col">
          <div className="p-4">
            <div className="flex h-14 items-center gap-3 rounded-xl px-2">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground ring-1 ring-primary/15">
                <GraduationCap className="size-5" />
              </div>
              <div className="grid min-w-0 flex-1 leading-tight">
                <span className="truncate text-sm font-semibold">
                  {siteConfig.name}
                </span>
                <span className="truncate text-xs text-muted-foreground">
                  Protected workspace
                </span>
              </div>
            </div>
          </div>

          <div className="h-px bg-primary/15" />

          <nav className="flex-1 px-4 py-4">
            <p className="mb-3 px-2 text-xs font-medium text-muted-foreground">
              Navigation
            </p>
            <div className="grid gap-2">
              {previewNavigationItems.map((item) => (
                <div
                  className={
                    item.isActive
                      ? "flex h-10 items-center rounded-xl bg-primary/10 px-3 text-sm font-medium text-primary"
                      : "flex h-10 items-center rounded-xl px-3 text-sm text-muted-foreground"
                  }
                  key={item.label}
                >
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </nav>

          <div className="h-px bg-primary/15" />
          <div className="grid gap-1 p-4 text-xs text-muted-foreground">
            <p>Admissions admin access</p>
            <p>{siteConfig.name}</p>
          </div>
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

          <div className="grid flex-1 gap-4 bg-zinc-50 p-4">
            <div className="grid gap-4 md:grid-cols-3">
              {[0, 1, 2].map((item) => (
                <div
                  className="min-h-32 rounded-2xl border border-primary/10 bg-white/75 p-4 shadow-sm"
                  key={item}
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

            <div className="min-h-80 rounded-2xl border border-primary/10 bg-white/75 p-4 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <div className="h-4 w-40 rounded-full bg-primary/15" />
                <LockKeyholeIcon className="size-5 text-primary/30" />
              </div>
              <div className="grid gap-3">
                {[0, 1, 2, 3, 4].map((item) => (
                  <div
                    className="grid grid-cols-[2rem_1fr_7rem] items-center gap-4 rounded-xl border border-primary/10 bg-[#F6F1E8]/70 p-3"
                    key={item}
                  >
                    <div className="size-8 rounded-md bg-primary/10" />
                    <div className="grid gap-2">
                      <div className="h-3 w-48 max-w-full rounded-full bg-primary/15" />
                      <div className="h-2 w-32 max-w-full rounded-full bg-primary/10" />
                    </div>
                    <div className="h-7 rounded-md bg-primary/10" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="absolute inset-0 bg-[#F6F1E8]/70 backdrop-blur-[2px]" />
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10">
        {children}
      </div>
    </main>
  );
}
