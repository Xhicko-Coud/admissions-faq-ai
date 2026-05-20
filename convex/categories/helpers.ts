import { v } from "convex/values";

import type { Doc, Id } from "../_generated/dataModel";
import type { MutationCtx, QueryCtx } from "../_generated/server";
import { authComponent } from "../auth";
import {
  getCurrentAuthUser,
  USER_PROFILE_ROLES,
  USER_PROFILE_STATUSES,
  type UserProfileRole,
} from "../auth/authorization";
import {
  CATEGORY_STATUSES,
  categoryStatusValidator,
  type CategoryStatus,
} from "./types";

export const CATEGORY_READ_ROLES = [
  USER_PROFILE_ROLES.admin,
  USER_PROFILE_ROLES.editor,
  USER_PROFILE_ROLES.reviewer,
] as const;

export const CATEGORY_WRITE_ROLES = [
  USER_PROFILE_ROLES.admin,
  USER_PROFILE_ROLES.editor,
] as const;

export const categoryListFiltersValidator = {
  search: v.optional(v.string()),
  status: v.optional(categoryStatusValidator),
} as const;

export const categoryWritePayloadValidator = {
  description: v.optional(v.string()),
  displayOrder: v.optional(v.number()),
  name: v.string(),
} as const;

type CategoryRecord = Doc<"categories">;
const MAX_CATEGORY_NAME_LENGTH = 80;
const MIN_CATEGORY_NAME_LENGTH = 2;
const MAX_CATEGORY_DESCRIPTION_LENGTH = 300;

export type SafeCategory = {
  archivedAt: number | null;
  createdAt: number;
  createdBy: string;
  description: string | null;
  displayOrder: number | null;
  id: CategoryRecord["_id"];
  name: string;
  slug: string;
  status: CategoryStatus;
  updatedAt: number;
  updatedBy: string;
};

export type PublicCategory = {
  description: string | null;
  displayOrder: number | null;
  id: CategoryRecord["_id"];
  name: string;
  slug: string;
  updatedAt: number;
};

export type CategoryWritePayloadInput = {
  description?: string;
  displayOrder?: number;
  name: string;
};

export type ValidatedCategoryPayload = {
  description?: string;
  displayOrder?: number;
  name: string;
  normalizedName: string;
  slug: string;
};

export type CategoryValidationResult =
  | {
      data: ValidatedCategoryPayload;
      isValid: true;
      status: "success";
    }
  | {
      issues: string[];
      isValid: false;
      status: "invalid_input";
    };

export function toSafeCategory(category: CategoryRecord): SafeCategory {
  return {
    archivedAt: category.archivedAt ?? null,
    createdAt: category.createdAt,
    createdBy: category.createdBy,
    description: category.description ?? null,
    displayOrder: category.displayOrder ?? null,
    id: category._id,
    name: category.name,
    slug: category.slug,
    status: category.status,
    updatedAt: category.updatedAt,
    updatedBy: category.updatedBy,
  };
}

export function toPublicCategory(category: CategoryRecord): PublicCategory {
  return {
    description: category.description ?? null,
    displayOrder: category.displayOrder ?? null,
    id: category._id,
    name: category.name,
    slug: category.slug,
    updatedAt: category.updatedAt,
  };
}

export function toCategoryMutationSummary(category: CategoryRecord) {
  return {
    id: category._id,
    name: category.name,
    slug: category.slug,
    status: category.status,
    updatedAt: category.updatedAt,
  };
}

export function toArchivedCategoryMutationSummary(category: CategoryRecord) {
  return {
    archivedAt: category.archivedAt ?? null,
    id: category._id,
    name: category.name,
    slug: category.slug,
    status: category.status,
    updatedAt: category.updatedAt,
  };
}

export async function getCategoryReadContext(ctx: QueryCtx) {
  const user = await getCurrentAuthUser(ctx);

  if (!user) {
    return { status: "unauthenticated" } as const;
  }

  const profile = await ctx.db
    .query("userProfiles")
    .withIndex("by_userId", (lookup) => lookup.eq("userId", user._id))
    .unique();

  if (!profile || profile.status !== USER_PROFILE_STATUSES.active) {
    return { status: "forbidden" } as const;
  }

  if (!CATEGORY_READ_ROLES.includes(profile.role)) {
    return { status: "forbidden" } as const;
  }

  return {
    canViewAllStatuses: canReadAllCategoryStatuses(profile.role),
    profile,
    status: "success",
    user,
  } as const;
}

export function canReadAllCategoryStatuses(role: UserProfileRole) {
  return role === USER_PROFILE_ROLES.admin || role === USER_PROFILE_ROLES.editor;
}

export async function getCategoryWriteContext(ctx: MutationCtx) {
  const user = await getCurrentMutationAuthUser(ctx);

  if (!user) {
    return { status: "unauthenticated" } as const;
  }

  const profile = await ctx.db
    .query("userProfiles")
    .withIndex("by_userId", (lookup) => lookup.eq("userId", user._id))
    .unique();

  if (!profile || profile.status !== USER_PROFILE_STATUSES.active) {
    return { status: "forbidden" } as const;
  }

  const canWriteCategories =
    profile.role === USER_PROFILE_ROLES.admin ||
    profile.role === USER_PROFILE_ROLES.editor;

  if (!canWriteCategories) {
    return { status: "forbidden" } as const;
  }

  return {
    profile,
    status: "success",
    user,
  } as const;
}

