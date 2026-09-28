'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Shield,
  Zap,
  Swords,
  Users,
  Quote,
  Clock,
  Sparkles,
  ExternalLink,
  BookOpen,
  Info,
} from 'lucide-react';
import { Character } from '@/types/character';
import { StatusBadge, CategoryBadge } from '@/components/ui/Badge';
import { useSound } from '@/hooks/useSound';
import { useFavorites } from '@/hooks/useFavorites';
import { useSpoilerMode } from '@/hooks/useSpoilerMode';
import confetti from 'canvas-confetti';

interface HeroArchiveCarouselProps {
  characters: Character[];
  initialCharacterId?: string;
}

export function HeroArchiveCarousel({
  characters,
  initialCharacterId,
}: HeroArchiveCarouselProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const requestedId = searchParams.get('id') || initialCharacterId;

  const initialIndex = useMemo(() => {
    if (!requestedId) return 0;
    const found = characters.findIndex((c) => c.id === requestedId);
    return found >= 0 ? found : 0;
  }, [requestedId, characters]);

  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [activeStoryTab, setActiveStoryTab] = useState<
    'story' | 'timeline' | 'powers' | 'relationships' | 'where_are_they_now'
  >('story');
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const { playHover, playConfirm } = useSound();
  const { isFavorited, toggleFavorite } = useFavorites();
  const { showSpoilers } = useSpoilerMode();

  const currentHero = characters[currentIndex] || characters[0];
  const total = characters.length;

  const handleSelectHero = useCallback(
    (index: number) => {
      let targetIndex = index;
      if (targetIndex < 0) targetIndex = total - 1;
      if (targetIndex >= total) targetIndex = 0;
      setCurrentIndex(targetIndex);
      playConfirm();
      const heroId = characters[targetIndex].id;
      window.history.replaceState(null, '', `/heroes?id=${heroId}`);
    },
    [total, characters, playConfirm]
  );

  const handlePrev = useCallback(() => {
    handleSelectHero(currentIndex - 1);
  }, [currentIndex, handleSelectHero]);

  const handleNext = useCallback(() => {
    handleSelectHero(currentIndex + 1);
  }, [currentIndex, handleSelectHero]);

  // Keyboard Arrow Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  // Touch Swipe Handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    setTouchStartX(null);
  };

  const isFav = isFavorited('CHARACTER', currentHero.id);

  const handleFavoriteClick = () => {
    const added = toggleFavorite('CHARACTER', currentHero.id, currentHero.name);
    if (added) {
      confetti({
        particleCount: 35,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#e23636', '#00f0ff', '#f59e0b'],
      });
    }
  };

  const progressNum = (currentIndex + 1).toString().padStart(2, '0');
  const totalNum = total.toString().padStart(2, '0');

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative min-h-[95vh] w-full flex flex-col justify-between overflow-hidden pt-20 pb-8 px-3 sm:px-6 select-none"
    >
      {/* Background with cinematic blur & darkened gradient */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-700 filter brightness-40 scale-105"
        style={{
          backgroundImage: `url("${currentHero.background_image}")`,
        }}
      />
      <div className="absolute inset-0 z-0 bg-hero-vignette pointer-events-none" />
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-30 transition-all duration-700"
        style={{
          background: `radial-gradient(circle at 60% 30%, ${currentHero.accent_theme.glow} 0%, transparent 60%)`,
        }}
      />

      {/* FIXED SIDE NAVIGATION CONTROLS (Right & Left vertically centered) */}
      <button
        type="button"
        onClick={handlePrev}
        onMouseEnter={() => playHover()}
        aria-label="Previous Hero (Arrow Left)"
        className="fixed left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-4 rounded-full bg-archive-darker/80 hover:bg-marvel-red/80 text-white border border-white/20 hover:border-marvel-red shadow-[0_0_20px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-95 group focus:outline-none"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 group-hover:-translate-x-1 transition-transform" />
      </button>

      <button
        type="button"
        onClick={handleNext}
        onMouseEnter={() => playHover()}
        aria-label="Next Hero (Arrow Right)"
        className="fixed right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-4 rounded-full bg-archive-darker/80 hover:bg-marvel-red/80 text-white border border-white/20 hover:border-marvel-red shadow-[0_0_20px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-95 group focus:outline-none"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* TOP HEADER: Category, Counter & Favorites */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <CategoryBadge category={currentHero.category} />
          <StatusBadge status={currentHero.status} />
        </div>

        {/* Dynamic Progress Indicator: 01 / TOTAL */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm sm:text-base font-bold tracking-widest text-white/90 bg-black/40 px-3 py-1 rounded-full border border-white/10">
            <span className="text-marvel-red">{progressNum}</span>
            <span className="text-zinc-500"> / </span>
            <span className="text-zinc-300">{totalNum}</span>
          </span>

          {/* Favorite Toggle Button */}
          <button
            type="button"
            onClick={handleFavoriteClick}
            aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
            className={`p-2 rounded-full border transition-all duration-200 ${
              isFav
                ? 'bg-red-600/20 border-red-500 text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)]'
                : 'bg-black/40 border-white/10 text-zinc-400 hover:text-white'
            }`}
          >
            <Heart className={`w-5 h-5 ${isFav ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>

      {/* MAIN HERO PRESENTATION */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
        {/* Left Column: Hero Large Image */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-72 sm:w-88 md:w-96 aspect-[3/4] rounded-3xl overflow-hidden border-2 border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.9)] group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={currentHero.hero_image}
              alt={currentHero.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-archive-darkest via-transparent to-transparent pointer-events-none" />

            {/* Floating Quote on Image */}
            {currentHero.quotes.length > 0 && (
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-xs italic font-serif text-white/90">
                &ldquo;{currentHero.quotes[0].quote}&rdquo;
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Hero Dossier & Interactive Narrative */}
        <div className="lg:col-span-7 flex flex-col space-y-4">
          <div>
            <span className="text-xs font-mono tracking-widest text-marvel-arc uppercase font-semibold">
              {currentHero.team_status}
            </span>
            <h1 className="font-cinematic text-4xl sm:text-6xl font-black text-white tracking-wide leading-none mt-1">
              {currentHero.name}
            </h1>
            <p className="font-mono text-base text-zinc-300 mt-1">
              {currentHero.real_name} • <span className="text-zinc-400">{currentHero.hero_title}</span>
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 py-2 text-xs font-mono">
            <div className="p-2.5 rounded-xl bg-black/40 border border-white/10">
              <span className="text-zinc-500 block text-[10px] uppercase">First Appearance</span>
              <span className="text-zinc-200 font-semibold">{currentHero.first_appearance}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-black/40 border border-white/10">
              <span className="text-zinc-500 block text-[10px] uppercase">Last Appearance</span>
              <span className="text-zinc-200 font-semibold">{currentHero.last_appearance}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-black/40 border border-white/10 col-span-2 sm:col-span-1">
              <span className="text-zinc-500 block text-[10px] uppercase">Current Status</span>
              <span className="text-zinc-200 font-semibold">{currentHero.status}</span>
            </div>
          </div>

          {/* Interactive Narrative Tabs */}
          <div className="flex flex-wrap gap-1 p-1 rounded-xl bg-black/40 border border-white/10 text-xs font-mono">
            {[
              { id: 'story', label: 'STORY', icon: BookOpen },
              { id: 'timeline', label: 'TIMELINE', icon: Clock },
              { id: 'powers', label: 'POWERS & WEAPONS', icon: Zap },
              { id: 'relationships', label: 'RELATIONSHIPS', icon: Users },
              { id: 'where_are_they_now', label: 'WHERE ARE THEY NOW?', icon: Info },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeStoryTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    playConfirm();
                    setActiveStoryTab(tab.id as typeof activeStoryTab);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-marvel-red text-white font-bold shadow-[0_0_10px_rgba(226,54,54,0.5)]'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content Panels */}
          <div className="p-5 rounded-2xl bg-archive-card/90 border border-white/10 backdrop-blur-xl min-h-[220px] max-h-[360px] overflow-y-auto text-sm text-zinc-300 font-sans space-y-4">
            {/* 1. STORY PANEL */}
            {activeStoryTab === 'story' && (
              <div className="space-y-4 animate-fade-in">
                <div>
                  <h4 className="font-mono text-xs text-marvel-gold font-bold uppercase tracking-wider mb-1">
                    ORIGIN
                  </h4>
                  <p className="leading-relaxed">{currentHero.storyline.origin}</p>
                </div>
                <div>
                  <h4 className="font-mono text-xs text-marvel-gold font-bold uppercase tracking-wider mb-1">
                    RISE OF THE AVENGER
                  </h4>
                  <p className="leading-relaxed">{currentHero.storyline.rise}</p>
                </div>
                <div>
                  <h4 className="font-mono text-xs text-marvel-gold font-bold uppercase tracking-wider mb-1">
                    GREATEST BATTLES &amp; TURNING POINT
                  </h4>
                  <p className="leading-relaxed">{currentHero.storyline.greatest_battles}</p>
                </div>
                <div>
                  <h4 className="font-mono text-xs text-marvel-gold font-bold uppercase tracking-wider mb-1">
                    LEGACY
                  </h4>
                  <p className="leading-relaxed">{currentHero.storyline.legacy}</p>
                </div>
              </div>
            )}

            {/* 2. TIMELINE PANEL */}
            {activeStoryTab === 'timeline' && (
              <div className="space-y-4 animate-fade-in">
                {currentHero.timeline.map((entry, idx) => (
                  <div key={idx} className="relative pl-6 border-l border-marvel-red/40 pb-2">
                    <span className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-marvel-red border-2 border-archive-darkest" />
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-marvel-arc">
                        {entry.year}
                      </span>
                      <span className="text-xs font-bold text-white">{entry.title}</span>
                    </div>
                    <p
                      className={`text-xs text-zinc-300 mt-1 transition-all ${
                        entry.spoiler && !showSpoilers ? 'blur-sm select-none' : ''
                      }`}
                    >
                      {entry.description}
                    </p>
                    {entry.spoiler && !showSpoilers && (
                      <span className="text-[10px] font-mono text-amber-400">
                        [SPOILER HIDDEN - Enable Spoilers in Navbar to read]
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* 3. POWERS & WEAPONS PANEL */}
            {activeStoryTab === 'powers' && (
              <div className="space-y-4 animate-fade-in">
                <div>
                  <h4 className="font-mono text-xs text-marvel-arc font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" /> CATEGORIZED POWERS &amp; ABILITIES
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentHero.powers.map((power, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-marvel-arc/10 border border-marvel-arc/30 text-marvel-arc text-xs font-mono"
                      >
                        {power}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-xs text-red-400 font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Swords className="w-3.5 h-3.5" /> SIGNATURE WEAPONS &amp; EQUIPMENT
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentHero.weapons.map((w, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-red-950/40 border border-red-500/30 text-red-300 text-xs font-mono"
                      >
                        {w}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-xs text-zinc-400 font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5" /> KNOWN AFFILIATIONS
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentHero.affiliations.map((aff, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono"
                      >
                        {aff}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 4. RELATIONSHIPS PANEL */}
            {activeStoryTab === 'relationships' && (
              <div className="space-y-3 animate-fade-in">
                {currentHero.relationships.map((rel, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-xs">{rel.character_name}</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-950/60 border border-purple-500/40 text-purple-300">
                        {rel.relation}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-300">{rel.notes}</p>
                  </div>
                ))}
              </div>
            )}

            {/* 5. WHERE ARE THEY NOW? */}
            {activeStoryTab === 'where_are_they_now' && (
              <div className="space-y-4 animate-fade-in">
                <div className="p-3.5 rounded-xl bg-marvel-arc/5 border border-marvel-arc/20">
                  <span className="text-[10px] font-mono text-marvel-arc font-bold uppercase block mb-1">
                    CURRENT KNOWN MCU STATUS (EARTH-616)
                  </span>
                  <p className="text-xs font-semibold text-white">
                    {currentHero.where_are_they_now.current_mcu_status}
                  </p>
                </div>

                <div className="space-y-2 text-xs font-mono">
                  <div>
                    <strong className="text-zinc-400">LAST APPEARANCE: </strong>
                    <span className="text-zinc-200">
                      {currentHero.where_are_they_now.last_known_appearance}
                    </span>
                  </div>
                  <div>
                    <strong className="text-zinc-400">POST-ENDGAME STATUS: </strong>
                    <span className="text-zinc-200">
                      {currentHero.where_are_they_now.post_endgame_development}
                    </span>
                  </div>
                  <div>
                    <strong className="text-zinc-400">FUTURE PROJECTS: </strong>
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                        currentHero.where_are_they_now.future_status === 'CONFIRMED'
                          ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/50'
                          : 'bg-zinc-800 text-zinc-300 border border-zinc-600'
                      }`}
                    >
                      {currentHero.where_are_they_now.future_status}
                    </span>
                    {currentHero.where_are_they_now.future_project_name && (
                      <span className="text-zinc-300 block mt-1">
                        {currentHero.where_are_they_now.future_project_name}
                      </span>
                    )}
                  </div>
                  <div className="pt-2 text-[11px] text-zinc-400 italic">
                    Source: {currentHero.where_are_they_now.source}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sources and Verification Footer */}
          <div className="flex flex-wrap items-center justify-between text-[11px] font-mono text-zinc-400 pt-1 border-t border-white/5">
            <div className="flex items-center gap-3">
              <span>Verified: {currentHero.last_verified}</span>
              <span>•</span>
              <span>Version: {currentHero.content_version}</span>
            </div>
            <div className="flex items-center gap-2">
              {currentHero.source_urls.map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-marvel-arc flex items-center gap-1"
                >
                  {s.label} <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM THIN PROGRESS TIMELINE */}
      <div className="relative z-10 max-w-7xl mx-auto w-full mt-6">
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto py-2 scrollbar-none">
          {characters.map((hero, idx) => {
            const isCurrent = idx === currentIndex;
            return (
              <button
                key={hero.id}
                type="button"
                onClick={() => handleSelectHero(idx)}
                onMouseEnter={() => playHover()}
                className={`group relative flex-1 min-w-[28px] h-2 rounded-full transition-all duration-300 ${
                  isCurrent
                    ? 'h-3.5 bg-marvel-red shadow-[0_0_12px_#e23636]'
                    : 'bg-white/15 hover:bg-white/35'
                }`}
                title={hero.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
