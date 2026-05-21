import { v } from "convex/values";

import { mutation } from "../_generated/server";
import {
  canArchiveKnowledgeEntries,
  getKnowledgeWriteContext,
  isKnowledgeEntryPublishReady,
  toArchivedKnowledgeMutationEntrySummary,
  knowledgeEntryWritePayloadValidator,
  toKnowledgeMutationEntrySummary,
  toPublishedKnowledgeMutationEntrySummary,
  validateKnowledgeEntryPayload,
} from "./helpers";
import { KNOWLEDGE_ENTRY_STATUSES } from "./types";

export const createKnowledgeEntry = mutation({
  args: knowledgeEntryWritePayloadValidator,
  handler: async (ctx, args) => {
    const access = await getKnowledgeWriteContext(ctx);

    if (access.status !== "success") {
      return access;
    }

    const validation = validateKnowledgeEntryPayload(args);

    if (!validation.isValid) {
      return {
        issues: validation.issues,
        status: "invalid_input",
      } as const;
    }

    const now = Date.now();
    const actorUserId = access.user._id;

    const entryId = await ctx.db.insert("knowledgeEntries", {
      ...validation.data,
      createdAt: now,
      createdBy: actorUserId,
      status: KNOWLEDGE_ENTRY_STATUSES.draft,
      updatedAt: now,
      updatedBy: actorUserId,
    });

    const entry = await ctx.db.get(entryId);

    if (!entry) {
      return { status: "failed" } as const;
    }

    return {
      entry: toKnowledgeMutationEntrySummary(entry),
      status: "created",
    } as const;
  },
});

export const updateKnowledgeEntry = mutation({
  args: {
    knowledgeEntryId: v.id("knowledgeEntries"),
    ...knowledgeEntryWritePayloadValidator,
  },
  handler: async (ctx, args) => {
    const access = await getKnowledgeWriteContext(ctx);

    if (access.status !== "success") {
      return access;
    }

    const entry = await ctx.db.get(args.knowledgeEntryId);

    if (!entry) {
      return { status: "not_found" } as const;
    }

    if (entry.status === KNOWLEDGE_ENTRY_STATUSES.archived) {
      return { status: "archived_entry_blocked" } as const;
    }

    const validation = validateKnowledgeEntryPayload(args);

    if (!validation.isValid) {
      return {
        issues: validation.issues,
        status: "invalid_input",
      } as const;
    }

    const hasChanges =
      entry.title !== validation.data.title ||
      entry.type !== validation.data.type ||
      entry.categoryId !== validation.data.categoryId ||
      (entry.question ?? undefined) !== validation.data.question ||
      (entry.answer ?? undefined) !== validation.data.answer ||
      (entry.content ?? undefined) !== validation.data.content ||
      (entry.sourceLabel ?? undefined) !== validation.data.sourceLabel ||
      (entry.sourceUrl ?? undefined) !== validation.data.sourceUrl ||
      !areKeywordListsEqual(entry.keywords ?? [], validation.data.keywords ?? []);

    if (!hasChanges) {
      return {
        entry: toKnowledgeMutationEntrySummary(entry),
        status: "unchanged",
      } as const;
    }

    await ctx.db.patch(args.knowledgeEntryId, {
      answer: validation.data.answer,
      categoryId: validation.data.categoryId,
      content: validation.data.content,
      keywords: validation.data.keywords,
      question: validation.data.question,
      sourceLabel: validation.data.sourceLabel,
      sourceUrl: validation.data.sourceUrl,
      title: validation.data.title,
      type: validation.data.type,
      updatedAt: Date.now(),
      updatedBy: access.user._id,
    });

    const updatedEntry = await ctx.db.get(args.knowledgeEntryId);

    if (!updatedEntry) {
      return { status: "failed" } as const;
    }

    return {
      entry: toKnowledgeMutationEntrySummary(updatedEntry),
      status: "updated",
    } as const;
  },
});

