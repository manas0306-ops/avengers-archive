export type ContinuityUniverse =
  | 'EARTH_616_MAIN'
  | 'MULTIVERSE_VARIANT'
  | 'ALTERNATE_TIMELINE'
  | 'NON_MCU_ADAPTATION';

export type AppearanceRole =
  | 'LEAD'
  | 'MAIN_CAST'
  | 'SUPPORTING'
  | 'CAMEO'
  | 'POST_CREDITS'
  | 'VOICE_ONLY'
  | 'ARCHIVAL_FOOTAGE'
  | 'MENTION_ONLY'
  | 'MULTIVERSE_VARIANT';

export type MediaFormat = 'FEATURE_FILM' | 'DISNEY_PLUS_SERIES' | 'SPECIAL_PRESENTATION' | 'ANIMATED_CANON';

export interface VerifiedAppearance {
  id: string;
  characterId: string;
  title: string;
  releaseDate: string; // ISO format YYYY-MM-DD
  releaseYear: number;
  format: MediaFormat;
  role: AppearanceRole;
  isOnScreen: boolean;
  majorEvents: string[];
  canonicalStatus: 'RELEASED' | 'OFFICIALLY_CONFIRMED' | 'RUMORED_UNVERIFIED';
  sourceReference: {
    title: string;
    url: string;
    verifiedDate: string;
  };
}

export interface CharacterAppearanceSummary {
  firstReleasedAppearance: {
    title: string;
    releaseDate: string;
    year: number;
    role: AppearanceRole;
  };
  latestReleasedAppearance: {
    title: string;
    releaseDate: string;
    year: number;
    role: AppearanceRole;
    isOnScreen: boolean;
  };
  totalVerifiedCount: number;
  upcomingConfirmedAppearances: Array<{
    title: string;
    projectedDate: string;
    status: 'IN_PRODUCTION' | 'POST_PRODUCTION' | 'ANNOUNCED';
    officialSourceUrl: string;
  }>;
  rumoredAppearances: Array<{
    title: string;
    notes: string;
    verificationNotice: string;
  }>;
}

export interface PowersBreakdown {
  naturalAbilities: string[];
  enhancedAbilities: string[];
  formalTrainingAndSkills: string[];
  specialPowers: string[];
  powerSource: string;
  limitations: string[];
  knownWeaknesses: string[];
  technologicalDependencies: string[];
  capabilityEvolution: Array<{
    eraOrMovie: string;
    capabilityChange: string;
    catalyst: string;
  }>;
  inherentVsEquipment: {
    inherent: string[];
    equipmentDependent: string[];
  };
}

export type RelationshipType =
  | 'FAMILY'
  | 'FRIEND_AND_ALLY'
  | 'MENTOR_AND_STUDENT'
  | 'TEAMMATE_CURRENT'
  | 'TEAMMATE_FORMER'
  | 'RIVAL_AND_ANTAGONIST'
  | 'SUCCESSOR_AND_LEGACY';

export interface HeroRelationshipDetail {
  targetId: string;
  targetName: string;
  relationshipType: RelationshipType;
  relationshipRole: string; // e.g. "Lifelong best friend and armored wingman"
  continuityContext: string;
  keySharedAppearances: string[];
  currentStatus: string;
}

export interface HeroSpecializedModule {
  moduleId: string;
  heroSlug: string;
  heroName: string;
  moduleType:
    | 'CAPTAIN_SHIELD_VAULT'
    | 'THOR_MJOLNIR_LORE'
    | 'HULK_TRANSFORMATION_MATRIX'
    | 'WIDOW_BLACK_OPS_DOSSIER'
    | 'HAWKEYE_TRICK_ARROWS'
    | 'SPIDERMAN_SUIT_LAB'
    | 'STRANGE_MYSTIC_SANCTUM'
    | 'WANDA_CHAOS_SPECTRUM'
    | 'VISION_SYNTH_CORE'
    | 'ANTMAN_QUANTUM_TECH'
    | 'WARMACHINE_ARSENAL'
    | 'CAPTAIN_MARVEL_BINARY'
    | 'SHANGCHI_TEN_RINGS'
    | 'BLACKPANTHER_VIBRANIUM_LAB'
    | 'GENERIC_HERO_EQUIPMENT';
  title: string;
  subtitle: string;
  description: string;
  items: Array<{
    id: string;
    name: string;
    designation?: string;
    type: string;
    firstAppearance: string;
    capabilities: string[];
    materialsOrOrigin: string;
    damageOrStatus?: string;
    image?: string;
    notes: string;
  }>;
  interactiveMeta?: Record<string, unknown>;
}

export interface SourceCitation {
  id: string;
  title: string;
  url: string;
  sourceType: 'OFFICIAL_MARVEL_STUDIOS' | 'CANONICAL_FILM_EVIDENCE' | 'PRESS_RELEASE' | 'PRODUCTION_DOCUMENT';
  verifiedDate: string;
  continuityLabel: ContinuityUniverse;
  confidenceScore: 100 | 90 | 80 | 50; // 100 for official released film
  notes?: string;
}
