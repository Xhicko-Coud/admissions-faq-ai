# AGENTS.md

This file defines repository rules, development discipline, security expectations, implementation workflow, and agent cost-control behavior for the **admissions-faq-ai** project.

All rules marked as **must** are mandatory.

---

# 0. Project Context

**admissions-faq-ai** is a web-based Conversational AI FAQ system for university admissions support.

The system is built with:

* Next.js App Router
* TypeScript
* Tailwind CSS
* Shadcn UI
* Convex
* Better Auth with Convex integration
* Recharts where approved for dashboard charts

The system focuses on:

* public admissions FAQ chatbot at `/faq`
* controlled university admissions knowledge base
* admin-managed FAQ entries
* FAQ category management
* retrieval-based question matching
* answer confidence handling
* fallback responses for unanswered or low-confidence questions
* unknown question logging
* admin review of chatbot activity
* safe dashboard visibility for admissions support metrics
* role-based protected admin access
* academic MVP demonstration

This project is an academic MVP and software research artifact. It is not a replacement for official human admissions officers, university portals, or legally binding admissions communication.

The chatbot must help users find approved admissions information. It must not invent policies, deadlines, fees, admission guarantees, or eligibility rules.

---

# 1. Core Principle

This repository enforces:

* security-first implementation
* controlled admin access
* no public registration by default
* minimal personal data collection
* knowledge-base-grounded chatbot responses
* Convex-only backend execution model
* structured admin UI architecture
* reusable patterns
* cost-conscious agent execution
* simple MVP-first development

All implementation must prioritize:

```txt
security → correctness → truthfulness → reuse → simplicity → cost control
```

Do not overbuild features beyond the approved module scope.

Do not describe the system as a deep semantic AI, LLM chatbot, transformer chatbot, or generative AI system unless that capability is explicitly implemented in a later approved module.

For V1, the system should be treated as a retrieval-based conversational FAQ system with a future-safe path for embeddings or LLM integration.

---

# 2. Operating Mode Rule

The agent must choose one operating mode before starting work.

The two modes are:

1. Strict Mode
2. Compact Mode

The agent must clearly state the selected mode before implementation.

---

## 2.1 Strict Mode

Use Strict Mode for:

* new protected admin features
* authentication changes
* authorization changes
* database/schema changes
* Convex schema changes
* chatbot matching logic
* FAQ publishing logic
* query logging logic
* unknown question review flows
* feedback logic
* role management
* session handling
* security-sensitive dashboard queries
* multi-file features affecting more than 3 files
* unclear bugs with multiple possible causes
* architectural decisions
* shared utility design
* reusable pattern creation
* changes that may affect security, correctness, truthfulness, or data integrity

Strict Mode must follow the full workflow in this file.

---

## 2.2 Compact Mode

Use Compact Mode for:

* small UI changes
* text/copy changes
* import fixes
* TypeScript errors localized to 1–2 files
* styling adjustments
* small bug fixes with obvious cause
* localized component fixes
* small changes that do not affect security, database, authentication, authorization, chatbot matching, FAQ publishing, or architecture

In Compact Mode:

1. read `AGENTS.md` and directly affected files only
2. list the task and affected files briefly
3. do not create full chunks unless needed
4. do not compare 3–4 solutions unless there is a real design decision
5. do not ask approval between tiny steps
6. do not install packages
7. do not run full verification commands unless explicitly requested
8. do not run repeated Git inspection commands
9. implement the smallest safe change
10. report changed files and recommended verification command

If a Compact Mode task becomes complex, switch to Strict Mode and explain why.

---

# 3. Read Order

For every task:

1. `AGENTS.md`
2. the current module overview/checklist/task file, if provided
3. directly affected source files

Also read docs and shared utilities when:

* creating a new feature
* reusing existing patterns
* touching authentication
* touching authorization
* touching security
* touching data flow
* changing Convex schema/API behavior
* changing FAQ publishing behavior
* changing chatbot matching behavior
* changing query logging behavior
* the task is unclear
* Strict Mode is selected

Do not rely on memory when the repository can answer the question.

Do not inspect unrelated files unless necessary.

Do not scan the whole repository for small localized tasks.

---

# 4. Route Structure Rule

The project has public and protected routes.

## 4.1 Public Routes

The public chatbot route must live at:

```txt
src/app/faq/
```

The login page is public and should live at:

```txt
src/app/login/
```

There must be no public registration page by default.

Users are created internally by trusted admins.

Public FAQ/chat pages must not mount the protected admin shell.

Public FAQ/chat pages must not expose unpublished, draft, archived, or internal FAQ records.

## 4.2 Protected Admin Routes

All protected admin features must live under:

```txt
src/app/(protected)/admin/{feature}/
```

Examples:

```txt
src/app/(protected)/admin/dashboard/
src/app/(protected)/admin/faqs/
src/app/(protected)/admin/categories/
src/app/(protected)/admin/query-logs/
src/app/(protected)/admin/unanswered/
src/app/(protected)/admin/feedback/
src/app/(protected)/admin/users/
src/app/(protected)/admin/settings/
```

---

# 5. UI Structure Rule: Protected Admin Segments

All protected admin features must follow a segmented UI architecture.

This rule is mandatory for complete protected admin features.

---

## 5.1 Required File Structure

A complete protected admin feature should implement only the files it actually needs.

Recommended structure:

```txt
page.tsx
{Feature}Container.tsx
{Feature}Logic.ts
{Feature}View.tsx
{Feature}Skeleton.tsx
{Feature}Table.tsx
{Feature}Form.tsx
{Feature}Dialogs.tsx
```

Example:

```txt
FaqsContainer.tsx
FaqsLogic.ts
FaqsView.tsx
FaqsSkeleton.tsx
FaqsTable.tsx
FaqsForm.tsx
FaqsDialogs.tsx
```

---

## 5.2 File Creation Cost Rule

Do not create unused files.

Only create the full structure when building a complete protected admin feature.

For small additions inside an existing protected admin feature, modify only the files required by the change.

Do not create unused `Form`, `Table`, `Dialogs`, or `Skeleton` files unless the feature actually needs them.

Do not create placeholder files just to satisfy structure if they are not used yet.

---

## 5.3 Responsibility Contract

### `page.tsx`

Handles:

* route entry only
* renders the feature Container or View according to the approved pattern

Rules:

* must not contain business logic
* must not fetch data directly unless the project pattern explicitly requires it
* must not call Convex directly unless approved by module pattern

---

### `{Feature}Container.tsx`

Handles:

* data fetching
* loading state
* error state
* top-level orchestration

