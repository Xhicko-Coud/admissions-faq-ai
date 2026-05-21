import { v } from "convex/values";

import type { Doc, Id } from "../_generated/dataModel";
import type { MutationCtx } from "../_generated/server";
import { KNOWLEDGE_ENTRY_STATUSES, type KnowledgeEntryType } from "../knowledge/types";
import {
  CHAT_MESSAGE_ROLES,
  CHAT_MESSAGE_STATUSES,
  CHAT_SOURCES,
  CHAT_STATUSES,
  chatResponseStatusValidator,
  chatRetrievalIntentValidator,
  chatRetrievalStatusValidator,
  chatSourceMetadataValidator,
  chatSourceValidator,
  type ChatMessageStatus,
  type ChatResponseStatus,
  type ChatRetrievalIntent,
  type ChatRetrievalStatus,
  type ChatSource,
  type ChatSourceMetadata,
} from "./types";

export const MAX_CHAT_TITLE_LENGTH = 120;
export const MAX_USER_MESSAGE_LENGTH = 2000;
export const MAX_ASSISTANT_MESSAGE_LENGTH = 6000;
export const MAX_CHAT_SOURCE_COUNT = 5;
export const CHAT_MESSAGE_LIST_LIMIT = 100;
export const RECENT_CHAT_LIST_LIMIT = 50;

export const createChatPayloadValidator = {
  source: v.optional(chatSourceValidator),
  title: v.optional(v.string()),
} as const;

export const appendUserChatMessagePayloadValidator = {
  chatId: v.id("chats"),
  content: v.string(),
} as const;

export const appendAssistantChatMessagePayloadValidator = {
  chatId: v.id("chats"),
  content: v.string(),
  responseStatus: chatResponseStatusValidator,
  retrievalIntent: v.optional(chatRetrievalIntentValidator),
  retrievalStatus: v.optional(chatRetrievalStatusValidator),
  sources: v.optional(v.array(chatSourceMetadataValidator)),
} as const;

export const saveChatExchangePayloadValidator = {
  assistantContent: v.string(),
  chatId: v.optional(v.id("chats")),
  retrievalIntent: v.optional(chatRetrievalIntentValidator),
  retrievalStatus: v.optional(chatRetrievalStatusValidator),
  responseStatus: chatResponseStatusValidator,
  source: v.optional(chatSourceValidator),
  sources: v.optional(v.array(chatSourceMetadataValidator)),
  title: v.optional(v.string()),
  userContent: v.string(),
} as const;

type ChatRecord = Doc<"chats">;
type ChatMessageRecord = Doc<"chatMessages">;

type MessageContentValidationResult =
  | {
      content: string;
      isValid: true;
      status: "success";
    }
  | {
      issues: string[];
      isValid: false;
      status: "invalid_input";
    };

type ChatTitleValidationResult =
  | {
      title?: string;
      isValid: true;
      status: "success";
    }
  | {
      issues: string[];
      isValid: false;
      status: "invalid_input";
    };

export type SafeChatSummary = {
  assistantMessageCount: number;
  createdAt: number;
  id: Id<"chats">;
  lastMessageAt: number | null;
  lastStatus: ChatResponseStatus | null;
  messageCount: number;
  source: ChatSource;
  status: ChatRecord["status"];
  title: string | null;
  updatedAt: number;
  userMessageCount: number;
};

export type SafeChatMessageSummary = {
  chatId: Id<"chats">;
  content: string;
  createdAt: number;
  id: Id<"chatMessages">;
  model: string | null;
  responseStatus: ChatResponseStatus | null;
  retrievalIntent: ChatRetrievalIntent | null;
  retrievalStatus: ChatRetrievalStatus | null;
  role: ChatMessageRecord["role"];
  sources: ChatSourceMetadata[];
  status: ChatMessageStatus;
};

export function validateChatTitle(
  title: string | undefined,
): ChatTitleValidationResult {
  const normalizedTitle = normalizeOptionalText(title);
  const issues: string[] = [];

  if (normalizedTitle && normalizedTitle.length > MAX_CHAT_TITLE_LENGTH) {
    issues.push(`Title must be ${MAX_CHAT_TITLE_LENGTH} characters or fewer.`);
  }

  if (issues.length > 0) {
    return {
      isValid: false,
      issues,
      status: "invalid_input",
    };
  }

  return {
    ...(normalizedTitle ? { title: normalizedTitle } : {}),
    isValid: true,
    status: "success",
  };
}

export function validateMessageContent(args: {
  content: string;
  maxLength: number;
  label: string;
}): MessageContentValidationResult {
  const content = normalizeRequiredText(args.content);
  const issues: string[] = [];

  if (!content) {
    issues.push(`${args.label} is required.`);
  }

  if (content.length > args.maxLength) {
    issues.push(`${args.label} must be ${args.maxLength} characters or fewer.`);
  }

  if (issues.length > 0) {
    return {
      isValid: false,
      issues,
      status: "invalid_input",
    };
  }

  return {
    content,
    isValid: true,
    status: "success",
  };
}

export async function sanitizeChatSources(
  ctx: MutationCtx,
  sources: ChatSourceMetadata[] | undefined,
) {
  const selectedSources = (sources ?? []).slice(0, MAX_CHAT_SOURCE_COUNT);
  const safeSources: ChatSourceMetadata[] = [];

  for (const source of selectedSources) {
    const entry = await ctx.db.get(source.entryId);

    if (!entry || entry.status !== KNOWLEDGE_ENTRY_STATUSES.published) {
      return { status: "invalid_source" } as const;
    }

    safeSources.push({
      entryId: entry._id,
      sourceLabel: normalizeNullableText(entry.sourceLabel),
      sourceUrl: normalizeNullableText(entry.sourceUrl),
      title: entry.title,
      type: entry.type as KnowledgeEntryType,
    });
  }

  return {
    sources: safeSources,
    status: "success",
  } as const;
}

