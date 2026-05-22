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
import type * as chat_helpers from "../chat/helpers.js";
import type * as chat_mutations from "../chat/mutations.js";
import type * as chat_queries from "../chat/queries.js";
import type * as chat_submitPublicChatMessage from "../chat/submitPublicChatMessage.js";
import type * as chat_types from "../chat/types.js";
import type * as health from "../health.js";
import type * as http from "../http.js";
import type * as knowledge_helpers from "../knowledge/helpers.js";
import type * as knowledge_mutations from "../knowledge/mutations.js";
import type * as knowledge_queries from "../knowledge/queries.js";
import type * as knowledge_types from "../knowledge/types.js";
import type * as llm_generateAnswer from "../llm/generateAnswer.js";
import type * as llm_groq from "../llm/groq.js";
import type * as llm_helpers from "../llm/helpers.js";
import type * as llm_prompts from "../llm/prompts.js";
import type * as llm_types from "../llm/types.js";
import type * as seeds_nsuk_categories from "../seeds/nsuk/categories.js";
import type * as seeds_nsuk_helpers from "../seeds/nsuk/helpers.js";
import type * as seeds_nsuk_import from "../seeds/nsuk/import.js";
import type * as seeds_nsuk_types from "../seeds/nsuk/types.js";
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
  "chat/helpers": typeof chat_helpers;
  "chat/mutations": typeof chat_mutations;
  "chat/queries": typeof chat_queries;
  "chat/submitPublicChatMessage": typeof chat_submitPublicChatMessage;
  "chat/types": typeof chat_types;
  health: typeof health;
  http: typeof http;
  "knowledge/helpers": typeof knowledge_helpers;
  "knowledge/mutations": typeof knowledge_mutations;
  "knowledge/queries": typeof knowledge_queries;
  "knowledge/types": typeof knowledge_types;
  "llm/generateAnswer": typeof llm_generateAnswer;
  "llm/groq": typeof llm_groq;
  "llm/helpers": typeof llm_helpers;
  "llm/prompts": typeof llm_prompts;
  "llm/types": typeof llm_types;
  "seeds/nsuk/categories": typeof seeds_nsuk_categories;
  "seeds/nsuk/helpers": typeof seeds_nsuk_helpers;
  "seeds/nsuk/import": typeof seeds_nsuk_import;
  "seeds/nsuk/types": typeof seeds_nsuk_types;
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