Rules:

* passes data to View
* must not contain complex UI layout logic
* must not contain business mutation logic unless the existing project pattern requires it

---

### `{Feature}Logic.ts`

Handles:

* state helpers
* event handlers
* mutations
* create/update/delete behavior
* business logic
* form submission handlers

Rules:

* no JSX allowed
* no UI rendering
* keep handlers small and explicit

---

### `{Feature}View.tsx`

Handles:

* pure UI composition
* layout composition
* receiving props
* passing props to child components

Rules:

* must not contain business logic
* must not fetch data
* must not call APIs directly
* must not perform mutations directly

---

### `{Feature}Skeleton.tsx`

Handles:

* loading UI

Rules:

* must match final layout
* do not use generic spinners when real skeletons are appropriate

---

### `{Feature}Table.tsx`

Handles:

* tabular data rendering
* row-level actions
* display formatting

Rules:

* no data fetching
* no API calls
* no mutation calls
* receives action handlers through props

---

### `{Feature}Form.tsx`

Handles:

* create/edit UI only
* form fields
* validation display
* submit button state

Rules:

* no API calls
* no mutation logic
* must call handlers passed from Logic/View layer

---

### `{Feature}Dialogs.tsx`

Handles:

* confirmation dialogs
* preview dialogs
* modal UI

Rules:

* no business logic
* no API calls
* receives open state and handlers through props

---

# 6. Data Flow Rule

Data must flow in one direction:

```txt
Container → Logic → View → Components
```

Rules:

1. View must not fetch data.
2. Components must not fetch data.
3. Logic must not render UI.
4. Container handles data fetching.
5. Mutations must be triggered through Logic.
6. UI components receive handlers through props.
7. Backend authorization must happen in Convex functions, not frontend components.
8. Client-side route checks are user experience helpers only, not security.

---

# 7. Authentication and Authorization Rules

This project uses Better Auth with Convex integration.

Rules:

1. There must be no public registration page by default.
2. Login is the only public admin auth entry point.
3. New admin users must be created internally by trusted admins or approved seed flows.
4. Protected admin pages must require authentication.
5. Protected admin data must require backend authorization.
6. Do not rely on frontend-only role checks.
7. Users without backend-controlled roles must be denied.
8. Inactive users must not access protected admin features.
9. Protected access failures must provide safe user-facing feedback.
10. Do not expose authorization internals to users.

Recommended roles:

```txt
admin
editor
reviewer
```

Recommended access model:

```txt
admin    → full system management and user management
editor   → manage FAQ entries and categories, including direct publishing
reviewer → review query logs, unknown questions, feedback, and dashboard activity
```

Do not invent new roles without module approval.

---

## 7.1 Auth User And App Profile Separation Rule

Better Auth identity records and admissions-faq-ai application profile records must stay separate.

Rules:

1. Better Auth user creation must receive auth-safe identity fields only.
2. Application role, status, and permissions must be stored in app profile/user records, not passed into Better Auth adapter user data.
3. Do not pass role, banned, permissions, or app-only fields to Better Auth user creation unless the configured adapter schema explicitly supports them.
4. Admin role assignment must be validated and authorized server-side.
5. UI-selected role must be applied to the app profile, not the auth identity payload.
6. Auth/internal errors must be sanitized before returning to UI.

---

## 7.2 User Role Management Rule

Role management controls application authorization only.

Rules:

1. Role changes must update app profile/role records, not Better Auth identity data.
2. Only active admins may change user roles.
3. Frontend role state must never be trusted for authorization.
4. Do not allow demoting, deactivating, or otherwise removing the last active admin.
5. Role-change UI must require confirmation before applying changes.
6. Role-change responses must be sanitized before reaching the UI.
7. Password and auth credential changes are separate from role management.
8. Users management page is admin-only unless explicitly approved otherwise.
9. Editors/reviewers must not access user management or run role updates.
10. Role-change mutations must have explicit return types to avoid Convex circular inference errors.
11. Do not expose auth/internal errors.

---

# 8. Security Rule

The system must not expose sensitive data.

Never expose:

* auth secrets
* API keys
* session tokens
* password hashes
* Better Auth secrets
* Convex deployment secrets
* raw authentication internals
* internal authorization internals
* unnecessary IP/device metadata
* private admin notes in public chatbot responses
* unpublished FAQ content in public chatbot responses

Admissions-related information may affect real applicants. Accuracy and safe fallback behavior are mandatory.

Rules:

1. Public chatbot responses must only use published FAQ content.
2. Draft and archived FAQ content must not be used by the public chatbot.
3. Unknown-question logs must not expose unnecessary personal data.
4. Dashboard summary queries must return aggregate data, not broad raw datasets.
5. Recent activity feeds must return safe display fields only.
6. Secrets must never be hardcoded.
7. Secrets must never be pasted into chat.
8. Environment variables must follow the Environment File Rule.
9. Secret values must live in Convex environment variables when required by Convex or Better Auth backend code.
10. Do not weaken authentication or authorization for convenience.
11. Do not expose stack traces or backend internals to users.

---

# 8.1 Environment File Rule

Never create `.env.local.example`.

Never update `.env.local.example`.

Never suggest creating `.env.local.example`.

The local app repo `.env.local` must only contain:

```bash
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
NEXT_PUBLIC_CONVEX_SITE_URL=
NEXT_PUBLIC_SITE_URL=
```

Convex and Better Auth sensitive variables must be stored in Convex environment variables, not in the local app repo `.env.local`.

Examples of Convex environment variables:

```bash
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
ADMIN_EMAIL=
ADMIN_PASSWORD=
ADMIN_NAME=
ADMIN_SEED_KEY=
```

Do not print values from `.env.local`.

Do not print values from Convex environment variables.

Only report environment variable names, never values.

---

# 9. Convex Rules

Convex is the backend execution and data layer.

Rules:

1. Use Convex queries for reads.
2. Use Convex mutations for writes.
3. Use Convex actions only when external APIs or side effects require them.
4. Keep schema changes explicit and module-scoped.
5. Add indexes intentionally for query patterns.
6. Do not create unused tables.
7. Do not return full datasets to the client when aggregate data is enough.
8. Do not perform large client-side filtering over raw datasets.
9. Backend authorization must happen inside Convex functions.
10. Use existing auth/authorization helpers where available.

Convex files should be organized by domain:

```txt
convex/
  schema.ts

  auth/
  users/
  faq/
  categories/
  chatbot/
  queryLogs/
  unansweredQuestions/
  feedback/
  metrics/
  audit/
  maintenance/
```