export const publishKnowledgeEntry = mutation({
  args: {
    knowledgeEntryId: v.id("knowledgeEntries"),
  },
  handler: async (ctx, args) => {
    const access = await getKnowledgeWriteContext(ctx);

    if (access.status !== "success") {
      return access;
    }

    const entry = await ctx.db.get(args.knowledgeEntryId);

    if (!entry) {
      return { status: "not_found" } as const;
    }

    if (entry.status === KNOWLEDGE_ENTRY_STATUSES.archived) {
      return { status: "archived_entry_blocked" } as const;
    }

    if (entry.status === KNOWLEDGE_ENTRY_STATUSES.published) {
      return {
        entry: toPublishedKnowledgeMutationEntrySummary(entry),
        status: "unchanged",
      } as const;
    }

    const validation = isKnowledgeEntryPublishReady(entry);

    if (!validation.isValid) {
      return {
        issues: validation.issues,
        status: "invalid_input",
      } as const;
    }

    const now = Date.now();

    await ctx.db.patch(args.knowledgeEntryId, {
      publishedAt: entry.publishedAt ?? now,
      status: KNOWLEDGE_ENTRY_STATUSES.published,
      updatedAt: now,
      updatedBy: access.user._id,
    });

    const publishedEntry = await ctx.db.get(args.knowledgeEntryId);

    if (!publishedEntry) {
      return { status: "failed" } as const;
    }

    return {
      entry: toPublishedKnowledgeMutationEntrySummary(publishedEntry),
      status: "published",
    } as const;
  },
});

export const archiveKnowledgeEntry = mutation({
  args: {
    knowledgeEntryId: v.id("knowledgeEntries"),
  },
  handler: async (ctx, args) => {
    const access = await getKnowledgeWriteContext(ctx);

    if (access.status !== "success") {
      return access;
    }

    if (!canArchiveKnowledgeEntries(access.profile.role)) {
      return { status: "forbidden" } as const;
    }

    const entry = await ctx.db.get(args.knowledgeEntryId);

    if (!entry) {
      return { status: "not_found" } as const;
    }

    if (entry.status === KNOWLEDGE_ENTRY_STATUSES.archived) {
      return {
        entry: toArchivedKnowledgeMutationEntrySummary(entry),
        status: "unchanged",
      } as const;
    }

    const now = Date.now();

    await ctx.db.patch(args.knowledgeEntryId, {
      archivedAt: now,
      status: KNOWLEDGE_ENTRY_STATUSES.archived,
      updatedAt: now,
      updatedBy: access.user._id,
    });

    const archivedEntry = await ctx.db.get(args.knowledgeEntryId);

    if (!archivedEntry) {
      return { status: "failed" } as const;
    }

    return {
      entry: toArchivedKnowledgeMutationEntrySummary(archivedEntry),
      status: "archived",
    } as const;
  },
});

export const restoreKnowledgeEntry = mutation({
  args: {
    knowledgeEntryId: v.id("knowledgeEntries"),
  },
  handler: async (ctx, args) => {
    const access = await getKnowledgeWriteContext(ctx);

    if (access.status !== "success") {
      return access;
    }

    if (!canArchiveKnowledgeEntries(access.profile.role)) {
      return { status: "forbidden" } as const;
    }

    const entry = await ctx.db.get(args.knowledgeEntryId);

    if (!entry) {
      return { status: "not_found" } as const;
    }

    if (entry.status !== KNOWLEDGE_ENTRY_STATUSES.archived) {
      return {
        entry: toKnowledgeMutationEntrySummary(entry),
        status: "unchanged",
      } as const;
    }

    const now = Date.now();

    await ctx.db.patch(args.knowledgeEntryId, {
      archivedAt: undefined,
      status: KNOWLEDGE_ENTRY_STATUSES.draft,
      updatedAt: now,
      updatedBy: access.user._id,
    });

    const restoredEntry = await ctx.db.get(args.knowledgeEntryId);

    if (!restoredEntry) {
      return { status: "failed" } as const;
    }

    return {
      entry: toKnowledgeMutationEntrySummary(restoredEntry),
      status: "restored",
    } as const;
  },
});

function areKeywordListsEqual(current: string[], next: string[]) {
  if (current.length !== next.length) {
    return false;
  }

  return current.every((keyword, index) => keyword === next[index]);
}
