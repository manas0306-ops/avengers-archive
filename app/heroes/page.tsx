'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import heroesData from '@/data/heroes.json';
import { Hero } from '@/types/hero';
import { withBase } from '@/lib/utils';
import { Search, Filter, Shield, ArrowRight, UserCheck, Sparkles, BookOpen } from 'lucide-react';

export default function HeroesDirectoryPage() {
  const heroes = heroesData as unknown as Hero[];
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');
  const [selectedTier, setSelectedTier] = useState<number | 'ALL'>('ALL');

  const filteredHeroes = useMemo(() => {
    return heroes.filter((hero) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === '' ||
        hero.alias.toLowerCase().includes(q) ||
        hero.realName.toLowerCase().includes(q) ||
        hero.actor.toLowerCase().includes(q) ||
        hero.born.place.toLowerCase().includes(q);

      const matchesStatus = selectedStatus === 'ALL' || hero.status === selectedStatus;
      const matchesTier = selectedTier === 'ALL' || hero.tier === selectedTier;

      return matchesSearch && matchesStatus && matchesTier;
    });
  }, [heroes, searchQuery, selectedStatus, selectedTier]);

  return (
    <div className="relative min-h-screen w-full bg-[#070a12] text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-red-600/10 blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-red-400 uppercase tracking-widest mb-1">
              <Shield className="w-4 h-4 text-red-500" />
              EARTH-616 STRATEGIC SCIENTIFIC DEFENSE DIRECTORY
            </div>
            <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-wide">
              HERO DOSSIER REGISTRY
            </h1>
            <p className="text-zinc-400 text-xs sm:text-sm font-mono mt-1">
              Comprehensive archives, verified appearance records, and combat telemetry across 40 Earth-616 figures.
            </p>
          </div>

          <div className="font-mono text-xs text-zinc-400">
            TOTAL ACTIVE RECORDS: <span className="text-white font-bold">{filteredHeroes.length}</span>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search hero alias, civilian name, actor..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-500 font-mono text-xs focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
              />
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
              {['ALL', 'ACTIVE', 'RETIRED', 'FALLEN'].map((st) => (
                <button
                  key={st}
                  type="button"
                  onClick={() => setSelectedStatus(st)}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-mono transition-all border ${
                    selectedStatus === st
                      ? 'bg-red-500 text-white font-bold border-red-500'
                      : 'bg-white/5 text-zinc-400 hover:text-white border-transparent hover:border-white/10'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          {/* Tier Filters */}
          <div className="flex items-center gap-2 pt-2 border-t border-white/5 font-mono text-xs">
            <span className="text-zinc-500 text-[10px] uppercase mr-2">AVENGERS ROSTER TIER:</span>
            {[
              { id: 'ALL', label: 'ALL TIERS (40)' },
              { id: 1, label: 'TIER 1 (CORE FOUNDING)' },
              { id: 2, label: 'TIER 2 (FRONT-LINE)' },
              { id: 3, label: 'TIER 3 (COVERT & ALLIES)' },
            ].map((t) => (
              <button
                key={String(t.id)}
                type="button"
                onClick={() => setSelectedTier(t.id as number | 'ALL')}
                className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                  selectedTier === t.id
                    ? 'bg-white/20 text-white font-bold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Hero Directory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredHeroes.map((hero) => (
            <div
              key={hero.slug}
              className="group relative rounded-2xl bg-[#090d16] border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl"
            >
              {/* Card Top: Portrait and Status */}
              <div>
                <div className="relative w-full aspect-[4/5] bg-black/60 overflow-hidden">
                  <Image
                    src={withBase(hero.face.unmasked)}
                    alt={hero.alias}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent" />

                  {/* Status Badge */}
                  <span
                    className="absolute top-3 right-3 font-mono text-[9px] px-2 py-0.5 rounded border uppercase backdrop-blur-md"
                    style={{
                      backgroundColor: `${hero.theme.primary}30`,
                      borderColor: `${hero.theme.primary}60`,
                      color: hero.theme.text,
                    }}
                  >
                    {hero.status}
                  </span>

                  <span className="absolute top-3 left-3 font-mono text-[9px] px-2 py-0.5 rounded bg-black/60 text-zinc-400 border border-white/10 uppercase">
                    TIER {hero.tier}
                  </span>
                </div>

                {/* Details */}
                <div className="p-5 pt-1 space-y-2">
                  <h3 className="font-display font-black text-xl text-white group-hover:text-red-400 transition-colors">
                    {hero.alias}
                  </h3>
                  <div className="text-xs font-mono text-zinc-400">
                    {hero.realName} • Portrayed by {hero.actor}
                  </div>

                  <div className="pt-2 text-[11px] font-mono text-zinc-500 space-y-1">
                    <div>First Seen: {hero.firstAppearance.title} ({hero.firstAppearance.year})</div>
                    <div>Suits Used: {hero.suits.length} Tactical Costumes</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 grid grid-cols-2 gap-2 border-t border-white/5 mt-3">
                <Link
                  href={`/heroes/${hero.slug}`}
                  className="py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-center font-mono text-xs font-bold text-white transition-colors flex items-center justify-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>DOSSIER</span>
                </Link>

                <Link
                  href={`/#${hero.slug}`}
                  className="py-2 px-3 rounded-xl bg-red-600/20 hover:bg-red-600/30 border border-red-500/30 text-center font-mono text-xs font-bold text-red-300 transition-colors flex items-center justify-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                  <span>CHAPTER</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
