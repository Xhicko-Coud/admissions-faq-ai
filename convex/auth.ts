import { createClient } from "@convex-dev/better-auth";
import { convex } from "@convex-dev/better-auth/plugins";
import type { GenericCtx } from "@convex-dev/better-auth/utils";
import type { BetterAuthOptions } from "better-auth/minimal";
import { betterAuth } from "better-auth/minimal";

import { components } from "./_generated/api";
import type { DataModel } from "./_generated/dataModel";
import { query } from "./_generated/server";
import authConfig from "./auth.config";

export const authComponent = createClient<DataModel>(components.betterAuth);

function getAuthBaseUrl() {
  const value = process.env.BETTER_AUTH_URL;

  if (!value) {
    return value;
  }

  try {
    const url = new URL(value);
    return url.origin;
  } catch {
    return value;
  }
}

export function createAuthOptions(ctx: GenericCtx<DataModel>) {
  return {
    appName: "Admissions FAQ AI",
    baseURL: getAuthBaseUrl(),
    secret: process.env.BETTER_AUTH_SECRET,
    database: authComponent.adapter(ctx),
    emailVerification: {
      sendOnSignIn: false,
      sendOnSignUp: false,
    },
    emailAndPassword: {
      enabled: true,
      requireEmailVerification: false,
    },
    plugins: [convex({ authConfig })],
  } satisfies BetterAuthOptions;
}

export function createAuth(ctx: GenericCtx<DataModel>) {
  return betterAuth(createAuthOptions(ctx));
}

export const { getAuthUser } = authComponent.clientApi();

export const getSessionStatus = query({
  args: {},
  handler: async (ctx) => {
    try {
      const user = await authComponent.getAuthUser(ctx);

      if (!user) {
        return { status: "unauthenticated" } as const;
      }

      return { status: "authenticated" } as const;
    } catch {
      return { status: "unauthenticated" } as const;
    }
  },
});
