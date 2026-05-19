import { LockKeyhole, Mail, GraduationCap } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-50 px-6 py-16">
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
                Internal access for authorized admissions staff.
              </p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-1 px-8 py-8">
          <form className="grid gap-5">
            <div className="grid gap-2">
              <label className="text-sm font-medium" htmlFor="email">
                Email
              </label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-primary/55" />
                <Input
                  autoComplete="email"
                  id="email"
                  type="email"
                  placeholder="admin@example.edu"
                  className="h-11 rounded-md border-primary/15 bg-white pl-10 focus-visible:border-primary focus-visible:ring-primary/25"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-primary/55" />
                <Input
                  autoComplete="current-password"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="h-11 rounded-md border-primary/15 bg-white pl-10 focus-visible:border-primary focus-visible:ring-primary/25"
                />
              </div>
            </div>

            <Button
              className="h-11 cursor-pointer rounded-md bg-primary text-primary-foreground shadow-sm hover:bg-primary/90"
              type="button"
            >
              Sign in
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
