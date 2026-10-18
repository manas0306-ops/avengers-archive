export type ArmorCategory =
  | 'COMBAT'
  | 'RAPID_DEPLOYMENT'
  | 'STEALTH'
  | 'HEAVY_DUTY'
  | 'SPECIALIZED'
  | 'NANOTECHNOLOGY'
  | 'MODULAR'
  | 'SPACE'
  | 'SUBMERGENCE'
  | 'AUTONOMOUS';

export type ArmorStatus = 'ACTIVE' | 'DESTROYED' | 'RETIRED' | 'MUSEUM' | 'FALLEN' | 'UNKNOWN';

export interface IronManArmor {
  mark: number;
  romanNumeral: string; // e.g. "Mark LXXXV"
  name: string; // e.g. "Nanotech Prime / Endgame Armor" or "Silver Centurion"
  nickname?: string;
  firstAppearance: {
    title: string;
    year: number;
    timelineEvent?: string;
  };
  category: ArmorCategory;
  status: ArmorStatus;
  materials: {
    composition: string;
    canonVerified: boolean;
    notes?: string;
  };
  propulsionAndFlight: {
    flightSpeed: string; // e.g. "Mach 3+", "Hypersonic", "Unknown"
    thrusterType: string;
    propulsionNotes?: string;
  };
  powerSystem: {
    arcReactorCore: string;
    powerOutput?: string;
    chargeDuration?: string;
  };
  weaponsAndPayload: string[];
  specialFeatures: string[];
  limitationsAndDamage: string[];
  associatedBattles: string[];
  developmentHistory: string;
  image: string;
  verificationStatus: 'VERIFIED_ON_SCREEN' | 'CANONICAL_REFERENCE' | 'EDITORIAL_UNKNOWN_FIELDS';
  unknownFields?: string[];
  sourceUrl: string;
}

export type InventionCategory =
  | 'ARMOR_AND_EXOSKELETON'
  | 'POWER_GENERATION'
  | 'ARTIFICIAL_INTELLIGENCE'
  | 'DEFENSE_NETWORK'
  | 'NANOTECHNOLOGY'
  | 'HOLOGRAPHIC_INTERFACE'
  | 'MEDICAL_AND_NEUROLOGICAL'
  | 'TEMPORAL_MECHANICS'
  | 'VEHICLE_AND_AEROSPACE'
  | 'AUTONOMOUS';

export interface StarkInvention {
  id: string;
  name: string;
  designation?: string;
  category: InventionCategory;
  yearIntroduced: number;
  firstAppearance: string;
  leadCreator: 'Tony Stark' | 'Howard Stark' | 'Tony Stark & Bruce Banner' | 'Tony Stark & Peter Parker' | 'Tony Stark & Rocket Raccoon';
  collaborators?: string[];
  purpose: string;
  capabilities: string[];
  limitations: string[];
  canonStatus: 'CANONICAL_616' | 'PROTOTYPE' | 'COLLABORATIVE';
  relatedCharacters: string[];
  relatedArmors?: string[];
  keyAppearances: string[];
  description: string;
  sourceUrl: string;
}
