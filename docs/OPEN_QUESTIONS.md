# AVENGERS ARCHIVE — OPEN QUESTIONS & DESIGN DECISIONS

This document logs open decisions for the site architecture, data modeling, and frontend presentation.

---

## 1. Resolved Questions
1. **Source of Truth for Hero Data:** Resolved. `/data/heroes.json` validated by Zod is the sole source of truth. The database only maintains a lightweight `heroes_index` mirror for joins, analytics, and search indexing.
2. **Audio Dependencies:** Resolved. Procedural Web Audio API synthesizers are used for core sound effects (repulsor hum, Mjolnir thunder, Stark UI clicks) to guarantee instant playback without broken external MP3 dependencies.

---

## 2. Active Questions for Future Phases
1. **Comics Reader Mode:** For external comics without public iframe embeds (e.g. Marvel Unlimited vs Internet Archive), the UI defaults to an external link button with `target="_blank" rel="noopener noreferrer"`.
2. **Playwright CI Testing:** Since Playwright requires large browser binaries (~150MB+), should headless testing run purely in GitHub Actions CI or should local dev rely on Node-based integration test scripts? (Defaulting to both: Node test scripts locally + Playwright in CI).
