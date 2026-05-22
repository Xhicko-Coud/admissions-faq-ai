"use client";

import { Clock } from "lucide-react";

import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DashboardView() {
  return (
    <div className="space-y-6">
      <PageHeader
        badge="Coming soon"
        title="Dashboard"
        description="Admissions support metrics and review summaries will be available here in a later module."
      />

      <Card className="border-dashed border-primary/30 bg-primary/5 shadow-none">
        <CardHeader className="space-y-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
            <Clock className="h-5 w-5" aria-hidden="true" />
          </div>
          <CardTitle className="text-xl text-primary">Coming soon</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
            The dashboard is not active yet. Use the knowledge section to manage
            admissions content while dashboard metrics are prepared.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
