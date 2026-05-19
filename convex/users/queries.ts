import { query } from "../_generated/server";
import {
  getCurrentAuthUser,
  requireActiveAdmin,
  requireActiveProfile,
  USER_PROFILE_ROLES,
  USER_PROFILE_STATUSES,
} from "../auth/authorization";

const USER_LIST_LIMIT = 100;

function toSafeUserProfile(profile: {
  _id: string;
  createdAt: number;
  email: string;
  name?: string;
  role: "admin" | "editor" | "reviewer";
  status: "active" | "inactive";
  updatedAt: number;
}) {
  return {
    createdAt: profile.createdAt,
    email: profile.email,
    id: profile._id,
    name: profile.name ?? null,
    role: profile.role,
    status: profile.status,
    updatedAt: profile.updatedAt,
  };
}

export const getCurrentProfile = query({
  args: {},
  handler: async (ctx) => {
    const { profile } = await requireActiveProfile(ctx);

    return {
      email: profile.email,
      id: profile._id,
      name: profile.name ?? null,
      role: profile.role,
      status: profile.status,
    };
  },
});

export const listUsers = query({
  args: {},
  handler: async (ctx) => {
    const user = await getCurrentAuthUser(ctx);

    if (!user) {
      return { status: "unauthenticated" } as const;
    }

    const actorProfile = await ctx.db
      .query("userProfiles")
      .withIndex("by_userId", (lookup) => lookup.eq("userId", user._id))
      .unique();

    if (
      !actorProfile ||
      actorProfile.status !== USER_PROFILE_STATUSES.active ||
      actorProfile.role !== USER_PROFILE_ROLES.admin
    ) {
      return { status: "forbidden" } as const;
    }

    const profiles = await ctx.db.query("userProfiles").take(USER_LIST_LIMIT);

    return {
      status: "success",
      users: profiles
        .slice()
        .sort((first, second) => second.createdAt - first.createdAt)
        .map(toSafeUserProfile),
    } as const;
  },
});
