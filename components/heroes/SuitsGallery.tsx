'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Hero } from '@/types/hero';
import { withBase } from '@/lib/utils';
import { ChevronLeft, ChevronRight, X, Shield, Maximize2 } from 'lucide-react';

interface SuitsGalleryProps {
  hero: Hero;
}

export function SuitsGallery({ hero }: SuitsGalleryProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [animatedCount, setAnimatedCount] = useState(0);

  const totalSuits = hero.suits.length;

  // Animated Count-up effect
  useEffect(() => {
    let current = 0;
    const duration = 1200;
    const stepTime = Math.max(20, Math.floor(duration / (totalSuits || 1)));

    const timer = setInterval(() => {
      current += 1;
      setAnimatedCount(current);
      if (current >= totalSuits) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [totalSuits]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (activeLightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) => (prev !== null ? (prev + 1) % totalSuits : 0));
      } else if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + totalSuits) % totalSuits : totalSuits - 1
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, totalSuits]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full my-16">
      {/* Gallery Header: Title left, Animated Counter right */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-6 pb-3 border-b border-white/10 gap-3">
        <div>
          <span className="font-mono text-[10px] tracking-widest text-zinc-400 uppercase flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-zinc-400" />
            TACTICAL ARMOR VAULT • BLOCK C
          </span>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-wide mt-1">
            SUITS / COSTUMES USED
          </h3>
        </div>

        <div className="flex items-center gap-4">
          <div className="font-mono text-right">
            <span className="text-zinc-400 text-xs tracking-widest uppercase mr-2">TOTAL:</span>
            <span
              className="text-3xl sm:text-4xl font-black font-display tracking-tight"
              style={{ color: hero.theme.secondary }}
            >
              {animatedCount}
            </span>
          </div>

          {/* Navigation Arrow Buttons */}
          <div className="flex items-center gap-1.5 pl-3 border-l border-white/10">
            <button
              onClick={scrollLeft}
              aria-label="Previous suit"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-white transition-colors focus:outline-none focus:ring-1 focus:ring-white/40"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollRight}
              aria-label="Next suit"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-white transition-colors focus:outline-none focus:ring-1 focus:ring-white/40"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll-Snap Gallery Cards */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory focus:outline-none"
        tabIndex={0}
        role="region"
        aria-label={`${hero.alias} suits gallery`}
      >
        {hero.suits.map((suit, index) => (
          <div
            key={index}
            onClick={() => setActiveLightboxIndex(index)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setActiveLightboxIndex(index);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`Open ${suit.name} in lightbox`}
            className="flex-shrink-0 w-[280px] sm:w-[320px] rounded-3xl overflow-hidden bg-black/60 border border-white/10 hover:border-white/30 backdrop-blur-md snap-start cursor-pointer group transition-all duration-300 hover:-translate-y-1.5 shadow-xl focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            {/* Full-Body Suit Render over Accent Gradient */}
            <div
              className="relative w-full h-[400px] flex items-center justify-center p-6 overflow-hidden"
              style={{
                background: `linear-gradient(180deg, rgba(255,255,255,0.03) 0%, ${hero.theme.glow} 100%)`,
              }}
            >
              <Image
                src={withBase(suit.image)}
                alt={suit.name}
                fill
                sizes="320px"
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />

              <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity text-white">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>

            {/* Suit Details Footer */}
            <div className="p-5 border-t border-white/10 bg-zinc-950/80">
              <h4 className="font-sans font-bold text-lg text-white group-hover:text-amber-300 transition-colors truncate">
                {suit.name}
              </h4>
              <span className="font-mono text-xs text-zinc-400 block mt-0.5">
                {suit.firstAppearance}
              </span>
              <p className="font-sans text-xs text-zinc-300 mt-2 line-clamp-2 leading-relaxed">
                {suit.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal (Focus trapped, Esc closes, Arrow keys navigate) */}
      {activeLightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-2xl p-4 sm:p-8 animate-fade-in"
          onClick={() => setActiveLightboxIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] rounded-3xl bg-zinc-950 border border-white/20 p-6 sm:p-8 flex flex-col md:flex-row gap-8 items-center shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveLightboxIndex(null)}
              aria-label="Close lightbox"
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Suit Render */}
            <div className="relative w-full md:w-1/2 h-[450px] sm:h-[550px] flex items-center justify-center">
              <Image
                src={withBase(hero.suits[activeLightboxIndex].image)}
                alt={hero.suits[activeLightboxIndex].name}
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-contain"
                unoptimized
              />
            </div>

            {/* Modal Info */}
            <div className="w-full md:w-1/2 flex flex-col justify-between space-y-6">
              <div>
                <span className="font-mono text-[11px] tracking-widest text-zinc-400 uppercase">
                  {hero.alias} • SUIT {activeLightboxIndex + 1} OF {totalSuits}
                </span>
                <h3 className="font-display font-black text-3xl sm:text-4xl text-white mt-1">
                  {hero.suits[activeLightboxIndex].name}
                </h3>
                <span
                  className="font-mono text-sm block mt-1 font-semibold"
                  style={{ color: hero.theme.secondary }}
                >
                  Debut: {hero.suits[activeLightboxIndex].firstAppearance}
                </span>
              </div>

              <p className="font-sans text-sm sm:text-base leading-relaxed text-zinc-300">
                {hero.suits[activeLightboxIndex].description}
              </p>

              {/* Lightbox Navigation */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <button
                  onClick={() =>
                    setActiveLightboxIndex((prev) =>
                      prev !== null ? (prev - 1 + totalSuits) % totalSuits : 0
                    )
                  }
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-mono text-white flex items-center gap-1.5"
                >
                  <ChevronLeft className="w-4 h-4" /> PREV SUIT
                </button>
                <span className="font-mono text-xs text-zinc-400">
                  {activeLightboxIndex + 1} / {totalSuits}
                </span>
                <button
                  onClick={() =>
                    setActiveLightboxIndex((prev) => (prev !== null ? (prev + 1) % totalSuits : 0))
                  }
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-mono text-white flex items-center gap-1.5"
                >
                  NEXT SUIT <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
