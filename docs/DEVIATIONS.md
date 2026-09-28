# AVENGERS ARCHIVE — SPEC DEVIATIONS LOG

This file logs all unavoidable architectural deviations, adjustments, and runtime decisions relative to Master Spec v2 and Master Spec v1.

---

## Log Entries

### DEV-001: Supabase Offline Fallback Operation
- **Specification Ref:** Master Spec v1, Section 3
- **Requirement:** Direct remote connection to Supabase database.
- **Deviation:** Supabase credentials (`NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`) are not provided in the environment, and Docker is not available for local containerization.
- **Action Taken:** Operates in OFFLINE MODE. All database schemas, RLS policies, and RPC functions are authored into `/supabase/migrations/` as idempotent SQL files. The client data layer uses `lib/store/localDb.ts` to power all UI features (favorites, progress, quizzes, admin metrics) with full persistence and zero runtime exceptions.

### DEV-002: Base Path Helper for Static Export
- **Specification Ref:** Master Spec v2, Section 14
- **Requirement:** GitHub Pages deployment under subpath `/avengers-archive`.
- **Implementation:** Created `lib/utils.ts -> withBase(path)` to automatically prepend the repository base path for all image assets, audio, and client navigation without hardcoding strings in UI components.

### DEV-003: Heroes Route Client-Side Deep Link Redirect
- **Specification Ref:** Master Spec v2, Section 4
- **Requirement:** `/heroes` and legacy queries like `/heroes/?id=iron-man` redirect to `/#<slug>`.
- **Implementation:** Since GitHub Pages is a static host with no server-side HTTP 301/302 redirects, `app/heroes/page.tsx` uses a client-side `useSearchParams()` hook that extracts the `id` parameter (defaulting to `iron-man`) and calls `window.location.replace(withBase('/#' + id))`.
