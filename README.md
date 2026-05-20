# admissions-faq-ai

A web-based Conversational AI FAQ system for university admissions support.

The system provides a public admissions FAQ chatbot at `/` and a protected admin area for managing FAQ content, categories, users, query logs, unanswered questions, feedback, and dashboard metrics.

This project is an academic MVP and software research artifact. It is designed to help prospective students get quick answers from an approved admissions knowledge base. It is not a replacement for official university admissions officers, official portals, or legally binding admissions communication.

---

## Project Purpose

The purpose of **admissions-faq-ai** is to reduce repetitive admissions enquiries by allowing prospective students to ask common admissions-related questions through a simple conversational interface.

The system uses a controlled FAQ knowledge base managed by authorized staff. In the first MVP version, the chatbot should be treated as a retrieval-based FAQ matching system, not a full generative AI or LLM-powered assistant.

The architecture should remain future-safe for embeddings or LLM integration, but those capabilities should not be implemented or claimed unless explicitly added in a later module.

---

## Core Features

### Public Features

* Public FAQ chatbot route at `/`
* Admissions question input
* Retrieval-based answer matching
* Safe fallback response for unanswered or low-confidence questions
* Published FAQ answers only
* Optional helpful/not-helpful feedback in a later module

### Admin Features

* Protected admin dashboard
* Internal admin login
* Role-based access foundation
* FAQ knowledge base management
* FAQ category management
* Query log review
* Unknown/unanswered question tracking
* Feedback and answer quality review
* Dashboard metrics for FAQ usage and chatbot performance

---

## Technology Stack

The project is built with:

* **Next.js App Router** for frontend and routing
* **TypeScript** for type-safe development
* **Tailwind CSS** for styling
* **Shadcn UI** for reusable interface components
* **Convex** for backend functions, database, real-time data synchronization, and persistent storage
* **Better Auth** for authentication
* **Recharts** where approved for dashboard charts
* **Lucide React** for icons where available

---

## Convex Role in the Project

Convex provides backend features that are useful for chatbot-style systems, including:

* persistent storage for FAQ entries, categories, query logs, feedback, and user profiles
* backend function execution through queries, mutations, and actions
* real-time data synchronization for admin dashboards and content updates
* structured backend authorization through Convex functions
* a clean future path for AI-oriented application patterns

Convex supports the backend architecture, but Convex itself is not the AI model.

---

## Important Product Boundary

The MVP must be honest about what it implements.

For V1:

* The chatbot should use controlled FAQ content.
* The chatbot should only answer from published FAQ entries.
* The chatbot should not invent admissions policies.
* The chatbot should not guarantee admission outcomes.
* The chatbot should not claim deep semantic understanding unless that is actually implemented.
* If TF-IDF and cosine similarity are used, the system should be described as retrieval-based FAQ matching.
* If no strong answer is found, the system should show a safe fallback and log the question for review.

---

## User Roles

Recommended admin roles:

| Role         | Purpose                                                                   |
| ------------ | ------------------------------------------------------------------------- |
| `admin`    | Full system management and user management                                |
| `editor`   | Manage FAQ entries and categories, including direct publishing            |
| `reviewer` | Review query logs, unanswered questions, feedback, and dashboard activity |

Public users do not need accounts in the MVP.

---

## Planned Module Structure

Development should follow a module-by-module workflow.

### Module 01 — Project Foundation, Providers, and Admin Shell

Sets up the base application structure.

Includes:

* app providers
* Convex provider setup
* site config
* navigation config
* shared components
* admin shell layout
* header/sidebar/mobile sidebar
* dashboard placeholder

Does not include:

* real authentication
* FAQ backend
* chatbot matching
* query logs
* feedback
* dashboard metrics

---

### Module 02 — Authentication and Protected Admin Access

Adds real admin login and protected route behavior.

Includes:

* Better Auth setup
* Convex auth integration
* login flow
* protected route guard
* admin session/profile loading
* protected admin layout boundary
* protected sidebar behavior
* protected header behavior
* sign-out control
* safe loading state while auth/profile is checked
* restricted access state for unauthorized users

Module 02 must not recreate the shell from scratch. It should connect the Module 01 shell to authenticated protected admin state.

---

### Module 03 — Admin Users and Role Management

Adds internal user and role management.

Includes:

