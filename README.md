# 🛡️ AVENGERS ARCHIVE: THE LIVING MCU DATABASE

> **"Earth's Mightiest Heroes — Their Stories. Their Battles. Their Legacy."**  
> *"Every Hero Has a Chapter."*

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3-blue?style=flat&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178c6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ecf8e?style=flat&logo=supabase)](https://supabase.com/)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Live_Deployment-22c55e?style=flat&logo=githubpages&logoColor=white)](https://manas0306-ops.github.io/avengers-archive/)
[![License](https://img.shields.io/badge/License-MIT-gold?style=flat)](LICENSE)

> 🌐 **Live Production Deployment**: [https://manas0306-ops.github.io/avengers-archive/](https://manas0306-ops.github.io/avengers-archive/)  
> Active Continuous Deployment under GitHub Actions & GitHub Pages. Every push to `master` triggers static site compilation and deployment.

An interactive, production-grade digital museum, cinematic character encyclopedia, timeline matrix, tactical mission command, and verified research archive for the **Marvel Cinematic Universe (Earth-616)**.


---

## 🌟 Key Upgrades & Flagship Features

### 1. 🦾 The Tony Stark Workshop & Mark I–LXXXV Armor Archive
A dedicated, premium Stark Industries technical workshop HUD (`/heroes/iron-man` and `/heroes?view=stark`):
- **Complete Mark I through Mark LXXXV Armor Bay**: Fully cataloged dataset of all 85 Iron Man suits built by Tony Stark.
  - Canonical designation, nickname, category (*Prototype, Standard, Specialized, Heavy Duty, Stealth, Space, Modular, Nanotech, Quantum*), first appearance, and battle history.
  - Engineering specifications: metallurgy (e.g., gold-titanium alloy, liquid nanoparticle memory weave), flight ceiling, propulsion telemetry, reactor output, and weapons complement.
  - Transparent Canon Disclosures: Explicit `EDITORIAL_UNKNOWN_FIELDS` flags disclosing unconfirmed intermediate specs for off-screen suits built during the 5-year Blip gap.
- **Interactive Armor Inspection HUD**: High-fidelity technical modal with interactive tabs for *Overview, Combat Systems, Propulsion & Defense, Metallurgy & Energy, and Canon & Sources*.
- **Side-by-Side Armor Comparison Matrix**: Compare 2 to 4 Mark armors simultaneously across dimensions, power output, weapon configurations, and story milestones.
- **Stark Inventions & Technologies Archive**: Searchable ledger of 10 signature Tony Stark breakthroughs (Arc Reactor, Synthetic Element Badassium, J.A.R.V.I.S., F.R.I.D.A.Y., E.D.I.T.H., B.A.R.F., Quantum Temporal GPS, Nano Gauntlet, Spider-Man Stark suits, and Iron Legion).
- **Dual-Chronology Stark Timeline**: Toggle dynamically between **In-Universe Story Order** (1970–2023) and **Real-World Film Release Order** (2008–2019).
- **Cinematic F.R.I.D.A.Y. Boot Sequence**: Diamond-shaped HUD reticle, Arc Reactor pulse audio, and diagnostic status boot with an immediate "Skip Sequence" toggle and full `prefers-reduced-motion` compliance.

---

### 2. 🦸 Universal Hero Dossier System (`/heroes/[slug]`)
Statically pre-rendered (`SSG`) dossiers for all 40 MCU characters across founding Avengers, successors, and allies:
- **8-Chapter Interactive Storyline**:
  1. *Origin & Awakening*
  2. *The Call to Action*
  3. *Rise of the Hero*
  4. *Greatest Battles & Victories*
  5. *Losses, Sacrifices & Consequences*
  6. *The Critical Turning Point*
  7. *Legacy, Alliances & Protégés*
  8. *Latest Released Appearance & Current Canon Status*
- **Inherent Abilities vs. Equipment Breakdown**: Clear separation between genetic/cosmic biology (e.g., Asgardian physiology, Super Soldier enhancement, mutant energy manipulation) and external hardware (e.g., web-shooters, composite suits, tactical quivers).
- **Specialized Lore & Hardware Modules**:
  - **Captain America**: Circular Vibranium shield metallurgy, kinetic absorption dynamics, and leadership doctrine.
  - **Thor**: Uru hammer Mjolnir worthiness enchantments, Stormbreaker bifrost conduit, and lightning channeling.
  - **Hulk**: Gamma radiation cellular transformation, adrenaline-scaled kinetic output, and the Smart Hulk integration.
  - **Black Widow**: 300,000-volt Widow's Bite electroshock gauntlets, Red Room tactical conditioning, and covert espionage tools.
  - **Hawkeye**: Specialized quiver arrowheads (thermite, sonic, EMP, grappling, Pym particle, explosive).
  - **Spider-Man**: Web fluid polymer shear strength, web-shooter PSI pressure, and Spider-Sense spatial awareness.
  - **Doctor Strange**: Sling Ring spatial mechanics, Eye of Agamotto temporal relics, and Cloak of Levitation sentience.
  - **Scarlet Witch**: Chaos Magic probability warping, Darkhold corruption, and hex-boundary reality casting.
  - **Vision**: Vibranium-synthezoid cellular density phasing, Solar Gem energy projection, and synthetic consciousness.
  - **Sam Wilson**: EX-41 Falcon flight pack, Redwing reconnaissance drone, and Vibranium Captain America suit.
  - **Black Panther**: Vibranium micro-weave kinetic shock absorption and panther habit energy redistribution.
- **Typed Relationship Network**: Interactive relationship nodes classified into *Family, Teammates, Mentors/Students, Allies, Rivals/Antagonists, and Successors*.
- **Calculated Appearance & Last-Seen Engine**:
  - Dynamically calculates first appearance, total confirmed appearances, and most recent verified appearance from structured film/television records.
  - Distinguishes on-screen starring roles from cameos, voice roles, archival footage, and alternate-universe variants.
  - Displays confirmed future appearances as strictly "Upcoming" without speculative plot details.
- **Verification Sources & Transparency**: Official Marvel, Disney+, and reference source links with verification timestamps and continuity classification (*Earth-616 Official Canon* vs *Multiverse Variant*).

---

### 3. 🔍 Global Search Matrix
- Accessible anywhere via `Ctrl + K` (or `Cmd + K`) or the navigation bar search button.
- Instant, multi-dimensional search across:
  - **40 Heroes**: By alias, real name, status, or power description.
  - **85 Iron Man Armors**: By Mark number (1–85), roman numerals (I–LXXXV), nickname, or combat role.
  - **Stark Inventions**: By technology name, inventor, or core capability.
  - **MCU Movies**: By title, phase, or release order.
  - **Timeline Events**: By battle, crisis, or historical milestone.
  - **Relationships**: Find characters connected to any Avenger.
- Full keyboard navigation (`↑` / `↓` arrows, `Enter` to select, `Esc` to dismiss).

---

### 4. 🔒 Hardened Director Security & Admin Governance (`/admin`)
- **Server-Side Token Authentication**: Insecure client-side hardcoded passcodes have been eliminated. Authentication is handled by a secure Next.js API route (`/api/admin/auth`) using timing-safe comparison, cryptographically signed tokens, and HTTP-only cookies.
- **Audit Logging System**: Every administrative action (hero edits, additions, deletions, backups, purges) is automatically logged with timestamp, administrator moniker, and mutation details.
- **Database Backup & Restoration**: Export the entire database state (heroes, favorites, squads, visitor analytics, audit logs) to an encrypted JSON backup file, with schema validation for one-click restoration.
- **Supabase PostgreSQL Schema with RLS**: Complete PostgreSQL schema (`supabase/schema.sql`) with Row Level Security (RLS) policies protecting all 12 tables:
  - Public anonymous read access for canonical catalogs (characters, armors, inventions, movies, timeline).
  - Restricted service-role policies for administrative audit logs and content mutations.

---

### 5. ⏳ Master MCU Timeline & Movie Vault
- **Chronological Master Timeline**: Tracks Earth-616 from 1943 Project Rebirth through the Battle of New York, Sokovia, Civil War, Infinity War, the Blip, Endgame, and the Multiverse Saga.
- **Dual Movie Watch Order**: Toggle seamlessly between **Film Release Order** (2008–Present) and **Chronological In-Universe Order**.
- **Global Spoiler Protocol**: Universal header toggle blurs sensitive plot resolutions and death consequences across all modules.

---

### 6. 🎮 Interactive Museum Experiences
- **Tactical Squad Builder ("Assemble Your Avengers")**: Assemble a 7-hero strike squad with role balancing (*Leader, Heavy, Tech, Mystic, Ranged, Tactical, Support*) and real-time synergy calculation.
- **MCU Trivia Terminal**: 4-choice interactive challenges with animated score multipliers and lore explanations.
- **Memory Card Match**: Rapid-recall hero emblem matching mini-game with stopwatch and high score storage.
- **Photo Vault & Wallpapers**: High-resolution gallery with aspect ratio filters (*Desktop 16:9, Mobile 9:16, Ultrawide 21:9*) and verified usage licensing.
- **Stark Web Audio Synthesizer**: Native zero-dependency browser Web Audio API generating authentic Arc Reactor hums, HUD diagnostic blips, and cosmic gauntlet snaps.

---

## 🛠️ Architecture & Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | Next.js 14.2 (App Router, Server Components + Static Site Generation) |
| **Language** | TypeScript 5.6 (Strict Mode, Zero `any` policy for core data) |
| **Styling & Motion** | Tailwind CSS 3.4, Framer Motion 11, GSAP 3.15, Lucide Icons |
| **Validation** | Zod 4.6 (Runtime schema validation for hero catalogs and imports) |
| **Audio Synthesis** | Native Web Audio API (Zero external MP3 bandwidth required) |
| **Database & Auth** | Supabase PostgreSQL with Row Level Security (RLS) + Local Persistence Engine Fallback |
| **Special Effects** | HTML5 Canvas Confetti, CSS Scanline Overlays, SVG Reticle HUDs |

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: v18.17+ or v20+
- **npm** or **pnpm**

### 2. Installation
```bash
git clone https://github.com/manas0306-ops/avengers-archive.git
cd avengers-archive
npm install
```

### 3. Environment Setup (Optional)
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
Configure your credentials:
```env
# Supabase Configuration (Optional - falls back seamlessly to Local Storage persistence)
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Director Admin Security
ADMIN_SECRET_KEY=your-secure-director-token
STARK_DIRECTOR_KEY=stark
```

> **Zero-Configuration Fallback**: If Supabase credentials are not provided, the application automatically activates its **built-in local persistence engine**. All features—visitor analytics, squad saving, favorites, quiz scoring, audit logs, and admin mutations—function 100% locally out of the box!

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Verification & Quality Assurance Suite

Run the comprehensive test and verification suite:

```bash
# Validate all 40 heroes against strict Zod schema
npm run validate:heroes

# Verify 880/880 disk assets against strict byte budgets
npm run verify:assets

# Test facial mask/unmasked pixel-alignment (1200x1500)
npm run check:alignment

# Run ESLint code quality checks
npm run lint

# Run TypeScript strict type verification
npx tsc --noEmit

# Test production static build (59 SSG pages)
npm run build
```

---

## 🗄️ Database Architecture (Supabase PostgreSQL)

The database schema is defined in [`supabase/schema.sql`](supabase/schema.sql) and encompasses 12 production tables:
1. `characters`: Hero identities, powers, stories, images, and source citations.
2. `movies`: Film catalog, phases, box office, directors, and storyline impacts.
3. `timeline_events`: In-universe chronological timeline records.
4. `gallery_items`: High-resolution photo vault and wallpaper assets.
5. `visitor_sessions`: Privacy-preserving hashed session tracking.
6. `visitor_events`: Real-time anonymous activity ticker events.
7. `favorites`: User-saved heroes, movies, and gallery items.
8. `saved_squads`: Tactical strike squad configurations.
9. `trivia_questions`: Canon-verified quiz bank.
10. `trivia_attempts`: Quiz leaderboard and attempt logs.
11. `stark_armors`: Complete Mark I through LXXXV suit engineering registry.
12. `stark_inventions`: Tony Stark technologies and collaborative patents.
13. `admin_audit_logs`: Cryptographic director activity compliance logs.

---

## 📜 Canon Integrity & Continuity Policy

- **Primary Canon**: The Marvel Cinematic Universe main continuity (**Earth-616**).
- **Multiverse Distinctions**: Alternate variants (e.g., Earth-838 Illuminati, Void variants) are stored with distinct continuity designations and are never conflated with prime timeline identities.
- **Upcoming Productions**: Confirmed future projects (such as *Avengers: Doomsday* and *Avengers: Secret Wars*) remain strictly labeled as **Upcoming** without speculative plot details or manufactured appearances.
- **Source Transparency**: Every canonical fact is corroborated by released on-screen dialogue, visual credits, or official Marvel/Disney publications. Unconfirmed specifications are explicitly flagged as `CANONICAL_INTERMEDIATE` or `UNKNOWN`.

---

## ⚖️ Legal Notice

This project is an educational, non-commercial research archive and digital museum created under fair use principles. Character names, likenesses, emblems, and associated indicia are intellectual property of **Marvel Characters, Inc.** and **The Walt Disney Company**.
