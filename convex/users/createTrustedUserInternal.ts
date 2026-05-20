import { v } from "convex/values";

import { internalMutation, internalQuery } from "../_generated/server";
import {
  USER_PROFILE_ROLES,
  USER_PROFILE_STATUSES,
} from "../auth/authorization";

export const getTrustedUserCreationAccess = internalQuery({
  args: {
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    const profile = await ctx.db
      .query("userProfiles")
      .withIndex("by_userId", (lookup) => lookup.eq("userId", args.userId))
      .unique();

    if (!profile) {
      return { status: "forbidden" } as const;
    }

    if (profile.status !== USER_PROFILE_STATUSES.active) {
      return { status: "forbidden" } as const;
    }

    if (profile.role !== USER_PROFILE_ROLES.admin) {
      return { status: "forbidden" } as const;
    }

    return {
      isRootAdmin: profile.isRootAdmin === true,
      status: "allowed",
    } as const;
  },
});

export const getUserProfileByEmail = internalQuery({
  args: {
    email: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("userProfiles")
      .withIndex("by_email", (lookup) => lookup.eq("email", args.email))
      .unique();
  },
});

export const createTrustedUserProfile = internalMutation({
  args: {
    email: v.string(),
    name: v.string(),
    role: v.union(
      v.literal(USER_PROFILE_ROLES.admin),
      v.literal(USER_PROFILE_ROLES.editor),
      v.literal(USER_PROFILE_ROLES.reviewer),
    ),
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    const existingUserProfile = await ctx.db
      .query("userProfiles")
      .withIndex("by_userId", (lookup) => lookup.eq("userId", args.userId))
      .unique();

    if (existingUserProfile) {
      return { status: "duplicate_email" } as const;
    }

    const existingEmailProfile = await ctx.db
      .query("userProfiles")
      .withIndex("by_email", (lookup) => lookup.eq("email", args.email))
      .unique();

    if (existingEmailProfile) {
      return { status: "duplicate_email" } as const;
    }

    const now = Date.now();
    const profileId = await ctx.db.insert("userProfiles", {
      createdAt: now,
      createdBySystem: false,
      email: args.email,
      isRootAdmin: false,
      name: args.name,
      role: args.role,
      status: USER_PROFILE_STATUSES.active,
      updatedAt: now,
      userId: args.userId,
    });

    return {
      profileId,
      status: "created",
      user: {
        email: args.email,
        id: profileId,
        name: args.name,
        role: args.role,
        status: USER_PROFILE_STATUSES.active,
      },
    } as const;
  },
});
