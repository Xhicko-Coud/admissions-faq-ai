"use node";

import { timingSafeEqual } from "node:crypto";

import type { GenericActionCtx } from "convex/server";
import { v } from "convex/values";

import { components, internal } from "@convex/_generated/api";
import type { DataModel } from "@convex/_generated/dataModel";
import { action } from "@convex/_generated/server";
import { createAuth } from "@convex/auth";

type BootstrapActionCtx = GenericActionCtx<DataModel>;

const REQUIRED_SEED_ENV_NAMES = [
  "ADMIN_EMAIL",
  "ADMIN_PASSWORD",
  "ADMIN_NAME",
  "ADMIN_SEED_KEY",
] as const;

type RequiredSeedEnvName = (typeof REQUIRED_SEED_ENV_NAMES)[number];

type SeedConfiguration =
  | {
      status: "ready";
      values: Record<RequiredSeedEnvName, string>;
    }
  | {
      missing: RequiredSeedEnvName[];
      status: "missing_configuration";
    };

function getSeedConfiguration(): SeedConfiguration {
  const missing: RequiredSeedEnvName[] = [];
  const values = {} as Record<RequiredSeedEnvName, string>;

  for (const name of REQUIRED_SEED_ENV_NAMES) {
    const value = process.env[name]?.trim();

    if (!value) {
      missing.push(name);
      continue;
    }

    values[name] = value;
  }

  if (missing.length > 0) {
    return { missing, status: "missing_configuration" };
  }

  return { status: "ready", values };
}

function isValidSeedKey(inputSeedKey: string, expectedSeedKey: string) {
  const inputBuffer = Buffer.from(inputSeedKey, "utf8");
  const expectedBuffer = Buffer.from(expectedSeedKey, "utf8");

  if (inputBuffer.length !== expectedBuffer.length) {
    return false;
  }

  return timingSafeEqual(inputBuffer, expectedBuffer);
}

async function findAuthUserByEmail(ctx: BootstrapActionCtx, email: string) {
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

async function findCredentialAccountByUserId(
  ctx: BootstrapActionCtx,
  userId: string,
) {
  return await ctx.runQuery(components.betterAuth.adapter.findOne, {
    model: "account",
    where: [
      {
        field: "providerId",
        operator: "eq",
        value: "credential",
      },
      {
        connector: "AND",
        field: "userId",
        operator: "eq",
        value: userId,
      },
    ],
  });
}

export const bootstrapFirstAdmin = action({
  args: {
    seedKey: v.string(),
  },
  handler: async (ctx, args) => {
    const normalizedSeedKey = args.seedKey.trim();

    if (!normalizedSeedKey) {
      return { status: "missing_seed_key" } as const;
    }

    const configuration = getSeedConfiguration();

    if (configuration.status === "missing_configuration") {
      return {
        missing: configuration.missing,
        status: "missing_configuration",
      } as const;
    }

    const expectedSeedKey = configuration.values.ADMIN_SEED_KEY;

    if (!isValidSeedKey(normalizedSeedKey, expectedSeedKey)) {
      return { status: "invalid_seed_key" } as const;
    }

    const name = configuration.values.ADMIN_NAME;
    const email = configuration.values.ADMIN_EMAIL.toLowerCase();
    const password = configuration.values.ADMIN_PASSWORD;
    const existingProfile = await ctx.runQuery(
      internal.auth.bootstrapFirstAdminInternal.getAdminProfileByEmail,
      { email },
    );
    const hasAnyAdmin = await ctx.runQuery(
      internal.auth.bootstrapFirstAdminInternal.hasAdminProfile,
    );
    const existingAuthUser = await findAuthUserByEmail(ctx, email);
    const credentialAccount = existingAuthUser
      ? await findCredentialAccountByUserId(ctx, existingAuthUser._id)
      : null;

    if (hasAnyAdmin && !existingProfile) {
      return { status: "already_seeded" } as const;
    }

    if (existingAuthUser && existingProfile) {
      if (!credentialAccount?.password) {
        return { status: "auth_user_exists" } as const;
      }

      if (existingProfile.userId === existingAuthUser._id) {
        return { status: "already_seeded" } as const;
      }

      await ctx.runMutation(
        internal.auth.bootstrapFirstAdminInternal.updateAdminProfileUserId,
        {
          profileId: existingProfile._id,
          userId: existingAuthUser._id,
        },
      );

      return {
        authUserCreated: false,
        profileCreated: false,
        status: "profile_repaired_existing_auth_user",
      } as const;
    }

    if (existingAuthUser && !existingProfile) {
      const profileResult = await ctx.runMutation(
        internal.auth.bootstrapFirstAdminInternal.createAdminProfile,
        {
          email,
          name,
          userId: existingAuthUser._id,
        },
      );

      if (profileResult.status === "profile_exists") {
        return { status: "profile_already_exists" } as const;
      }

      return {
        authUserCreated: false,
        profileCreated: true,
        status: "profile_created",
      } as const;
    }

    try {
      const userId = await createAuthUser(ctx, email, name, password);

      if (existingProfile) {
        await ctx.runMutation(
          internal.auth.bootstrapFirstAdminInternal.updateAdminProfileUserId,
          {
            profileId: existingProfile._id,
            userId,
          },
        );

        return {
          authUserCreated: true,
          profileCreated: false,
          status: "admin_created",
        } as const;
      }

      const profileResult = await ctx.runMutation(
        internal.auth.bootstrapFirstAdminInternal.createAdminProfile,
        {
          email,
          name,
          userId,
        },
      );

      if (profileResult.status === "profile_exists") {
        return { status: "profile_already_exists" } as const;
      }

      return {
        authUserCreated: true,
        profileCreated: true,
        status: "admin_created",
      } as const;
    } catch {
      return { status: "failed" } as const;
    }
  },
});

async function createAuthUser(
  ctx: BootstrapActionCtx,
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
