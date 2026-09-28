export type CharacterCategory =
  | 'CORE AVENGERS'
  | 'FORMER AVENGERS'
  | 'NEWER / SUCCESSOR AVENGERS'
  | 'AVENGERS-ALLIED HEROES'
  | 'IMPORTANT MCU HEROES'
  | 'COMIC-ONLY AVENGERS';

export type CharacterStatus =
  | 'ACTIVE'
  | 'RETIRED'
  | 'FALLEN'
  | 'UNKNOWN'
  | 'MIA'
  | 'LEGACY'
  | 'ALTERNATE UNIVERSE'
  | 'AFFILIATED HERO';

export interface CharacterRelationship {
  character_id: string;
  character_name: string;
  relation: 'Mentor' | 'Friend' | 'Team' | 'Family' | 'Rival' | 'Ally' | 'Protege' | 'Partner';
  notes: string;
}

export interface CharacterTimelineEntry {
  year: string;
  title: string;
  description: string;
  spoiler?: boolean;
}

export interface CharacterQuote {
  quote: string;
  context?: string;
  movie?: string;
}

export interface CharacterStoryline {
  origin: string;
  the_call: string;
  rise: string;
  greatest_battles: string;
  losses: string;
  turning_point: string;
  legacy: string;
  where_are_they_now: string;
}

export interface WhereAreTheyNowDetails {
  current_mcu_status: string;
  last_known_appearance: string;
  post_endgame_development: string;
  future_status: 'CONFIRMED' | 'UPCOMING' | 'ANNOUNCED' | 'UNCONFIRMED' | 'NONE';
  future_project_name?: string;
  notes: string;
  source: string;
}

export interface Character {
  id: string;
  name: string;
  real_name: string;
  hero_title: string;
  category: CharacterCategory;
  status: CharacterStatus;
  team_status: string;
  first_appearance: string;
  last_appearance: string;
  origin: string;
  powers: string[];
  weapons: string[];
  affiliations: string[];
  storyline: CharacterStoryline;
  timeline: CharacterTimelineEntry[];
  relationships: CharacterRelationship[];
  quotes: CharacterQuote[];
  fun_facts: string[];
  hero_image: string;
  background_image: string;
  thumbnail: string;
  gallery_images: string[];
  accent_theme: {
    primary: string;
    glow: string;
    border: string;
  };
  where_are_they_now: WhereAreTheyNowDetails;
  source_urls: Array<{ label: string; url: string }>;
  last_verified: string;
  content_version: string;
  views_count?: number;
  favorites_count?: number;
}
