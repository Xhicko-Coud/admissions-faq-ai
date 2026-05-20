import { v } from "convex/values";

import { query } from "../_generated/server";
import {
  categoryListFiltersValidator,
  getCategoryReadContext,
  loadCategories,
  matchesCategorySearch,
  restrictCategoryFiltersForReviewer,
  toPublicCategory,
  toSafeCategory,
} from "./helpers";
import { CATEGORY_STATUSES } from "./types";

const CATEGORY_LIST_LIMIT = 100;

export const listCategories = query({
  args: categoryListFiltersValidator,
  handler: async (ctx, args) => {
    const access = await getCategoryReadContext(ctx);

    if (access.status !== "success") {
      return access;
    }

    const appliedFilters = access.canViewAllStatuses
      ? {
          status: args.status,
        }
      : restrictCategoryFiltersForReviewer({
          status: args.status,
        });

    const records = await loadCategories(ctx, appliedFilters);
    const categories = records
      .filter((category) => matchesCategorySearch(category, args.search))
      .slice()
      .sort((first, second) => {
        const firstDisplayOrder = first.displayOrder ?? Number.MAX_SAFE_INTEGER;
        const secondDisplayOrder =
          second.displayOrder ?? Number.MAX_SAFE_INTEGER;

        if (firstDisplayOrder !== secondDisplayOrder) {
          return firstDisplayOrder - secondDisplayOrder;
        }

        return first.name.localeCompare(second.name);
      })
      .slice(0, CATEGORY_LIST_LIMIT)
      .map(toSafeCategory);

    return {
      categories,
      status: "success",
    } as const;
  },
});

export const getCategory = query({
  args: {
    categoryId: v.id("categories"),
  },
  handler: async (ctx, args) => {
    const access = await getCategoryReadContext(ctx);

    if (access.status !== "success") {
      return access;
    }

    const category = await ctx.db.get(args.categoryId);

    if (!category) {
      return { status: "not_found" } as const;
    }

    if (!access.canViewAllStatuses && category.status !== CATEGORY_STATUSES.active) {
      return { status: "not_found" } as const;
    }

    return {
      category: toSafeCategory(category),
      status: "success",
    } as const;
  },
});

export const listActiveCategories = query({
  args: {},
  handler: async (ctx) => {
    const records = await loadCategories(ctx, {
      status: CATEGORY_STATUSES.active,
    });

    const categories = records
      .slice()
      .sort((first, second) => {
        const firstDisplayOrder = first.displayOrder ?? Number.MAX_SAFE_INTEGER;
        const secondDisplayOrder =
          second.displayOrder ?? Number.MAX_SAFE_INTEGER;

        if (firstDisplayOrder !== secondDisplayOrder) {
          return firstDisplayOrder - secondDisplayOrder;
        }

        return first.name.localeCompare(second.name);
      })
      .slice(0, CATEGORY_LIST_LIMIT)
      .map(toPublicCategory);

    return {
      categories,
      status: "success",
    } as const;
  },
});
