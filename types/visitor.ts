export interface VisitorSession {
  id: string;
  session_id: string;
  visitor_hash: string;
  display_name: string;
  is_authenticated: boolean;
  user_id?: string;
  first_visit: string;
  last_visit: string;
  total_sessions: number;
  pages_visited: string[];
  characters_viewed: string[];
  total_time_spent_seconds: number;
  device_type: 'desktop' | 'mobile' | 'tablet';
  browser: string;
  region: string;
  referrer: string;
  favorite_sections: string[];
  most_viewed_character?: string;
  is_online: boolean;
  last_heartbeat: string;
}

export interface VisitorActivityEvent {
  id: string;
  session_id: string;
  visitor_display_name: string;
  event_type: 'PAGE_VIEW' | 'HERO_VIEW' | 'TIMELINE_EXPLORE' | 'FAVORITE_ADD' | 'QUIZ_PLAY' | 'SQUAD_SAVE' | 'SNAP_TRIGGERED';
  detail: string;
  timestamp: string;
}

export interface AnalyticsSummary {
  total_visitors: number;
  online_now: number;
  today_visitors: number;
  this_week_visitors: number;
  this_month_visitors: number;
  total_sessions: number;
  most_viewed_hero: { name: string; count: number };
  most_visited_page: { page: string; count: number };
  most_favorited_hero: { name: string; count: number };
  avg_session_duration_seconds: number;
  device_breakdown: { desktop: number; mobile: number; tablet: number };
  popular_heroes: Array<{ name: string; views: number; favorites: number }>;
  recent_events: VisitorActivityEvent[];
}