export async function createChatRecord(args: {
  ctx: MutationCtx;
  now: number;
  source: ChatSource | undefined;
  title: string | undefined;
}) {
  const chatId = await args.ctx.db.insert("chats", {
    assistantMessageCount: 0,
    createdAt: args.now,
    messageCount: 0,
    source: getDefaultChatSource(args.source),
    status: DEFAULT_CHAT_STATUS,
    ...(args.title ? { title: args.title } : {}),
    updatedAt: args.now,
    userMessageCount: 0,
  });

  return await args.ctx.db.get(chatId);
}

export async function insertUserChatMessage(args: {
  chatId: Id<"chats">;
  content: string;
  ctx: MutationCtx;
  now: number;
}) {
  const messageId = await args.ctx.db.insert("chatMessages", {
    chatId: args.chatId,
    content: args.content,
    createdAt: args.now,
    role: USER_MESSAGE_ROLE,
    status: USER_MESSAGE_STATUS,
  });

  return await args.ctx.db.get(messageId);
}

export async function insertAssistantChatMessage(args: {
  chatId: Id<"chats">;
  content: string;
  ctx: MutationCtx;
  now: number;
  responseStatus: ChatResponseStatus;
  retrievalIntent: ChatRetrievalIntent | undefined;
  retrievalStatus: ChatRetrievalStatus | undefined;
  sources: ChatSourceMetadata[];
}) {
  const sources = args.sources.length > 0 ? { sources: args.sources } : {};
  const metadata =
    args.sources.length > 0 ? { metadata: { sourceCount: args.sources.length } } : {};
  const messageId = await args.ctx.db.insert("chatMessages", {
    chatId: args.chatId,
    content: args.content,
    createdAt: args.now,
    ...metadata,
    responseStatus: args.responseStatus,
    retrievalIntent: args.retrievalIntent,
    retrievalStatus: args.retrievalStatus,
    role: ASSISTANT_MESSAGE_ROLE,
    ...sources,
    status: args.responseStatus,
  });

  return await args.ctx.db.get(messageId);
}

export function toChatSummary(chat: ChatRecord): SafeChatSummary {
  return {
    assistantMessageCount: chat.assistantMessageCount,
    createdAt: chat.createdAt,
    id: chat._id,
    lastMessageAt: chat.lastMessageAt ?? null,
    lastStatus: chat.lastStatus ?? null,
    messageCount: chat.messageCount,
    source: chat.source,
    status: chat.status,
    title: chat.title ?? null,
    updatedAt: chat.updatedAt,
    userMessageCount: chat.userMessageCount,
  };
}

export function toChatMessageSummary(
  message: ChatMessageRecord,
): SafeChatMessageSummary {
  return {
    chatId: message.chatId,
    content: message.content,
    createdAt: message.createdAt,
    id: message._id,
    model: message.metadata?.model ?? null,
    responseStatus: message.responseStatus ?? null,
    retrievalIntent: message.retrievalIntent ?? null,
    retrievalStatus: message.retrievalStatus ?? null,
    role: message.role,
    sources: message.sources ?? [],
    status: message.status,
  };
}

export async function patchChatAfterUserMessage(args: {
  chat: ChatRecord;
  chatId: Id<"chats">;
  ctx: MutationCtx;
  now: number;
}) {
  await args.ctx.db.patch(args.chatId, {
    lastMessageAt: args.now,
    messageCount: args.chat.messageCount + 1,
    updatedAt: args.now,
    userMessageCount: args.chat.userMessageCount + 1,
  });
}

export async function patchChatAfterAssistantMessage(args: {
  chat: ChatRecord;
  chatId: Id<"chats">;
  ctx: MutationCtx;
  now: number;
  responseStatus: ChatResponseStatus;
}) {
  await args.ctx.db.patch(args.chatId, {
    assistantMessageCount: args.chat.assistantMessageCount + 1,
    lastMessageAt: args.now,
    lastStatus: args.responseStatus,
    messageCount: args.chat.messageCount + 1,
    updatedAt: args.now,
  });
}

export async function patchChatAfterExchange(args: {
  chat: ChatRecord;
  chatId: Id<"chats">;
  ctx: MutationCtx;
  now: number;
  responseStatus: ChatResponseStatus;
}) {
  await args.ctx.db.patch(args.chatId, {
    assistantMessageCount: args.chat.assistantMessageCount + 1,
    lastMessageAt: args.now,
    lastStatus: args.responseStatus,
    messageCount: args.chat.messageCount + 2,
    updatedAt: args.now,
    userMessageCount: args.chat.userMessageCount + 1,
  });
}

export function getDefaultChatSource(source: ChatSource | undefined) {
  return source ?? CHAT_SOURCES.publicFaq;
}

export const DEFAULT_CHAT_STATUS = CHAT_STATUSES.active;
export const USER_MESSAGE_ROLE = CHAT_MESSAGE_ROLES.user;
export const ASSISTANT_MESSAGE_ROLE = CHAT_MESSAGE_ROLES.assistant;
export const USER_MESSAGE_STATUS = CHAT_MESSAGE_STATUSES.sent;

function normalizeOptionalText(value: string | undefined) {
  const normalizedValue = value?.trim().replace(/\s+/g, " ") ?? "";
  return normalizedValue ? normalizedValue : undefined;
}

function normalizeRequiredText(value: string) {
  return value.trim().replace(/\s+/g, " ");
}

function normalizeNullableText(value: string | null | undefined) {
  const normalizedValue = value?.trim() ?? "";
  return normalizedValue ? normalizedValue : null;
}