Do not create all folders early. Create folders only when the module needs them.

---

## 9.1 Convex Function Folder and Runtime Rule

Rules:

1. Do not create new files under `convex/actions` by default.
2. Convex actions can live in any folder.
3. Do not add normal frontend-safe app operations under `convex/actions`.
4. Use domain folders such as `convex/faq`, `convex/categories`, `convex/chatbot`, or `convex/queryLogs` for frontend-safe app operations.
5. Use neutral folders such as `convex/maintenance`, `convex/jobs`, or a domain folder for normal non-Node actions.
6. Use `"use node"` only when a regular action truly needs Node APIs or unsupported Node packages.
7. Files with `"use node"` must export only `action` or `internalAction` functions.
8. Do not export `query`, `mutation`, `internalQuery`, `internalMutation`, or `httpAction` from `"use node"` files.
9. HTTP actions must not live under `convex/actions`.
10. HTTP actions must not use `"use node"`.
11. HTTP actions should live in `convex/http` or another neutral folder.
12. Internal mutations should live in domain folders and be called through `ctx.runMutation`.
13. Maintenance runners should call internal mutations instead of doing broad database writes directly.
14. When writing future prompts, never suggest `convex/actions` for new runners unless Node runtime is explicitly required.

---

# 10. FAQ Knowledge Base Rules

FAQ entries are the controlled source of truth for chatbot answers.

Rules:

1. Public chatbot answers must come from published FAQ entries.
2. Draft FAQ entries must not be used in public chatbot matching.
3. Archived FAQ entries must not be used in public chatbot matching.
4. FAQ answers must not contain unsupported claims about admission, eligibility, fees, deadlines, or official policy.
5. FAQ entries should belong to a category where appropriate.
6. FAQ entries should support status values:

```txt
draft
published
archived
```

7. Editors may publish FAQ entries directly.
8. Publishing must still happen through backend-authorized Convex mutations.
9. FAQ create/update/delete/archive operations must be protected.
10. Do not expose internal admin notes publicly.
11. Do not create duplicate FAQ records when updating an existing answer.
12. FAQ entries should support explicit question and answer fields.
13. Optional aliases/alternate phrasings may be added only when the approved module includes them.
14. Do not implement embeddings or LLM-specific fields unless the module explicitly approves them.
15. Keep schema future-safe for later embeddings/LLM integration without implementing those features early.

Recommended FAQ record direction:

```txt
question
answer
categoryId
status
keywords / normalizedText where approved
createdBy
updatedBy
createdAt
updatedAt
publishedAt
archivedAt
```

Do not add all fields unless the module requires them.

---

# 11. Category Rules

Categories organize admissions FAQ content.

Examples:

```txt
Admission Requirements
Application Process
School Fees
Screening
Documents
Deadlines
Programmes
Contact And Support
```

Rules:

1. Categories must be admin/editor managed.
2. Public chatbot may use categories for better organization and filtering.
3. Categories must not expose draft or archived FAQ entries publicly.
4. Deleting a category must not orphan published FAQ entries unless the module explicitly handles that state.
5. Prefer archive/deactivate over hard delete when existing FAQ entries depend on a category.
6. Do not add category analytics until approved by a dashboard or metrics module.

---

# 12. Chatbot Matching Rules

The chatbot matching engine must be explainable and safe in V1.

V1 should support retrieval-based matching, such as:

* text normalization
* keyword/token matching
* TF-IDF where approved
* cosine similarity where approved
* simple confidence thresholds

Rules:

1. Do not implement embeddings unless explicitly approved.
2. Do not implement LLM/generative responses unless explicitly approved.
3. Do not call external AI APIs unless explicitly approved.
4. Do not claim semantic understanding beyond the implemented retrieval method.
5. Matching must only consider published FAQ entries.
6. Low-confidence matches must use a safe fallback response.
7. No-match queries must be logged as unanswered where approved.
8. The chatbot must not invent answers.
9. The chatbot must not guarantee admission outcomes.
10. The chatbot must not provide unofficial legal, financial, medical, or binding university policy advice.
11. The response should clearly point users to contact admissions staff when the answer is uncertain or unavailable.
12. Matching results should return safe fields only.
13. Confidence scores may be stored internally but should not be exposed publicly unless approved.
14. Query normalization logic must be small, explicit, and testable.
15. Future embeddings/LLM integration must be isolated behind a matching/provider boundary when implemented.

Recommended chatbot statuses:

```txt
answered
low_confidence
unanswered
```

Recommended matching provider direction:

```txt
rule_based
keyword_similarity
tfidf_cosine
embedding_later
llm_later
```

Do not add unused provider implementations.

---

# 13. Public FAQ Chat Route Rule

The public FAQ chatbot lives at:

```txt
/faq
```

Rules:

1. `/faq` must remain public unless the user explicitly approves authenticated student accounts.
2. `/faq` must not mount the protected admin shell.
3. `/faq` must not call admin-only queries or mutations.
4. `/faq` must not expose draft, archived, or internal FAQ content.
5. `/faq` must use safe fallback copy when no answer is found.
6. `/faq` must not expose backend stack traces, query internals, confidence internals, or matching implementation details to users.
7. `/faq` must not pretend to be a human admissions officer.
8. `/faq` should guide users to official admissions contact channels when the system cannot answer.
9. `/faq` should avoid collecting personal information unless an approved module requires it.
10. If feedback is added, feedback collection must be minimal and safe.

---

# 14. Query Logging and Unknown Question Rules

Query logs help improve the FAQ knowledge base.

Rules:

1. Query logging must avoid unnecessary personal data.
2. Store the user question, match status, matched FAQ reference where safe, and timestamp.
3. Do not store IP/device/user-agent data unless explicitly approved.
4. Unknown or low-confidence questions should be reviewable by authorized admins/reviewers.
5. Reviewers can inspect query logs but must not change FAQ publishing state unless approved.
6. Editors/admins may convert useful unknown questions into FAQ entries where the module implements that flow.
7. Unknown-question review must not expose internal stack traces or matching internals.
8. Public users must not see query logs.
9. Query logs must be bounded and paginated.
10. Dashboard queries must use aggregate query log data where possible.

Recommended query status values:

```txt
answered
low_confidence
unanswered
```

---

# 15. Feedback Rules

Feedback is optional and must be implemented only when approved by module scope.

Rules:

1. Do not add feedback UI before the approved feedback module.
2. Feedback should be minimal, such as helpful/not helpful.
3. Do not collect personal data by default.
4. Feedback must be linked to a safe query log or FAQ reference when needed.
5. Feedback dashboard data must be aggregate-first.
6. Feedback comments, if added later, must be sanitized and bounded.
7. Public feedback must not expose admin routes or internal IDs.

