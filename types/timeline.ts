export interface TimelineEvent {
  id: string;
  year: string;
  era: string;
  phase: number;
  title: string;
  tagline: string;
  what_happened: string;
  who_was_involved: string[];
  why_it_mattered: string;
  consequences: string[];
  location: string;
  related_movie_id: string;
  image_url: string;
  spoiler?: boolean;
  category: 'FOUNDATION' | 'BATTLE' | 'CRISIS' | 'COSMIC' | 'MULTIVERSE';
}
