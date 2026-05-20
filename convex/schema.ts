import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

import {
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
  knowledgeEntries: defineTable({
    answer: v.optional(v.string()),
    content: v.optional(v.string()),
    createdAt: v.number(),
    createdBy: v.string(),
    keywords: v.optional(v.array(v.string())),
    publishedAt: v.optional(v.number()),
    archivedAt: v.optional(v.number()),
    question: v.optional(v.string()),
    sourceLabel: v.optional(v.string()),
    sourceUrl: v.optional(v.string()),
    status: knowledgeEntryStatusValidator,
    title: v.string(),
    type: knowledgeEntryTypeValidator,
    updatedAt: v.number(),
    updatedBy: v.string(),
  })
    .index("by_status", ["status"])
    .index("by_type", ["type"])
    .index("by_status_type", ["status", "type"])
    .index("by_createdAt", ["createdAt"])
    .index("by_updatedAt", ["updatedAt"]),
});
