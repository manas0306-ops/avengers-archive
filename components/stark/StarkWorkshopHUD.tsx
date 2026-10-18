'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import Image from 'next/image';
import { STARK_ARMORS } from '@/data/stark_armors';
import { IronManArmor, ArmorCategory } from '@/types/ironman';
import { SuitDetailModal } from './SuitDetailModal';
import { ArmorComparisonModal } from './ArmorComparisonModal';
import { StarkInventionsView } from './StarkInventionsView';
import { StarkTimelineView } from './StarkTimelineView';
import { ArcReactor } from '@/components/ui/ArcReactor';
import { withBase } from '@/lib/utils';
import {
  Shield,
  Search,
  Filter,
  ArrowLeftRight,
  Cpu,
  Layers,
  Clock,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Zap,
  FastForward,
  Activity,
  SlidersHorizontal,
  Compass,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

interface StarkWorkshopHUDProps {
  onBackToStack?: () => void;
}

export function StarkWorkshopHUD({ onBackToStack }: StarkWorkshopHUDProps) {
  // Initialization & entry animation states
  const [initStage, setInitStage] = useState<'INITIALIZING' | 'READY'>('INITIALIZING');
  const [initPercent, setInitPercent] = useState(0);
  const [activeTab, setActiveTab] = useState<'ARMORS' | 'INVENTIONS' | 'TIMELINE' | 'FRIDAY'>('ARMORS');

  // Armor Vault States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [inspectedSuit, setInspectedSuit] = useState<IronManArmor | null>(null);
  const [comparisonList, setComparisonList] = useState<IronManArmor[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'CAROUSEL' | 'GRID'>('CAROUSEL');

  // Carousel ref
  const carouselRef = useRef<HTMLDivElement>(null);

  // Check prefers-reduced-motion
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (mediaQuery.matches) {
        setInitStage('READY');
        setInitPercent(100);
        return;
      }
    }

    // Run short cinematic entry boot sequence
    let current = 0;
    const interval = setInterval(() => {
      current += 4;
      setInitPercent(current);
      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => setInitStage('READY'), 300);
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  const skipAnimation = () => {
    setInitStage('READY');
    setInitPercent(100);
  };

  // Categories list
  const categories: Array<{ id: string; label: string }> = [
    { id: 'ALL', label: 'ALL 85 MARKS' },
    { id: 'COMBAT', label: 'COMBAT' },
    { id: 'NANOTECHNOLOGY', label: 'NANOTECH' },
    { id: 'HEAVY_DUTY', label: 'HEAVY / HULKBUSTER' },
    { id: 'RAPID_DEPLOYMENT', label: 'RAPID DEPLOYMENT' },
    { id: 'STEALTH', label: 'STEALTH' },
    { id: 'SPACE', label: 'SPACE / ORBITAL' },
    { id: 'SPECIALIZED', label: 'SPECIALIZED' },
    { id: 'AUTONOMOUS', label: 'AUTONOMOUS' }
  ];

  // Filtered Armors
  const filteredArmors = useMemo(() => {
    return STARK_ARMORS.filter((armor) => {
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === '' ||
        armor.name.toLowerCase().includes(query) ||
        armor.romanNumeral.toLowerCase().includes(query) ||
        armor.mark.toString() === query ||
        `mark ${armor.mark}`.includes(query) ||
        (armor.nickname && armor.nickname.toLowerCase().includes(query)) ||
        armor.category.toLowerCase().includes(query) ||
        armor.weaponsAndPayload.some((w) => w.toLowerCase().includes(query));

      const matchesCat = selectedCategory === 'ALL' || armor.category === selectedCategory;
      return matchesSearch && matchesCat;
    });
  }, [searchQuery, selectedCategory]);

  const toggleCompare = (armor: IronManArmor) => {
    setComparisonList((prev) => {
      const exists = prev.some((a) => a.mark === armor.mark);
      if (exists) {
        return prev.filter((a) => a.mark !== armor.mark);
      }
      if (prev.length >= 4) {
        return [...prev.slice(1), armor];
      }
      return [...prev, armor];
    });
  };

  const removeCompare = (mark: number) => {
    setComparisonList((prev) => prev.filter((a) => a.mark !== mark));
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const offset = direction === 'left' ? -380 : 380;
      carouselRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#060911] text-white selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* Background Stark Workshop Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,240,255,0.12),transparent_70%)]" />
        <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-cyan-600/10 blur-[130px]" />
        <div className="absolute bottom-1/3 -right-48 w-96 h-96 rounded-full bg-red-600/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* ========================================================================= */}
      {/* ENTRY INITIALIZATION HUD OVERLAY (SKIP/MOTION ACCESSIBLE)                  */}
      {/* ========================================================================= */}
      {initStage === 'INITIALIZING' && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#060911]/95 backdrop-blur-2xl">
          {/* Diamond Reticle Visual */}
          <div className="relative w-40 h-40 flex items-center justify-center mb-8">
            <div className="absolute inset-0 rotate-45 border-2 border-cyan-400/40 animate-pulse" />
            <div className="absolute inset-3 rotate-45 border border-cyan-400/20" />
            <ArcReactor size="lg" interactive={false} />
          </div>

          <div className="font-mono text-center space-y-2">
            <div className="text-[10px] tracking-[0.3em] text-cyan-400 uppercase animate-pulse">
              F.R.I.D.A.Y. WORKSHOP SUBSYSTEM INITIALIZATION
            </div>
            <div className="text-2xl font-black font-display text-white tracking-widest">
              MARK I – LXXXV ARMOR PROTOCOL
            </div>
            <div className="w-64 h-1.5 mx-auto bg-white/10 rounded-full overflow-hidden mt-4">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 transition-all duration-75"
                style={{ width: `${initPercent}%` }}
              />
            </div>
            <div className="text-xs text-zinc-400 pt-1">{initPercent}% SYNCHRONIZED</div>
          </div>

          <button
            type="button"
            onClick={skipAnimation}
            className="mt-8 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-mono tracking-wider text-cyan-300 hover:text-white transition-all flex items-center gap-2"
          >
            <FastForward className="w-3.5 h-3.5" />
            SKIP BOOT SEQUENCE
          </button>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MAIN WORKSHOP HEADER & TELEMETRY BANNER                                  */}
      {/* ========================================================================= */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-cyan-500/20">
          <div className="flex items-center gap-4">
            <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 shadow-[0_0_25px_rgba(0,240,255,0.25)]">
              <div className="absolute inset-1 rotate-45 border border-cyan-400/30" />
              <ArcReactor size="sm" interactive={false} />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] tracking-widest text-cyan-400 uppercase font-semibold">
                  STARK INDUSTRIES • WORKSHOP INTELLIGENCE
                </span>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 uppercase">
                  F.R.I.D.A.Y. ONLINE
                </span>
              </div>
              <h1 className="font-display font-black text-2xl sm:text-4xl text-white tracking-wide mt-0.5">
                TONY STARK: THE HALL OF ARMOR
              </h1>
              <p className="text-xs text-zinc-400 font-mono mt-0.5 hidden sm:block">
                Complete Mark I through Mark LXXXV Archive • Inventions • Dual Chronology
              </p>
            </div>
          </div>

          {/* Header Action Tools */}
          <div className="flex items-center gap-3 self-end md:self-center">
            {comparisonList.length > 0 && (
              <button
                type="button"
                onClick={() => setIsCompareModalOpen(true)}
                className="px-3.5 py-2 rounded-xl bg-cyan-500 text-black font-mono font-bold text-xs tracking-wider shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:bg-cyan-400 transition-all flex items-center gap-2 animate-bounce-subtle"
              >
                <ArrowLeftRight className="w-3.5 h-3.5" />
                <span>COMPARE ({comparisonList.length})</span>
              </button>
            )}

            {onBackToStack && (
              <button
                type="button"
                onClick={onBackToStack}
                className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono tracking-wider text-zinc-300 hover:text-white transition-all"
              >
                RETURN TO CHAPTER STACK
              </button>
            )}
          </div>
        </div>

        {/* HUD Navigation Tabs */}
        <nav
          aria-label="Stark Workshop Navigation"
          className="flex items-center gap-2 pt-4 overflow-x-auto scrollbar-none"
        >
          <button
            type="button"
            onClick={() => setActiveTab('ARMORS')}
            className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all flex items-center gap-2 border ${
              activeTab === 'ARMORS'
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-[0_0_15px_rgba(0,240,255,0.2)] font-bold'
                : 'bg-white/5 text-zinc-400 hover:text-white border-transparent hover:border-white/10'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>ARMOR VAULT (MARK I–LXXXV)</span>
            <span className="ml-1 text-[10px] px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300">
              85
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('INVENTIONS')}
            className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all flex items-center gap-2 border ${
              activeTab === 'INVENTIONS'
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-[0_0_15px_rgba(0,240,255,0.2)] font-bold'
                : 'bg-white/5 text-zinc-400 hover:text-white border-transparent hover:border-white/10'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>INVENTIONS & TECHNOLOGIES</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('TIMELINE')}
            className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all flex items-center gap-2 border ${
              activeTab === 'TIMELINE'
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-[0_0_15px_rgba(0,240,255,0.2)] font-bold'
                : 'bg-white/5 text-zinc-400 hover:text-white border-transparent hover:border-white/10'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>DUAL CHRONOLOGY</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('FRIDAY')}
            className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all flex items-center gap-2 border ${
              activeTab === 'FRIDAY'
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-[0_0_15px_rgba(0,240,255,0.2)] font-bold'
                : 'bg-white/5 text-zinc-400 hover:text-white border-transparent hover:border-white/10'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>FRIDAY DIAGNOSTICS</span>
          </button>
        </nav>
      </header>

      {/* ========================================================================= */}
      {/* TAB 1: COMPLETE MARK I - LXXXV ARMOR CATALOG                              */}
      {/* ========================================================================= */}
      {activeTab === 'ARMORS' && (
        <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
          {/* Controls: Search, Categories, Grid/Carousel Toggle */}
          <div className="p-4 sm:p-5 rounded-2xl bg-black/60 border border-cyan-500/20 backdrop-blur-md space-y-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search by Mark Number or Name */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Mark #, name, nanotech, space, Hulkbuster..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-cyan-500/30 text-white placeholder-zinc-500 font-mono text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40"
                />
              </div>

              {/* View Toggle & Carousel Navigation */}
              <div className="flex items-center gap-3 self-end md:self-center">
                <div className="flex items-center p-1 rounded-xl bg-white/5 border border-white/10">
                  <button
                    type="button"
                    onClick={() => setViewMode('CAROUSEL')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                      viewMode === 'CAROUSEL'
                        ? 'bg-cyan-500/20 text-cyan-300 font-bold'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    CAROUSEL
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode('GRID')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                      viewMode === 'GRID'
                        ? 'bg-cyan-500/20 text-cyan-300 font-bold'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    GRID
                  </button>
                </div>

                {viewMode === 'CAROUSEL' && (
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => scrollCarousel('left')}
                      aria-label="Scroll left"
                      className="p-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-white transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => scrollCarousel('right')}
                      aria-label="Scroll right"
                      className="p-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-white transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pt-2 border-t border-white/5 scrollbar-thin">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-lg text-[11px] font-mono whitespace-nowrap transition-all border ${
                      isSelected
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-[0_0_12px_rgba(0,240,255,0.2)]'
                        : 'bg-white/5 text-zinc-400 hover:text-white border-transparent hover:border-white/10'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between font-mono text-xs text-zinc-400 px-1">
            <span>SHOWING {filteredArmors.length} OF 85 ARMORS</span>
            {comparisonList.length > 0 && (
              <span className="text-cyan-400">
                {comparisonList.length} SUIT(S) QUEUED IN COMPARISON TANK
              </span>
            )}
          </div>

          {/* ========================================================================= */}
          {/* CAROUSEL VIEW                                                             */}
          {/* ========================================================================= */}
          {viewMode === 'CAROUSEL' && (
            <div
              ref={carouselRef}
              className="flex items-stretch gap-5 overflow-x-auto pb-6 pt-2 scrollbar-thin scroll-smooth"
            >
              {filteredArmors.map((armor) => {
                const isCompared = comparisonList.some((c) => c.mark === armor.mark);
                return (
                  <div
                    key={armor.mark}
                    className="group relative flex-none w-[320px] rounded-2xl bg-[#090d16]/95 border border-cyan-500/25 hover:border-cyan-400/60 p-5 flex flex-col justify-between transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.7)] hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]"
                  >
                    {/* Card Top Header */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-xs font-black text-cyan-400 tracking-wider">
                          {armor.romanNumeral}
                        </span>
                        <span
                          className={`text-[9px] font-mono px-2 py-0.5 rounded border uppercase ${
                            armor.verificationStatus === 'VERIFIED_ON_SCREEN'
                              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                              : armor.verificationStatus === 'CANONICAL_REFERENCE'
                              ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
                              : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                          }`}
                        >
                          {armor.category.replace(/_/g, ' ')}
                        </span>
                      </div>

                      {/* Suit Visual Frame */}
                      <div
                        className="relative w-full aspect-[4/5] rounded-xl bg-black/60 border border-white/5 flex items-center justify-center p-3 mb-4 cursor-pointer overflow-hidden group-hover:border-cyan-500/40 transition-colors"
                        onClick={() => setInspectedSuit(armor)}
                      >
                        <Image
                          src={withBase(armor.image)}
                          alt={armor.name}
                          fill
                          className="object-contain group-hover:scale-105 transition-transform duration-500"
                          sizes="300px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-3">
                          <span className="text-[10px] font-mono text-cyan-300 tracking-widest uppercase flex items-center gap-1">
                            <Maximize2 className="w-3 h-3" />
                            INSPECT SCHEMATIC
                          </span>
                        </div>
                      </div>

                      {/* Title & Nickname */}
                      <h3 className="font-display font-black text-lg text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                        {armor.name}
                      </h3>
                      {armor.nickname && (
                        <div className="text-xs font-mono text-zinc-400">
                          &ldquo;{armor.nickname}&rdquo;
                        </div>
                      )}

                      {/* Key Telemetry Snippet */}
                      <div className="mt-3 pt-3 border-t border-white/5 space-y-1 font-mono text-[11px] text-zinc-300">
                        <div className="flex justify-between">
                          <span className="text-zinc-500">FIRST SEEN:</span>
                          <span className="text-zinc-300">{armor.firstAppearance.title} ({armor.firstAppearance.year})</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-500">MAX SPEED:</span>
                          <span className="text-cyan-400">{armor.propulsionAndFlight.flightSpeed.split(' ')[0]}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-500">REACTOR:</span>
                          <span className="text-zinc-300 truncate max-w-[170px]">{armor.powerSystem.arcReactorCore.split(' ')[0]} Core</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Actions */}
                    <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => setInspectedSuit(armor)}
                        className="px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-mono text-xs tracking-wider transition-colors"
                      >
                        SPECIFICATIONS
                      </button>

                      <button
                        type="button"
                        onClick={() => toggleCompare(armor)}
                        className={`p-2 rounded-lg border text-xs font-mono transition-colors ${
                          isCompared
                            ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50'
                            : 'bg-white/5 text-zinc-400 hover:text-white border-white/10'
                        }`}
                        title={isCompared ? 'Remove from comparison' : 'Add to comparison'}
                      >
                        <ArrowLeftRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* ========================================================================= */}
          {/* GRID VIEW                                                                 */}
          {/* ========================================================================= */}
          {viewMode === 'GRID' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filteredArmors.map((armor) => {
                const isCompared = comparisonList.some((c) => c.mark === armor.mark);
                return (
                  <div
                    key={armor.mark}
                    className="p-4 rounded-2xl bg-[#090d16]/90 border border-cyan-500/20 hover:border-cyan-400/50 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-xs font-black text-cyan-400">
                          {armor.romanNumeral}
                        </span>
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-zinc-400 uppercase">
                          {armor.category}
                        </span>
                      </div>

                      <div
                        className="relative w-full aspect-[4/5] rounded-xl bg-black/60 p-2 my-2 cursor-pointer flex items-center justify-center overflow-hidden"
                        onClick={() => setInspectedSuit(armor)}
                      >
                        <Image
                          src={withBase(armor.image)}
                          alt={armor.name}
                          fill
                          className="object-contain hover:scale-105 transition-transform"
                        />
                      </div>

                      <h4 className="font-display font-bold text-base text-white line-clamp-1">
                        {armor.name}
                      </h4>
                      <p className="text-[11px] font-mono text-zinc-400 line-clamp-1">
                        {armor.firstAppearance.title} ({armor.firstAppearance.year})
                      </p>
                    </div>

                    <div className="mt-4 pt-2 border-t border-white/5 flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => setInspectedSuit(armor)}
                        className="text-xs font-mono text-cyan-400 hover:text-cyan-300"
                      >
                        INSPECT →
                      </button>

                      <button
                        type="button"
                        onClick={() => toggleCompare(armor)}
                        className={`p-1.5 rounded-lg border text-xs font-mono ${
                          isCompared
                            ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50'
                            : 'bg-white/5 text-zinc-400 hover:text-white border-white/10'
                        }`}
                      >
                        <ArrowLeftRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </main>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: INVENTIONS & TECHNOLOGIES                                          */}
      {/* ========================================================================= */}
      {activeTab === 'INVENTIONS' && (
        <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <StarkInventionsView />
        </main>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: DUAL CHRONOLOGY                                                    */}
      {/* ========================================================================= */}
      {activeTab === 'TIMELINE' && (
        <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <StarkTimelineView />
        </main>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: F.R.I.D.A.Y. SYSTEM READOUT                                        */}
      {/* ========================================================================= */}
      {activeTab === 'FRIDAY' && (
        <main className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
          <div className="p-6 rounded-2xl bg-black/60 border border-cyan-500/30 backdrop-blur-md space-y-4">
            <div className="flex items-center gap-3 pb-4 border-b border-cyan-500/20">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              <div className="font-mono text-sm text-cyan-300 font-bold uppercase tracking-wider">
                F.R.I.D.A.Y. ARCHIVE HEALTH & TELEMETRY LOGS
              </div>
            </div>

            <p className="font-mono text-xs text-zinc-300 leading-relaxed">
              &ldquo;Good day. I am currently monitoring all 85 Iron Man armor chassis registries,
              Stark Industries clean energy grids, and Earth-616 defense perimeter beacons.
              All data files are validated against the Marvel Studios canonical timeline.&rdquo;
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 font-mono text-xs">
                <div className="text-zinc-500">ARMOR PROTOCOLS:</div>
                <div className="text-2xl font-black text-white mt-1">85 SUITS</div>
                <div className="text-[10px] text-emerald-400 mt-0.5">100% REGISTRY INTEGRITY</div>
              </div>

              <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 font-mono text-xs">
                <div className="text-zinc-500">STARK INVENTIONS:</div>
                <div className="text-2xl font-black text-white mt-1">10 SYSTEMS</div>
                <div className="text-[10px] text-cyan-400 mt-0.5">ARC, AI, NANOTECH, GPS</div>
              </div>

              <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 font-mono text-xs">
                <div className="text-zinc-500">CANON INTEGRITY:</div>
                <div className="text-2xl font-black text-white mt-1">EARTH-616</div>
                <div className="text-[10px] text-amber-400 mt-0.5">UNKNOWN FIELDS FLAGGED</div>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* ========================================================================= */}
      {/* MODALS: SUIT DETAIL & SUIT COMPARISON                                     */}
      {/* ========================================================================= */}
      <SuitDetailModal
        armor={inspectedSuit}
        onClose={() => setInspectedSuit(null)}
        onCompare={toggleCompare}
        isCompared={inspectedSuit ? comparisonList.some((c) => c.mark === inspectedSuit.mark) : false}
      />

      {isCompareModalOpen && (
        <ArmorComparisonModal
          suits={comparisonList}
          onClose={() => setIsCompareModalOpen(false)}
          onRemoveSuit={removeCompare}
          onClearAll={() => {
            setComparisonList([]);
            setIsCompareModalOpen(false);
          }}
        />
      )}
    </div>
  );
}
