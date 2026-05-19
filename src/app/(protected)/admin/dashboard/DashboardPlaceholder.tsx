import { AppShell } from "@/components/layout/AppShell";

export function DashboardPlaceholder() {
  return (
    <AppShell>
      <section className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
          Admin dashboard
        </p>
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Admissions FAQ support workspace
          </h1>
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
            The base admin shell is ready for controlled admissions FAQ support
            work.
          </p>
        </div>
      </section>
    </AppShell>
  );
}
