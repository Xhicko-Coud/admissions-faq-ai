import { CircleHelp, MessagesSquare } from "lucide-react";

import { siteConfig } from "@/config/site";
import { EmptyState } from "@/components/shared/EmptyState";
import { PageHeader } from "@/components/shared/PageHeader";

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-16 text-foreground">
      <section className="mx-auto grid w-full max-w-3xl gap-6">
        <div className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm shadow-primary/20 ring-8 ring-primary/8">
          <MessagesSquare className="size-8" strokeWidth={1.8} />
        </div>
        <PageHeader
          eyebrow={siteConfig.name}
          title="Admissions FAQ Assistant"
          description="Ask common admissions questions and receive answers from the university's approved FAQ knowledge base."
        />
        <EmptyState
          className="bg-white"
          description="Approved admissions answers, categories, and chatbot responses will appear here once the knowledge base is connected."
          icon={CircleHelp}
          title="FAQ assistant is being prepared"
        />
      </section>
    </main>
  );
}