Recommended feedback values:

```txt
helpful
not_helpful
```

---

# 16. Dashboard Rules

Dashboard features must be safe and aggregate-first.

Rules:

1. Dashboard data must come from Convex queries.
2. Dashboard queries must enforce backend authorization.
3. Dashboard summaries must return aggregate counts.
4. Charts must receive pre-shaped or lightly shaped data.
5. Recent feeds must be limited.
6. Do not return broad raw query logs when aggregate data is enough.
7. Do not calculate security-critical or truthfulness-critical metrics only on the client.
8. Do not build broad analytics outside the approved module scope.
9. Do not show fake numbers.
10. Do not treat missing data as zero unless the backend returns zero.

Possible dashboard metrics when approved:

```txt
total published FAQs
total draft FAQs
total archived FAQs
total questions asked
answered questions
low-confidence questions
unanswered questions
most asked categories
recent unanswered questions
feedback helpful rate
```

Use Recharts only where approved by the module.

Do not install another chart package without approval.

---

## 16.1 Dashboard Chart Setup Rule

Dashboard charts should use the Shadcn chart pattern with Recharts.

Rules:

1. Do not add fake chart data.
2. Chart data must come from safe backend queries.
3. Do not install chart packages repeatedly.
4. Before adding chart UI, confirm `recharts` and `src/components/ui/chart.tsx` exist.
5. Use the AcadThreat reference project only for chart composition guidance, not domain logic.
6. Charts must not expose raw logs, backend internals, secrets, tokens, cookies, or stack traces.
7. Charts must not imply AI prediction or forecasting unless a prediction module is explicitly implemented.

---

## 16.2 Dashboard Backend Data Rule

Dashboard queries must return processed, aggregated, safe data only.

Rules:

1. Dashboard queries must not return internal IDs unless needed for safe navigation.
2. Dashboard charts must be based on backend query data, not fake frontend data.
3. Seven-day query trend charts are historical summaries and must not be described as prediction.
4. Dashboard access must be backend-authorized.
5. Reviewer may see safe summary data only if reviewer access is consistent with query log permissions.

---

## 16.3 Dashboard UI Shell Rule

Dashboard route UI must follow the protected module shell pattern.

Rules:

1. Dashboard route must follow the Container → Logic → View → Skeleton pattern when fully implemented.
2. Dashboard must not render placeholder `AppAlert` blocks for normal content.
3. Dashboard must not use fake metrics or fake chart data.
4. Dashboard denied access must use `AccessRestrictedState` and must replace normal dashboard content.
5. Dashboard wording must focus on admissions FAQ support, content visibility, and unanswered question review.
6. Dashboard must only visualize safe backend-processed data.

---

# 17. Academic MVP Honesty Rule

The software must match the academic report and defense claims.

Rules:

1. Do not claim LLM behavior unless an LLM is actually integrated.
2. Do not claim transformer-based semantic understanding unless actually implemented.
3. If using TF-IDF and cosine similarity, describe the system as retrieval-based FAQ matching.
4. If using keyword similarity only, describe it as keyword or rule-based matching.
5. Convex backend features may support chatbot system behavior, but Convex itself is not the AI model.
6. Real-time Convex features may be used for admin updates, query logs, dashboard sync, or content changes.
7. Do not overstate accuracy.
8. Always include safe fallback for unknown questions.
9. Chapter 4 implementation must reflect the actual modules built.
10. Chapter 4.5, 4.6, and 4.7 must be written only after implementation/testing/deployment choices are known.

---

# 18. Reference Project Parity Rule

AcadThreat is the approved reference project for implementation discipline.

Reference path:

```txt
C:\Users\otaga\Desktop\XT\acadthreat
```

Use AcadThreat as reference for:

* admin shell layout discipline
* protected route structure
* Convex/Next.js project organization
* Better Auth integration pattern
* Shadcn/Tailwind UI composition
* chunk workflow
* reporting format
* cost-control behavior
* dashboard/chart composition where relevant

Do not copy AcadThreat domain logic into admissions-faq-ai.

Do not copy:

* threat indicators
* raw log ingestion
* HMAC log clients
* URLHaus/feed sync
* threat events
* severity scoring
* anomaly detection
* attack simulation
* cybersecurity dashboard semantics

If deviating from the reference structure, state why before implementing.

## 18.1 Reference Reuse-First Rule

Most UI patterns, admin layout components, shared utilities, protected route patterns, Convex helpers, form patterns, table patterns, notification patterns, and authentication-adjacent structures already exist in the AcadThreat reference project.

Before creating a new component, utility, layout, hook, Convex helper, form pattern, table pattern, or protected admin structure, the agent must first check the AcadThreat reference project.

Rules:

1. Check whether the needed pattern already exists in AcadThreat.
2. If the AcadThreat pattern is enough, adapt it into admissions-faq-ai with only project-specific naming, copy, route, role, and domain changes.
3. If the AcadThreat pattern is close but incomplete, extend it safely inside admissions-faq-ai instead of inventing a totally new pattern.
4. If the AcadThreat pattern does not fit, state why before creating a new pattern.
5. Do not copy cybersecurity domain logic, threat terminology, IoC logic, log ingestion logic, URLHaus/feed sync logic, or threat-scoring logic.
6. Prefer reuse and adaptation over invention.
7. Do not create duplicate shared components when a reference-compatible pattern already exists.
8. When a prompt says “use the reference project,” the agent must inspect the relevant AcadThreat files before implementing.


## Visual Identity Rule

The admissions-faq-ai interface should feel academic, calm, trustworthy, and modern.

Use the AcadThreat reference project for layout structure, protected shell behavior, component discipline, and interaction patterns, but do not copy its cybersecurity visual tone blindly.

Preferred visual direction:

- Sidebar/Header background: warm off-white/topo
- Main background: soft off-white or light slate
- Cards: white
- Primary color: deep academic blue
- Accent color: restrained teal
- Text: dark navy/slate
- Borders: soft neutral gray

Recommended colors:

- Warm topo/off-white: #F6F1E8
- Main background: #F8FAFC
- Card background: #FFFFFF
- Primary academic blue: #1E3A8A
- Primary hover blue: #1D4ED8
- Accent teal: #0F766E
- Main text: #111827
- Muted text: #6B7280
- Border: #E5E7EB

Recommended Lucide icons:

