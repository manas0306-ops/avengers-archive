'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, X, Users, Film, Clock, Shield, Cpu, ArrowRight, Sparkles, Layers } from 'lucide-react';
import heroesData from '@/data/heroes.json';
import { Hero } from '@/types/hero';
import { STARK_ARMORS } from '@/data/stark_armors';
import { STARK_INVENTIONS } from '@/data/stark_inventions';
import { MOVIES } from '@/data/movies';
import { TIMELINE_EVENTS } from '@/data/timeline';
import { CHARACTERS } from '@/data/characters';
import { useSound } from '@/hooks/useSound';
import { withBase } from '@/lib/utils';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { playHover, playConfirm } = useSound();
  const allHeroes = heroesData as unknown as Hero[];

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

  // Search All 40 Heroes
  const matchedHeroes = q
    ? allHeroes
        .filter(
          (h) =>
            h.alias.toLowerCase().includes(q) ||
            h.realName.toLowerCase().includes(q) ||
            h.actor.toLowerCase().includes(q) ||
            h.born.place.toLowerCase().includes(q)
        )
        .slice(0, 5)
    : [];

  // Search 85 Iron Man Armors (by Mark number, name, category, or weapons)
  const matchedArmors = q
    ? STARK_ARMORS.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.romanNumeral.toLowerCase().includes(q) ||
          a.mark.toString() === q ||
          `mark ${a.mark}`.includes(q) ||
          (a.nickname && a.nickname.toLowerCase().includes(q)) ||
          a.category.toLowerCase().includes(q) ||
          a.weaponsAndPayload.some((w) => w.toLowerCase().includes(q))
      ).slice(0, 4)
    : [];

  // Search Stark Inventions
  const matchedInventions = q
    ? STARK_INVENTIONS.filter(
        (inv) =>
          inv.name.toLowerCase().includes(q) ||
          (inv.designation && inv.designation.toLowerCase().includes(q)) ||
          inv.purpose.toLowerCase().includes(q) ||
          inv.leadCreator.toLowerCase().includes(q)
      ).slice(0, 3)
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

  // Search Relationships
  const matchedRelationships: Array<{
    heroName: string;
    heroSlug: string;
    targetName: string;
    targetSlug: string;
    relation: string;
    notes: string;
  }> = [];

  if (q) {
    CHARACTERS.forEach((char) => {
      char.relationships.forEach((rel) => {
        if (
          rel.character_name.toLowerCase().includes(q) ||
          rel.relation.toLowerCase().includes(q) ||
          rel.notes.toLowerCase().includes(q)
        ) {
          if (matchedRelationships.length < 3) {
            matchedRelationships.push({
              heroName: char.name,
              heroSlug: char.id,
              targetName: rel.character_name,
              targetSlug: rel.character_id,
              relation: rel.relation,
              notes: rel.notes,
            });
          }
        }
      });
    });
  }

  const hasResults =
    matchedHeroes.length > 0 ||
    matchedArmors.length > 0 ||
    matchedInventions.length > 0 ||
    matchedMovies.length > 0 ||
    matchedEvents.length > 0 ||
    matchedRelationships.length > 0;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-20 px-3 sm:px-4 bg-black/85 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl overflow-hidden rounded-2xl bg-[#090d16] border border-cyan-500/30 shadow-[0_20px_70px_rgba(0,0,0,0.95)] text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-cyan-500/20 bg-cyan-950/20">
          <Search className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search 40 heroes, Mark I-LXXXV suits, inventions, movies, events, relationships..."
            className="w-full bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none font-mono"
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
          <kbd className="hidden sm:inline-block ml-2 px-2 py-0.5 text-[10px] font-mono text-zinc-400 bg-white/10 rounded">
            ESC
          </kbd>
        </div>

        {/* Results Container */}
        <div className="max-h-[70vh] overflow-y-auto p-4 sm:p-5 space-y-6">
          {!q && (
            <div className="py-8 text-center text-zinc-500 font-mono text-xs space-y-2">
              <Sparkles className="w-6 h-6 mx-auto text-cyan-400/60 animate-pulse" />
              <p>Type to query Earth-616 database: &ldquo;Mark 85&rdquo;, &ldquo;Wanda&rdquo;, &ldquo;Nano Gauntlet&rdquo;, &ldquo;Endgame&rdquo;...</p>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-[11px] text-zinc-400">
                <button
                  type="button"
                  onClick={() => setQuery('Mark 85')}
                  className="px-2 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/10"
                >
                  Mark 85
                </button>
                <button
                  type="button"
                  onClick={() => setQuery('Hulkbuster')}
                  className="px-2 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/10"
                >
                  Hulkbuster
                </button>
                <button
                  type="button"
                  onClick={() => setQuery('Nanotechnology')}
                  className="px-2 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/10"
                >
                  Nanotechnology
                </button>
                <button
                  type="button"
                  onClick={() => setQuery('Vibranium')}
                  className="px-2 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/10"
                >
                  Vibranium
                </button>
              </div>
            </div>
          )}

          {q && !hasResults && (
            <div className="py-10 text-center text-zinc-400 font-mono text-xs">
              No Earth-616 records matched &ldquo;<span className="text-white">{query}</span>&rdquo;.
            </div>
          )}

          {/* 1. Heroes Results */}
          {matchedHeroes.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-[11px] font-mono tracking-wider text-red-400 font-bold uppercase mb-2">
                <Users className="w-3.5 h-3.5" /> HEROES & DOSSIERS ({matchedHeroes.length})
              </div>
              <div className="space-y-1.5">
                {matchedHeroes.map((hero) => (
                  <Link
                    key={hero.slug}
                    href={`/heroes/${hero.slug}`}
                    onClick={() => {
                      playConfirm();
                      onClose();
                    }}
                    onMouseEnter={() => playHover()}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-red-500/40 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-white/10 flex-shrink-0">
                        <Image
                          src={withBase(hero.face.unmasked)}
                          alt={hero.alias}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                          {hero.alias}
                        </div>
                        <div className="text-xs text-zinc-400 font-mono">
                          {hero.realName} • Tier {hero.tier} • {hero.status}
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400 group-hover:text-white flex items-center gap-1">
                      DOSSIER <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* 2. Iron Man Armors (Mark I - LXXXV) */}
          {matchedArmors.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-[11px] font-mono tracking-wider text-cyan-400 font-bold uppercase mb-2">
                <Shield className="w-3.5 h-3.5" /> STARK ARMORS ({matchedArmors.length})
              </div>
              <div className="space-y-1.5">
                {matchedArmors.map((armor) => (
                  <Link
                    key={armor.mark}
                    href="/heroes/iron-man"
                    onClick={() => {
                      playConfirm();
                      onClose();
                    }}
                    onMouseEnter={() => playHover()}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-cyan-950/15 hover:bg-cyan-950/30 border border-cyan-500/20 hover:border-cyan-500/40 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center font-mono font-bold text-xs text-cyan-300">
                        {armor.romanNumeral}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {armor.name} {armor.nickname ? `("${armor.nickname}")` : ''}
                        </div>
                        <div className="text-xs text-zinc-400 font-mono">
                          {armor.category} • First: {armor.firstAppearance.title} ({armor.firstAppearance.year})
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400 group-hover:text-cyan-200">
                      INSPECT ARMOR →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* 3. Stark Inventions & Tech */}
          {matchedInventions.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-[11px] font-mono tracking-wider text-amber-400 font-bold uppercase mb-2">
                <Cpu className="w-3.5 h-3.5" /> STARK INVENTIONS & SYSTEMS ({matchedInventions.length})
              </div>
              <div className="space-y-1.5">
                {matchedInventions.map((inv) => (
                  <Link
                    key={inv.id}
                    href="/heroes/iron-man"
                    onClick={() => {
                      playConfirm();
                      onClose();
                    }}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-amber-400/40 transition-all group"
                  >
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                        {inv.name}
                      </div>
                      <div className="text-xs text-zinc-400 font-mono line-clamp-1">
                        Creator: {inv.leadCreator} • {inv.purpose}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400 group-hover:text-white">
                      VIEW TECH →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* 4. Relationships */}
          {matchedRelationships.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-[11px] font-mono tracking-wider text-purple-400 font-bold uppercase mb-2">
                <Users className="w-3.5 h-3.5" /> CANONICAL RELATIONSHIPS ({matchedRelationships.length})
              </div>
              <div className="space-y-1.5">
                {matchedRelationships.map((r, i) => (
                  <Link
                    key={i}
                    href={`/heroes/${r.heroSlug}`}
                    onClick={() => {
                      playConfirm();
                      onClose();
                    }}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-purple-950/15 hover:bg-purple-950/30 border border-purple-500/20 hover:border-purple-500/40 transition-all group"
                  >
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                        {r.heroName} ↔ {r.targetName} ({r.relation})
                      </div>
                      <div className="text-xs text-zinc-400 font-mono line-clamp-1">
                        {r.notes}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-purple-400">
                      DOSSIER →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* 5. Movies */}
          {matchedMovies.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-[11px] font-mono tracking-wider text-cyan-400 font-bold uppercase mb-2">
                <Film className="w-3.5 h-3.5" /> MOVIES & SERIES ({matchedMovies.length})
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
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-cyan-500/40 transition-all group"
                  >
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {movie.title} ({movie.release_year})
                      </div>
                      <div className="text-xs text-zinc-400 font-mono line-clamp-1">
                        {movie.main_conflict}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400 group-hover:text-white">
                      FILM ARCHIVE →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* 6. Timeline Events */}
          {matchedEvents.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-[11px] font-mono tracking-wider text-amber-400 font-bold uppercase mb-2">
                <Clock className="w-3.5 h-3.5" /> MASTER MCU TIMELINE ({matchedEvents.length})
              </div>
              <div className="space-y-1.5">
                {matchedEvents.map((event) => (
                  <Link
                    key={event.id}
                    href={`/timeline?event=${event.id}`}
                    onClick={() => {
                      playConfirm();
                      onClose();
                    }}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-amber-400/40 transition-all group"
                  >
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                        {event.year} — {event.title}
                      </div>
                      <div className="text-xs text-zinc-400 font-mono line-clamp-1">
                        {event.what_happened}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400 group-hover:text-white">
                      TIMELINE →
                    </span>
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
