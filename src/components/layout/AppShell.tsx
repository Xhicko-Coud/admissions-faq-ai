import type { CSSProperties } from "react";

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { AppHeader, type AppHeaderProfile } from "@/components/layout/AppHeader";
import { AppSidebar } from "@/components/layout/AppSidebar";

const placeholderProfile = {
  email: "admin@example.edu",
  name: "Admissions Admin",
  role: "admin",
  status: "active",
} satisfies AppHeaderProfile;

export function AppShell({
  children,
  profile = placeholderProfile,
}: Readonly<{
  children: React.ReactNode;
  profile?: AppHeaderProfile;
}>) {
  return (
    <SidebarProvider
      className="bg-zinc-50 text-foreground"
      defaultOpen
      style={
        {
          "--sidebar-width": "20rem",
        } as CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset className="min-h-screen bg-zinc-50">
        <AppHeader profile={profile} />
        <div className="flex-1 px-4 py-6 sm:px-6 lg:px-8">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
