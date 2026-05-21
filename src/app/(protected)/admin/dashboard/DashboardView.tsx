import {
  BookOpenCheck,
  CircleHelp,
  MessagesSquare,
  SearchCheck,
  ThumbsUp,
} from "lucide-react";

import { EmptyState } from "@/components/shared/EmptyState";
import { PageHeader } from "@/components/shared/PageHeader";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const placeholderSections = [
  {
    title: "Content visibility",
    description:
      "Published knowledge content, draft coverage, and category organization will surface here.",
    icon: BookOpenCheck,
  },
  {
    title: "Chatbot activity",
    description:
      "Question activity, unanswered conversations, and review queues will appear as the assistant workflow is connected.",
    icon: MessagesSquare,
  },
  {
    title: "Review signals",
    description:
      "Query logs, answer quality feedback, and follow-up metrics will be added to support continuous improvement.",
    icon: SearchCheck,
  },
];

export function DashboardView() {
  return (
    <div className="grid gap-4">
      <PageHeader
        eyebrow="Admissions workspace"
        title="Dashboard"
        description="Monitor admissions knowledge content, assistant activity, unanswered questions, and answer quality from one workspace."
      />

      <EmptyState
        className="bg-white"
        description="Knowledge content, assistant activity, query logs, feedback, and performance metrics will appear here as the system modules are connected."
        icon={CircleHelp}
        title="Admissions workspace ready"
      />

      <section className="grid gap-4 md:grid-cols-3">
        {placeholderSections.map((section) => {
          const Icon = section.icon;

          return (
            <Card
              className="border border-border/70 bg-white shadow-none"
              key={section.title}
            >
              <CardHeader className="gap-4">
                <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <div className="space-y-2">
                  <CardTitle>{section.title}</CardTitle>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {section.description}
                  </p>
                </div>
              </CardHeader>
            </Card>
          );
        })}
      </section>

      <Card className="border border-border/70 bg-white shadow-none">
        <CardHeader className="gap-4">
          <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <ThumbsUp className="size-5" />
          </div>
          <div className="space-y-2">
            <CardTitle>What this workspace will support</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              This dashboard will become the central place for admissions knowledge
              oversight, content refinement, unanswered-question follow-up,
              and answer quality review.
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="grid gap-3 text-sm leading-6 text-muted-foreground sm:grid-cols-2">
            <li className="rounded-lg border border-border/70 bg-muted/30 px-4 py-3">
              Knowledge content visibility and publishing coverage
            </li>
            <li className="rounded-lg border border-border/70 bg-muted/30 px-4 py-3">
              Chatbot activity and unanswered-question review
            </li>
            <li className="rounded-lg border border-border/70 bg-muted/30 px-4 py-3">
              Feedback and answer quality signals
            </li>
            <li className="rounded-lg border border-border/70 bg-muted/30 px-4 py-3">
              Performance metrics once backend data is connected
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
