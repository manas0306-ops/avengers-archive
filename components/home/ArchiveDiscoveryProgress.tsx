'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Compass, BookmarkCheck, ArrowRight } from 'lucide-react';
import { CHARACTERS } from '@/data/characters';
import { MOVIES } from '@/data/movies';
import { TIMELINE_EVENTS } from '@/data/timeline';
import { localDb } from '@/lib/store/localDb';
import { useSound } from '@/hooks/useSound';

export function ArchiveDiscoveryProgress() {
  const [visitedHeroes, setVisitedHeroes] = useState<number>(0);
  const [visitedPages, setVisitedPages] = useState<number>(0);
  const [lastCharacterId, setLastCharacterId] = useState<string | null>(null);
  const { playConfirm } = useSound();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const sid = localStorage.getItem('avengers_session_id');
    if (!sid) return;

    const sessions = localDb.getVisitorSessions();
    const currentSession = sessions.find((s) => s.session_id === sid);

    if (currentSession) {
      setVisitedHeroes(currentSession.characters_viewed.length);
      setVisitedPages(currentSession.pages_visited.length);
      if (currentSession.characters_viewed.length > 0) {
        setLastCharacterId(currentSession.characters_viewed[currentSession.characters_viewed.length - 1]);
      }
    }
  }, []);

  const totalHeroes = CHARACTERS.length;
  const totalMovies = MOVIES.length;
  const totalEvents = TIMELINE_EVENTS.length;

  const discoveryPct = Math.min(
    Math.round(
      ((visitedHeroes / totalHeroes) * 0.5 + (Math.min(visitedPages, 6) / 6) * 0.5) * 100
    ),
    100
  );

  const lastChar = lastCharacterId ? CHARACTERS.find((c) => c.id === lastCharacterId) : null;

  return (
    <section className="max-w-6xl mx-auto px-4 my-12">
      <div className="p-6 rounded-2xl bg-archive-card border border-white/10 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Progress Display */}
        <div className="flex-1 w-full space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="flex items-center gap-2 text-zinc-300 font-bold uppercase tracking-wider">
              <Compass className="w-4 h-4 text-marvel-arc animate-spin" />
              ARCHIVE DISCOVERY
            </span>
            <span className="text-marvel-arc font-bold">{discoveryPct}% EXPLORED</span>
          </div>

          <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-marvel-red via-marvel-gold to-marvel-arc transition-all duration-500 rounded-full"
              style={{ width: `${Math.max(discoveryPct, 12)}%` }}
            />
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono text-zinc-400 pt-1">
            <span>
              Heroes: <strong className="text-white">{visitedHeroes}</strong> / {totalHeroes}
            </span>
            <span>•</span>
            <span>
              Movies: <strong className="text-white">{Math.min(visitedPages, totalMovies)}</strong> / {totalMovies}
            </span>
            <span>•</span>
            <span>
              Events: <strong className="text-white">{Math.min(visitedPages * 2, totalEvents)}</strong> / {totalEvents}
            </span>
          </div>
        </div>

        {/* Continue Where Left Off Bookmark */}
        {lastChar && (
          <div className="shrink-0 flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
            <BookmarkCheck className="w-5 h-5 text-marvel-gold" />
            <div className="text-xs font-mono">
              <div className="text-zinc-400">Continue exploration:</div>
              <div className="text-white font-bold">{lastChar.name}</div>
            </div>
            <Link
              href={`/heroes?id=${lastChar.id}`}
              onClick={() => playConfirm()}
              className="p-2 rounded-lg bg-marvel-red/20 hover:bg-marvel-red text-white transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
