'use client';

import React, { useState } from 'react';
import { Hero } from '@/types/hero';
import { Eye, EyeOff, Shield } from 'lucide-react';

interface HeroStoryProps {
  hero: Hero;
}

export function HeroStory({ hero }: HeroStoryProps) {
  // Spoilers: default blurred if hero has spoilers defined
  const [unblurredSpoilers, setUnblurredSpoilers] = useState<Record<number, boolean>>({});

  const toggleSpoiler = (index: number) => {
    setUnblurredSpoilers((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const getStatusBadgeColor = (status: Hero['status']) => {
    switch (status) {
      case 'ACTIVE':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40';
      case 'RETIRED':
        return 'bg-amber-500/20 text-amber-400 border-amber-500/40';
      case 'DECEASED':
        return 'bg-red-500/20 text-red-400 border-red-500/40';
      default:
        return 'bg-zinc-500/20 text-zinc-400 border-zinc-500/40';
    }
  };

  return (
    <div className="flex flex-col justify-center max-w-[62ch] py-4">
      {/* Status & Clearance Tag */}
      <div className="flex items-center gap-3 mb-3">
        <span
          className={`px-2.5 py-0.5 rounded-full font-mono text-[10px] tracking-widest uppercase border ${getStatusBadgeColor(
            hero.status
          )}`}
        >
          {hero.status}
        </span>
        <span className="font-mono text-[11px] tracking-wider text-zinc-400 uppercase flex items-center gap-1.5">
          <Shield className="w-3 h-3 text-zinc-400" />
          S.H.I.E.L.D. TIER {hero.tier} DOSSIER
        </span>
      </div>

      {/* Hero Alias (Anton / Bebas Neue, clamp(64px, 9vw, 160px), 0.9 line-height) */}
      <h2
        className="font-display font-black tracking-tight uppercase leading-[0.9] text-left break-words"
        style={{
          fontSize: 'clamp(54px, 8.5vw, 150px)',
          color: hero.theme.primary,
          textShadow: `0 0 40px ${hero.theme.glow}`,
        }}
      >
        {hero.alias}
      </h2>

      {/* Real Civilian Name (clamp(20px, 2vw, 32px), 70% white) */}
      <div
        className="font-sans font-medium text-white/70 tracking-wide mt-2 mb-6"
        style={{ fontSize: 'clamp(18px, 1.8vw, 28px)' }}
      >
        {hero.realName}
      </div>

      {/* Born / Origins Meta */}
      <div className="flex flex-wrap items-center gap-2 mb-6 font-mono text-xs text-zinc-400 border-l-2 border-white/20 pl-3">
        <span>{hero.born.date}</span>
        <span>•</span>
        <span>{hero.born.place}</span>
        <span>•</span>
        <span className="text-zinc-300 font-semibold">{hero.born.parents}</span>
      </div>

      {/* Story (3 paragraphs, max 150 words total, body 17-18px, line-height 1.65) */}
      <div className="space-y-4 text-[17px] sm:text-[18px] leading-[1.65] text-zinc-300 font-sans">
        {hero.story.map((paragraph, idx) => {
          const isSpoiler = hero.spoilers.includes(idx);
          const isRevealed = unblurredSpoilers[idx];

          return (
            <div key={idx} className="relative group">
              <p
                className={`transition-all duration-300 ${
                  isSpoiler && !isRevealed
                    ? 'filter blur-[6px] select-none opacity-60'
                    : 'filter-none opacity-100'
                }`}
              >
                {paragraph}
              </p>

              {isSpoiler && (
                <div className="mt-1 flex items-center">
                  <button
                    onClick={() => toggleSpoiler(idx)}
                    type="button"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/70 border border-white/20 text-xs font-mono text-amber-400 hover:text-amber-300 hover:border-amber-400/50 transition-colors focus:outline-none focus:ring-1 focus:ring-amber-400"
                    aria-label={isRevealed ? 'Hide spoilers' : 'Show spoilers'}
                  >
                    {isRevealed ? (
                      <>
                        <EyeOff className="w-3.5 h-3.5" />
                        <span>RE-BLUR SPOILER</span>
                      </>
                    ) : (
                      <>
                        <Eye className="w-3.5 h-3.5 text-amber-400" />
                        <span className="font-bold">⚠ REVEAL SPOILER</span>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
