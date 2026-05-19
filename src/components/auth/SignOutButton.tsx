"use client";

import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import * as React from "react";
import { flushSync } from "react-dom";

import { useAuthBridge } from "@/components/providers/AuthBridgeProvider";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useNotifications } from "@/hooks/use-notifications";
import { authClient } from "@/lib/auth-client";

export function SignOutButton() {
  const router = useRouter();
  const { hideAuthBridge, showAuthBridge } = useAuthBridge();
  const { showNotification, showNotificationAfterNavigation } =
    useNotifications();
  const [isPending, setIsPending] = React.useState(false);

  async function handleSignOut() {
    if (isPending) {
      return;
    }

    setIsPending(true);
    flushSync(() => {
      showAuthBridge({
        description: "Ending your admin session safely.",
        title: "Signing you out",
      });
    });

    try {
      const { error } = await authClient.signOut();

      if (error) {
        hideAuthBridge();
        showNotification({
          description: "Unable to sign out right now. Please try again.",
          title: "Sign out failed",
          variant: "error",
        });
        setIsPending(false);
        return;
      }

      showNotificationAfterNavigation({
        description: "You have been signed out safely.",
        title: "Signed out",
        variant: "success",
      });
      router.replace("/login");
      router.refresh();
    } catch {
      hideAuthBridge();
      showNotification({
        description: "Unable to sign out right now. Please try again.",
        title: "Sign out failed",
        variant: "error",
      });
      setIsPending(false);
    }
  }

  return (
    <DropdownMenuItem
      className="cursor-pointer text-destructive focus:bg-destructive/10 focus:text-destructive"
      disabled={isPending}
      onSelect={(event) => {
        event.preventDefault();
        void handleSignOut();
      }}
      variant="destructive"
    >
      <LogOutIcon className="size-4" />
      {isPending ? "Signing out..." : "Sign out"}
    </DropdownMenuItem>
  );
}
