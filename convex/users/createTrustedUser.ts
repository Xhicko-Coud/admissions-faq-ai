"use node";

import type { GenericActionCtx } from "convex/server";
import { v } from "convex/values";

import { components, internal } from "../_generated/api";
import type { DataModel } from "../_generated/dataModel";
import { action } from "../_generated/server";
import { authComponent, createAuth } from "../auth";
import { USER_PROFILE_ROLES } from "../auth/authorization";

type CreateTrustedUserActionCtx = GenericActionCtx<DataModel>;
type CreateTrustedUserResult =
  | {
      status: "created";
      user: {
        email: string;
        id: string;
        name: string;
        role: "admin" | "editor" | "reviewer";
        status: "active";
      };
    }
  | {
      status:
        | "duplicate_email"
        | "failed"
        | "forbidden"
        | "invalid_input"
        | "root_required"
        | "unauthenticated";
    };
type CreateTrustedUserProfileResult =
  | {
      profileId: string;
      status: "created";
      user: {
        email: string;
        id: string;
        name: string;
        role: "admin" | "editor" | "reviewer";
        status: "active";
      };
    }
  | {
      status: "duplicate_email";
    };

export const createTrustedUser = action({
  args: {
    email: v.string(),
    name: v.string(),
    password: v.string(),
    role: v.union(
      v.literal(USER_PROFILE_ROLES.admin),
      v.literal(USER_PROFILE_ROLES.editor),
      v.literal(USER_PROFILE_ROLES.reviewer),
    ),
  },
  handler: async (ctx, args): Promise<CreateTrustedUserResult> => {
    const normalizedName = args.name.trim();
    const normalizedEmail = args.email.trim().toLowerCase();
    const normalizedPassword = args.password.trim();

    if (
      !normalizedName ||
      !isValidEmail(normalizedEmail) ||
      normalizedPassword.length < 8
    ) {
      return { status: "invalid_input" } as const;
    }

    const actor = await getCurrentAuthUser(ctx);

    if (!actor) {
      return { status: "unauthenticated" } as const;
    }

    const access = await ctx.runQuery(
      internal.users.createTrustedUserInternal.getTrustedUserCreationAccess,
      { userId: actor._id },
    );

    if (access.status !== "allowed") {
      return { status: "forbidden" } as const;
    }

    if (args.role === USER_PROFILE_ROLES.admin && !access.isRootAdmin) {
      return { status: "root_required" } as const;
    }

    const existingProfile = await ctx.runQuery(
      internal.users.createTrustedUserInternal.getUserProfileByEmail,
      { email: normalizedEmail },
    );

    if (existingProfile) {
      return { status: "duplicate_email" } as const;
    }

    const existingAuthUser = await findAuthUserByEmail(ctx, normalizedEmail);

    if (existingAuthUser) {
      return { status: "duplicate_email" } as const;
    }

    try {
      const userId = await createAuthUser(
        ctx,
        normalizedEmail,
        normalizedName,
        normalizedPassword,
      );

      const profileResult: CreateTrustedUserProfileResult = await ctx.runMutation(
        internal.users.createTrustedUserInternal.createTrustedUserProfile,
        {
          email: normalizedEmail,
          name: normalizedName,
          role: args.role,
          userId,
        },
      );

      if (profileResult.status !== "created") {
        return { status: "duplicate_email" } as const;
      }

      return {
        status: "created",
        user: profileResult.user,
      } as const;
    } catch (error) {
      if (isDuplicateAuthError(error)) {
        return { status: "duplicate_email" } as const;
      }

      return { status: "failed" } as const;
    }
  },
});

async function getCurrentAuthUser(ctx: CreateTrustedUserActionCtx) {
  try {
    return await authComponent.getAuthUser(ctx);
  } catch {
    return null;
  }
}

async function findAuthUserByEmail(
  ctx: CreateTrustedUserActionCtx,
  email: string,
) {
  return await ctx.runQuery(components.betterAuth.adapter.findOne, {
    model: "user",
    where: [
      {
        field: "email",
        operator: "eq",
        value: email,
      },
    ],
  });
}

async function createAuthUser(
  ctx: CreateTrustedUserActionCtx,
  email: string,
  name: string,
  password: string,
) {
  const auth = createAuth(ctx);
  const result = await auth.api.signUpEmail({
    body: {
      email,
      name,
      password,
    },
  });

  return result.user.id;
}

function isDuplicateAuthError(error: unknown) {
  return (
    error instanceof Error &&
    error.message.toLowerCase().includes("already")
  );
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
