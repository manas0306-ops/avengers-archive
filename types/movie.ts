export interface Movie {
  id: string;
  title: string;
  phase: number;
  saga: 'The Infinity Saga' | 'The Multiverse Saga';
  release_year: number;
  release_date: string;
  chronological_order: number;
  release_order: number;
  runtime_minutes: number;
  directors: string[];
  major_characters: string[];
  main_conflict: string;
  synopsis: string;
  important_outcome: string;
  impact_on_avengers: string;
  poster_url: string;
  backdrop_url: string;
  trailer_url: string;
  official_site_url: string;
  box_office: string;
  rotten_tomatoes?: string;
  spoilers: string[];
}
