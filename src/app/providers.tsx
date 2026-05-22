"use client";

import { ConvexBetterAuthProvider } from "@convex-dev/better-auth/react";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { useState } from "react";

import { AuthBridgeProvider } from "@/components/providers/AuthBridgeProvider";
import { NotificationProvider } from "@/components/providers/NotificationProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { authClient } from "@/lib/auth-client";

export function AppProviders({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [convex] = useState(createConvexClient);

  return (
    <AuthBridgeProvider>
      <NotificationProvider>
        <ConvexProvider client={convex}>
          <TooltipProvider>{children}</TooltipProvider>
        </ConvexProvider>
      </NotificationProvider>
    </AuthBridgeProvider>
  );
}

export function ProtectedProviders({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [convex] = useState(createConvexClient);

  return (
    <ConvexBetterAuthProvider authClient={authClient} client={convex}>
      {children}
    </ConvexBetterAuthProvider>
  );
}

function createConvexClient() {
  const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

  if (!convexUrl) {
    throw new Error(
      "NEXT_PUBLIC_CONVEX_URL is required to initialize the Convex provider.",
    );
  }

  return new ConvexReactClient(convexUrl);
}