- GraduationCap for brand/logo
- MessagesSquare for chatbot/conversation
- LayoutDashboard for dashboard
- BookOpenCheck for FAQ knowledge base
- FolderTree for categories
- SearchCheck for query logs
- CircleHelp for unanswered questions
- ThumbsUp for feedback
- Users for user management
- Settings for settings
- LogOut for sign out

Do not use cyber-themed icons, threat icons, shield-heavy visuals, bug icons, radar icons, or attack/security visual language unless the feature explicitly requires it.

---

# 19. Convex Better Auth HTTP Router Rule

Any project using Better Auth with Convex and Next.js must include `convex/http.ts`.

Rules:

1. `convex/http.ts` must create and export a Convex HTTP router.
2. Better Auth routes must be registered on that HTTP router.
3. If `/api/auth/get-session` or `/api/auth/sign-in/email` returns `404`, test the direct Convex site URL:

```txt
https://<deployment>.convex.site/api/auth/get-session
```

4. If the direct `.site` URL says `This Convex deployment does not have HTTP actions enabled`, the likely missing piece is `convex/http.ts`.
5. When using AcadThreat as a reference, compare `convex/http.ts` against the working project.
6. Verify both:

```txt
NEXT_PUBLIC_CONVEX_URL           → matching .convex.cloud URL
NEXT_PUBLIC_CONVEX_SITE_URL      → matching .convex.site URL
```

7. Do not keep debugging seed, password, or login UI behavior until HTTP actions are confirmed working.
8. Do not expose env values, secrets, cookies, tokens, or passwords.

---

# 20. Auth Bridge Loader Rule

When using the AcadThreat reference for authentication UX, include the sign-in and sign-out bridge loader pattern where relevant.

Rules:

1. Successful sign-in should queue the safe post-navigation notification first, then show the sign-in bridge loader, then redirect.
2. Sign-out should show the sign-out bridge loader as soon as logout begins and keep it visible until redirect or failure.
3. If sign-in or sign-out fails, the bridge loader must hide and existing safe error handling must continue.
4. Bridge loaders must be full-screen, accessible, and use safe status messaging only.
5. Bridge loaders must not expose auth internals, raw errors, cookies, tokens, passwords, or backend details.
6. Bridge loaders should follow the working reference pattern but be adapted to admissions-faq-ai branding.
7. Do not remove or weaken safe notification-after-navigation behavior when adding bridge loaders.

---

## 20.1 Auth Provider Boundary Rule

Public routes such as `/login` and `/faq` must remain lightweight.

Rules:

1. Do not mount protected admin shell, protected Convex queries, or unnecessary Convex auth-token fetching on public routes.
2. Auth/session checks on `/login` must be minimal and intentional.
3. `/faq` must not run protected profile or role queries.
4. Avoid duplicate `useSession` or `useConvexAuth` calls across login container, view, or provider layers.
5. Convex authenticated providers and protected profile or role queries should live at the protected route boundary unless the working local or reference pattern requires otherwise.
6. Protected route enforcement must remain server or backend enforced; moving providers must not weaken authorization.
7. Before changing auth provider placement, compare with the working local or reference auth boundary.
8. Do not add public route auth polling or repeated session checks.

---

## 20.2 Protected Module Access Guard Rule

Restricted users must not see normal protected module page content.

Rules:

1. Do not render `access denied` or `access restricted` messages as embedded cards inside the normal table or page layout.
2. Use `AccessRestrictedState` as the dedicated route or page guard screen unless an approved shared replacement exists.
3. `AccessRestrictedState` must replace the protected module page content, not appear inside it.
4. Guard screens should provide safe next actions such as `Go to dashboard` and `Sign out`.
5. Never mention internal roadmap or chunk language in user-facing restricted screens.
6. Backend authorization must still enforce access; frontend guards are UX only.
7. Apply this pattern to FAQs, Categories, Query Logs, Unknown Questions, Users, Dashboard, Feedback, Settings, and future protected modules.
8. Do not use embedded `AppAlert` for restricted access.

---

# 21. Form Validation Rule

All newly created forms and any materially rebuilt forms must use `react-hook-form` with `zod` validation through `zodResolver`.

Rules:

1. Colocate or clearly pair each form with an explicit `zod` schema.
2. Use `react-hook-form` for form state, validation, submission, and dirty-state tracking.
3. Use `zodResolver` for schema-backed validation.
4. Required forms must not allow empty submission.
5. Confirmation dialogs must open only after schema validation passes where confirmation is required.
6. Pure form components must remain presentational and must not call backend APIs directly.
7. Submit handlers, mutation calls, confirmation state, and discard state must stay in the feature Logic layer.
8. If a form uses a sheet, dialog, or footer action button outside the `<form>`, wire it so it still submits through the `react-hook-form` handler.
9. If the required form dependencies are missing, state the package requirement and get approval before installing them.

---

# 22. AppAlert Usage Rule

Do not use `AppAlert` for permanent page descriptions, static guidance, onboarding copy, workspace introductions, or normal informational page text.

Rules:

1. Page descriptions must live in `PageHeader`, section headers, card descriptions, helper text, or empty-state copy.
2. `AppAlert` is only for real stateful alerts such as access denied, query/load failure, action success/failure when the existing notification pattern requires `AppAlert`, validation warnings, system warnings, or session/auth/access-state messages.
3. Do not render an `info` `AppAlert` just because a page loaded successfully.
4. Do not add page-level `AppAlert` blocks unless the current local pattern already uses `AppAlert` for that exact state.
5. For normal guidance, use plain page copy instead of `AppAlert`.
6. This rule applies to all future admin pages, including FAQs, Categories, Query Logs, Unknown Questions, Dashboard, Feedback, Users, and Settings.

---

# 23. Table Loading and Filter UX Rule

Table filtering, searching, sorting, and pagination must not cause a full-page reload or full-page skeleton after the initial page load.

Rules:

1. Initial page load may use the page skeleton.
2. After the page has mounted, query refetches caused by table controls must show table-level loading only.
3. Keep page header, layout, navigation, filters, and action buttons stable while table data reloads.
4. Prefer a table-body loading row or subtle overlay with a spinner such as `Loader2`.
5. Do not unmount the whole view when only table data is loading.
6. Do not reset open sheets or dialogs because a table filter changes.
7. Apply this rule to FAQs, Categories, Query Logs, Unknown Questions, Users, Feedback, and future admin data pages.

---

# 24. Global Alert Placement Rule

Do not embed `AppAlert` directly inside page views for access denied, info, success, warning, or error messages.

Rules:

