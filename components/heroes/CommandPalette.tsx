'use client';

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Image from 'next/image';
import { Hero } from '@/types/hero';
import { withBase } from '@/lib/utils';
import { Search, X, Shield, ArrowRight, CornerDownLeft, Sparkles } from 'lucide-react';

interface CommandPaletteProps {
  heroes: Hero[];
  isOpen: boolean;
  onClose: () => void;
  onSelectHero: (slug: string) => void;
}

export function CommandPalette({
  heroes,
  isOpen,
  onClose,
  onSelectHero,
}: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedTier, setSelectedTier] = useState<number | 'ALL'>('ALL');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
  }, [isOpen]);

  // Filtered heroes based on search query and tier
  const filteredHeroes = useMemo(() => {
    const q = query.toLowerCase().trim();
    return heroes.filter((hero) => {
      // Tier match
      if (selectedTier !== 'ALL' && hero.tier !== selectedTier) {
        return false;
      }
      if (!q) return true;

      // Alias match
      if (hero.alias.toLowerCase().includes(q)) return true;
      // Real name match
      if (hero.realName.toLowerCase().includes(q)) return true;
      // Actor match
      if (hero.actor.toLowerCase().includes(q)) return true;
      // Suits match
      if (hero.suits?.some((s) => s.name.toLowerCase().includes(q))) return true;
      // Comics match
      if (hero.comics?.some((c) => c.title.toLowerCase().includes(q))) return true;

      return false;
    });
  }, [heroes, query, selectedTier]);

  // Keep selected index in bounds
  useEffect(() => {
    setSelectedIndex(0);
  }, [query, selectedTier]);

  const handleSelect = useCallback(
    (slug: string) => {
      onSelectHero(slug);
      onClose();
    },
    [onSelectHero, onClose]
  );

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) =>
          filteredHeroes.length === 0 ? 0 : (prev + 1) % filteredHeroes.length
        );
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) =>
          filteredHeroes.length === 0
            ? 0
            : (prev - 1 + filteredHeroes.length) % filteredHeroes.length
        );
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredHeroes[selectedIndex]) {
          handleSelect(filteredHeroes[selectedIndex].slug);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredHeroes, selectedIndex, onClose, handleSelect]);

  // Auto-scroll selected item into view
  useEffect(() => {
    if (!listRef.current) return;
    const selectedEl = listRef.current.children[selectedIndex] as HTMLElement | undefined;
    if (selectedEl) {
      selectedEl.scrollIntoView({ block: 'nearest' });
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search Avengers Roster"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl bg-neutral-950 border border-white/20 shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Input */}
        <div className="flex items-center gap-3 p-4 sm:p-5 border-b border-white/10 bg-neutral-900/60">
          <Search className="w-5 h-5 text-white/50 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search heroes, real names, actors, suits, or comics..."
            className="flex-1 bg-transparent text-white placeholder-white/40 text-sm sm:text-base outline-none font-sans"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-white/40 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-2 py-0.5 rounded bg-white/10 text-white/50 text-[10px] font-mono">
            ESC
          </kbd>
        </div>

        {/* Filter Tier Tabs */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5 bg-neutral-900/30 text-xs font-mono">
          <span className="text-white/40 uppercase mr-1">FILTER:</span>
          {(['ALL', 1, 2, 3] as const).map((tier) => (
            <button
              key={tier}
              type="button"
              onClick={() => setSelectedTier(tier)}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                selectedTier === tier
                  ? 'bg-white/20 text-white font-semibold'
                  : 'text-white/50 hover:text-white hover:bg-white/5'
              }`}
            >
              {tier === 'ALL' ? 'ALL TIERS' : `TIER ${tier}`}
            </button>
          ))}
          <span className="ml-auto text-white/30 text-[11px]">
            {filteredHeroes.length} RESULTS
          </span>
        </div>

        {/* Results List */}
        <div
          ref={listRef}
          className="overflow-y-auto p-2 sm:p-3 flex flex-col gap-1.5 flex-1 max-h-[480px]"
        >
          {filteredHeroes.length > 0 ? (
            filteredHeroes.map((hero, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={hero.slug}
                  onClick={() => handleSelect(hero.slug)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all duration-150 ${
                    isSelected
                      ? 'bg-white/10 border border-white/20 text-white'
                      : 'hover:bg-white/5 border border-transparent text-white/80'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    {/* Thumbnail Avatar */}
                    <div
                      className="relative w-11 h-11 rounded-lg overflow-hidden border border-white/10 flex-shrink-0 bg-neutral-900"
                      style={{
                        borderColor: isSelected ? hero.theme.primary : 'rgba(255,255,255,0.1)',
                      }}
                    >
                      <Image
                        src={withBase(hero.face.unmasked)}
                        alt={hero.alias}
                        fill
                        sizes="44px"
                        className="object-cover object-top"
                      />
                    </div>

                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm sm:text-base font-display uppercase tracking-wide">
                          {hero.alias}
                        </span>
                        <span
                          className="px-1.5 py-0.5 rounded text-[10px] font-mono uppercase"
                          style={{
                            backgroundColor: `${hero.theme.primary}20`,
                            color: hero.theme.primary,
                          }}
                        >
                          T{hero.tier}
                        </span>
                      </div>
                      <span className="text-xs text-white/50 font-sans">
                        {hero.realName} • portrayed by {hero.actor}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-white/40">
                    {isSelected && (
                      <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-white/60">
                        <span>SELECT</span>
                        <CornerDownLeft className="w-3 h-3" />
                      </span>
                    )}
                    <ArrowRight className="w-4 h-4 text-white/30" />
                  </div>
                </div>
              );
            })
          ) : (
            <div className="py-12 text-center text-white/40 flex flex-col items-center">
              <Shield className="w-8 h-8 opacity-40 mb-2" />
              <p className="text-sm font-sans">No heroes found matching &ldquo;{query}&rdquo;</p>
              <span className="text-xs font-mono text-white/30 mt-1">Try another alias, actor, or suit name</span>
            </div>
          )}
        </div>

        {/* Footer Shortcut Helper */}
        <div className="p-3 border-t border-white/10 bg-neutral-900/60 flex items-center justify-between text-[11px] font-mono text-white/40">
          <div className="flex items-center gap-3">
            <span>↑↓ NAVIGATE</span>
            <span>↵ SELECT</span>
            <span>ESC CLOSE</span>
          </div>
          <span className="flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-white/50" />
            AVENGERS ARCHIVE INTELLIGENCE
          </span>
        </div>
      </div>
    </div>
  );
}
