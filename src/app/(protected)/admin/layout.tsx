import { redirect } from "next/navigation";
import type { ReactNode } from "react";

import { ProtectedProviders } from "@/app/providers";
import { AppShell } from "@/components/layout/AppShell";
import { fetchAuthQuery } from "@/lib/auth-server";
import { api } from "@convex/_generated/api";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  let sessionStatus;

  try {
    sessionStatus = await fetchAuthQuery(api.auth.getSessionStatus);
  } catch {
    redirect("/login?reason=session-required");
  }

  if (sessionStatus.status === "unauthenticated") {
    redirect("/login?reason=session-required");
  }

  if (
    sessionStatus.status === "missing_profile" ||
    sessionStatus.status === "inactive"
  ) {
    redirect("/login?reason=access-denied");
  }

  return (
    <ProtectedProviders>
      <AppShell profile={sessionStatus.profile}>{children}</AppShell>
    </ProtectedProviders>
  );
}