1. `AppAlert` and notification messages must be triggered through the existing global or top-center alert system.
2. Page views should use `PageHeader`, section copy, card descriptions, helper text, or `EmptyState` for normal static content.
3. Access denied, query failed, action success, and action failure messages should be global alerts, not embedded JSX blocks.
4. Do not render permanent `AppAlert` blocks inside admin pages.
5. Do not render an `info` `AppAlert` just because a page loaded successfully.
6. Prevent repeated alert spam on re-renders.
7. Before adding alert logic, compare with the existing completed local pattern.
8. This applies to FAQs, Categories, Query Logs, Unknown Questions, Dashboard, Feedback, Users, Settings, and all future admin pages.

---

# 25. Admin Table Search Rule

Do not add table search controls to admin pages by default.

Rules:

1. Do not add search inputs to admin table pages by default.
2. Admin tables should use structured filters through `FilterDropdownMenu` where the reusable pattern exists.
3. Search may only be added when explicitly approved for that specific page and justified by the data volume/use case.
4. Do not add search just because a backend query supports a search parameter.
5. Do not clutter table headers with search fields.
6. If search is approved later, it must follow the table-level loading rule and must not cause full-page skeleton reloads.
7. This applies to FAQs, Categories, Query Logs, Unknown Questions, Users, Feedback, Dashboard drilldowns, Reports, Settings, and future admin data pages.

---

# 26. Admin Table Filter UX Rule

Admin table filters must stay compact and reusable.

Rules:

1. Admin tables with more than 2 filters must use the reusable `FilterDropdownMenu` pattern where available.
2. On mobile and constrained layouts, all admin table filters must collapse into `FilterDropdownMenu`, even if there are only 1–2 filters.
3. Do not crowd page headers or table control rows with many visible select boxes.
4. Do not allow filters to wrap into messy multi-row desktop or tablet layouts.
5. Header and action areas should stay stable; filter controls should collapse before they break the layout.
6. Search is not part of the default admin table pattern and requires explicit approval.
7. The first level of `FilterDropdownMenu` must show filter categories.
8. The forward or right arrow means the category opens a second-level option list.
9. The second level must list all available options for that filter, not only the current selected value.
10. Clicking an option must apply it immediately to the table.
11. The selected option should be visibly marked.
12. `value` means the current selected value; `options` means all selectable values. Do not confuse them.
13. Filter changes must use table-level loading only.
14. Reuse this pattern for FAQs, Categories, Query Logs, Unknown Questions, Users, Feedback, and future admin data pages.

---

# 27. Admin Table Header Button Rule

Table-header action buttons must use one shared visual standard.

Rules:

1. Table-header action buttons must use the same visual standard as the approved local/reference admin button pattern.
2. Buttons in `DataTable` header or action areas must have consistent height, radius, padding, background color, text color, icon spacing, and hover/focus states.
3. Use the shared table-header button style or component when available.
4. Button width should be consistent by default, but may expand if content needs more space.
5. `FilterDropdownMenu` trigger buttons must visually align with other table-header action buttons.
6. Do not invent new table-header button styles per page.
7. Apply this rule to FAQs, Categories, Query Logs, Unknown Questions, Users, Feedback, and future admin data pages.

---

# 28. Interactive Cursor Rule

All interactive controls that users are expected to click or tap must use the pointer cursor.

Rules:

1. Apply `cursor-pointer` to buttons, links styled as buttons, toggles, selects, menu triggers, clickable icons, and similar interactive controls.
2. Do not leave clickable UI with the default text or arrow cursor unless the control is disabled.
3. Disabled controls should keep a non-interactive cursor state when appropriate.
4. Check interactive cursor behavior during UI updates, not only visual styling.

---

# 29. Import Alias Rule

All internal application imports must use configured path aliases.

Rules:

1. Use `@/` for imports from `src/`.
2. Use `@convex/` for imports from `convex/` if configured.
3. Do not use relative parent imports such as:

```txt
../../components/example
../lib/example
../_generated/server
```

4. Relative imports are allowed only for files in the same directory when clearer.
5. Keep imports consistent with `tsconfig.json` and `convex/tsconfig.json`.

---

# 30. Reuse Rule

Before creating anything new:

1. check shared components when relevant
2. check `src/lib` when relevant
3. check `src/config` when relevant
4. check existing feature Logic files when relevant
5. check existing Convex helpers when relevant

Do not duplicate logic or UI patterns.

In Compact Mode, check reuse only when the affected file or task clearly suggests an existing reusable pattern.

---

# 31. Function Design Rule

Functions must remain small, explicit, and single-purpose.

---

## 31.1 Single Responsibility

Each function must perform one task only.

Do not combine:

* validation
* transformation
* persistence
* UI state updates
* security checks
* logging side effects

Split into smaller functions when responsibilities differ.

---

## 31.2 Size Rule

Functions must remain small.

Guideline:

```txt
aim for ≤ 30 lines
```

If logic becomes hard to scan, split it.

---

## 31.3 Explicit Inputs and Outputs

Functions must:

* accept explicit parameters
* return clear outputs

Do not:

* rely on hidden globals
* mutate external state silently

---

## 31.4 No Mixed Concerns

Do not mix unrelated responsibilities.

Bad:

```txt
validate input + save to DB + update UI + log audit event
```

Better:

```txt
validateInput()
saveToDatabase()
writeAuditLog()
updateUiState()
```

---

## 31.5 Side Effect Rule

Separate pure logic from side effects.

Side effects include:

* API calls
* DB writes
* logging
* mutation calls
* navigation
* file operations

Do not hide side effects.

---

## 31.6 Async Rule

Async functions must:

* use async/await
* avoid mixing async/await with `.then()` chains
* handle failure paths
* avoid unnecessary parallel calls

---

## 31.7 Early Return Rule

Use early returns to reduce nesting.

Bad:

```ts
if (condition) {
  if (anotherCondition) {
    // deep nesting
  }
}
```

Good:

```ts
if (!condition) return;
if (!anotherCondition) return;
```

---

# 32. Package Installation Rule

The agent must not install new packages without approval.

Before installing any new package, the agent must briefly state:

```txt
Package:
Reason:
Existing alternative checked:
Command:
Expected files affected:
```

The agent must wait for approval before running install commands.

---

## 32.1 Existing Dependency Exception

If the dependency already exists in `package.json` but is missing from `node_modules`, the agent may run the normal project install command after stating:

```txt
No new dependency is being added.
The package already exists in package.json.
Recommended command: npm install
```

---

## 32.2 Package File Change Rule

If `package.json` or `package-lock.json` changes:

