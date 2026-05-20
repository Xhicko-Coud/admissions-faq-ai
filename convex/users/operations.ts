import { v } from "convex/values";

import type { Doc, Id } from "../_generated/dataModel";
import { mutation, type MutationCtx } from "../_generated/server";
import { authComponent } from "../auth";
import {
  USER_PROFILE_ROLES,
  USER_PROFILE_STATUSES,
} from "../auth/authorization";

type UserRole = "admin" | "editor" | "reviewer";
type UserStatus = "active" | "inactive";
type SafeUser = {
  createdBySystem: boolean;
  email: string;
  id: Id<"userProfiles">;
  isRootAdmin: boolean;
  name: string | null;
  role: UserRole;
  status: UserStatus;
};
type UpdateUserRoleResult =
  | {
      status: "updated";
      user: SafeUser;
    }
  | {
      status: "unchanged";
      user: SafeUser;
    }
  | {
      status:
        | "failed"
        | "forbidden"
        | "invalid_input"
        | "last_admin_blocked"
        | "not_found"
        | "root_admin_blocked"
        | "root_required"
        | "unauthenticated";
    };
type UpdateUserStatusResult =
  | {
      status: "updated";
      user: SafeUser;
    }
  | {
      status: "unchanged";
      user: SafeUser;
    }
  | {
      status:
        | "failed"
        | "forbidden"
        | "invalid_input"
        | "last_admin_blocked"
        | "not_found"
        | "root_admin_blocked"
        | "root_required"
        | "unauthenticated";
    };

type TargetProfile = Doc<"userProfiles">;

export const updateUserRole = mutation({
  args: {
    role: v.union(
      v.literal(USER_PROFILE_ROLES.admin),
      v.literal(USER_PROFILE_ROLES.editor),
      v.literal(USER_PROFILE_ROLES.reviewer),
    ),
    targetProfileId: v.id("userProfiles"),
  },
  handler: async (ctx, args): Promise<UpdateUserRoleResult> => {
    const actor = await getCurrentAuthUser(ctx);

    if (!actor) {
      return { status: "unauthenticated" };
    }

    const actorProfile = await ctx.db
      .query("userProfiles")
      .withIndex("by_userId", (lookup) => lookup.eq("userId", actor._id))
      .unique();

    if (
      !actorProfile ||
      actorProfile.status !== USER_PROFILE_STATUSES.active ||
      actorProfile.role !== USER_PROFILE_ROLES.admin
    ) {
      return { status: "forbidden" };
    }

    const targetProfile: TargetProfile | null = await ctx.db.get(
      args.targetProfileId,
    );

    if (!targetProfile) {
      return { status: "not_found" };
    }

    const actorIsRootAdmin = actorProfile.isRootAdmin === true;
    const targetIsRootAdmin = targetProfile.isRootAdmin === true;

    if (targetIsRootAdmin && args.role !== USER_PROFILE_ROLES.admin) {
      return { status: "root_admin_blocked" };
    }

    if (args.role === USER_PROFILE_ROLES.admin && !actorIsRootAdmin) {
      return { status: "root_required" };
    }

    if (targetProfile.role === USER_PROFILE_ROLES.admin && !actorIsRootAdmin) {
      return { status: "root_required" };
    }

    if (
      targetProfile.role === USER_PROFILE_ROLES.admin &&
      args.role !== USER_PROFILE_ROLES.admin
    ) {
      const activeAdminCount = await countActiveAdmins(ctx);

      if (activeAdminCount <= 1) {
        return { status: "last_admin_blocked" };
      }
    }

    if (targetProfile.role === args.role) {
      return {
        status: "unchanged",
        user: toSafeUser(targetProfile),
      };
    }

    try {
      await ctx.db.patch(targetProfile._id, {
        role: args.role,
        updatedAt: Date.now(),
      });

      return {
        status: "updated",
        user: toSafeUser({
          ...targetProfile,
          role: args.role,
        }),
      };
    } catch {
      return { status: "failed" };
    }
  },
});

export const updateUserStatus = mutation({
  args: {
    status: v.union(
      v.literal(USER_PROFILE_STATUSES.active),
      v.literal(USER_PROFILE_STATUSES.inactive),
    ),
    targetProfileId: v.id("userProfiles"),
  },
  handler: async (ctx, args): Promise<UpdateUserStatusResult> => {
    const actor = await getCurrentAuthUser(ctx);

    if (!actor) {
      return { status: "unauthenticated" };
    }

    const actorProfile = await ctx.db
      .query("userProfiles")
      .withIndex("by_userId", (lookup) => lookup.eq("userId", actor._id))
      .unique();

    if (
      !actorProfile ||
      actorProfile.status !== USER_PROFILE_STATUSES.active ||
      actorProfile.role !== USER_PROFILE_ROLES.admin
    ) {
      return { status: "forbidden" };
    }

    const targetProfile: TargetProfile | null = await ctx.db.get(
      args.targetProfileId,
    );

    if (!targetProfile) {
      return { status: "not_found" };
    }

    const actorIsRootAdmin = actorProfile.isRootAdmin === true;
    const targetIsRootAdmin = targetProfile.isRootAdmin === true;

    if (
      targetIsRootAdmin &&
      args.status === USER_PROFILE_STATUSES.inactive
    ) {
      return { status: "root_admin_blocked" };
    }

    if (targetProfile.role === USER_PROFILE_ROLES.admin && !actorIsRootAdmin) {
      return { status: "root_required" };
    }

    if (
      targetProfile.role === USER_PROFILE_ROLES.admin &&
      targetProfile.status === USER_PROFILE_STATUSES.active &&
      args.status === USER_PROFILE_STATUSES.inactive
    ) {
      const activeAdminCount = await countActiveAdmins(ctx);

      if (activeAdminCount <= 1) {
        return { status: "last_admin_blocked" };
      }
    }

    if (targetProfile.status === args.status) {
      return {
        status: "unchanged",
        user: toSafeUser(targetProfile),
      };
    }

    try {
      await ctx.db.patch(targetProfile._id, {
        status: args.status,
        updatedAt: Date.now(),
      });

      return {
        status: "updated",
        user: toSafeUser({
          ...targetProfile,
          status: args.status,
        }),
      };
    } catch {
      return { status: "failed" };
    }
  },
});

async function getCurrentAuthUser(ctx: MutationCtx) {
  try {
    return await authComponent.getAuthUser(ctx);
  } catch {
    return null;
  }
}

async function countActiveAdmins(ctx: MutationCtx) {
  const adminProfiles = await ctx.db
    .query("userProfiles")
    .withIndex("by_role", (lookup) => lookup.eq("role", USER_PROFILE_ROLES.admin))
    .collect();

  return adminProfiles.filter(
    (profile) => profile.status === USER_PROFILE_STATUSES.active,
  ).length;
}

function toSafeUser(profile: TargetProfile): SafeUser {
  return {
    createdBySystem: profile.createdBySystem === true,
    email: profile.email,
    id: profile._id,
    isRootAdmin: profile.isRootAdmin === true,
    name: profile.name ?? null,
    role: profile.role,
    status: profile.status,
  };
}
