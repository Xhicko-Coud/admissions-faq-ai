import { v } from "convex/values";

import { mutation } from "../_generated/server";
import {
  categoryWritePayloadValidator,
  categoryHasPublishedKnowledgeEntries,
  getCategoryDuplicateByName,
  getCategoryDuplicateBySlug,
  getCategoryWriteContext,
  toArchivedCategoryMutationSummary,
  toCategoryMutationSummary,
  validateCategoryPayload,
} from "./helpers";
import { CATEGORY_STATUSES } from "./types";
import { USER_PROFILE_ROLES } from "../auth/authorization";

export const createCategory = mutation({
  args: categoryWritePayloadValidator,
  handler: async (ctx, args) => {
    const access = await getCategoryWriteContext(ctx);

    if (access.status !== "success") {
      return access;
    }

    const validation = validateCategoryPayload(args);

    if (!validation.isValid) {
      return {
        issues: validation.issues,
        status: "invalid_input",
      } as const;
    }

    const duplicateByName = await getCategoryDuplicateByName(ctx, {
      normalizedName: validation.data.normalizedName,
    });

    if (duplicateByName) {
      return { status: "duplicate_name" } as const;
    }

    const duplicateBySlug = await getCategoryDuplicateBySlug(ctx, {
      slug: validation.data.slug,
    });

    if (duplicateBySlug) {
      return { status: "duplicate_slug" } as const;
    }

    const now = Date.now();
    const actorUserId = access.user._id;

    const categoryId = await ctx.db.insert("categories", {
      ...(validation.data.description
        ? { description: validation.data.description }
        : {}),
      ...(validation.data.displayOrder !== undefined
        ? { displayOrder: validation.data.displayOrder }
        : {}),
      createdAt: now,
      createdBy: actorUserId,
      name: validation.data.normalizedName,
      slug: validation.data.slug,
      status: CATEGORY_STATUSES.active,
      updatedAt: now,
      updatedBy: actorUserId,
    });

    const category = await ctx.db.get(categoryId);

    if (!category) {
      return { status: "failed" } as const;
    }

    return {
      category: toCategoryMutationSummary(category),
      status: "created",
    } as const;
  },
});

export const updateCategory = mutation({
  args: {
    categoryId: v.id("categories"),
    ...categoryWritePayloadValidator,
  },
  handler: async (ctx, args) => {
    const access = await getCategoryWriteContext(ctx);

    if (access.status !== "success") {
      return access;
    }

    const category = await ctx.db.get(args.categoryId);

    if (!category) {
      return { status: "not_found" } as const;
    }

    if (category.status === CATEGORY_STATUSES.archived) {
      return { status: "archived_category_blocked" } as const;
    }

    const validation = validateCategoryPayload(args);

    if (!validation.isValid) {
      return {
        issues: validation.issues,
        status: "invalid_input",
      } as const;
    }

    const duplicateByName = await getCategoryDuplicateByName(ctx, {
      excludeCategoryId: args.categoryId,
      normalizedName: validation.data.normalizedName,
    });

    if (duplicateByName) {
      return { status: "duplicate_name" } as const;
    }

    const duplicateBySlug = await getCategoryDuplicateBySlug(ctx, {
      excludeCategoryId: args.categoryId,
      slug: validation.data.slug,
    });

    if (duplicateBySlug) {
      return { status: "duplicate_slug" } as const;
    }

    const hasChanges =
      category.name !== validation.data.normalizedName ||
      category.slug !== validation.data.slug ||
      (category.description ?? undefined) !== validation.data.description ||
      category.displayOrder !== validation.data.displayOrder ||
      (validation.data.status !== undefined &&
        category.status !== validation.data.status);

    if (!hasChanges) {
      return {
        category: toCategoryMutationSummary(category),
        status: "unchanged",
      } as const;
    }

    if (
      validation.data.status === CATEGORY_STATUSES.inactive &&
      category.status !== CATEGORY_STATUSES.inactive
    ) {
      const hasPublishedUsage = await categoryHasPublishedKnowledgeEntries(
        ctx,
        args.categoryId,
      );

      if (hasPublishedUsage) {
        return { status: "published_usage_inactive_blocked" } as const;
      }
    }

    await ctx.db.patch(args.categoryId, {
      description: validation.data.description,
      displayOrder: validation.data.displayOrder,
      name: validation.data.normalizedName,
      slug: validation.data.slug,
      ...(validation.data.status ? { status: validation.data.status } : {}),
      updatedAt: Date.now(),
      updatedBy: access.user._id,
    });

    const updatedCategory = await ctx.db.get(args.categoryId);

    if (!updatedCategory) {
      return { status: "failed" } as const;
    }

    return {
      category: toCategoryMutationSummary(updatedCategory),
      status: "updated",
    } as const;
  },
});

export const archiveCategory = mutation({
  args: {
    categoryId: v.id("categories"),
  },
  handler: async (ctx, args) => {
    const access = await getCategoryWriteContext(ctx);

    if (access.status !== "success") {
      return access;
    }

    if (access.profile.role !== USER_PROFILE_ROLES.admin) {
      return { status: "forbidden" } as const;
    }

    const category = await ctx.db.get(args.categoryId);

    if (!category) {
      return { status: "not_found" } as const;
    }

    if (category.status === CATEGORY_STATUSES.archived) {
      return {
        category: toArchivedCategoryMutationSummary(category),
        status: "unchanged",
      } as const;
    }

    const hasPublishedUsage = await categoryHasPublishedKnowledgeEntries(
      ctx,
      args.categoryId,
    );

    if (hasPublishedUsage) {
      return { status: "published_usage_blocked" } as const;
    }

    const now = Date.now();

    await ctx.db.patch(args.categoryId, {
      archivedAt: now,
      status: CATEGORY_STATUSES.archived,
      updatedAt: now,
      updatedBy: access.user._id,
    });

    const archivedCategory = await ctx.db.get(args.categoryId);

    if (!archivedCategory) {
      return { status: "failed" } as const;
    }

    return {
      category: toArchivedCategoryMutationSummary(archivedCategory),
      status: "archived",
    } as const;
  },
});

export const unarchiveCategory = mutation({
  args: {
    categoryId: v.id("categories"),
  },
  handler: async (ctx, args) => {
    const access = await getCategoryWriteContext(ctx);

    if (access.status !== "success") {
      return access;
    }

    if (access.profile.role !== USER_PROFILE_ROLES.admin) {
      return { status: "forbidden" } as const;
    }

    const category = await ctx.db.get(args.categoryId);

    if (!category) {
      return { status: "not_found" } as const;
    }

    if (category.status !== CATEGORY_STATUSES.archived) {
      return {
        category: toCategoryMutationSummary(category),
        status: "unchanged",
      } as const;
    }

    await ctx.db.patch(args.categoryId, {
      archivedAt: undefined,
      status: CATEGORY_STATUSES.active,
      updatedAt: Date.now(),
      updatedBy: access.user._id,
    });

    const unarchivedCategory = await ctx.db.get(args.categoryId);

    if (!unarchivedCategory) {
      return { status: "failed" } as const;
    }

    return {
      category: toCategoryMutationSummary(unarchivedCategory),
      status: "unarchived",
    } as const;
  },
});
