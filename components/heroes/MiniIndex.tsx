'use client';

import React from 'react';
import { Hero } from '@/types/hero';

interface MiniIndexProps {
  heroes: Hero[];
  activeSlug: string;
  onSelectHero: (slug: string) => void;
}

export function MiniIndex({ heroes, activeSlug, onSelectHero }: MiniIndexProps) {
  return (
    <aside
      aria-label="Hero index navigation"
      className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3 p-2.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-xl shadow-2xl"
    >
      {heroes.map((hero) => {
        const isActive = hero.slug === activeSlug;

        return (
          <button
            key={hero.slug}
            onClick={() => onSelectHero(hero.slug)}
            className="group relative flex items-center justify-center p-1.5 focus:outline-none"
            aria-label={`Scroll to ${hero.alias}`}
          >
            {/* Dot Indicator */}
            <div
              className={`rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-3.5 h-3.5 shadow-lg scale-125'
                  : 'w-2 h-2 bg-white/40 hover:bg-white/80 group-hover:scale-125'
              }`}
              style={{
                backgroundColor: isActive ? hero.theme.primary : undefined,
                boxShadow: isActive ? `0 0 10px ${hero.theme.glow}` : undefined,
              }}
            />

            {/* Hover Tooltip (appears to the left) */}
            <div className="absolute right-8 px-3 py-1 rounded-lg bg-zinc-900/95 border border-white/20 text-xs font-mono tracking-wider text-white whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-xl">
              {hero.alias}
            </div>
          </button>
        );
      })}
    </aside>
  );
}
