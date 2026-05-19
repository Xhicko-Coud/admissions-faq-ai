import { createClient } from "@convex-dev/better-auth";
import { convex } from "@convex-dev/better-auth/plugins";
import type { GenericCtx } from "@convex-dev/better-auth/utils";
import type { BetterAuthOptions } from "better-auth/minimal";
import { betterAuth } from "better-auth/minimal";

import { components } from "@convex/_generated/api";
import type { DataModel } from "@convex/_generated/dataModel";
import { query } from "@convex/_generated/server";
import authConfig from "@convex/auth.config";
import {
  getCurrentAuthUser,
  getUserProfileByUserId,
} from "@convex/auth/authorization";

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
    const user = await getCurrentAuthUser(ctx);

    if (!user) {
      return { status: "unauthenticated" } as const;
    }

    const profile = await getUserProfileByUserId(ctx, user._id);

    if (!profile) {
      return { status: "missing_profile" } as const;
    }

    if (profile.status === "inactive") {
      return { status: "inactive" } as const;
    }

    return {
      status: "authenticated",
      profile: {
        email: profile.email,
        name: profile.name ?? null,
        role: profile.role,
        status: profile.status,
      },
    } as const;
  },
});
