'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, X, Users, Film, Clock, Quote, Sparkles } from 'lucide-react';
import { CHARACTERS } from '@/data/characters';
import { MOVIES } from '@/data/movies';
import { TIMELINE_EVENTS } from '@/data/timeline';
import { useSound } from '@/hooks/useSound';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { playHover, playConfirm } = useSound();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Trigger open via custom event or parent
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();

  // Search Characters
  const matchedCharacters = q
    ? CHARACTERS.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.real_name.toLowerCase().includes(q) ||
          c.hero_title.toLowerCase().includes(q) ||
          c.powers.some((p) => p.toLowerCase().includes(q))
      ).slice(0, 4)
    : [];

  // Search Movies
  const matchedMovies = q
    ? MOVIES.filter(
        (m) =>
          m.title.toLowerCase().includes(q) ||
          m.major_characters.some((c) => c.toLowerCase().includes(q)) ||
          m.main_conflict.toLowerCase().includes(q)
      ).slice(0, 3)
    : [];

  // Search Timeline Events
  const matchedEvents = q
    ? TIMELINE_EVENTS.filter(
        (e) =>
          e.title.toLowerCase().includes(q) ||
          e.year.includes(q) ||
          e.what_happened.toLowerCase().includes(q) ||
          e.who_was_involved.some((w) => w.toLowerCase().includes(q))
      ).slice(0, 3)
    : [];

  // Search Quotes
  const matchedQuotes: Array<{ character: string; quote: string; id: string }> = [];
  if (q) {
    CHARACTERS.forEach((c) => {
      c.quotes.forEach((item) => {
        if (item.quote.toLowerCase().includes(q)) {
          matchedQuotes.push({ character: c.name, quote: item.quote, id: c.id });
        }
      });
    });
  }

  const hasResults =
    matchedCharacters.length > 0 ||
    matchedMovies.length > 0 ||
    matchedEvents.length > 0 ||
    matchedQuotes.length > 0;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl overflow-hidden rounded-2xl bg-archive-darkest border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.95)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-white/10 bg-white/5">
          <Search className="w-5 h-5 text-marvel-arc mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search heroes, movies, battles, quotes, or powers (e.g. 'Iron', 'Nano', 'Wakanda')..."
            className="w-full bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none font-sans"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 rounded text-zinc-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block ml-2 px-1.5 py-0.5 text-[10px] font-mono text-zinc-400 bg-white/10 rounded">
            ESC
          </kbd>
        </div>

        {/* Results Container */}
        <div className="max-h-[65vh] overflow-y-auto p-4 space-y-6">
          {!q && (
            <div className="py-8 text-center text-zinc-500 font-mono text-xs">
              <Sparkles className="w-6 h-6 mx-auto mb-2 text-marvel-arc/60 animate-pulse" />
              <span>Type a character name, power, quote, or MCU event to begin querying Earth-616 records...</span>
            </div>
          )}

          {q && !hasResults && (
            <div className="py-8 text-center text-zinc-400 font-mono text-xs">
              No archive records found matching &ldquo;<span className="text-white">{query}</span>&rdquo;.
            </div>
          )}

          {/* Characters */}
          {matchedCharacters.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-[11px] font-mono tracking-wider text-marvel-red font-bold uppercase mb-2">
                <Users className="w-3.5 h-3.5" /> Characters ({matchedCharacters.length})
              </div>
              <div className="space-y-1.5">
                {matchedCharacters.map((char) => (
                  <Link
                    key={char.id}
                    href={`/heroes?id=${char.id}`}
                    onClick={() => {
                      playConfirm();
                      onClose();
                    }}
                    onMouseEnter={() => playHover()}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-marvel-red/40 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg overflow-hidden border border-white/10">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={char.thumbnail}
                          alt={char.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-marvel-red transition-colors">
                          {char.name}
                        </div>
                        <div className="text-xs text-zinc-400 font-mono">
                          {char.real_name} • {char.hero_title}
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400 group-hover:text-white">
                      VIEW →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Movies */}
          {matchedMovies.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-[11px] font-mono tracking-wider text-marvel-arc font-bold uppercase mb-2">
                <Film className="w-3.5 h-3.5" /> Movies ({matchedMovies.length})
              </div>
              <div className="space-y-1.5">
                {matchedMovies.map((movie) => (
                  <Link
                    key={movie.id}
                    href={`/movies?id=${movie.id}`}
                    onClick={() => {
                      playConfirm();
                      onClose();
                    }}
                    onMouseEnter={() => playHover()}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-marvel-arc/40 transition-all group"
                  >
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-marvel-arc transition-colors">
                        {movie.title} ({movie.release_year})
                      </div>
                      <div className="text-xs text-zinc-400 font-mono line-clamp-1">
                        {movie.main_conflict}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400 group-hover:text-white">
                      DETAILS →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Timeline Events */}
          {matchedEvents.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-[11px] font-mono tracking-wider text-marvel-gold font-bold uppercase mb-2">
                <Clock className="w-3.5 h-3.5" /> Timeline Events ({matchedEvents.length})
              </div>
              <div className="space-y-1.5">
                {matchedEvents.map((evt) => (
                  <Link
                    key={evt.id}
                    href={`/timeline?event=${evt.id}`}
                    onClick={() => {
                      playConfirm();
                      onClose();
                    }}
                    onMouseEnter={() => playHover()}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-marvel-gold/40 transition-all group"
                  >
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-marvel-gold transition-colors">
                        {evt.year} — {evt.title}
                      </div>
                      <div className="text-xs text-zinc-400 font-mono line-clamp-1">
                        {evt.tagline}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400 group-hover:text-white">
                      EXPLORE →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Quotes */}
          {matchedQuotes.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-[11px] font-mono tracking-wider text-purple-400 font-bold uppercase mb-2">
                <Quote className="w-3.5 h-3.5" /> Quotes ({matchedQuotes.length})
              </div>
              <div className="space-y-1.5">
                {matchedQuotes.slice(0, 3).map((qItem, idx) => (
                  <Link
                    key={idx}
                    href={`/heroes?id=${qItem.id}`}
                    onClick={() => {
                      playConfirm();
                      onClose();
                    }}
                    className="block p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-purple-400/40 transition-all"
                  >
                    <div className="text-xs italic text-zinc-200 font-serif">
                      &ldquo;{qItem.quote}&rdquo;
                    </div>
                    <div className="text-[10px] text-purple-400 font-mono mt-1">
                      — {qItem.character}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
