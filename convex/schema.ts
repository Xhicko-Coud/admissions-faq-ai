import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

import { categoryStatusValidator } from "./categories/types";
import {
  chatMessageMetadataValidator,
  chatMessageRoleValidator,
  chatMessageStatusValidator,
  chatResponseStatusValidator,
  chatRetrievalIntentValidator,
  chatRetrievalStatusValidator,
  chatSourceMetadataValidator,
  chatSourceValidator,
  chatStatusValidator,
} from "./chat/types";
import {
  knowledgeEntryMetadataValidator,
  knowledgeEntryStatusValidator,
  knowledgeEntryTypeValidator,
} from "./knowledge/types";

export default defineSchema({
  userProfiles: defineTable({
    createdAt: v.number(),
    createdBySystem: v.optional(v.boolean()),
    email: v.string(),
    isRootAdmin: v.optional(v.boolean()),
    name: v.optional(v.string()),
    role: v.union(
      v.literal("admin"),
      v.literal("editor"),
      v.literal("reviewer"),
    ),
    status: v.union(v.literal("active"), v.literal("inactive")),
    updatedAt: v.number(),
    userId: v.string(),
  })
    .index("by_email", ["email"])
    .index("by_role", ["role"])
    .index("by_status", ["status"])
    .index("by_userId", ["userId"]),
  categories: defineTable({
    archivedAt: v.optional(v.number()),
    createdAt: v.number(),
    createdBy: v.string(),
    description: v.optional(v.string()),
    displayOrder: v.optional(v.number()),
    name: v.string(),
    slug: v.string(),
    status: categoryStatusValidator,
    updatedAt: v.number(),
    updatedBy: v.string(),
  })
    .index("by_status", ["status"])
    .index("by_name", ["name"])
    .index("by_slug", ["slug"])
    .index("by_displayOrder", ["displayOrder"])
    .index("by_createdAt", ["createdAt"])
    .index("by_updatedAt", ["updatedAt"]),
  knowledgeEntries: defineTable({
    answer: v.optional(v.string()),
    categoryId: v.optional(v.id("categories")),
    content: v.optional(v.string()),
    createdAt: v.number(),
    createdBy: v.string(),
    keywords: v.optional(v.array(v.string())),
    metadata: v.optional(knowledgeEntryMetadataValidator),
    publishedAt: v.optional(v.number()),
    archivedAt: v.optional(v.number()),
    question: v.optional(v.string()),
    searchText: v.string(),
    sourceLabel: v.optional(v.string()),
    sourceUrl: v.optional(v.string()),
    status: knowledgeEntryStatusValidator,
    title: v.string(),
    type: knowledgeEntryTypeValidator,
    updatedAt: v.number(),
    updatedBy: v.string(),
  })
    .index("by_categoryId", ["categoryId"])
    .index("by_status", ["status"])
    .index("by_type", ["type"])
    .index("by_status_type", ["status", "type"])
    .index("by_createdAt", ["createdAt"])
    .index("by_updatedAt", ["updatedAt"])
    .searchIndex("search_text", {
      searchField: "searchText",
      filterFields: ["status", "type"],
    }),
  chats: defineTable({
    assistantMessageCount: v.number(),
    createdAt: v.number(),
    lastMessageAt: v.optional(v.number()),
    lastStatus: v.optional(chatResponseStatusValidator),
    messageCount: v.number(),
    source: chatSourceValidator,
    status: chatStatusValidator,
    title: v.optional(v.string()),
    updatedAt: v.number(),
    userMessageCount: v.number(),
  })
    .index("by_status", ["status"])
    .index("by_source", ["source"])
    .index("by_createdAt", ["createdAt"])
    .index("by_updatedAt", ["updatedAt"])
    .index("by_lastMessageAt", ["lastMessageAt"])
    .index("by_lastStatus", ["lastStatus"]),
  chatMessages: defineTable({
    chatId: v.id("chats"),
    content: v.string(),
    createdAt: v.number(),
    metadata: v.optional(chatMessageMetadataValidator),
    responseStatus: v.optional(chatResponseStatusValidator),
    retrievalIntent: v.optional(chatRetrievalIntentValidator),
    retrievalStatus: v.optional(chatRetrievalStatusValidator),
    role: chatMessageRoleValidator,
    sources: v.optional(v.array(chatSourceMetadataValidator)),
    status: chatMessageStatusValidator,
  })
    .index("by_chatId", ["chatId"])
    .index("by_chatId_createdAt", ["chatId", "createdAt"])
    .index("by_role", ["role"])
    .index("by_status", ["status"])
    .index("by_createdAt", ["createdAt"])
    .index("by_responseStatus", ["responseStatus"])
    .index("by_retrievalStatus", ["retrievalStatus"]),
});
