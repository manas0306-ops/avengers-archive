import { Character } from '@/types/character';
import { Movie } from '@/types/movie';
import { TimelineEvent } from '@/types/timeline';
import { GalleryItem } from '@/types/gallery';
import { TriviaQuestion, QuizAttempt } from '@/types/trivia';
import { SavedSquad } from '@/types/squad';
import { VisitorSession, VisitorActivityEvent, AnalyticsSummary } from '@/types/visitor';
import { CHARACTERS } from '@/data/characters';
import { MOVIES } from '@/data/movies';
import { TIMELINE_EVENTS } from '@/data/timeline';
import { GALLERY_ITEMS } from '@/data/gallery';
import { TRIVIA_QUESTIONS } from '@/data/trivia';
import { hashString } from '@/lib/utils';

interface DatabaseState {
  characters: Character[];
  movies: Movie[];
  timeline: TimelineEvent[];
  gallery: GalleryItem[];
  trivia: TriviaQuestion[];
  quizAttempts: QuizAttempt[];
  squads: SavedSquad[];
  sessions: VisitorSession[];
  events: VisitorActivityEvent[];
  favorites: Array<{ id: string; sessionId: string; itemType: string; itemId: string; createdAt: string }>;
}

const STORAGE_KEY = 'avengers_archive_db_v1';

class LocalDatabase {
  private state: DatabaseState;

  constructor() {
    this.state = this.getInitialState();
    if (typeof window !== 'undefined') {
      this.loadFromStorage();
    }
  }

  private getInitialState(): DatabaseState {
    return {
      characters: [...CHARACTERS],
      movies: [...MOVIES],
      timeline: [...TIMELINE_EVENTS],
      gallery: [...GALLERY_ITEMS],
      trivia: [...TRIVIA_QUESTIONS],
      quizAttempts: [],
      squads: [],
      sessions: [],
      events: [],
      favorites: []
    };
  }

