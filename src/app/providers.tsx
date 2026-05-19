"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { useState } from "react";

import { NotificationProvider } from "@/components/providers/NotificationProvider";
import { TooltipProvider } from "@/components/ui/tooltip";

export function AppProviders({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [convex] = useState(() => {
    const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

    if (!convexUrl) {
      throw new Error(
        "NEXT_PUBLIC_CONVEX_URL is required to initialize the Convex provider.",
      );
    }

    return new ConvexReactClient(convexUrl);
  });

  return (
    <ConvexProvider client={convex}>
      <NotificationProvider>
        <TooltipProvider>{children}</TooltipProvider>
      </NotificationProvider>
    </ConvexProvider>
  );
}
