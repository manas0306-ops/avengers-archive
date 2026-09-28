'use client';

import React from 'react';
import { Hero } from '@/types/hero';
import { PowerStatsRadar } from './PowerStatsRadar';
import { Film, Award, Users, UserCheck } from 'lucide-react';

interface IntelStripProps {
  hero: Hero;
  onSelectTeamUp?: (slug: string) => void;
}

export function IntelStrip({ hero, onSelectTeamUp }: IntelStripProps) {
  const handleTeamUpClick = (slug: string) => {
    if (onSelectTeamUp) {
      onSelectTeamUp(slug);
    } else {
      const el = document.getElementById(slug);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState(null, '', `#${slug}`);
      }
    }
  };

  return (
    <div className="w-full my-12 p-6 sm:p-8 rounded-3xl bg-zinc-950/70 border border-white/10 backdrop-blur-xl shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Quick Intelligence Telemetry (Cols 1-7) */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
          <div>
            <span className="font-mono text-[11px] tracking-widest text-zinc-400 uppercase">
              S.H.I.E.L.D. FIELD TELEMETRY • BLOCK A2
            </span>
            <h3 className="font-sans font-bold text-xl sm:text-2xl text-white mt-1">
              Operative Intelligence Matrix
            </h3>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col">
              <span className="font-mono text-[10px] text-zinc-400 uppercase flex items-center gap-1">
                <UserCheck className="w-3 h-3 text-zinc-400" />
                Actor
              </span>
              <span className="font-sans font-semibold text-sm text-zinc-100 mt-1 truncate">
                {hero.actor}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col">
              <span className="font-mono text-[10px] text-zinc-400 uppercase flex items-center gap-1">
                <Film className="w-3 h-3 text-zinc-400" />
                Debut Film
              </span>
              <span className="font-sans font-semibold text-sm text-zinc-100 mt-1 truncate">
                {hero.firstAppearance.title}
              </span>
              <span className="font-mono text-[10px] text-zinc-400">
                ({hero.firstAppearance.year})
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col">
              <span className="font-mono text-[10px] text-zinc-400 uppercase flex items-center gap-1">
                <Award className="w-3 h-3 text-zinc-400" />
                MCU Appearances
              </span>
              <span className="font-sans font-bold text-lg text-zinc-100 mt-0.5">
                {hero.appearancesCount} Films
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col">
              <span className="font-mono text-[10px] text-zinc-400 uppercase flex items-center gap-1">
                <Users className="w-3 h-3 text-zinc-400" />
                Status
              </span>
              <span
                className="font-mono font-bold text-xs mt-1 uppercase"
                style={{ color: hero.theme.primary }}
              >
                {hero.status}
              </span>
            </div>
          </div>

          {/* Team-Up Chips */}
          <div className="flex flex-col gap-2 pt-2">
            <span className="font-mono text-[11px] tracking-wider text-zinc-400 uppercase">
              CONFIRMED TACTICAL TEAM-UPS:
            </span>
            <div className="flex flex-wrap gap-2">
              {hero.teamUps.map((targetSlug) => {
                const cleanName = targetSlug
                  .split('-')
                  .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                  .join(' ');

                return (
                  <button
                    key={targetSlug}
                    onClick={() => handleTeamUpClick(targetSlug)}
                    className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/30 text-xs font-mono text-zinc-300 hover:text-white transition-all duration-200 flex items-center gap-1.5 focus:outline-none focus:ring-1 focus:ring-white/40"
                  >
                    <span>⚡</span>
                    <span>{cleanName}</span>
                    <span className="text-zinc-400">→</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Power Stats Radar (Cols 8-12) */}
        <div className="lg:col-span-5 flex justify-center">
          <PowerStatsRadar
            stats={hero.stats}
            primaryColor={hero.theme.primary}
            secondaryColor={hero.theme.secondary}
          />
        </div>
      </div>
    </div>
  );
}
