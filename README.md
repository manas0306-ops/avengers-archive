# 🛡️ AVENGERS ARCHIVE

> **"Earth's Mightiest Heroes — Their Stories. Their Battles. Their Legacy."**  
> *"Every Hero Has a Chapter."*

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3-blue?style=flat&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178c6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ecf8e?style=flat&logo=supabase)](https://supabase.com/)

An interactive, production-quality digital museum, cinematic character encyclopedia, timeline matrix, and tactical mission command for the **Marvel Cinematic Universe (Earth-616)**.

---

## 🌟 Key Features

### 1. 🦸‍♂️ Interactive Hero Dossiers
- **Dynamic Horizontal Carousel**: Seamlessly swipe, drag, or navigate with keyboard arrows (`←` / `→`) and vertically-centered controls.
- **8-Phase Interactive Storyline**: *Origin, The Call, Rise of the Avenger, Greatest Battles, Losses, Turning Point, Legacy, and Where Are They Now?*
- **Canonical Character Badges**: Verified statuses (`ACTIVE`, `RETIRED`, `FALLEN`, `UNKNOWN`, `LEGACY`, `AFFILIATED HERO`) and categorization (*Core Avengers, Successors, Allies, Multiverse*).
- **Abilities & Equipment**: Comprehensive breakdowns of powers, signature weapons, affiliations, and relationships.

### 2. ⏳ Master MCU Timeline Matrix
- Chronological timeline tracking pivotal Earth-616 events from **1943 Project Rebirth** through **The Battle of New York**, **Sokovia**, **Civil War**, **Infinity War**, **The Blip**, and **Endgame**, to the modern **Multiverse Fractures**.
- Filterable by **MCU Phase (1–6)** and event categories (*Foundation, Battle, Crisis, Multiverse*).
- Click any event to open a cinematic dossier modal detailing what happened, figures involved, and long-term repercussions.

### 3. 🎬 Avengers Movie Archive
- Dual **Watch Order Modes**: Toggle between **Release Order** and **Chronological In-Universe Order**.
- Detailed stats: Box office revenue, Rotten Tomatoes scores, directors, runtimes, synopses, and impact on the Avengers.
- **Spoiler Protection Protocol**: Global toggle in the navigation bar blurs sensitive plot outcomes until explicitly revealed.

### 4. 📸 Photo Vault & 4K Wallpapers
- Filterable visual archive (*Heroes, Team, Battles, Posters, Wallpapers*).
- Fullscreen interactive lightbox with zoom, keyboard navigation, and license/source attribution.
- Dedicated **Wallpapers Section** with aspect ratio filters (*Desktop 16:9, Mobile 9:16, Ultrawide 21:9*).

### 5. 🎯 Tactical Mission Composer ("Build Your Avengers")
- Assemble a custom 7-hero strike squad across defined roles: **Leader, Heavy, Tech, Mystic, Ranged, Tactical, Support**.
- Real-time tactical combat synergy analysis (e.g. *Iron Man + Doctor Strange Tech-Mystic amplification*).
- Persistent squad saving and shareable links.

### 6. 🧠 Trivia Challenges & Mini-Games
- **"How Much Do You Know?"**: Interactive 4-choice trivia quizzes with animated answer validation and explanatory debriefs.
- **Hero Recognition Match**: Smooth card-matching memory mini-game with move counter, stopwatch, and high score tracking.

### 7. 🕵️‍♂️ Privacy-Respecting Visitor Tracking & Admin Console
- **Zero Raw IP Storage**: Privacy-preserving one-way hashing for anonymous session identification (*"Anonymous Visitor #042"*).
- **Admin Dashboard (`/admin`)**:
  - Live **"Currently in the Archive"** ticker showing active visitors.
  - Real database activity stream (*"Someone just opened Thor's archive"*).
  - Visitor management table with search, deletion, and automatic 90-day retention purge.
  - Complete **Content Management (CRUD)**: Create, edit, and delete hero dossiers without code changes.

### 8. ⚡ Easter Eggs & Audio Engine
- **J.A.R.V.I.S. Mode**: Click the Arc Reactor 3 times to summon the Stark AI assistant HUD.
- **Infinity Gauntlet Blip**: Click the "DO NOT SNAP" button to trigger a cosmic particle dust effect on 50% of the UI before restoring reality.
- **Zero-Dependency Web Audio Synth**: Custom synthesized sound effects (Arc hum, Stark HUD blips, gauntlet snaps) with audio toggle.

---

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, Lucide Icons, Canvas Confetti
- **Audio**: Web Audio API (native browser synthesis, 0 external audio MP3 assets needed)
- **Database**: PostgreSQL (Supabase schema provided) + Built-in Local Persistence Engine
- **Deployment**: Vercel & Supabase compatible

---

## 🚀 Quick Start & Local Setup

### 1. Prerequisites
- **Node.js**: v18.17+ or v20+
- **npm** or **pnpm**

### 2. Installation
```bash
git clone https://github.com/manas0306-ops/avengers-archive.git
cd avengers-archive
npm install
```

### 3. Environment Variables (Optional)
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

> **Note**: The application includes a **complete built-in local persistence engine**. If Supabase keys are not set, 100% of all features (visitor tracking, live activity feed, favorites, team builder, admin dashboard, quiz attempts) persist and run seamlessly in local storage!

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗄️ Supabase Database Setup

When deploying to Supabase:
1. Create a new project at [supabase.com](https://supabase.com).
2. Navigate to the **SQL Editor**.
3. Copy and run the contents of [`supabase/schema.sql`](supabase/schema.sql).
4. Add your project URL and Anon key to `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

---

## 🔐 Admin Console Access

To access the Director Console:
1. Navigate to `/admin` or click the settings cog in the navbar.
2. Enter the clearance passcode: `stark` (or `admin123`).
3. You now have access to live visitor metrics, real-time activity streams, and dynamic hero CRUD tools.

---

## 📜 Canonical Sourcing & Legal Notice

This is an educational, non-commercial fan-made project created under fair use principles. All character likenesses, marks, and names are intellectual property of **Marvel Characters, Inc.** and **The Walt Disney Company**.
