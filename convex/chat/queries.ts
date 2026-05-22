import { v } from "convex/values";

import { internalQuery, query } from "../_generated/server";
import {
  CHAT_MESSAGE_LIST_LIMIT,
  RECENT_CHAT_LIST_LIMIT,
  toChatMessageSummary,
  toChatSummary,
} from "./helpers";
import {
  getCurrentAuthUser,
  USER_PROFILE_ROLES,
  USER_PROFILE_STATUSES,
} from "../auth/authorization";

export const getChat = query({
  args: {
    chatId: v.id("chats"),
  },
  handler: async (ctx, args) => {
    const chat = await ctx.db.get(args.chatId);

    if (!chat) {
      return { status: "not_found" } as const;
    }

    return {
      chat: toChatSummary(chat),
      status: "success",
    } as const;
  },
});

export const listChatMessages = query({
  args: {
    chatId: v.id("chats"),
  },
  handler: async (ctx, args) => {
    const chat = await ctx.db.get(args.chatId);

    if (!chat) {
      return { status: "not_found" } as const;
    }

    const messages = await ctx.db
      .query("chatMessages")
      .withIndex("by_chatId_createdAt", (lookup) => lookup.eq("chatId", args.chatId))
      .take(CHAT_MESSAGE_LIST_LIMIT);

    return {
      messages: messages.map(toChatMessageSummary),
      status: "success",
    } as const;
  },
});

export const getRecentChatMessagesForContext = internalQuery({
  args: {
    chatId: v.id("chats"),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const chat = await ctx.db.get(args.chatId);

    if (!chat) {
      return { status: "not_found" } as const;
    }

    const limit = clampRecentMessageContextLimit(args.limit);
    const messages = await ctx.db
      .query("chatMessages")
      .withIndex("by_chatId_createdAt", (lookup) => lookup.eq("chatId", args.chatId))
      .order("desc")
      .take(limit);

    return {
      messages: messages.reverse().map((message) => ({
        content: message.content,
        createdAt: message.createdAt,
        role: message.role,
      })),
      status: "success",
    } as const;
  },
});

export const listRecentChats = query({
  args: {},
  handler: async (ctx) => {
    const user = await getCurrentAuthUser(ctx);

    if (!user) {
      return { status: "unauthenticated" } as const;
    }

    const profile = await ctx.db
      .query("userProfiles")
      .withIndex("by_userId", (lookup) => lookup.eq("userId", user._id))
      .unique();

    if (
      !profile ||
      profile.status !== USER_PROFILE_STATUSES.active ||
      !canReadRecentChats(profile.role)
    ) {
      return { status: "forbidden" } as const;
    }

    const chats = await ctx.db
      .query("chats")
      .withIndex("by_updatedAt")
      .order("desc")
      .take(RECENT_CHAT_LIST_LIMIT);

    return {
      chats: chats.map(toChatSummary),
      status: "success",
    } as const;
  },
});

function canReadRecentChats(role: "admin" | "editor" | "reviewer") {
  return (
    role === USER_PROFILE_ROLES.admin ||
    role === USER_PROFILE_ROLES.reviewer
  );
}

function clampRecentMessageContextLimit(limit: number | undefined) {
  if (!limit || !Number.isFinite(limit)) {
    return 6;
  }

  return Math.min(8, Math.max(1, Math.floor(limit)));
}