1. state exactly why it changed
2. show the dependency/script change
3. do not attempt Git index repair commands
4. ask the user to review before continuing if the change was not explicitly requested

Do not modify package files silently.

---

# 33. Verification Rule

A task is complete only if:

1. code runs without errors
2. feature works correctly
3. no rule is violated

If verification is blocked:

* state the blocker
* do not mark complete

---

## 33.1 User-Handled Verification Rule

For token-saving purposes, the agent must not run full verification commands unless explicitly requested.

After implementation, the agent should provide:

1. changed files
2. recommended verification command
3. what result to expect

The user will run:

```bash
npx tsc --noEmit
npm run lint
npm run build
npm run dev
```

Use these as appropriate:

* `npx tsc --noEmit` for TypeScript checks
* `npm run lint` when lint-sensitive files changed
* `npm run build` before deployment
* `npm run dev` for local manual testing

The agent must not mark verification as passed unless it actually ran the command.

If verification is delegated to the user, report it as:

```txt
Verification not run by agent.
User should run: npx tsc --noEmit
```

---

## 33.2 Verification Cost Control Rule

The agent must use minimal verification commands.

Default verification order when verification is explicitly requested:

1. run the most targeted check available
2. run `npx tsc --noEmit` only when TypeScript files changed
3. run `npm run lint` only when lint-sensitive files changed or when requested
4. run `npm run build` only for release/deployment confidence or when requested
5. run `git status --short` once at the end only if a changed-file summary is needed
6. run `git diff --stat` once only when useful

Do not run repeated Git diff/status/index commands unless diagnosing a real Git issue.

Do not run:

```bash
git update-index --refresh
```

unless the user specifically asks or Git status is clearly incorrect.

---

# 34. Git Usage Rule

The agent should not perform heavy Git inspection unless necessary.

Allowed lightweight Git commands:

```bash
git status --short
git diff --stat
```

Use each at most once at the end when useful.

Avoid repeated use of:

```bash
git diff
git diff --quiet
git diff --summary
git update-index --refresh
```

Do not run Git index repair commands unless explicitly requested.

Do not attempt to fix Git metadata, file-system, or index errors unless the user specifically asks.

If Git reports a read-only file system or index error, stop and report the blocker.

---

# 35. Agent Cost-Control Rule

The agent must minimize unnecessary token usage.

Rules:

1. do not inspect unrelated files
2. do not create checklists unless requested or Strict Mode requires it
3. do not perform architecture decisions when the user already provided an approved plan
4. do not redesign the module unless requested
5. do not run verification commands unless requested
6. do not install packages without approval
7. do not repeatedly inspect Git status/diffs
8. do not produce long reports when a compact report is enough
9. do not continue to future chunks without approval in Strict Mode
10. stop after completing the requested task
11. avoid re-reading files already inspected during the same task unless needed
12. avoid broad repo exploration for small tasks
13. keep implementation aligned with the current module only

---

# 36. User Planning Rule

When the user provides a module plan or checklist, the agent must follow it.

The agent must not recreate the checklist unless:

* the checklist is incomplete
* the checklist violates repository rules
* the checklist is unsafe
* the user asks for review or improvement

If the plan has a problem, state the issue briefly and recommend the smallest correction.

---

# 37. Implementation Workflow Rule

All non-trivial work must follow a staged approach.

This full workflow applies in Strict Mode.

---

## 37.1 Before Coding in Strict Mode

Before coding:

1. identify the task
2. list affected files
3. list proposed chunks in implementation order
4. under each chunk, list checklist items
5. mark every listed checklist item as:
   * ✅ Done
   * ❌ Not done
6. identify the single chunk being started
7. break the approved chunk into internal slices when needed
8. keep internal slices to a maximum of 5 files
9. do not begin implementation until the current chunk and checklist items are clearly identified

Chunk format:

```md
Chunk 1: Route Shell And Structure

- ❌ Not done: Add protected admin dashboard route
- ❌ Not done: Add page.tsx
- ❌ Not done: Add DashboardContainer.tsx

Chunk 2: Backend Query

- ❌ Not done: Add Convex dashboard query
- ❌ Not done: Enforce backend authorization
```

---

## 37.2 During Implementation in Strict Mode

During implementation:

1. work on one approved chunk at a time
2. do not mix concerns across chunks
3. do not implement later chunks while the current chunk is awaiting verification or approval
4. if internal slices are used, keep them within the approved chunk only
5. stop after the approved chunk unless the user explicitly approved continuation

---

## 37.3 After Each Chunk in Strict Mode

After each chunk:

1. verify changes only if agent verification is allowed
2. report:
   * ✅ Done
   * ❌ Not done
3. include:
   * chunk name
   * files changed in that chunk
   * verification command/result, or state that verification was delegated to the user
   * checklist items completed
   * checklist items still not done
   * all completed chunks so far
4. ask for approval before starting the next chunk
5. stop until approval is given

Do not proceed without explicit approval for the next chunk when Strict Mode chunking is active.

---

## 37.4 Compact Mode Workflow

For Compact Mode:

1. state the task briefly
2. state affected files briefly
3. make the smallest safe change
4. do not create chunks unless needed
5. do not run full verification unless explicitly requested
6. do not run repeated Git inspection commands
7. do not install packages
8. provide compact final report

Compact Mode final report format:

```md
Mode: Compact Mode

Changed files:
- file/path.tsx

Verification:
- Not run by agent
- User should run: npx tsc --noEmit

Unresolved issues:
- None known
```

---

# 38. Debugging Rule

When an issue occurs:

1. do not jump to a fix
2. trace the full flow when the bug is complex or unclear:

```txt
UI → Container → Logic → Convex/API → DB
```

3. identify root cause
4. generate at least 2 fixes for complex or unclear bugs
5. choose the safest fix

Do not patch symptoms.

For stateful UI, auth flows, overlays, loaders, dropdowns, dialogs, and navigation-driven behavior:

1. trace ownership of the relevant state
2. trace where the component mounts and unmounts
3. trace what happens across route changes
4. compare the full working lifecycle with the reference before extracting state to a new provider or shared component

Do not jump into a fix before understanding the end-to-end lifecycle.

---

## 38.1 Localized Debugging Exception

For obvious localized errors, such as:

* missing import
* incorrect prop type
* simple TypeScript mismatch
* typo
* wrong file path
* small UI issue
* one-file runtime error

Use Compact Mode.

In Compact Mode, identify the direct cause and apply the smallest safe fix.

Do not generate multiple fixes unless there is a real design choice.

---

# 39. Naming Rule

