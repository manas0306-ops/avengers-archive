-- =======================================================
-- AVENGERS ARCHIVE - POSTGRESQL SCHEMA (SUPABASE)
-- =======================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. CHARACTERS TABLE
CREATE TABLE IF NOT EXISTS public.characters (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    real_name TEXT NOT NULL,
    hero_title TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('CORE AVENGERS', 'FORMER AVENGERS', 'NEWER / SUCCESSOR AVENGERS', 'AVENGERS-ALLIED HEROES', 'IMPORTANT MCU HEROES', 'COMIC-ONLY AVENGERS')),
    status TEXT NOT NULL CHECK (status IN ('ACTIVE', 'RETIRED', 'FALLEN', 'UNKNOWN', 'MIA', 'LEGACY', 'ALTERNATE UNIVERSE', 'AFFILIATED HERO')),
    team_status TEXT NOT NULL,
    first_appearance TEXT NOT NULL,
    last_appearance TEXT NOT NULL,
    origin TEXT NOT NULL,
    powers JSONB NOT NULL DEFAULT '[]'::jsonb,
    weapons JSONB NOT NULL DEFAULT '[]'::jsonb,
    affiliations JSONB NOT NULL DEFAULT '[]'::jsonb,
    storyline JSONB NOT NULL DEFAULT '{}'::jsonb,
    timeline JSONB NOT NULL DEFAULT '[]'::jsonb,
    relationships JSONB NOT NULL DEFAULT '[]'::jsonb,
    quotes JSONB NOT NULL DEFAULT '[]'::jsonb,
    fun_facts JSONB NOT NULL DEFAULT '[]'::jsonb,
    hero_image TEXT NOT NULL,
    background_image TEXT NOT NULL,
    thumbnail TEXT NOT NULL,
    gallery_images JSONB NOT NULL DEFAULT '[]'::jsonb,
    accent_theme JSONB NOT NULL DEFAULT '{"primary": "#e23636", "glow": "rgba(226, 54, 54, 0.4)", "border": "rgba(226, 54, 54, 0.3)"}'::jsonb,
    where_are_they_now JSONB NOT NULL DEFAULT '{}'::jsonb,
    source_urls JSONB NOT NULL DEFAULT '[]'::jsonb,
    last_verified TEXT NOT NULL DEFAULT '2026-09-28',
    content_version TEXT NOT NULL DEFAULT 'v1.0.0',
    views_count INT DEFAULT 0,
    favorites_count INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. MOVIES TABLE
