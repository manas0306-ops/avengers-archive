export type SquadRole =
  | 'LEADER'
  | 'HEAVY'
  | 'TECH'
  | 'MYSTIC'
  | 'RANGED'
  | 'TACTICAL'
  | 'SUPPORT';

export interface SquadSlot {
  role: SquadRole;
  character_id: string | null;
  character_name?: string;
  character_image?: string;
  role_description: string;
}

export interface SavedSquad {
  id: string;
  user_id?: string;
  name: string;
  mission_codename: string;
  slots: Record<SquadRole, string | null>;
  total_power_score: number;
  synergy_notes: string[];
  created_at: string;
}