* user profile records
* `admin`, `editor`, and `reviewer` roles
* user listing
* internal user creation
* activate/deactivate user actions
* role changes
* last-active-admin protection
* admin-only user management

---

### Module 04 — FAQ Knowledge Base Backend

Builds the backend structure for admissions FAQ content.

Includes:

* FAQ schema
* FAQ category relationship
* FAQ status handling
* create/update/publish/archive mutations
* FAQ list/detail queries
* backend authorization
* public query for published FAQs only

Recommended FAQ statuses:

```txt
draft
published
archived
```

---

### Module 05 — Category Management

Organizes FAQ content into admissions categories.

Includes:

* category backend structure
* category list
* create/edit/archive category actions
* category filters
* category selection inside FAQ forms
* safe handling for categories linked to FAQ entries

Example categories:

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

---

### Module 06 — FAQ Admin Management UI

Builds the protected admin interface for managing FAQ entries.

Includes:

* FAQ list/table
* create FAQ form
* edit FAQ form
* view FAQ details
* publish/archive actions
* status filters
* category filters
* editor/admin access

Does not include chatbot matching yet.

---

### Module 07 — Chatbot Matching Engine

Builds the retrieval logic behind the chatbot.

Includes:

* question normalization
* keyword/token matching
* optional TF-IDF/cosine similarity where approved
* confidence scoring
* match threshold
* fallback handling
* published FAQs only
* future-safe provider boundary for embeddings/LLM

Recommended response statuses:

```txt
answered
low_confidence
unanswered
```

---

### Module 08 — Public FAQ Chat Interface

Builds the user-facing chatbot route.

Includes:

* public `/` route
* chat input
* answer display
* loading state
* fallback display
* safe admissions guidance copy
* no protected admin shell
* no exposure of draft or archived FAQ entries

---

### Module 09 — Query Logs and Unknown Question Tracking

Tracks user questions and unanswered/low-confidence results.

Includes:

* query log schema
* answered/low-confidence/unanswered logs
* unknown question list
* reviewer/admin access
* recent unanswered questions
* optional conversion of useful unknown questions into FAQ entries
* privacy-safe logging

---

### Module 10 — Admin Dashboard Metrics

Provides safe system overview metrics.

Includes:

* total FAQs
* published/draft/archived counts
* total questions asked
* answered vs unanswered count
* low-confidence questions
* recent unanswered questions
* most asked categories
* optional 7-day question trend
* Recharts only where approved and already available

Dashboard data must come from backend queries. Do not show fake metrics.

---

### Module 11 — Feedback and Answer Quality Review

Adds answer quality feedback.

Includes:

* helpful/not-helpful feedback
* feedback schema
* feedback capture from `/`
* admin feedback review
* FAQ quality improvement signals
* dashboard feedback metrics

This module is useful but can be skipped for the first MVP if time is limited.

---

### Module 12 — Deployment Readiness and Final Documentation Support

Prepares the system for final deployment and academic documentation.

Includes:

* environment variable checklist
* production deployment notes
* Vercel deployment preparation
* Convex deployment preparation
* final testing checklist
* screenshots/evidence checklist
* Chapter 4.5 System Implementation notes
* Chapter 4.6 System Testing and Debugging notes
* Chapter 4.7 Deployment Strategy notes
* final limitations and future enhancement notes

---

## Recommended Build Order

```txt
Module 01 — Project Foundation, Providers, and Admin Shell
Module 02 — Authentication and Protected Admin Access
Module 03 — Admin Users and Role Management
Module 04 — FAQ Knowledge Base Backend
Module 05 — Category Management
Module 06 — FAQ Admin Management UI
Module 07 — Chatbot Matching Engine
Module 08 — Public FAQ Chat Interface
Module 09 — Query Logs and Unknown Question Tracking
Module 10 — Admin Dashboard Metrics
Module 11 — Feedback and Answer Quality Review
Module 12 — Deployment Readiness and Final Documentation Support
```

---

## First Admin Seed

The first protected admin account is created through a backend-only Convex seed action. Store these values as Convex environment variables, not in the local app `.env.local` file:

```txt
BETTER_AUTH_SECRET
BETTER_AUTH_URL
ADMIN_EMAIL
ADMIN_PASSWORD
ADMIN_NAME
ADMIN_SEED_KEY
```

Run the seed action with the configured seed key:

```bash
npx convex run auth/bootstrapFirstAdmin:bootstrapFirstAdmin '{"seedKey":"<ADMIN_SEED_KEY>"}'
```

After the first admin has been created, rotate or remove `ADMIN_SEED_KEY` from Convex environment variables.

Do not store Better Auth secrets, admin passwords, or seed keys in the local app repository.

---

## Visual Identity

The interface should feel:

```txt
academic, calm, trustworthy, clean, and modern
```

Avoid a flashy AI startup look or a cybersecurity dashboard tone.

Recommended visual direction:

| Use                           | Color       |
| ----------------------------- | ----------- |
| Sidebar/Header warm off-white | `#F6F1E8` |
| Main background               | `#F8FAFC` |
| Card background               | `#FFFFFF` |
| Primary academic blue         | `#1E3A8A` |
| Primary hover blue            | `#1D4ED8` |
| Accent teal                   | `#0F766E` |
| Main text                     | `#111827` |
| Muted text                    | `#6B7280` |
| Border                        | `#E5E7EB` |

Recommended Lucide icons:

| Feature              | Icon                |
| -------------------- | ------------------- |
| Brand/logo           | `GraduationCap`   |
| Chatbot/conversation | `MessagesSquare`  |
| Dashboard            | `LayoutDashboard` |
| FAQ knowledge base   | `BookOpenCheck`   |
| Categories           | `FolderTree`      |
| Query logs           | `SearchCheck`     |
| Unanswered questions | `CircleHelp`      |
| Feedback             | `ThumbsUp`        |
| Users                | `Users`           |
| Settings             | `Settings`        |
| Sign out             | `LogOut`          |

---

## Reference Project

The approved implementation reference project is:

```txt
C:\Users\otaga\Desktop\XT\acadthreat
```

Use the reference project for:

* admin shell layout discipline
* protected route structure
* Convex/Next.js organization
* Better Auth integration pattern
* Shadcn/Tailwind UI composition
* shared component patterns
* table/form/dialog patterns
* notification patterns
* dashboard/chart composition where relevant
* chunk workflow and reporting discipline

Before creating a new component, utility, layout, hook, Convex helper, form pattern, table pattern, or protected admin structure, check the AcadThreat reference project first.

If the reference pattern is enough, adapt it into admissions-faq-ai with only project-specific naming, copy, route, role, and domain changes.

If the reference pattern is close but incomplete, extend it safely inside admissions-faq-ai.

If the reference pattern does not fit, state why before creating a new pattern.

Do not copy AcadThreat cybersecurity domain logic, threat terminology, IoC logic, log ingestion logic, URLHaus/feed sync logic, anomaly detection, or threat-scoring logic.

---

## Development Discipline

This project should be developed in small approved modules and chunks.

Preferred workflow:

```txt
ChatGPT creates the module plan and checklist.
Codex implements the approved checklist.
User runs verification.
```

Agents must follow `AGENTS.md`.

Default agent behavior:

* do not install packages unless approved
* do not run TypeScript checks unless requested
* do not run lint/build unless requested
* do not run repeated Git commands
* do not recreate a checklist when one is already provided
* do not implement future modules early
* stop after the approved chunk
* report changed files and recommended verification command

Recommended verification command after TypeScript changes:

```bash
npx tsc --noEmit
```

---

## Environment Variables

This project does not use `.env.local.example`.

Do not create `.env.local.example`.

The local `.env.local` should only contain public/local Convex routing values:

```bash
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
NEXT_PUBLIC_CONVEX_SITE_URL=
NEXT_PUBLIC_SITE_URL=
```

Sensitive Better Auth and Convex values must be configured in Convex environment variables, not in the local app repo `.env.local`.

Examples of Convex environment variables:

```bash
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
ADMIN_EMAIL=
ADMIN_PASSWORD=
ADMIN_NAME=
ADMIN_SEED_KEY=
```

Do not commit or print real secret values.

---

## Academic Documentation Notes

Chapter 4 sections should be completed after development evidence exists.

Pending sections:

* **4.5 System Implementation**
* **4.6 System Testing and Debugging**
* **4.7 Deployment Strategy**

These sections should be generated after the software modules are built, tested, and deployment decisions are confirmed.

Do not write implementation claims that the software has not actually achieved.

---

## License

Academic project. License to be decided.