  private loadFromStorage() {
    if (typeof window === 'undefined') return;
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        this.state = {
          ...this.getInitialState(),
          ...parsed,
          // Guarantee core datasets exist
          characters: parsed.characters?.length ? parsed.characters : [...CHARACTERS],
          movies: parsed.movies?.length ? parsed.movies : [...MOVIES],
          timeline: parsed.timeline?.length ? parsed.timeline : [...TIMELINE_EVENTS],
          gallery: parsed.gallery?.length ? parsed.gallery : [...GALLERY_ITEMS],
          trivia: parsed.trivia?.length ? parsed.trivia : [...TRIVIA_QUESTIONS],
        };
      } else {
        this.saveToStorage();
      }
    } catch (e) {
      console.error('Failed to load local DB from storage:', e);
    }
  }

  private saveToStorage() {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.error('Failed to save local DB to storage:', e);
    }
  }

  // --- CHARACTERS ---
  public getCharacters(): Character[] {
    return this.state.characters;
  }

  public getCharacterById(id: string): Character | undefined {
    return this.state.characters.find((c) => c.id === id);
  }

  public incrementCharacterViews(id: string) {
    const char = this.state.characters.find((c) => c.id === id);
    if (char) {
      char.views_count = (char.views_count || 0) + 1;
      this.saveToStorage();
    }
  }

  public saveCharacter(character: Character) {
    const idx = this.state.characters.findIndex((c) => c.id === character.id);
    if (idx >= 0) {
      this.state.characters[idx] = character;
    } else {
      this.state.characters.push(character);
    }
    this.saveToStorage();
  }

  public deleteCharacter(id: string) {
    this.state.characters = this.state.characters.filter((c) => c.id !== id);
    this.saveToStorage();
  }

  // --- MOVIES ---
  public getMovies(): Movie[] {
    return this.state.movies;
  }

  public saveMovie(movie: Movie) {
    const idx = this.state.movies.findIndex((m) => m.id === movie.id);
    if (idx >= 0) {
      this.state.movies[idx] = movie;
    } else {
      this.state.movies.push(movie);
    }
    this.saveToStorage();
  }

  // --- TIMELINE ---
  public getTimelineEvents(): TimelineEvent[] {
    return this.state.timeline;
  }

  public saveTimelineEvent(event: TimelineEvent) {
    const idx = this.state.timeline.findIndex((e) => e.id === event.id);
    if (idx >= 0) {
      this.state.timeline[idx] = event;
    } else {
      this.state.timeline.push(event);
    }
    this.saveToStorage();
  }

  // --- GALLERY ---
  public getGalleryItems(): GalleryItem[] {
    return this.state.gallery;
  }

  public saveGalleryItem(item: GalleryItem) {
    this.state.gallery.unshift(item);
    this.saveToStorage();
  }

  // --- SQUADS ---
  public getSavedSquads(): SavedSquad[] {
    return this.state.squads;
  }

  public saveSquad(squad: SavedSquad) {
    this.state.squads.unshift(squad);
    this.saveToStorage();
  }

  // --- TRIVIA ---
  public getTriviaQuestions(): TriviaQuestion[] {
    return this.state.trivia;
  }

  public recordQuizAttempt(attempt: QuizAttempt) {
    this.state.quizAttempts.unshift(attempt);
    this.saveToStorage();
  }

  public getQuizAttempts(): QuizAttempt[] {
    return this.state.quizAttempts;
  }

  // --- FAVORITES ---
  public getFavorites(sessionId: string): Array<{ id: string; itemType: string; itemId: string }> {
    return this.state.favorites.filter((f) => f.sessionId === sessionId);
  }

  public toggleFavorite(sessionId: string, itemType: string, itemId: string): boolean {
    const existingIdx = this.state.favorites.findIndex(
      (f) => f.sessionId === sessionId && f.itemType === itemType && f.itemId === itemId
    );
    let added = false;
    if (existingIdx >= 0) {
      this.state.favorites.splice(existingIdx, 1);
      // decrement character counter if applicable
      if (itemType === 'CHARACTER') {
        const char = this.state.characters.find((c) => c.id === itemId);
        if (char && char.favorites_count && char.favorites_count > 0) {
          char.favorites_count -= 1;
        }
      }
    } else {
      this.state.favorites.push({
        id: `fav-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
        sessionId,
        itemType,
        itemId,
        createdAt: new Date().toISOString()
      });
      added = true;
      if (itemType === 'CHARACTER') {
        const char = this.state.characters.find((c) => c.id === itemId);
        if (char) {
          char.favorites_count = (char.favorites_count || 0) + 1;
        }
      }
    }
    this.saveToStorage();
    return added;
  }

  // --- VISITOR SESSIONS & TRACKING ---
  public touchVisitorSession(params: {
    sessionId: string;
    path: string;
    characterId?: string;
    displayName?: string;
    deviceType: 'desktop' | 'mobile' | 'tablet';
    browser: string;
    region?: string;
  }): VisitorSession {
    const now = new Date().toISOString();
    let session = this.state.sessions.find((s) => s.session_id === params.sessionId);

    if (!session) {
      // Calculate random anonymous 3-digit ID like "Anonymous Visitor #042"
      const anonNum = Math.floor(10 + Math.random() * 90);
      session = {
        id: `vis-${Date.now()}`,
        session_id: params.sessionId,
        visitor_hash: hashString(params.sessionId),
        display_name: params.displayName || `Anonymous Visitor #${anonNum}`,
        is_authenticated: Boolean(params.displayName && !params.displayName.startsWith('Anonymous')),
        first_visit: now,
        last_visit: now,
        total_sessions: 1,
        pages_visited: [params.path],
        characters_viewed: params.characterId ? [params.characterId] : [],
        total_time_spent_seconds: 15,
        device_type: params.deviceType,
        browser: params.browser,
        region: params.region || 'Earth-616 Network',
        referrer: typeof document !== 'undefined' ? document.referrer || 'Direct Entry' : 'Direct',
        favorite_sections: [params.path],
        most_viewed_character: params.characterId,
        is_online: true,
        last_heartbeat: now,
      };
      this.state.sessions.push(session);
    } else {
      session.last_visit = now;
      session.last_heartbeat = now;
      session.is_online = true;
      session.total_time_spent_seconds += 15;
      if (params.displayName && !params.displayName.startsWith('Anonymous')) {
        session.display_name = params.displayName;
        session.is_authenticated = true;
      }
      if (!session.pages_visited.includes(params.path)) {
        session.pages_visited.push(params.path);
      }
      if (params.characterId && !session.characters_viewed.includes(params.characterId)) {
        session.characters_viewed.push(params.characterId);
        session.most_viewed_character = params.characterId;
      }
    }

    this.saveToStorage();
    return session;
  }

  public recordEvent(sessionId: string, eventType: VisitorActivityEvent['event_type'], detail: string) {
    const session = this.state.sessions.find((s) => s.session_id === sessionId);
    const displayName = session?.display_name || 'Anonymous Visitor';
    const evt: VisitorActivityEvent = {
      id: `evt-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      session_id: sessionId,
      visitor_display_name: displayName,
      event_type: eventType,
      detail,
      timestamp: new Date().toISOString()
    };
    this.state.events.unshift(evt);
    // Keep max 100 recent events
    if (this.state.events.length > 100) {
      this.state.events.pop();
    }
    this.saveToStorage();
    return evt;
  }

  public getVisitorSessions(): VisitorSession[] {
    const nowTime = Date.now();
    // Update online status (heartbeat within last 60 seconds)
    return this.state.sessions.map((s) => {
      const isStillOnline = nowTime - new Date(s.last_heartbeat).getTime() < 90000;
      return { ...s, is_online: isStillOnline };
    });
  }

  public deleteVisitorSession(sessionId: string) {
    this.state.sessions = this.state.sessions.filter((s) => s.session_id !== sessionId);
    this.state.events = this.state.events.filter((e) => e.session_id !== sessionId);
    this.state.favorites = this.state.favorites.filter((f) => f.sessionId !== sessionId);
    this.saveToStorage();
  }

  public clearOldSessions(days: number = 90) {
    const cutoff = Date.now() - days * 24 * 60 * 60 * 1000;
    this.state.sessions = this.state.sessions.filter((s) => new Date(s.last_visit).getTime() > cutoff);
    this.saveToStorage();
  }

  public getRecentEvents(): VisitorActivityEvent[] {
    return this.state.events.slice(0, 20);
  }

  // --- ANALYTICS COMPUTATION ---
  public getAnalytics(): AnalyticsSummary {
    const sessions = this.getVisitorSessions();
    const nowTime = Date.now();
    const onlineNow = sessions.filter((s) => s.is_online).length;

    // Today / week / month filter
    const oneDayAgo = nowTime - 24 * 60 * 60 * 1000;
    const oneWeekAgo = nowTime - 7 * 24 * 60 * 60 * 1000;
    const oneMonthAgo = nowTime - 30 * 24 * 60 * 60 * 1000;

    const todayCount = sessions.filter((s) => new Date(s.last_visit).getTime() >= oneDayAgo).length;
    const weekCount = sessions.filter((s) => new Date(s.last_visit).getTime() >= oneWeekAgo).length;
    const monthCount = sessions.filter((s) => new Date(s.last_visit).getTime() >= oneMonthAgo).length;

    // Device breakdown
    const devices = { desktop: 0, mobile: 0, tablet: 0 };
    sessions.forEach((s) => {
      if (devices[s.device_type] !== undefined) {
        devices[s.device_type]++;
      } else {
        devices.desktop++;
      }
    });

    // Most viewed hero
    const heroViewCounts: Record<string, number> = {};
    sessions.forEach((s) => {
      s.characters_viewed.forEach((c) => {
        heroViewCounts[c] = (heroViewCounts[c] || 0) + 1;
      });
    });
    let topHeroId = 'iron-man';
    let maxHeroViews = 0;
    Object.entries(heroViewCounts).forEach(([h, count]) => {
      if (count > maxHeroViews) {
        maxHeroViews = count;
        topHeroId = h;
      }
    });
    const topHeroObj = this.state.characters.find((c) => c.id === topHeroId);

    // Most visited page
    const pageCounts: Record<string, number> = {};
    sessions.forEach((s) => {
      s.pages_visited.forEach((p) => {
        pageCounts[p] = (pageCounts[p] || 0) + 1;
      });
    });
    let topPage = '/heroes';
    let maxPageViews = 0;
    Object.entries(pageCounts).forEach(([p, count]) => {
      if (count > maxPageViews) {
        maxPageViews = count;
        topPage = p;
      }
    });

    // Most favorited hero
    const charFavCounts: Record<string, number> = {};
    this.state.favorites.filter((f) => f.itemType === 'CHARACTER').forEach((f) => {
      charFavCounts[f.itemId] = (charFavCounts[f.itemId] || 0) + 1;
    });
    let topFavId = 'iron-man';
    let maxFavs = 0;
    Object.entries(charFavCounts).forEach(([id, count]) => {
      if (count > maxFavs) {
        maxFavs = count;
        topFavId = id;
      }
    });
    const topFavObj = this.state.characters.find((c) => c.id === topFavId);

    // Average duration
    const totalDuration = sessions.reduce((acc, s) => acc + (s.total_time_spent_seconds || 60), 0);
    const avgDuration = sessions.length ? Math.round(totalDuration / sessions.length) : 180;

    return {
      total_visitors: sessions.length || 1,
      online_now: onlineNow > 0 ? onlineNow : 1,
      today_visitors: todayCount || 1,
      this_week_visitors: weekCount || 1,
      this_month_visitors: monthCount || 1,
      total_sessions: sessions.reduce((acc, s) => acc + (s.total_sessions || 1), 0) || 1,
      most_viewed_hero: {
        name: topHeroObj?.name || 'Iron Man',
        count: maxHeroViews || (topHeroObj?.views_count || 1)
      },
      most_visited_page: {
        page: topPage,
        count: maxPageViews || 1
      },
      most_favorited_hero: {
        name: topFavObj?.name || 'Iron Man',
        count: maxFavs || (topFavObj?.favorites_count || 1)
      },
      avg_session_duration_seconds: avgDuration,
      device_breakdown: devices.desktop + devices.mobile + devices.tablet === 0
        ? { desktop: 1, mobile: 0, tablet: 0 }
        : devices,
      popular_heroes: this.state.characters.slice(0, 5).map((c) => ({
        name: c.name,
        views: c.views_count || 100,
        favorites: c.favorites_count || 50
      })),
      recent_events: this.getRecentEvents()
    };
  }
}

export const localDb = new LocalDatabase();
