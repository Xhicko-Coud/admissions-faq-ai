import { v, type Infer } from "convex/values";

export const CATEGORY_STATUSES = {
  active: "active",
  inactive: "inactive",
  archived: "archived",
} as const;

export const categoryStatusValidator = v.union(
  v.literal(CATEGORY_STATUSES.active),
  v.literal(CATEGORY_STATUSES.inactive),
  v.literal(CATEGORY_STATUSES.archived),
);

export type CategoryStatus = Infer<typeof categoryStatusValidator>;