export function restrictCategoryFiltersForReviewer(args: {
  status?: CategoryStatus;
}) {
  const status =
    args.status && args.status !== CATEGORY_STATUSES.active
      ? CATEGORY_STATUSES.active
      : args.status ?? CATEGORY_STATUSES.active;

  return { status };
}

export function validateCategoryPayload(
  input: CategoryWritePayloadInput,
): CategoryValidationResult {
  const name = input.name.trim();
  const normalizedName = normalizeCategoryName(name);
  const description = normalizeOptionalText(input.description);
  const slug = normalizeCategorySlug(name);
  const issues: string[] = [];

  if (!name) {
    issues.push("Category name is required.");
  }

  if (name.length < MIN_CATEGORY_NAME_LENGTH) {
    issues.push(
      `Category name must be at least ${MIN_CATEGORY_NAME_LENGTH} characters.`,
    );
  }

  if (name.length > MAX_CATEGORY_NAME_LENGTH) {
    issues.push(
      `Category name must be ${MAX_CATEGORY_NAME_LENGTH} characters or fewer.`,
    );
  }

  if (
    description &&
    description.length > MAX_CATEGORY_DESCRIPTION_LENGTH
  ) {
    issues.push(
      `Description must be ${MAX_CATEGORY_DESCRIPTION_LENGTH} characters or fewer.`,
    );
  }

  if (
    input.displayOrder !== undefined &&
    (!Number.isFinite(input.displayOrder) ||
      !Number.isInteger(input.displayOrder))
  ) {
    issues.push("Display order must be a finite whole number.");
  }

  if (!slug) {
    issues.push("Category name must contain letters or numbers.");
  }

  if (issues.length > 0) {
    return {
      isValid: false,
      issues,
      status: "invalid_input",
    };
  }

  return {
    data: {
      ...(description ? { description } : {}),
      ...(input.displayOrder !== undefined
        ? { displayOrder: input.displayOrder }
        : {}),
      name,
      normalizedName,
      slug,
    },
    isValid: true,
    status: "success",
  };
}

export async function loadCategories(
  ctx: QueryCtx,
  filters: {
    status?: CategoryStatus;
  },
) {
  if (filters.status) {
    return await ctx.db
      .query("categories")
      .withIndex("by_status", (lookup) => lookup.eq("status", filters.status!))
      .collect();
  }

  return await ctx.db.query("categories").collect();
}

export async function getCategoryDuplicateByName(
  ctx: MutationCtx | QueryCtx,
  args: {
    excludeCategoryId?: Id<"categories">;
    normalizedName: string;
  },
) {
  const existingCategory = await ctx.db
    .query("categories")
    .withIndex("by_name", (lookup) => lookup.eq("name", args.normalizedName))
    .unique();

  if (
    existingCategory &&
    (!args.excludeCategoryId || existingCategory._id !== args.excludeCategoryId)
  ) {
    return existingCategory;
  }

  const normalizedComparisonName = args.normalizedName.toLowerCase();
  const categories = await ctx.db.query("categories").collect();

  return (
    categories.find((category) => {
      if (
        args.excludeCategoryId &&
        category._id === args.excludeCategoryId
      ) {
        return false;
      }

      return (
        normalizeCategoryName(category.name).toLowerCase() ===
        normalizedComparisonName
      );
    }) ?? null
  );
}

export async function getCategoryDuplicateBySlug(
  ctx: MutationCtx | QueryCtx,
  args: {
    excludeCategoryId?: Id<"categories">;
    slug: string;
  },
) {
  const existingCategory = await ctx.db
    .query("categories")
    .withIndex("by_slug", (lookup) => lookup.eq("slug", args.slug))
    .unique();

  if (!existingCategory) {
    return null;
  }

  if (
    args.excludeCategoryId &&
    existingCategory._id === args.excludeCategoryId
  ) {
    return null;
  }

  return existingCategory;
}

export function matchesCategorySearch(
  category: CategoryRecord,
  search: string | undefined,
) {
  const normalizedSearch = search?.trim().toLowerCase() ?? "";

  if (!normalizedSearch) {
    return true;
  }

  return [category.name, category.slug]
    .join(" ")
    .toLowerCase()
    .includes(normalizedSearch);
}

export function normalizeCategoryName(value: string) {
  return value.trim().replace(/\s+/g, " ");
}

export function normalizeCategorySlug(value: string) {
  const normalizedValue = value
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  return normalizedValue;
}

function normalizeOptionalText(value: string | null | undefined) {
  const normalizedValue = value?.trim() ?? "";
  return normalizedValue ? normalizedValue : undefined;
}

async function getCurrentMutationAuthUser(
  ctx: Parameters<typeof authComponent.getAuthUser>[0],
) {
  try {
    return await authComponent.getAuthUser(ctx);
  } catch {
    return null;
  }
}
