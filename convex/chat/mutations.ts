import { mutation } from "../_generated/server";
import {
  appendAssistantChatMessagePayloadValidator,
  appendUserChatMessagePayloadValidator,
  createChatRecord,
  createChatPayloadValidator,
  insertAssistantChatMessage,
  insertUserChatMessage,
  MAX_ASSISTANT_MESSAGE_LENGTH,
  MAX_USER_MESSAGE_LENGTH,
  patchChatAfterAssistantMessage,
  patchChatAfterExchange,
  patchChatAfterUserMessage,
  sanitizeChatSources,
  saveChatExchangePayloadValidator,
  toChatMessageSummary,
  toChatSummary,
  validateChatTitle,
  validateMessageContent,
} from "./helpers";

export const createChat = mutation({
  args: createChatPayloadValidator,
  handler: async (ctx, args) => {
    const validation = validateChatTitle(args.title);

    if (!validation.isValid) {
      return {
        issues: validation.issues,
        status: "invalid_input",
      } as const;
    }

    const now = Date.now();
    const chat = await createChatRecord({
      ctx,
      now,
      source: args.source,
      title: validation.title,
    });

    if (!chat) {
      return { status: "failed" } as const;
    }

    return {
      chat: toChatSummary(chat),
      status: "created",
    } as const;
  },
});

export const appendUserChatMessage = mutation({
  args: appendUserChatMessagePayloadValidator,
  handler: async (ctx, args) => {
    const chat = await ctx.db.get(args.chatId);

    if (!chat) {
      return { status: "not_found" } as const;
    }

    const validation = validateMessageContent({
      content: args.content,
      label: "Message",
      maxLength: MAX_USER_MESSAGE_LENGTH,
    });

    if (!validation.isValid) {
      return {
        issues: validation.issues,
        status: "invalid_input",
      } as const;
    }

    const now = Date.now();
    const message = await insertUserChatMessage({
      chatId: args.chatId,
      ctx,
      content: validation.content,
      now,
    });

    await patchChatAfterUserMessage({
      chat,
      chatId: args.chatId,
      ctx,
      now,
    });

    const updatedChat = await ctx.db.get(args.chatId);

    if (!message || !updatedChat) {
      return { status: "failed" } as const;
    }

    return {
      chat: toChatSummary(updatedChat),
      message: toChatMessageSummary(message),
      status: "created",
    } as const;
  },
});

export const appendAssistantChatMessage = mutation({
  args: appendAssistantChatMessagePayloadValidator,
  handler: async (ctx, args) => {
    const chat = await ctx.db.get(args.chatId);

    if (!chat) {
      return { status: "not_found" } as const;
    }

    const validation = validateMessageContent({
      content: args.content,
      label: "Answer",
      maxLength: MAX_ASSISTANT_MESSAGE_LENGTH,
      preserveLineBreaks: true,
    });

    if (!validation.isValid) {
      return {
        issues: validation.issues,
        status: "invalid_input",
      } as const;
    }

    const sourceValidation = await sanitizeChatSources(ctx, args.sources);

    if (sourceValidation.status !== "success") {
      return { status: sourceValidation.status } as const;
    }

    const now = Date.now();
    const message = await insertAssistantChatMessage({
      chatId: args.chatId,
      ctx,
      content: validation.content,
      now,
      responseStatus: args.responseStatus,
      retrievalIntent: args.retrievalIntent,
      retrievalStatus: args.retrievalStatus,
      sources: sourceValidation.sources,
    });

    await patchChatAfterAssistantMessage({
      chat,
      chatId: args.chatId,
      ctx,
      now,
      responseStatus: args.responseStatus,
    });

    const updatedChat = await ctx.db.get(args.chatId);

    if (!message || !updatedChat) {
      return { status: "failed" } as const;
    }

    return {
      chat: toChatSummary(updatedChat),
      message: toChatMessageSummary(message),
      status: "created",
    } as const;
  },
});

export const saveChatExchange = mutation({
  args: saveChatExchangePayloadValidator,
  handler: async (ctx, args) => {
    const titleValidation = validateChatTitle(args.title);

    if (!titleValidation.isValid) {
      return {
        issues: titleValidation.issues,
        status: "invalid_input",
      } as const;
    }

    const userValidation = validateMessageContent({
      content: args.userContent,
      label: "Message",
      maxLength: MAX_USER_MESSAGE_LENGTH,
    });

    if (!userValidation.isValid) {
      return {
        issues: userValidation.issues,
        status: "invalid_input",
      } as const;
    }

    const assistantValidation = validateMessageContent({
      content: args.assistantContent,
      label: "Answer",
      maxLength: MAX_ASSISTANT_MESSAGE_LENGTH,
      preserveLineBreaks: true,
    });

    if (!assistantValidation.isValid) {
      return {
        issues: assistantValidation.issues,
        status: "invalid_input",
      } as const;
    }

    const sourceValidation = await sanitizeChatSources(ctx, args.sources);

    if (sourceValidation.status !== "success") {
      return { status: sourceValidation.status } as const;
    }

    const now = Date.now();
    const chat = args.chatId
      ? await ctx.db.get(args.chatId)
      : await createChatRecord({
          ctx,
          now,
          source: args.source,
          title: titleValidation.title,
        });

    if (!chat) {
      return { status: "not_found" } as const;
    }

    const userMessage = await insertUserChatMessage({
      chatId: chat._id,
      content: userValidation.content,
      ctx,
      now,
    });
    const assistantMessage = await insertAssistantChatMessage({
      chatId: chat._id,
      content: assistantValidation.content,
      ctx,
      now,
      responseStatus: args.responseStatus,
      retrievalIntent: args.retrievalIntent,
      retrievalStatus: args.retrievalStatus,
      sources: sourceValidation.sources,
    });

    await patchChatAfterExchange({
      chat,
      chatId: chat._id,
      ctx,
      now,
      responseStatus: args.responseStatus,
    });

    const updatedChat = await ctx.db.get(chat._id);

    if (!userMessage || !assistantMessage || !updatedChat) {
      return { status: "failed" } as const;
    }

    return {
      assistantMessage: toChatMessageSummary(assistantMessage),
      chat: toChatSummary(updatedChat),
      status: "created",
      userMessage: toChatMessageSummary(userMessage),
    } as const;
  },
});
