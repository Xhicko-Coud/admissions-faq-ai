import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  userProfiles: defineTable({
    createdAt: v.number(),
    email: v.string(),
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
});
