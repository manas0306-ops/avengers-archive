'use client';

import React from 'react';
import { Hero } from '@/types/hero';
import { ArrowDown } from 'lucide-react';

interface TransitionStripProps {
  nextHero: Hero;
}

export function TransitionStrip({ nextHero }: TransitionStripProps) {
  const scrollToNext = () => {
    const el = document.getElementById(nextHero.slug);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      onClick={scrollToNext}
      role="button"
      tabIndex={0}
      aria-label={`Scroll to next hero: ${nextHero.alias}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          scrollToNext();
        }
      }}
      className="relative w-full h-[40vh] flex flex-col items-center justify-center cursor-pointer overflow-hidden border-y border-white/5 select-none group focus:outline-none"
      style={{
        background: `linear-gradient(180deg, transparent 0%, ${nextHero.theme.glow} 50%, transparent 100%)`,
      }}
    >
      {/* Huge Outlined Alias Watermark */}
      <span
        className="font-display font-black tracking-widest uppercase opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none select-none text-center"
        style={{
          fontSize: 'clamp(60px, 14vw, 220px)',
          WebkitTextStroke: `2px ${nextHero.theme.primary}`,
          color: 'transparent',
          lineHeight: 0.8,
        }}
      >
        {nextHero.alias}
      </span>

      {/* Centered Next Hero Action Callout */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 space-y-2">
        <span
          className="font-mono text-xs sm:text-sm tracking-widest uppercase px-4 py-1.5 rounded-full border border-white/20 bg-black/60 backdrop-blur-md text-white group-hover:scale-105 transition-transform duration-300 flex items-center gap-2"
          style={{ borderColor: `${nextHero.theme.primary}60` }}
        >
          <span>NEXT HERO: {nextHero.alias}</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-amber-400" />
        </span>
        <span className="font-mono text-[10px] text-zinc-400 tracking-wider">
          TIER {nextHero.tier} • {nextHero.actor.toUpperCase()}
        </span>
      </div>
    </div>
  );
}