Use clear, descriptive names.

Avoid vague names such as:

```txt
handle()
processData()
fn()
dataHandler()
thing()
stuff()
```

Good examples:

```txt
createFaqEntry()
publishFaqEntry()
archiveFaqEntry()
normalizeUserQuestion()
matchFaqQuestion()
logUnansweredQuestion()
calculateAnswerConfidence()
```

File names must match the feature or responsibility.

Do not use misleading names.

---

# 40. Package Alternatives Rule

Before suggesting a new dependency, the agent must check whether the task can be solved using:

1. existing project dependency
2. built-in JavaScript/TypeScript feature
3. built-in browser API
4. built-in Node.js API
5. existing utility in `src/lib`
6. existing component/pattern in the codebase

Only suggest a new package if the existing project cannot reasonably solve the problem.

---

# 41. Scope Control Rule

The agent must stay inside the requested scope.

If the task is:

```txt
Fix this TypeScript error.
```

The agent must not:

* redesign the component
* refactor unrelated logic
* install packages
* change routing
* change auth
* change schema
* change shared utilities unless necessary

If a broader change is required, the agent must stop and explain why.

---

# 42. Reporting Detail Rule

The agent’s final report should be short.

Preferred format:

```md
Mode: Compact Mode

Changed files:
- src/example/file.tsx

Verification:
- Not run by agent
- User should run: npx tsc --noEmit

Unresolved issues:
- None known
```

Do not include long command transcripts unless requested.

Do not claim verification passed unless verification actually ran.

---

# 43. Checklist Ownership Rule

The preferred workflow is:

```txt
ChatGPT creates the module plan and checklist.
Codex implements the approved checklist.
User runs verification.
```

The agent must not recreate the plan unless:

* the plan is unsafe
* the plan is incomplete
* the plan violates repository rules
* the user asks for improvement

---

# 44. Completion Honesty Rule

The agent must be honest about what was done.

Allowed statements:

```txt
Verification not run by agent.
User should run: npx tsc --noEmit.
```

```txt
Implementation completed, but build was not run.
```

```txt
Unable to verify because the environment blocked command execution.
```

Forbidden statements:

```txt
Verified successfully.
```

when verification was not actually run.

---

# 45. Forbidden Default Behaviors

The agent must not do these by default:

1. install packages without approval
2. run `npm install` without explaining why
3. modify `package.json` silently
4. modify `package-lock.json` silently
5. run repeated Git status/diff commands
6. run Git index repair commands
7. run full verification unless requested
8. create architecture plans when the user gave an approved plan
9. refactor unrelated files
10. scan unrelated folders
11. continue to future chunks without approval in Strict Mode
12. claim verification passed when verification was delegated to the user
13. create public registration
14. expose draft FAQ entries publicly
15. expose archived FAQ entries publicly
16. invent admissions answers outside the knowledge base
17. implement embeddings or LLM calls early
18. implement future modules early

---

# 46. Default Agent Behavior

Unless the user says otherwise, the agent should behave as follows:

1. use Compact Mode for small/local tasks
2. use Strict Mode for security, architecture, database, auth, FAQ publishing, chatbot matching, query logging, feedback, or large feature tasks
3. do not install packages
4. do not run TypeScript checks
5. do not run lint/build
6. do not perform heavy Git inspection
7. do not create a new checklist if one is already provided
8. edit only the requested scope
9. report changed files and recommended verification command

Default verification instruction:

```txt
Verification not run by agent.
User should run: npx tsc --noEmit
```

---

# 47. Safe Agent Prompt Pattern

For most implementation tasks, the user may say:

```txt
Use Compact Mode unless this task clearly requires Strict Mode.

Do not install packages.
Do not run TypeScript checks.
Do not run lint/build.
Do not run repeated Git commands.
Do not recreate the checklist.
Implement only the task I provide.
After editing, report only changed files and what command I should run.
```

For Strict Mode tasks, the user may say:

```txt
Use Strict Mode.

Follow AGENTS.md full chunk workflow.
Stop after the current approved chunk.
Do not proceed to the next chunk without approval.
```

---

# 48. Security Escalation Rule

If a Compact Mode task touches any of the following, switch to Strict Mode:

* authentication
* authorization
* admin permissions
* database schema
* Convex schema
* FAQ publishing
* chatbot matching
* query logging
* unknown question review
* feedback collection
* dashboard metrics
* audit logging
* session handling
* role management
* protected route behavior
* secrets

The agent must state:

```txt
Switching to Strict Mode because this task affects security-sensitive or truthfulness-sensitive logic.
```

---

# 49. Module Scope Guardrails

The approved module sequence should be followed unless the user changes it.

Recommended module direction:

```txt
Module 01 — Project Foundation, Providers, Admin Shell
Module 02 — Authentication and Protected Admin Access
Module 03 — User/Profile Role Management
Module 04 — FAQ Knowledge Base Schema and Backend
Module 05 — FAQ Admin Management UI
Module 06 — Category Management
Module 07 — Chatbot Matching Engine
Module 08 — Public FAQ Chat Interface
Module 09 — Query Logs and Unknown Question Tracking
Module 10 — Admin Dashboard Metrics
Module 11 — Feedback and Answer Quality Review
Module 12 — Deployment Readiness and Final Documentation Support
```

Rules:

1. Do not implement future modules early.
2. Do not create placeholder routes for future modules unless the current module explicitly asks for navigation placeholders.
3. Future navigation items may be disabled or marked `Coming soon` when approved.
4. Keep implementation aligned with the current module checklist.
5. Stop after the approved chunk.

---

# 50. Module 01 Scope Reminder

For Module 01 foundation and shell work:

Allowed:

* app providers
* Convex provider setup
* site config
* navigation config
* shared page header
* shared empty state
* admin shell layout
* admin header/sidebar/mobile sidebar
* dashboard placeholder view

Not allowed:

* real authentication
* Better Auth logic
* role logic
* logout
* FAQ backend
* FAQ admin CRUD
* chatbot matching
* public `/faq` implementation unless the chunk explicitly asks for it
* query logs
* feedback
* dashboard metrics
* charts
* embeddings
* LLM integration
* public registration

---

# END

<!-- convex-ai-start -->

This project uses [Convex](https://convex.dev) as its backend.

When working on Convex code, **always read
`convex/_generated/ai/guidelines.md` first** for important guidelines on
how to correctly use Convex APIs and patterns. The file contains rules that
override what you may have learned about Convex from training data.

Convex agent skills for common tasks can be installed by running
`npx convex ai-files install`.

<!-- convex-ai-end -->
