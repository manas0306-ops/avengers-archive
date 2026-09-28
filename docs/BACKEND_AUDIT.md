# AVENGERS ARCHIVE — BACKEND AUDIT REPORT (PHASE 0)
**Date:** 2026-09-29  
**Repository:** manas0306-ops/avengers-archive  
**Environment:** Next.js 14 Static Export (GitHub Pages) + Supabase (Offline Fallback Mode)  
**Auditor:** Senior Full-Stack / Creative Front-End Engineer  

---

## 1. Executive Summary

This audit evaluates the backend architecture, database schema, security policies, authentication mechanisms, and API contracts of **Avengers Archive** against the requirements of the *Scroll-Driven Hero Experience (Master Spec v2)* and *Backend Audit, Repair & Rebuild (Master Spec v1)*.

### Overall Verdict: ♻️ REBUILD
The existing database schema in `supabase/schema.sql` suffers from severe architectural drift, duplicate single-source-of-truth conflicts, dangerous Row Level Security policies (`USING (true)` on writes), lacks user profiles and progress tracking, and currently has no active client-side integration (the frontend currently communicates solely with an in-memory/localStorage mock database). A clean, version-controlled rebuild using timestamped migrations in `/supabase/migrations/` is mandatory before wiring up the new scroll-driven frontend.

---

## 2. Frontend ↔ Backend Integration Audit

