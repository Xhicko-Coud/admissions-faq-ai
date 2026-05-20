/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as auth from "../auth.js";
import type * as auth_authorization from "../auth/authorization.js";
import type * as auth_bootstrapFirstAdmin from "../auth/bootstrapFirstAdmin.js";
import type * as auth_bootstrapFirstAdminInternal from "../auth/bootstrapFirstAdminInternal.js";
import type * as categories_helpers from "../categories/helpers.js";
import type * as categories_mutations from "../categories/mutations.js";
import type * as categories_queries from "../categories/queries.js";
import type * as categories_types from "../categories/types.js";
import type * as health from "../health.js";
import type * as http from "../http.js";
import type * as knowledge_helpers from "../knowledge/helpers.js";
import type * as knowledge_mutations from "../knowledge/mutations.js";
import type * as knowledge_queries from "../knowledge/queries.js";
import type * as knowledge_types from "../knowledge/types.js";
import type * as users_createTrustedUser from "../users/createTrustedUser.js";
import type * as users_createTrustedUserInternal from "../users/createTrustedUserInternal.js";
import type * as users_operations from "../users/operations.js";
import type * as users_queries from "../users/queries.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  auth: typeof auth;
  "auth/authorization": typeof auth_authorization;
  "auth/bootstrapFirstAdmin": typeof auth_bootstrapFirstAdmin;
  "auth/bootstrapFirstAdminInternal": typeof auth_bootstrapFirstAdminInternal;
  "categories/helpers": typeof categories_helpers;
  "categories/mutations": typeof categories_mutations;
  "categories/queries": typeof categories_queries;
  "categories/types": typeof categories_types;
  health: typeof health;
  http: typeof http;
  "knowledge/helpers": typeof knowledge_helpers;
  "knowledge/mutations": typeof knowledge_mutations;
  "knowledge/queries": typeof knowledge_queries;
  "knowledge/types": typeof knowledge_types;
  "users/createTrustedUser": typeof users_createTrustedUser;
  "users/createTrustedUserInternal": typeof users_createTrustedUserInternal;
  "users/operations": typeof users_operations;
  "users/queries": typeof users_queries;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {
  betterAuth: import("@convex-dev/better-auth/_generated/component.js").ComponentApi<"betterAuth">;
};
