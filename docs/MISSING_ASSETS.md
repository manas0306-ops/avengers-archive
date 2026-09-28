# AVENGERS ARCHIVE — ASSET AUDIT & INBOX LOG

This document tracks asset availability, missing poses, suit cut-outs, and files requiring user drop-in via the `/asset-inbox/<slug>/` pipeline.

---

## 1. Asset Naming Convention (`/public/images/<slug>/`)
- `face-unmasked.webp`: 1200×1500, transparent background, aligned to masked.
- `face-masked.webp`: 1200×1500, transparent background, aligned to unmasked.
- `pose-tl.webp`, `pose-t.webp`, `pose-tr.webp`, `pose-l.webp`, `pose-c.webp`, `pose-r.webp`, `pose-bl.webp`, `pose-b.webp`, `pose-br.webp`: 900×1100 each, transparent, identical crop.
- `suit-<nn>.webp`: 800×1600 full-body render, transparent background.
- `comic-<nn>.webp`: 600×900 cover.
- `og.webp`: 1200×630 share card.

---

## 2. Complete Roster Status (40 Heroes / 880 Assets)

| Category | Hero Count | Assets per Hero | Total Assets | Disk Verification | Budget Compliance |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Tier 1 (Core Avengers)** | 6 | 22 | 132 | 132 / 132 (100%) | PASS (< budgets) |
| **Tier 2 (Expanded Avengers)** | 14 | 22 | 308 | 308 / 308 (100%) | PASS (< budgets) |
| **Tier 3 (Cosmic & Allies)** | 20 | 22 | 440 | 440 / 440 (100%) | PASS (< budgets) |
| **TOTAL** | **40** | **22** | **880** | **880 / 880 (100%)** | **ALL PASS** |

### Hero Inventory
1. **Tier 1 (6)**: `iron-man`, `captain-america`, `thor`, `hulk`, `black-widow`, `hawkeye`.
2. **Tier 2 (14)**: `scarlet-witch`, `vision`, `spider-man`, `black-panther`, `doctor-strange`, `war-machine`, `falcon`, `winter-soldier`, `ant-man`, `wasp`, `captain-marvel`, `shang-chi`, `shuri`, `she-hulk`.
3. **Tier 3 (20)**: `star-lord`, `gamora`, `drax`, `rocket`, `groot`, `nebula`, `mantis`, `valkyrie`, `loki`, `wong`, `okoye`, `nick-fury`, `maria-hill`, `phil-coulson`, `moon-knight`, `ms-marvel`, `kate-bishop`, `daredevil`, `yelena-belova`, `monica-rambeau`.

---

## 3. Asset Inbox Instructions
If any custom photography or official Marvel Studios promotional renders need to replace generated or ingested web assets, place the uncompressed `.png` or `.webp` file in `/asset-inbox/<slug>/` with the standard filename. Then execute:
```bash
npm run ingest:assets
```
This script validates pixel dimensions, removes solid backgrounds, compresses to WebP quality 80, generates 16px blur hashes, and copies the files directly to `/public/images/<slug>/`.
