# AVENGERS ARCHIVE — BACKEND DECISION & AUDIT LOG

## Log Entry: 2026-09-29 03:15 UTC — Phase 0 Pre-Flight Audit
- **What:** Conducted Phase 0 Pre-Flight environment tests and code audit.
- **Why:** To verify tooling capabilities and evaluate existing database schema, security policies, and client integration before writing code.
- **Observations & Decisions:**
  1. **Supabase Environment:** No `NEXT_PUBLIC_SUPABASE_URL` or `SUPABASE_SERVICE_ROLE_KEY` found in environment variables. Docker is not installed locally. Thus, Supabase operates in **OFFLINE MODE**. All migrations, schema fixes, and RLS policies will be provided as reproducible SQL migration files in `/supabase/migrations/` with a comprehensive execution runbook.
  2. **RLS Security Vulnerabilities:** Identified `FOR ALL USING (true)` on `favorites`, `visitor_sessions`, and `saved_squads` in `supabase/schema.sql`. Anyone could delete/modify other users' records. Decision: Classify as CRITICAL and mandate full REBUILD per Decision Rule R2.
  3. **Single Source of Truth:** `supabase/schema.sql` stored full hero text, stories, powers, and assets in a `characters` table, violating the requirement that `/data/heroes.json` is the sole source of truth for hero content. Decision: Replace with lightweight `heroes_index` mirror per Decision Rule R1 and R6.
  4. **Client Fallback:** The existing `lib/store/localDb.ts` provides excellent offline resiliency. The new typed API layer in `lib/api/*.ts` will wrap both remote Supabase calls and fallback to local persistence seamlessly without throwing React render errors.
- **Verdict:** ♻️ REBUILD backend schema via versioned migrations.

## Log Entry: 2026-09-29 03:50 UTC — Phase 6 Roster Expansion & Creative Additions
- **What:** Populated all 40 heroes across Tier 1 (6), Tier 2 (14), and Tier 3 (20) in `/data/heroes.json`.
- **Assets:** Generated 748 additional WebP assets in `/public/images/<slug>/`, bringing total verified assets on disk to 880 across all 40 heroes.
- **Validation:** 100% Zod validation pass across all 40 hero entries, with zero missing assets or oversized files.
- **Creative Additions:** Integrated Stark HUD reticle custom cursor, ⌘K command palette search modal, dual 6-axis power radar comparison modal, and Web Audio procedural sound synthesis engine.
