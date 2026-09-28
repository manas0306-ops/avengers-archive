'use client';

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Hero } from '@/types/hero';
import { HeroChapter } from './HeroChapter';
import { TransitionStrip } from './TransitionStrip';
import { MiniIndex } from './MiniIndex';
import { TopProgressBar } from '@/components/layout/TopProgressBar';
import { CommandPalette } from './CommandPalette';
import { CompareModal } from './CompareModal';
import { StarkCursor } from '@/components/ui/StarkCursor';
import { AudioController } from '@/components/ui/AudioController';
import { Filter, Search, ArrowLeftRight } from 'lucide-react';

interface ChapterStackProps {
  heroes: Hero[];
  initialSlug?: string;
}

export function ChapterStack({ heroes, initialSlug }: ChapterStackProps) {
  const [activeTier, setActiveTier] = useState<number | 'ALL'>('ALL');
  const [activeSlug, setActiveSlug] = useState<string>(heroes[0]?.slug || 'iron-man');
  const [isSnapEnabled, setIsSnapEnabled] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  // Filter heroes by tier
  const filteredHeroes = useMemo(() => {
    if (activeTier === 'ALL') return heroes;
    return heroes.filter((h) => h.tier === activeTier);
  }, [heroes, activeTier]);

  const activeHero = useMemo(() => {
    return heroes.find((h) => h.slug === activeSlug) || heroes[0];
  }, [heroes, activeSlug]);

  // Handle prefers-reduced-motion
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setIsSnapEnabled(!mediaQuery.matches);
      if (!mediaQuery.matches) {
        document.documentElement.classList.add('scroll-snap-enabled');
      } else {
        document.documentElement.classList.remove('scroll-snap-enabled');
      }

      const handler = (e: MediaQueryListEvent) => {
        setIsSnapEnabled(!e.matches);
        if (!e.matches) {
          document.documentElement.classList.add('scroll-snap-enabled');
        } else {
          document.documentElement.classList.remove('scroll-snap-enabled');
        }
      };

      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }
  }, []);

  // Update theme CSS variables, document title, and hash when active hero changes
  useEffect(() => {
    if (!activeHero) return;

    // 1. Animate theme CSS variables on <body>
    const body = document.body;
    body.style.setProperty('--primary', activeHero.theme.primary);
    body.style.setProperty('--secondary', activeHero.theme.secondary);
    body.style.setProperty('--bg', activeHero.theme.bg);
    body.style.setProperty('--glow', activeHero.theme.glow);
    body.style.setProperty('--text', activeHero.theme.text);

    // 2. Update document title
    document.title = `${activeHero.alias} — Avengers Archive`;

    // 3. Update URL hash via replaceState (no scroll jump)
    if (window.location.hash !== `#${activeHero.slug}`) {
      window.history.replaceState(null, '', `#${activeHero.slug}`);
    }
  }, [activeHero]);

  // Deep-link initial scroll after mount
  useEffect(() => {
    const hash = window.location.hash.replace('#', '') || initialSlug;
    if (hash) {
      const target = document.getElementById(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
          setActiveSlug(hash);
        }, 350);
      }
    }
  }, [initialSlug]);

  // Active hero detection via IntersectionObserver (occupying >= 35% viewport)
  useEffect(() => {
    const chapters = document.querySelectorAll<HTMLElement>('.hero-chapter');
    if (!chapters.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
            const slug = entry.target.getAttribute('data-slug');
            if (slug && slug !== activeSlug) {
              setActiveSlug(slug);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: [0.35, 0.5, 0.75],
      }
    );

    chapters.forEach((ch) => observer.observe(ch));
    return () => observer.disconnect();
  }, [filteredHeroes, activeSlug]);

  // Global ⌘K / Ctrl+K keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToHero = useCallback((slug: string) => {
    const el = document.getElementById(slug);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSlug(slug);
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Stark HUD Targeting Cursor */}
      <StarkCursor />

      {/* Top Global Scroll Progress Bar */}
      <TopProgressBar accentColor={activeHero?.theme.primary} />

      {/* Floating Tactical HUD Navigation Bar */}
      <div className="fixed top-20 left-4 sm:left-8 z-30 flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-black/70 backdrop-blur-xl border border-white/10 shadow-2xl">
        {/* Tier Filters */}
        <div className="flex items-center gap-1">
          <span className="px-2 text-zinc-400 font-mono text-[10px] uppercase flex items-center gap-1">
            <Filter className="w-3 h-3 text-zinc-400" />
            <span className="hidden sm:inline">ROSTER:</span>
          </span>
          {(['ALL', 1, 2, 3] as const).map((tier) => (
            <button
              key={String(tier)}
              type="button"
              onClick={() => setActiveTier(tier)}
              className={`px-2.5 py-1 rounded-xl text-[11px] font-mono transition-all duration-200 ${
                activeTier === tier
                  ? 'bg-white/20 text-white font-bold shadow-md'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
              style={{
                borderColor: activeTier === tier ? activeHero?.theme.primary : undefined,
                color: activeTier === tier ? activeHero?.theme.secondary : undefined,
              }}
            >
              {tier === 'ALL' ? 'ALL' : `T${tier}`}
            </button>
          ))}
        </div>

        <div className="w-[1px] h-4 bg-white/10 hidden sm:block" />

        {/* Global Search ⌘K Button */}
        <button
          type="button"
          onClick={() => setIsSearchOpen(true)}
          className="px-2.5 py-1 rounded-xl text-[11px] font-mono text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-colors flex items-center gap-1.5"
          title="Search Heroes (⌘K)"
        >
          <Search className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">SEARCH</span>
          <kbd className="hidden md:inline-block px-1.5 py-0.5 rounded bg-white/10 text-white/50 text-[9px] font-mono">
            ⌘K
          </kbd>
        </button>

        {/* Compare Mode Button */}
        <button
          type="button"
          onClick={() => setIsCompareOpen(true)}
          className="px-2.5 py-1 rounded-xl text-[11px] font-mono text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-colors flex items-center gap-1.5"
          title="Compare Hero Power Stats"
        >
          <ArrowLeftRight className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">COMPARE</span>
        </button>

        <div className="w-[1px] h-4 bg-white/10 hidden sm:block" />

        {/* Procedural Audio Controller */}
        <AudioController />
      </div>

      {/* Sticky Mini-Index (Vertical Dots on Far Right Edge) */}
      <MiniIndex
        heroes={filteredHeroes}
        activeSlug={activeSlug}
        onSelectHero={scrollToHero}
      />

      {/* Stack of Hero Chapters with 40vh Transition Strips in between */}
      <main className="w-full flex flex-col">
        {filteredHeroes.map((hero, index) => {
          const nextHero = filteredHeroes[index + 1];

          return (
            <React.Fragment key={hero.slug}>
              {/* Hero Chapter (Blocks A, B, A2, C, D, E, F) */}
              <HeroChapter hero={hero} onSelectTeamUp={scrollToHero} />

              {/* 40vh Transition Strip to Next Hero */}
              {nextHero && <TransitionStrip nextHero={nextHero} />}
            </React.Fragment>
          );
        })}
      </main>

      {/* ⌘K Command Palette Modal */}
      <CommandPalette
        heroes={heroes}
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectHero={scrollToHero}
      />

      {/* Hero Compare Mode Modal */}
      <CompareModal
        heroes={heroes}
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        defaultHeroSlug={activeSlug}
      />
    </div>
  );
}
