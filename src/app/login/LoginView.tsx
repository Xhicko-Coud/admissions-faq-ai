"use client";

import { Eye, EyeOff, GraduationCap, LockKeyhole, Mail } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { flushSync } from "react-dom";

import { useAuthBridge } from "@/components/providers/AuthBridgeProvider";
import { AppAlert } from "@/components/shared/AppAlert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/config/site";
import { useNotifications } from "@/hooks/use-notifications";
import { authClient } from "@/lib/auth-client";

export function LoginView() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { hideAuthBridge, showAuthBridge } = useAuthBridge();
  const { showNotificationAfterNavigation } = useNotifications();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fieldErrors, setFieldErrors] = useState<{
    email?: string;
    password?: string;
  }>({});
  const [feedback, setFeedback] = useState<{
    description: string;
    title: string;
    variant: "error" | "info";
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const safeFeedback = getSafeReasonFeedback(searchParams.get("reason"));

    if (!safeFeedback) {
      return;
    }

    setFeedback(safeFeedback);
  }, [searchParams]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextFieldErrors = getLoginFieldErrors(email, password);

    if (nextFieldErrors.email || nextFieldErrors.password) {
      setFieldErrors(nextFieldErrors);
      setFeedback(null);
      return;
    }

    setIsSubmitting(true);
    setFieldErrors({});
    setFeedback(null);

    try {
      const { error } = await authClient.signIn.email({
        email: email.trim(),
        password,
      });

      if (error) {
        setFeedback({
          description:
            "Unable to sign in with those details. Please check your credentials and try again.",
          title: "Sign in failed",
          variant: "error",
        });
        hideAuthBridge();
        return;
      }

      showNotificationAfterNavigation({
        description: "Your admin session is active.",
        title: "Signed in",
        variant: "success",
      });
      flushSync(() => {
        showAuthBridge({
          description: "Preparing your admin workspace.",
          title: "Signing you in",
        });
      });
      router.replace(siteConfig.dashboardRoute);
      router.refresh();
    } catch {
      hideAuthBridge();
      setFeedback({
        description:
          "The authentication service could not be reached. Please try again.",
        title: "Connection failed",
        variant: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.14),_transparent_34%),linear-gradient(180deg,_rgba(250,250,250,1)_0%,_rgba(246,241,232,1)_100%)] px-6 py-16">
      {feedback ? (
        <AppAlert
          description={feedback.description}
          placement="top-center"
          title={feedback.title}
          variant={feedback.variant}
        />
      ) : null}

      <Card className="relative z-10 w-full max-w-md gap-0 border-primary/10 bg-white/95 py-0 shadow-xl shadow-primary/10 ring-1 ring-primary/5 backdrop-blur-sm">
        <CardHeader className="gap-4 border-b border-primary/10 px-8 py-8">
          <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm shadow-primary/20 ring-8 ring-primary/8">
            <GraduationCap className="size-8" strokeWidth={1.8} />
          </div>
          <div className="space-y-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">
              {siteConfig.name}
            </p>
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                Admin sign in
              </h1>
              <p className="text-sm leading-6 text-muted-foreground">
                Sign in to manage admissions knowledge, assistant activity, and
                review workflows.
              </p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-1 px-8 py-8">
          <form className="grid gap-5" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-primary/55" />
                <Input
                  aria-invalid={Boolean(fieldErrors.email)}
                  autoComplete="email"
                  className="h-11 rounded-md border-primary/15 bg-white pl-10 focus-visible:border-primary focus-visible:ring-primary/25"
                  id="email"
                  onChange={(event) => {
                    setEmail(event.target.value);

                    if (fieldErrors.email) {
                      setFieldErrors((currentErrors) => ({
                        ...currentErrors,
                        email: undefined,
                      }));
                    }
                  }}
                  placeholder="admin@example.edu"
                  type="email"
                  value={email}
                />
              </div>
              {fieldErrors.email ? (
                <p className="text-sm text-destructive">{fieldErrors.email}</p>
              ) : null}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-primary/55" />
                <Input
                  aria-invalid={Boolean(fieldErrors.password)}
                  autoComplete="current-password"
                  className="h-11 rounded-md border-primary/15 bg-white px-10 focus-visible:border-primary focus-visible:ring-primary/25"
                  id="password"
                  onChange={(event) => {
                    setPassword(event.target.value);

                    if (fieldErrors.password) {
                      setFieldErrors((currentErrors) => ({
                        ...currentErrors,
                        password: undefined,
                      }));
                    }
                  }}
                  placeholder="Enter your password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                />
                <button
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 flex size-5 -translate-y-1/2 cursor-pointer items-center justify-center text-primary/60 transition hover:text-primary"
                  onClick={() => setShowPassword((current) => !current)}
                  type="button"
                >
                  {showPassword ? (
                    <EyeOff className="size-4" />
                  ) : (
                    <Eye className="size-4" />
                  )}
                </button>
              </div>
              {fieldErrors.password ? (
                <p className="text-sm text-destructive">
                  {fieldErrors.password}
                </p>
              ) : null}
            </div>

            <Button
              className="h-11 cursor-pointer rounded-md bg-primary text-primary-foreground shadow-sm hover:bg-primary/90"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? "Signing in..." : "Sign in"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}

function getLoginFieldErrors(email: string, password: string) {
  return {
    email: email.trim() ? undefined : "Email is required.",
    password: password.trim() ? undefined : "Password is required.",
  };
}

function getSafeReasonFeedback(reason: string | null) {
  if (reason === "session-required") {
    return {
      description: "Sign in again to continue.",
      title: "Sign in required",
      variant: "info",
    } as const;
  }

  if (reason === "access-denied") {
    return {
      description:
        "Your account cannot access this workspace. Contact an administrator.",
      title: "Access denied",
      variant: "error",
    } as const;
  }

  return null;
}