CREATE TABLE IF NOT EXISTS public.movies (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    phase INT NOT NULL,
    saga TEXT NOT NULL,
    release_year INT NOT NULL,
    release_date TEXT NOT NULL,
    release_order INT NOT NULL,
    chronological_order INT NOT NULL,
    runtime_minutes INT NOT NULL,
    directors JSONB NOT NULL DEFAULT '[]'::jsonb,
    major_characters JSONB NOT NULL DEFAULT '[]'::jsonb,
    main_conflict TEXT NOT NULL,
    synopsis TEXT NOT NULL,
    important_outcome TEXT NOT NULL,
    impact_on_avengers TEXT NOT NULL,
    poster_url TEXT NOT NULL,
    backdrop_url TEXT NOT NULL,
    trailer_url TEXT NOT NULL,
    official_site_url TEXT NOT NULL,
    box_office TEXT NOT NULL,
    rotten_tomatoes TEXT,
    spoilers JSONB NOT NULL DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. TIMELINE EVENTS TABLE
CREATE TABLE IF NOT EXISTS public.timeline_events (
    id TEXT PRIMARY KEY,
    year TEXT NOT NULL,
    era TEXT NOT NULL,
    phase INT NOT NULL,
    title TEXT NOT NULL,
    tagline TEXT NOT NULL,
    what_happened TEXT NOT NULL,
    who_was_involved JSONB NOT NULL DEFAULT '[]'::jsonb,
    why_it_mattered TEXT NOT NULL,
    consequences JSONB NOT NULL DEFAULT '[]'::jsonb,
    location TEXT NOT NULL,
    related_movie_id TEXT REFERENCES public.movies(id) ON DELETE SET NULL,
    image_url TEXT NOT NULL,
    spoiler BOOLEAN DEFAULT false,
    category TEXT NOT NULL CHECK (category IN ('FOUNDATION', 'BATTLE', 'CRISIS', 'COSMIC', 'MULTIVERSE')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. GALLERY & WALLPAPERS TABLE
CREATE TABLE IF NOT EXISTS public.gallery_items (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('ALL', 'HEROES', 'TEAM', 'BATTLES', 'POSTERS', 'WALLPAPERS', 'BTS')),
    character_id TEXT REFERENCES public.characters(id) ON DELETE SET NULL,
    character_name TEXT,
    movie TEXT,
    year INT,
    url TEXT NOT NULL,
    thumbnail_url TEXT NOT NULL,
    source TEXT NOT NULL,
    license_note TEXT NOT NULL,
    aspect_ratio TEXT NOT NULL,
    resolution TEXT,
    tags JSONB NOT NULL DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. VISITOR TRACKING & SESSIONS TABLE (Privacy Preserving)
CREATE TABLE IF NOT EXISTS public.visitor_sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id TEXT UNIQUE NOT NULL,
    visitor_hash TEXT NOT NULL,
    display_name TEXT NOT NULL,
    is_authenticated BOOLEAN DEFAULT false,
    user_id UUID,
    first_visit TIMESTAMPTZ DEFAULT NOW(),
    last_visit TIMESTAMPTZ DEFAULT NOW(),
    total_sessions INT DEFAULT 1,
    pages_visited JSONB NOT NULL DEFAULT '[]'::jsonb,
    characters_viewed JSONB NOT NULL DEFAULT '[]'::jsonb,
    total_time_spent_seconds INT DEFAULT 0,
    device_type TEXT NOT NULL DEFAULT 'desktop',
    browser TEXT NOT NULL DEFAULT 'Unknown',
    region TEXT NOT NULL DEFAULT 'Global',
    referrer TEXT NOT NULL DEFAULT '',
    favorite_sections JSONB NOT NULL DEFAULT '[]'::jsonb,
    most_viewed_character TEXT,
    is_online BOOLEAN DEFAULT true,
    last_heartbeat TIMESTAMPTZ DEFAULT NOW()
);

-- 6. VISITOR ACTIVITY EVENTS TABLE (Live activity ticker)
CREATE TABLE IF NOT EXISTS public.visitor_events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id TEXT NOT NULL REFERENCES public.visitor_sessions(session_id) ON DELETE CASCADE,
    visitor_display_name TEXT NOT NULL,
    event_type TEXT NOT NULL,
    detail TEXT NOT NULL,
    timestamp TIMESTAMPTZ DEFAULT NOW()
);

-- 7. FAVORITES TABLE
CREATE TABLE IF NOT EXISTS public.favorites (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID,
    session_id TEXT NOT NULL,
    item_type TEXT NOT NULL CHECK (item_type IN ('CHARACTER', 'MOVIE', 'EVENT', 'GALLERY')),
    item_id TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. SAVED SQUADS TABLE (Avengers Team Builder)
CREATE TABLE IF NOT EXISTS public.saved_squads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID,
    name TEXT NOT NULL,
    mission_codename TEXT NOT NULL,
    slots JSONB NOT NULL,
    total_power_score INT DEFAULT 0,
    synergy_notes JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 9. TRIVIA QUIZ QUESTIONS & ATTEMPTS
CREATE TABLE IF NOT EXISTS public.trivia_questions (
    id TEXT PRIMARY KEY,
    question TEXT NOT NULL,
    options JSONB NOT NULL,
    correct_index INT NOT NULL,
    explanation TEXT NOT NULL,
    category TEXT NOT NULL,
    character_id TEXT REFERENCES public.characters(id) ON DELETE SET NULL,
    movie_id TEXT REFERENCES public.movies(id) ON DELETE SET NULL,
    difficulty TEXT NOT NULL DEFAULT 'MEDIUM'
);

CREATE TABLE IF NOT EXISTS public.trivia_attempts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_display_name TEXT NOT NULL,
    total_questions INT NOT NULL,
    score INT NOT NULL,
    mode TEXT NOT NULL,
    timestamp TIMESTAMPTZ DEFAULT NOW()
);

-- INDEXES FOR PERFORMANCE
CREATE INDEX IF NOT EXISTS idx_characters_status ON public.characters(status);
CREATE INDEX IF NOT EXISTS idx_characters_category ON public.characters(category);
CREATE INDEX IF NOT EXISTS idx_movies_release_year ON public.movies(release_year);
CREATE INDEX IF NOT EXISTS idx_timeline_year ON public.timeline_events(year);
CREATE INDEX IF NOT EXISTS idx_visitor_sessions_last_heartbeat ON public.visitor_sessions(last_heartbeat);
CREATE INDEX IF NOT EXISTS idx_visitor_events_timestamp ON public.visitor_events(timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_favorites_session ON public.favorites(session_id);

-- ENABLE ROW LEVEL SECURITY
ALTER TABLE public.characters ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.movies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.timeline_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.visitor_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.visitor_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.saved_squads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.trivia_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.trivia_attempts ENABLE ROW LEVEL SECURITY;

-- POLICIES: Public Read for Catalog, Auth/Admin for Analytics and Modifications
CREATE POLICY "Public characters are viewable by everyone" ON public.characters FOR SELECT USING (true);
CREATE POLICY "Public movies are viewable by everyone" ON public.movies FOR SELECT USING (true);
CREATE POLICY "Public timeline is viewable by everyone" ON public.timeline_events FOR SELECT USING (true);
CREATE POLICY "Public gallery is viewable by everyone" ON public.gallery_items FOR SELECT USING (true);
CREATE POLICY "Public trivia questions are viewable by everyone" ON public.trivia_questions FOR SELECT USING (true);
CREATE POLICY "Public trivia attempts can be inserted" ON public.trivia_attempts FOR INSERT WITH CHECK (true);
CREATE POLICY "Public visitor sessions can be updated" ON public.visitor_sessions FOR ALL USING (true);
CREATE POLICY "Public visitor events can be inserted" ON public.visitor_events FOR INSERT WITH CHECK (true);
CREATE POLICY "Favorites are manage-able by session" ON public.favorites FOR ALL USING (true);
CREATE POLICY "Saved squads can be viewed and inserted" ON public.saved_squads FOR ALL USING (true);
