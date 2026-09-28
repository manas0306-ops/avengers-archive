'use client';

import React from 'react';
import { Hero } from '@/types/hero';
import { HeroStory } from './HeroStory';
import { FaceModule } from './FaceModule';
import { IntelStrip } from './IntelStrip';
import { SuitsGallery } from './SuitsGallery';
import { HeroTimeline } from './HeroTimeline';

interface HeroChapterProps {
  hero: Hero;
  onSelectTeamUp?: (slug: string) => void;
}

export function HeroChapter({ hero, onSelectTeamUp }: HeroChapterProps) {
  return (
    <article
      id={hero.slug}
      data-slug={hero.slug}
      className="hero-chapter relative w-full min-h-screen px-4 sm:px-8 lg:px-12 py-16 max-w-[1440px] mx-auto flex flex-col justify-start"
    >
      {/* Background Hero Subtle Ambient Vignette */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[140px] opacity-15 pointer-events-none transition-all duration-700"
        style={{ backgroundColor: hero.theme.primary }}
      />

      {/* ========================================================================= */}
      {/* HERO FOLD (Min-height 100svh): Block A (Cols 1-7) & Block B (Cols 8-12) */}
      {/* ========================================================================= */}
      <section
        aria-label={`${hero.alias} Dossier Fold`}
        className="min-h-[100svh] flex items-center justify-center w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center w-full my-auto">
          {/* Block A: Name + Story (Cols 1-7) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <HeroStory hero={hero} />
          </div>

          {/* Block B: Face Module (Cols 8-12) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <FaceModule hero={hero} />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCK A2: Intel Strip (Quick Metrics, Power Radar, Team-Up Chips)         */}
      {/* Vertical spacing 96px - 160px                                            */}
      {/* ========================================================================= */}
      <section aria-label="Field Telemetry and Power Stats" className="my-12 sm:my-20 w-full">
        <IntelStrip hero={hero} onSelectTeamUp={onSelectTeamUp} />
      </section>

      {/* ========================================================================= */}
      {/* BLOCK C: Suits / Costumes Used Horizontal Snap Gallery + Lightbox         */}
      {/* ========================================================================= */}
      <section aria-label="Armor and Costume Vault" className="my-12 sm:my-20 w-full">
        <SuitsGallery hero={hero} />
      </section>

      {/* ========================================================================= */}
      {/* BLOCK D: Centered Interactive MCU Chronological Timeline                   */}
      {/* ========================================================================= */}
      <section aria-label="Chronological Timeline Turning Points" className="my-12 sm:my-20 w-full">
        <HeroTimeline hero={hero} />
      </section>
    </article>
  );
}
