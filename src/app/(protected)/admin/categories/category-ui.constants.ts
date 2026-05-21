import type { FunctionReturnType } from "convex/server";

import { api } from "@convex/_generated/api";

type CategoriesResult = FunctionReturnType<
  typeof api.categories.queries.listCategories
>;
type CategoriesSuccessResult = Extract<CategoriesResult, { status: "success" }>;

export type CategoryRecord = CategoriesSuccessResult["categories"][number];
export type CategoryStatusFilter = CategoryRecord["status"] | "all";

export const categoryStatusLabels = {
  active: "Active",
  inactive: "Inactive",
  archived: "Archived",
} satisfies Record<CategoryRecord["status"], string>;
