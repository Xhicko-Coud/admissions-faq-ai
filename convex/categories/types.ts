import { v, type Infer } from "convex/values";

export const CATEGORY_STATUSES = {
  active: "active",
  archived: "archived",
} as const;

export const categoryStatusValidator = v.union(
  v.literal(CATEGORY_STATUSES.active),
  v.literal(CATEGORY_STATUSES.archived),
);

export type CategoryStatus = Infer<typeof categoryStatusValidator>;
