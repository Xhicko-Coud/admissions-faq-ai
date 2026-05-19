import { GraduationCap, MessagesSquare } from "lucide-react";

import { siteConfig } from "@/config/site";

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-16 text-foreground">
      <section className="mx-auto grid w-full max-w-3xl justify-items-center gap-6 text-center">
        <div className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm shadow-primary/20 ring-8 ring-primary/8">
          <MessagesSquare className="size-8" strokeWidth={1.8} />
        </div>
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">
            {siteConfig.name}
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Admissions FAQ
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-6 text-muted-foreground">
            Public admissions FAQ support will be connected to the approved
            knowledge base in a later module.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-md border border-primary/10 bg-white px-4 py-3 text-sm text-muted-foreground shadow-sm">
          <GraduationCap className="size-4 text-primary" />
          Official admissions guidance should always be confirmed with the
          university admissions office.
        </div>
      </section>
    </main>
  );
}
