'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Hero } from '@/types/hero';
import { Character } from '@/types/character';
import { CHARACTERS } from '@/data/characters';
import { HERO_SPECIALIZED_MODULES } from '@/data/hero_modules';
import { calculateHeroAppearances } from '@/data/verified_appearances';
import { StarkWorkshopHUD } from '@/components/stark/StarkWorkshopHUD';
import { withBase } from '@/lib/utils';
import {
  Shield,
  BookOpen,
  Zap,
  Users,
  Film,
  Award,
  ExternalLink,
  ChevronRight,
  Clock,
  Heart,
  AlertTriangle,
  Layers,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Calendar,
  Crosshair,
  Cpu
} from 'lucide-react';

interface UniversalHeroDossierProps {
  hero: Hero;
  onClose?: () => void;
}

export function UniversalHeroDossier({ hero, onClose }: UniversalHeroDossierProps) {
  const [activeTab, setActiveTab] = useState<'STORY' | 'POWERS' | 'EQUIPMENT' | 'RELATIONSHIPS' | 'APPEARANCES' | 'SOURCES' | 'STARK_HUD'>(
    hero.slug === 'iron-man' ? 'STARK_HUD' : 'STORY'
  );
  const [expandedChapter, setExpandedChapter] = useState<number | null>(0);

  // Cross-reference data from CHARACTERS dataset
  const characterProfile = useMemo(() => {
    return CHARACTERS.find((c) => c.id === hero.slug) || CHARACTERS[0];
  }, [hero.slug]);

  // Specialized lore module for this hero
  const specializedModule = useMemo(() => {
    return HERO_SPECIALIZED_MODULES[hero.slug] || null;
  }, [hero.slug]);

  // Verified appearance metadata calculated dynamically
  const appearanceSummary = useMemo(() => {
    return calculateHeroAppearances(hero.slug);
  }, [hero.slug]);

  // 8-Chapter Storyline structure
  const chapters = useMemo(() => {
    const s = characterProfile.storyline;
    return [
      {
        number: 1,
        title: 'ORIGIN',
        subtitle: 'The Catalyst & The Crucible',
        content: s.origin || 'The genesis of the hero through circumstance and will.',
        timelineAnchor: characterProfile.first_appearance
      },
      {
        number: 2,
        title: 'THE CALL',
        subtitle: 'Stepping into a Larger Universe',
        content: s.the_call || 'Heeding the summons of Nick Fury and the Avengers Initiative.',
        timelineAnchor: 'Dawn of the Avengers'
      },
      {
        number: 3,
        title: 'RISE OF THE HERO',
        subtitle: 'Forging Earth’s Mightiest Line of Defense',
        content: s.rise || 'Mastering combat capabilities and unifying with teammates in defense of humanity.',
        timelineAnchor: 'Battle of New York'
      },
      {
        number: 4,
        title: 'GREATEST BATTLES',
        subtitle: 'Planetary Defense Against Extinction',
        content: s.greatest_battles || 'Pivotal conflicts spanning Sokovia, Leipzig, Titan, and Earth.',
        timelineAnchor: 'Infinity Saga Theaters'
      },
      {
        number: 5,
        title: 'LOSSES AND CONSEQUENCES',
        subtitle: 'The Scars of Duty',
        content: s.losses || 'The devastating costs of victory and personal sacrifices.',
        timelineAnchor: 'Civil War & The Blip'
      },
      {
        number: 6,
        title: 'TURNING POINT',
        subtitle: 'The Defining Moral Crucible',
        content: s.turning_point || 'The moment that cemented eternal hero status.',
        timelineAnchor: 'The Time Heist'
      },
      {
        number: 7,
        title: 'LEGACY AND RELATIONSHIPS',
        subtitle: 'Inspiring the Next Generation',
        content: s.legacy || 'The profound imprint left upon successors and teammates.',
        timelineAnchor: 'Post-Endgame Era'
      },
      {
        number: 8,
        title: 'LATEST CANONICAL POSITION',
        subtitle: 'Current Status in Earth-616',
        content: s.where_are_they_now || 'Latest verified released appearance and canonical standing.',
        timelineAnchor: appearanceSummary.latestReleasedAppearance.title
      }
    ];
  }, [characterProfile, appearanceSummary]);

  return (
    <div className="relative min-h-screen w-full bg-[#070a12] text-white selection:bg-red-600/30 selection:text-red-200">
      {/* Background Ambient Glow */}
      <div
        className="fixed top-0 right-0 w-[800px] h-[800px] rounded-full blur-[160px] opacity-20 pointer-events-none transition-all duration-700"
        style={{ backgroundColor: hero.theme.primary }}
      />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none" />

      {/* ========================================================================= */}
      {/* TOP HERO DOSSIER MASTHEAD                                                 */}
      {/* ========================================================================= */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        {/* Breadcrumb / Back Controls */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <Link
              href="/heroes"
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>ROSTER DIRECTORY</span>
            </Link>
            <span className="text-zinc-600 font-mono">/</span>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              EARTH-616 DOSSIER #{hero.slug.toUpperCase()}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {hero.slug === 'iron-man' && (
              <button
                type="button"
                onClick={() => setActiveTab('STARK_HUD')}
                className="px-3.5 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-mono text-xs tracking-wider transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,240,255,0.2)]"
              >
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>STARK WORKSHOP HUD</span>
              </button>
            )}

            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
              >
                CLOSE
              </button>
            )}
          </div>
        </div>

        {/* Identity Hero Banner: Block A Identity & Badges */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-8">
          {/* Portrait Visual Frame */}
          <div className="md:col-span-4 flex justify-center md:justify-start">
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl bg-black/60 border border-white/10 overflow-hidden shadow-2xl group">
              <Image
                src={withBase(hero.face.unmasked)}
                alt={`${hero.alias} portrait`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

              {/* Status Pill on portrait */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span
                  className="font-mono text-xs font-bold px-2.5 py-1 rounded border tracking-wider"
                  style={{
                    backgroundColor: `${hero.theme.primary}20`,
                    borderColor: `${hero.theme.primary}50`,
                    color: hero.theme.text,
                  }}
                >
                  {hero.status}
                </span>

                <span className="text-[10px] font-mono text-zinc-400 bg-black/60 px-2 py-0.5 rounded border border-white/10">
                  EARTH-616
                </span>
              </div>
            </div>
          </div>

          {/* Identity Intel & Aliases */}
          <div className="md:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-white/10 text-zinc-300 uppercase tracking-widest border border-white/10">
                {characterProfile.category}
              </span>
              <span className="font-mono text-xs text-zinc-400">
                • CONTENT VERSION {characterProfile.content_version}
              </span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight uppercase">
              {hero.alias}
            </h1>

            <div className="text-lg sm:text-xl font-cinematic text-zinc-300">
              {characterProfile.hero_title || hero.realName}
            </div>

            {/* Civilian Identity & Origin Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-zinc-500 uppercase tracking-widest block text-[10px] mb-0.5">
                  CIVILIAN IDENTITY
                </span>
                <span className="text-white font-bold">{hero.realName}</span>
                <div className="text-[11px] text-zinc-400 mt-0.5">
                  Born: {hero.born.place} ({hero.born.date})
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-zinc-500 uppercase tracking-widest block text-[10px] mb-0.5">
                  FIRST MCU APPEARANCE
                </span>
                <span className="text-white font-bold">{hero.firstAppearance.title}</span>
                <div className="text-[11px] text-zinc-400 mt-0.5">
                  Year Released: {hero.firstAppearance.year}
                </div>
              </div>
            </div>

            {/* Affiliations Chips */}
            <div className="pt-2">
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block mb-1.5">
                ORGANIZATIONAL AFFILIATIONS:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {characterProfile.affiliations.map((affil, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-[11px] px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-zinc-300"
                  >
                    {affil}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dossier Tabs Navigation */}
        <nav
          aria-label="Hero Dossier Navigation"
          className="flex items-center gap-2 pt-4 border-t border-white/10 overflow-x-auto scrollbar-none"
        >
          {hero.slug === 'iron-man' && (
            <button
              type="button"
              onClick={() => setActiveTab('STARK_HUD')}
              className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all flex items-center gap-2 border ${
                activeTab === 'STARK_HUD'
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-[0_0_15px_rgba(0,240,255,0.2)] font-bold'
                  : 'bg-white/5 text-zinc-400 hover:text-white border-transparent hover:border-white/10'
              }`}
            >
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>STARK WORKSHOP HUD (85 SUITS)</span>
            </button>
          )}

          <button
            type="button"
            onClick={() => setActiveTab('STORY')}
            className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all flex items-center gap-2 border ${
              activeTab === 'STORY'
                ? 'bg-white/15 text-white border-white/30 font-bold'
                : 'bg-white/5 text-zinc-400 hover:text-white border-transparent hover:border-white/10'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>8-CHAPTER STORY ARCHIVE</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('POWERS')}
            className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all flex items-center gap-2 border ${
              activeTab === 'POWERS'
                ? 'bg-white/15 text-white border-white/30 font-bold'
                : 'bg-white/5 text-zinc-400 hover:text-white border-transparent hover:border-white/10'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>POWERS & COMBAT TELEMETRY</span>
          </button>

          {specializedModule && (
            <button
              type="button"
              onClick={() => setActiveTab('EQUIPMENT')}
              className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all flex items-center gap-2 border ${
                activeTab === 'EQUIPMENT'
                  ? 'bg-white/15 text-white border-white/30 font-bold'
                  : 'bg-white/5 text-zinc-400 hover:text-white border-transparent hover:border-white/10'
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              <span>EQUIPMENT & LORE VAULT</span>
            </button>
          )}

          <button
            type="button"
            onClick={() => setActiveTab('RELATIONSHIPS')}
            className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all flex items-center gap-2 border ${
              activeTab === 'RELATIONSHIPS'
                ? 'bg-white/15 text-white border-white/30 font-bold'
                : 'bg-white/5 text-zinc-400 hover:text-white border-transparent hover:border-white/10'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>RELATIONSHIP NETWORK</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('APPEARANCES')}
            className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all flex items-center gap-2 border ${
              activeTab === 'APPEARANCES'
                ? 'bg-white/15 text-white border-white/30 font-bold'
                : 'bg-white/5 text-zinc-400 hover:text-white border-transparent hover:border-white/10'
            }`}
          >
            <Film className="w-3.5 h-3.5" />
            <span>VERIFIED APPEARANCE TRACKER</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('SOURCES')}
            className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all flex items-center gap-2 border ${
              activeTab === 'SOURCES'
                ? 'bg-white/15 text-white border-white/30 font-bold'
                : 'bg-white/5 text-zinc-400 hover:text-white border-transparent hover:border-white/10'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>CANON SOURCES & CONFIDENCE</span>
          </button>
        </nav>
      </header>

      {/* ========================================================================= */}
      {/* SECTION: TONY STARK WORKSHOP HUD (SPECIAL STARK ARCHIVE)                  */}
      {/* ========================================================================= */}
      {activeTab === 'STARK_HUD' && hero.slug === 'iron-man' && (
        <StarkWorkshopHUD onBackToStack={() => setActiveTab('STORY')} />
      )}

      {/* ========================================================================= */}
      {/* TAB 1: 8-CHAPTER STORY ARCHIVE (SECTION 4.C)                             */}
      {/* ========================================================================= */}
      {activeTab === 'STORY' && (
        <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
                CHRONICLE OF EARTH-616 MILESTONES
              </span>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
                THE EIGHT CHAPTERS OF {hero.alias.toUpperCase()}
              </h2>
            </div>

            {/* Quick Chapter Jump Pills */}
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-none py-1">
              {chapters.map((ch, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setExpandedChapter(idx)}
                  className={`w-7 h-7 rounded-lg font-mono text-xs flex items-center justify-center transition-colors border ${
                    expandedChapter === idx
                      ? 'bg-white text-black font-bold border-white'
                      : 'bg-white/5 text-zinc-400 hover:text-white border-white/10'
                  }`}
                  title={`Jump to Chapter ${ch.number}: ${ch.title}`}
                >
                  {ch.number}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion / Expandable Chapters */}
          <div className="space-y-4">
            {chapters.map((chapter, idx) => {
              const isOpen = expandedChapter === idx;
              return (
                <div
                  key={chapter.number}
                  className={`rounded-2xl transition-all duration-300 border ${
                    isOpen
                      ? 'bg-white/10 border-white/30 shadow-2xl'
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setExpandedChapter(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 flex items-center justify-between text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-black text-lg border"
                        style={{
                          backgroundColor: isOpen ? hero.theme.primary : 'rgba(255,255,255,0.05)',
                          borderColor: isOpen ? hero.theme.primary : 'rgba(255,255,255,0.1)',
                          color: isOpen ? '#fff' : '#a1a1aa',
                        }}
                      >
                        0{chapter.number}
                      </div>
                      <div>
                        <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block">
                          CHAPTER {chapter.number} • {chapter.subtitle}
                        </span>
                        <h3 className="font-display font-black text-xl text-white">
                          {chapter.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="hidden sm:inline font-mono text-xs text-zinc-400">
                        {chapter.timelineAnchor}
                      </span>
                      <ChevronRight
                        className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${
                          isOpen ? 'rotate-90 text-white' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-white/10 space-y-4">
                      <p className="text-sm sm:text-base text-zinc-200 leading-relaxed">
                        {chapter.content}
                      </p>

                      <div className="flex items-center justify-between pt-3 font-mono text-xs text-zinc-400 border-t border-white/5">
                        <span>CANONICAL SOURCE VERIFIED</span>
                        <span className="text-zinc-500">
                          ANCHOR: {chapter.timelineAnchor}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </main>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: POWERS & COMBAT TELEMETRY (SECTION 4.B)                            */}
      {/* ========================================================================= */}
      {activeTab === 'POWERS' && (
        <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          <div>
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
              FIELD CAPABILITIES & PHYSIOLOGICAL TAXONOMY
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
              POWERS, ABILITIES & WEAKNESSES
            </h2>
          </div>

          {/* Grid: Inherent vs Equipment-Dependent */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Inherent / Natural Powers */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-white/10">
                <Zap className="w-5 h-5 text-amber-400" />
                <h3 className="font-display font-bold text-lg text-white">
                  INHERENT & PHYSIOLOGICAL ABILITIES
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
                {characterProfile.powers.map((power, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-amber-400 mt-1">▹</span>
                    <span>{power}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Equipment-Dependent Abilities */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-white/10">
                <Shield className="w-5 h-5 text-cyan-400" />
                <h3 className="font-display font-bold text-lg text-white">
                  EQUIPMENT-DEPENDENT ARSENAL
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
                {characterProfile.weapons.map((weapon, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span>{weapon}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Power Stats Radar / Numbers */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-mono text-xs text-zinc-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Crosshair className="w-4 h-4 text-red-500" />
              S.H.I.E.L.D. TACTICAL COMBAT RATINGS (OUT OF 100)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 font-mono text-xs">
              {Object.entries(hero.stats).map(([stat, val]) => (
                <div key={stat} className="p-3.5 rounded-xl bg-black/40 border border-white/10 text-center">
                  <span className="text-zinc-500 uppercase text-[10px] block">{stat}</span>
                  <span className="text-2xl font-black font-display text-white mt-1 block">
                    {val}
                  </span>
                  <div className="w-full bg-white/10 h-1 rounded-full mt-2 overflow-hidden">
                    <div
                      className="h-full bg-red-500 rounded-full"
                      style={{ width: `${val}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: SPECIALIZED EQUIPMENT & HERO-SPECIFIC MODULE (SECTION 6)           */}
      {/* ========================================================================= */}
      {activeTab === 'EQUIPMENT' && specializedModule && (
        <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          <div>
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
              SIGNATURE HARDWARE & LORE CHRONICLE
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
              {specializedModule.title}
            </h2>
            <p className="text-xs font-mono text-zinc-400 mt-1">
              {specializedModule.subtitle} • {specializedModule.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specializedModule.items.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">
                    {item.type}
                  </span>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/10 text-zinc-300">
                    {item.firstAppearance}
                  </span>
                </div>

                <h3 className="font-display font-black text-xl text-white">
                  {item.name}
                </h3>
                {item.designation && (
                  <div className="text-xs font-mono text-zinc-400">
                    Designation: {item.designation}
                  </div>
                )}

                <div className="text-xs text-zinc-300 leading-relaxed pt-2">
                  <span className="text-zinc-500 font-mono block text-[10px] uppercase">
                    COMPOSITION & ORIGIN:
                  </span>
                  {item.materialsOrOrigin}
                </div>

                <div className="pt-2">
                  <span className="text-zinc-500 font-mono block text-[10px] uppercase mb-1">
                    CAPABILITIES & PROTOCOLS:
                  </span>
                  <ul className="space-y-1 text-xs text-zinc-300">
                    {item.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-red-400">▹</span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {item.damageOrStatus && (
                  <div className="p-2.5 rounded-lg bg-rose-950/20 border border-rose-500/20 text-xs text-rose-300 font-mono">
                    STATUS / DAMAGE: {item.damageOrStatus}
                  </div>
                )}

                <div className="text-xs text-zinc-400 italic pt-1">
                  &ldquo;{item.notes}&rdquo;
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: RELATIONSHIP NETWORK (SECTION 4.D)                                 */}
      {/* ========================================================================= */}
      {activeTab === 'RELATIONSHIPS' && (
        <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          <div>
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
              CANONICAL SOCIAL MATRIX & TYPED CONNECTIONS
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
              RELATIONSHIP NETWORK
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {characterProfile.relationships.map((rel, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded bg-white/10 text-zinc-300">
                      {rel.relation}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500">
                      EARTH-616
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white">
                    {rel.character_name}
                  </h3>

                  <p className="text-xs text-zinc-300 leading-relaxed mt-2">
                    {rel.notes}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5">
                  <Link
                    href={`/heroes/${rel.character_id}`}
                    className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1 group"
                  >
                    <span>OPEN {rel.character_name.toUpperCase()} DOSSIER</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* ========================================================================= */}
      {/* TAB 5: VERIFIED APPEARANCE & LAST-SEEN TRACKER (SECTION 4.E)              */}
      {/* ========================================================================= */}
      {activeTab === 'APPEARANCES' && (
        <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          <div>
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
              OFFICIAL RELEASE TIMESTAMPS & FUTURE SLATE
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
              VERIFIED APPEARANCE HISTORY & LAST-SEEN TRACKER
            </h2>
          </div>

          {/* Calculated Last-Seen Summary Card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 font-mono text-xs space-y-2">
              <span className="text-zinc-500 uppercase tracking-wider block">
                FIRST RELEASED APPEARANCE
              </span>
              <div className="text-xl font-display font-black text-white">
                {appearanceSummary.firstReleasedAppearance.title}
              </div>
              <div className="text-zinc-400">
                Released: {appearanceSummary.firstReleasedAppearance.releaseDate}
              </div>
              <div className="text-emerald-400 font-bold">
                ROLE: {appearanceSummary.firstReleasedAppearance.role}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 font-mono text-xs space-y-2">
              <span className="text-emerald-400 uppercase tracking-wider block font-bold">
                LATEST VERIFIED RELEASED APPEARANCE
              </span>
              <div className="text-xl font-display font-black text-white">
                {appearanceSummary.latestReleasedAppearance.title}
              </div>
              <div className="text-zinc-300">
                Released: {appearanceSummary.latestReleasedAppearance.releaseDate}
              </div>
              <div className="text-emerald-400 font-bold">
                ON-SCREEN: {appearanceSummary.latestReleasedAppearance.isOnScreen ? 'YES (VERIFIED)' : 'ARCHIVAL / MENTION'}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 font-mono text-xs space-y-2">
              <span className="text-zinc-500 uppercase tracking-wider block">
                TOTAL VERIFIED MCU APPEARANCES
              </span>
              <div className="text-4xl font-display font-black text-white">
                {appearanceSummary.totalVerifiedCount}
              </div>
              <div className="text-zinc-400">
                Calculated strictly from verified release records.
              </div>
            </div>
          </div>

          {/* Upcoming Officially Confirmed Productions */}
          {appearanceSummary.upcomingConfirmedAppearances.length > 0 && (
            <div className="p-6 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 space-y-3">
              <div className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                UPCOMING OFFICIALLY CONFIRMED PRODUCTIONS (DO NOT TREAT AS RELEASED)
              </div>
              {appearanceSummary.upcomingConfirmedAppearances.map((up, i) => (
                <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3.5 rounded-xl bg-black/40 border border-cyan-500/20 gap-2">
                  <div>
                    <div className="font-bold text-white text-sm">{up.title}</div>
                    <div className="text-xs font-mono text-zinc-400">
                      Projected Window: {up.projectedDate} • Status: {up.status}
                    </div>
                  </div>
                  <a
                    href={up.officialSourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                  >
                    <span>OFFICIAL ANNOUNCEMENT</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          )}

          {/* Rumored / Unverified Notice (Rule 8) */}
          {appearanceSummary.rumoredAppearances.length > 0 && (
            <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/30 font-mono text-xs space-y-2">
              <div className="text-amber-400 font-bold uppercase tracking-wider flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                RUMORED & UNVERIFIED APPEARANCE AUDIT (NON-CANONICAL)
              </div>
              {appearanceSummary.rumoredAppearances.map((rumor, i) => (
                <div key={i} className="p-3 rounded-lg bg-black/40 border border-amber-500/20">
                  <div className="text-white font-bold">{rumor.title}</div>
                  <div className="text-zinc-400 mt-1">{rumor.notes}</div>
                  <div className="text-amber-400 text-[10px] mt-1 font-bold">
                    NOTICE: {rumor.verificationNotice}
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      )}

      {/* ========================================================================= */}
      {/* TAB 6: CANON SOURCES & CONFIDENCE (SECTION 4.F)                           */}
      {/* ========================================================================= */}
      {activeTab === 'SOURCES' && (
        <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          <div>
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
              PROVENANCE, CITATIONS & CONTINUITY INTEGRITY
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
              CANON SOURCES & FACT VERIFICATION
            </h2>
            <p className="text-xs font-mono text-zinc-400 mt-1">
              Last database verification audit: {characterProfile.last_verified} • Earth-616 Official Continuity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {characterProfile.source_urls.map((src, idx) => (
              <a
                key={idx}
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all flex items-center justify-between group"
              >
                <div>
                  <div className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider mb-1">
                    PRIMARY OFFICIAL CITATION
                  </div>
                  <div className="font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {src.label}
                  </div>
                  <div className="text-xs font-mono text-zinc-500 truncate max-w-md mt-0.5">
                    {src.url}
                  </div>
                </div>

                <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
              </a>
            ))}
          </div>
        </main>
      )}
    </div>
  );
}
