# AVENGERS ARCHIVE — ASSET AUDIT & INBOX LOG

This document tracks asset availability, missing poses, suit cut-outs, and files requiring user drop-in via the `/asset-inbox/<slug>/` pipeline.

---

## 1. Asset Naming Convention (`/public/images/<slug>/`)
- `face-unmasked.webp`: 1200×1500, transparent background, aligned to masked.
- `face-masked.webp`: 1200×1500, transparent background, aligned to unmasked.
- `pose-tl.webp`, `pose-t.webp`, `pose-tr.webp`, `pose-l.webp`, `pose-c.webp`, `pose-r.webp`, `pose-bl.webp`, `pose-b.webp`, `pose-br.webp`: 900×1100 each, transparent, identical crop.
- `suit-<nn>-<suit-slug>.webp`: 800×1600 full-body render, transparent background.
- `comic-<issue-slug>.webp`: 600×900 cover.
- `og.webp`: 1200×630 share card.

---

## 2. Tier 1 Assets Status (Phase 1)

| Hero Slug | Face Unmasked | Face Masked | Poses (9) | Suits Renders | Comic Covers | Fallback Active |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| `iron-man` | Generated / Prepared | Generated / Prepared | 9/9 Generated | High-Res Renders | 8 Verified Covers | None (Complete) |
| `captain-america` | Generated / Prepared | Generated / Prepared | 9/9 Generated | High-Res Renders | 8 Verified Covers | None (Complete) |
| `thor` | Generated / Prepared | Generated / Prepared | 9/9 Generated | High-Res Renders | 8 Verified Covers | None (Complete) |
| `hulk` | Generated / Prepared | Generated / Prepared | 9/9 Generated | High-Res Renders | 8 Verified Covers | None (Complete) |
| `black-widow` | Generated / Prepared | Generated / Prepared | 9/9 Generated | High-Res Renders | 8 Verified Covers | None (Complete) |
| `hawkeye` | Generated / Prepared | Generated / Prepared | 9/9 Generated | High-Res Renders | 8 Verified Covers | None (Complete) |

---

## 3. Asset Inbox Instructions
If any custom photography or official Marvel Studios promotional renders need to replace generated or ingested web assets, place the uncompressed `.png` or `.webp` file in `/asset-inbox/<slug>/` with the standard filename. Then execute:
```bash
npm run ingest:assets
```
This script validates pixel dimensions, removes solid backgrounds, compresses to WebP quality 80, generates 16px blur hashes, and copies the files directly to `/public/images/<slug>/`.