| File Path | Pattern Detected | Purpose & Current Status | Severity |
| :--- | :--- | :--- | :--- |
| `lib/supabase/client.ts` | `createClient` | Instantiates Supabase client if `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are provided. Currently returns `null` because env variables are unset. | MEDIUM |
| `hooks/useVisitorTracking.ts` | `localDb.recordEvent`, `localDb.updateSession` | Client-side visitor session tracking. Currently bypasses Supabase entirely and logs only to `localDb` (localStorage). | HIGH |
| `hooks/useFavorites.ts` | `localDb.toggleFavorite`, `localDb.getFavorites` | Favorites management. Stores favorites in localStorage under random session IDs instead of Supabase Auth `user_id`. | HIGH |
| `components/admin/AdminDashboard.tsx` | `localDb.getAnalytics`, `localDb.updateHero` | Admin console. Relies on client-side passcode (`stark`) stored in `sessionStorage` and directly edits local state. Has zero backend authorization checks. | CRITICAL |
| `components/squad/SquadBuilder.tsx` | `localDb.saveSquad`, `localDb.getSquads` | Saves custom squads to `localDb`. No remote persistence or user association. | MEDIUM |
| `components/trivia/TriviaQuiz.tsx` | `localDb.recordQuizAttempt` | Saves quiz results locally. Leaderboard is not synchronized. | LOW |

**Finding:** The frontend has **0 live API calls** to Supabase. All persistence is handled by `lib/store/localDb.ts`. When Supabase credentials are provided, there is no typed data layer (`lib/api/*.ts`) to mediate calls.

---

## 3. Current Database Schema Audit (`supabase/schema.sql`)

The repository contains a single file `supabase/schema.sql` with 10 tables:

1. **`public.characters` (30 columns)**: Monolithic table storing full hero biographies, powers, gallery images, storylines, quotes, and stats.  
   - *Conflict:* Violates Section 2 & Section 5 of Backend Spec. The frontend's `/data/heroes.json` is the sole source of truth for hero content. Database must not duplicate or conflict with hero content. Must be replaced with a lightweight `heroes_index` mirror.
2. **`public.movies` (20 columns)**: Catalog of MCU films.
3. **`public.timeline_events` (15 columns)**: MCU chronological timeline milestones.
4. **`public.gallery_items` (14 columns)**: Stills and wallpaper metadata.
5. **`public.visitor_sessions` (19 columns)**: Tracks browser telemetry, heartbeats, and page views.
6. **`public.visitor_events` (6 columns)**: Live activity log.
7. **`public.favorites` (6 columns)**: Session-based favorites (`user_id` is nullable, relies on `session_id`).
8. **`public.saved_squads` (7 columns)**: Custom team rosters.
9. **`public.trivia_questions` (9 columns)**: Quiz questions.
10. **`public.trivia_attempts` (6 columns)**: Quiz scores and attempts.

**Missing Database Entities Required by Spec v1:**
- ❌ `heroes_index` (light mirror with `slug` PK, `alias`, `real_name`, `tier`, `actor`, `status`, `sort_order`, `content_hash`)
- ❌ `profiles` (linked to `auth.users` with display name and avatar)
- ❌ `hero_progress` (user exploration tracking: `explored`, `blocks_viewed`, `last_viewed_at`)
- ❌ `comic_reads` (user reading checklist: `comic_key`, `status`)
- ❌ `quiz_scores` & `game_scores` (with strict CHECK constraints and secure public leaderboard views)
- ❌ `analytics_events` (standardized event schema with session rate limits and payload boundaries)
- ❌ `admin_users` (role-based table checked by `is_admin()`)
- ❌ RPC Functions: `hero_view_counts()`, `is_admin()`, `record_event()`
- ❌ Storage Buckets: `avatars`

---

## 4. Row Level Security (RLS) Policy Audit

| Table | RLS Enabled | Policies Defined | Write Policy Safety | Severity |
| :--- | :---: | :--- | :--- | :---: |
| `characters` | Yes | SELECT: `USING (true)` | No write policy (Safe) | LOW |
| `movies` | Yes | SELECT: `USING (true)` | No write policy (Safe) | LOW |
| `timeline_events` | Yes | SELECT: `USING (true)` | No write policy (Safe) | LOW |
| `gallery_items` | Yes | SELECT: `USING (true)` | No write policy (Safe) | LOW |
| `trivia_questions` | Yes | SELECT: `USING (true)` | No write policy (Safe) | LOW |
| `trivia_attempts` | Yes | INSERT: `WITH CHECK (true)` | Open inserts without validation | MEDIUM |
| `visitor_events` | Yes | INSERT: `WITH CHECK (true)` | Open inserts without rate limit | MEDIUM |
| `saved_squads` | Yes | ALL: `USING (true)` | **OPEN WRITE:** Anyone can modify/delete any squad | CRITICAL |
| `favorites` | Yes | ALL: `USING (true)` | **OPEN WRITE:** Anyone can wipe/alter any favorite | CRITICAL |
| `visitor_sessions` | Yes | ALL: `USING (true)` | **OPEN WRITE:** Anyone can wipe/alter any session | CRITICAL |

> [!CAUTION]
> Three core tables (`saved_squads`, `favorites`, `visitor_sessions`) have `FOR ALL USING (true)`, which allows unauthenticated anonymous users to `UPDATE` or `DELETE` any row in the database. This violates Rule R2 of the Decision Rules and requires an immediate **REBUILD**.

---

## 5. Auth Setup & Security Analysis

- **Current State:** No Supabase Auth is integrated. Authentication is purely cosmetic in the client via `sessionStorage.getItem('avengers_admin_auth')`.
- **Target State:**
  - Anonymous sign-in for guest users so every visitor gets a genuine `auth.uid()`, allowing favorites and hero progress to persist across sessions and seamlessly link if upgraded.
  - S.H.I.E.L.D. Admin Console at `/admin` must be protected by database-level `is_admin()` checking `admin_users`.
  - Auth redirect URLs to configure in Supabase Dashboard:
    - `http://localhost:3000/`
    - `https://manas0306-ops.github.io/avengers-archive/`
- **Secrets Audit:** Git history scanned. No real service-role keys or database credentials have ever been committed to the repository. Only placeholder examples exist in `.env.example`.

---

## 6. Environment Variables Audit

- `NEXT_PUBLIC_SUPABASE_URL`: Not configured in local environment.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Not configured in local environment.
- `SUPABASE_SERVICE_ROLE_KEY`: Not configured in local environment.
- **Pre-flight Status:** Supabase connection is in **OFFLINE MODE**. All migrations, seeds, and RLS policies must be generated as clean, reproducible SQL files in `/supabase/migrations/` with a comprehensive execution runbook.

---

## 7. Findings & Rebuild Verdicts

| Component | Finding | Severity | Decision Rule | Verdict |
| :--- | :--- | :---: | :---: | :---: |
| **Catalog Architecture** | Hero content stored in DB conflicts with `heroes.json` as single source of truth. | CRITICAL | R1, R6 | ♻️ REBUILD |
| **Row Level Security** | `USING (true)` on write operations in 3 tables creates arbitrary overwrite vulnerability. | CRITICAL | R2 | ♻️ REBUILD |
| **Migration Management** | No migration history; only a static `schema.sql` file exists without idempotency or rollback. | HIGH | R3 | ♻️ REBUILD |
| **User Tracking & Progress** | Missing `profiles`, `hero_progress`, and `comic_reads` tables required for the scroll experience. | HIGH | R1 | ♻️ REBUILD |
| **Client Data Layer** | No typed API layer; components rely on `localDb` without error isolation, timeout, or retry backoff. | HIGH | R4 | ♻️ REBUILD |
| **Analytics Ingestion** | No rate-limiting or payload size guardrails (`record_event` RPC). | HIGH | R1 | ♻️ REBUILD |

---

## 8. Safe Rebuild Strategy (for Phase 1+)

1. **Keep Local Fallback:** Retain and improve `lib/store/localDb.ts` so that when Supabase is in Offline Mode, the entire site continues to function seamlessly with zero crashes.
2. **Versioned Migrations:** Build `/supabase/migrations/` containing:
   - `20260929000001_schema.sql` (core tables, foreign keys, constraints)
   - `20260929000002_functions_and_triggers.sql` (`is_admin`, `record_event`, `hero_view_counts`, `update_timestamp`)
   - `20260929000003_rls_policies.sql` (strict least-privilege policies)
   - `20260929000004_indexes.sql` (performance and analytics indexes)
3. **Data Sync Script:** Create `scripts/sync-heroes-index.ts` to sync `heroes_index` from `/data/heroes.json` automatically in CI.
4. **Typed API Layer:** Create `lib/supabase/client.ts` and `lib/api/*.ts` with 8s timeouts, 2x retry backoff, and automatic fallback to `localStorage`.
