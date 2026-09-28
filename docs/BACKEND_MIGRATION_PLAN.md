# AVENGERS ARCHIVE — BACKEND MIGRATION & REBUILD PLAN

**Phase:** Phase 1 (Planning & Schema Architecture)  
**Safety Protocol:** In accordance with Master Spec v1 (Section 4 & Section 5).  
**Status:** ⏸ AWAITING USER APPROVAL (No destructive operations have been executed).  
**Backup Completed:** `/backups/20260929_phase1/` contains previous `schema.sql`, `localDb.ts`, and `characters.ts`.

---

## 1. Safe Rebuild Protocol & Target Schema

To eliminate the open-write vulnerabilities (`FOR ALL USING (true)`) in `supabase/schema.sql` and align with `/data/heroes.json` as the single source of truth, the backend will be rebuilt using ordered, idempotent migration files in `/supabase/migrations/`:

### Migration Files
1. `20260929000001_core_schema.sql`
   - **`public.heroes_index`**: Light mirror of `heroes.json` (`slug` PK, `alias`, `real_name`, `tier`, `actor`, `status`, `sort_order`, `content_hash`, `active`). Public read-only.
   - **`public.profiles`**: `id` references `auth.users(id)` ON DELETE CASCADE, `display_name`, `avatar_url`, `created_at`, `updated_at`.
   - **`public.favorites`**: Composite PK `(user_id, hero_slug)`. References `auth.users(id)` and `heroes_index(slug)`.
   - **`public.hero_progress`**: Composite PK `(user_id, hero_slug)`. Tracks `explored boolean`, `blocks_viewed text[]`, `last_viewed_at`.
   - **`public.comic_reads`**: Composite PK `(user_id, hero_slug, comic_key)`.
   - **`public.quiz_scores` & `public.game_scores`**: Enforcing CHECK constraints (`score <= max_score`).
   - **`public.analytics_events`**: `id` bigint identity, `session_id`, `user_id`, `event_type` (restricted CHECK list), `hero_slug`, `meta jsonb` (max 2KB), `created_at`.
   - **`public.admin_users`**: `user_id` PK references `auth.users(id)`.

2. `20260929000002_functions_and_rpc.sql`
   - `handle_new_user()` trigger on `auth.users` to auto-provision a row in `public.profiles`.
   - `is_admin()` SECURITY DEFINER function returning `boolean`.
   - `record_event(session_id, event_type, hero_slug, meta)` rate-limited to 60 events/minute per session.
   - `hero_view_counts(period)` returning aggregated views per hero.
   - `update_updated_at_column()` timestamp trigger.

3. `20260929000003_rls_policies.sql`
   - Strict least-privilege matrix:
     - `heroes_index`: SELECT $\to$ anon, authenticated. Client writes: FORBIDDEN.
     - `profiles`: SELECT/UPDATE $\to$ `auth.uid() = id`.
     - `favorites`: SELECT/INSERT/DELETE $\to$ `auth.uid() = user_id`.
     - `hero_progress`: ALL $\to$ `auth.uid() = user_id`.
     - `comic_reads`: ALL $\to$ `auth.uid() = user_id`.
     - `quiz_scores` / `game_scores`: INSERT $\to$ anon + authenticated; SELECT own rows only. Public leaderboard view exposes only top 50 scores.
     - `analytics_events`: INSERT $\to$ via `record_event()`; SELECT $\to$ `is_admin() = true`.
     - `admin_users`: SELECT $\to$ `is_admin() = true`; Client writes: FORBIDDEN.

4. `20260929000004_indexes.sql`
   - Foreign key indexes, composite index on `(hero_slug, created_at)`, `(event_type, created_at)`.

---

## 2. Data-Mapping & Preservation Plan
- **Legacy Entities:** Currently, the existing live frontend has not stored user data in production Supabase tables (it operated entirely on browser `localStorage` under `avengers_archive_db_v1`).
- **Offline & Local Resilience:**
  - Existing local favorites (`avengers_session_id`) and progress will be migrated to the new schema format in `lib/store/localDb.ts`.
  - When the user is logged into Supabase (or signed in anonymously), `lib/api/favorites.ts` and `lib/api/progress.ts` will sync local items to remote tables automatically.

---

## 3. Rollback Plan
- Should any migration fail or cause regression:
  - Down migration `20260929000000_rollback.sql` will drop the new tables and restore from `/backups/20260929_phase1/schema.sql`.
  - Client data layer automatically falls back to `localDb.ts` if remote API returns errors.
