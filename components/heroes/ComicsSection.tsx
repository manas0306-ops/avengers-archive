'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Hero } from '@/types/hero';
import { withBase } from '@/lib/utils';
import {
  BookOpen,
  ExternalLink,
  Calendar,
  Users,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Bookmark,
  Layers,
  ArrowUpRight,
} from 'lucide-react';

interface ComicsSectionProps {
  hero: Hero;
}

export function ComicsSection({ hero }: ComicsSectionProps) {
  const [selectedComicIndex, setSelectedComicIndex] = useState<number | null>(null);
  const [coverLoadErrors, setCoverLoadErrors] = useState<Record<string, boolean>>({});

  const activeComic = selectedComicIndex !== null ? hero.comics[selectedComicIndex] : null;

  const handlePrev = useCallback(() => {
    if (selectedComicIndex === null) return;
    setSelectedComicIndex((prev) =>
      prev !== null ? (prev === 0 ? hero.comics.length - 1 : prev - 1) : null
    );
  }, [selectedComicIndex, hero.comics.length]);

  const handleNext = useCallback(() => {
    if (selectedComicIndex === null) return;
    setSelectedComicIndex((prev) =>
      prev !== null ? (prev === hero.comics.length - 1 ? 0 : prev + 1) : null
    );
  }, [selectedComicIndex, hero.comics.length]);

  const handleClose = useCallback(() => {
    setSelectedComicIndex(null);
  }, []);

  // Keyboard navigation for reader modal
  useEffect(() => {
    if (selectedComicIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll when modal is active
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedComicIndex, handleClose, handlePrev, handleNext]);

  const handleImageError = (coverPath: string) => {
    setCoverLoadErrors((prev) => ({ ...prev, [coverPath]: true }));
  };

  return (
    <section
      aria-label={`${hero.alias} Comic Runs & Canon Origins`}
      className="comics-section relative w-full my-12 sm:my-24"
    >
      {/* HUD Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span
              className="inline-block w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: hero.theme.primary }}
            />
            <span className="text-[11px] font-mono tracking-widest uppercase text-white/50">
              BLOCK E • CANONICAL COMICS ARCHIVE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-display">
            READ THEIR COMICS
          </h2>
          <p className="mt-2 text-sm sm:text-base text-white/60 max-w-2xl font-sans">
            The foundational debuts, seminal graphic masterworks, and historic storylines that
            inspired {hero.alias}&apos;s journey across the Marvel Cinematic Universe.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.02] text-xs font-mono text-white/70 flex items-center gap-2">
            <Bookmark className="w-3.5 h-3.5 text-white/50" />
            <span>{hero.comics.length} ISSUES CATALOGUED</span>
          </div>
          <div
            className="px-3 py-1.5 rounded-lg border text-xs font-mono font-medium flex items-center gap-1.5"
            style={{
              borderColor: `${hero.theme.primary}40`,
              backgroundColor: `${hero.theme.primary}15`,
              color: hero.theme.primary,
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>CERTIFIED CANON</span>
          </div>
        </div>
      </div>

      {/* Comics Grid (1 col mobile, 2 col tablet, 3 col desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {hero.comics.map((comic, idx) => {
          const hasError = coverLoadErrors[comic.cover];

          return (
            <article
              key={`${comic.title}-${comic.issue}-${idx}`}
              className="group relative flex flex-col rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-black/60 flex-1"
            >
              {/* 2:3 Cover Container */}
              <div
                className="relative w-full aspect-[2/3] bg-neutral-950 overflow-hidden cursor-pointer select-none"
                onClick={() => setSelectedComicIndex(idx)}
              >
                {/* Comic Book Spine Highlight */}
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-gradient-to-r from-black/80 via-white/10 to-transparent z-10 pointer-events-none" />

                {/* Cover Image or Fallback */}
                {!hasError ? (
                  <Image
                    src={withBase(comic.cover)}
                    alt={`${comic.title} #${comic.issue} Cover Art`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={() => handleImageError(comic.cover)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-neutral-800 to-neutral-950 text-white/40">
                    <BookOpen className="w-12 h-12 mb-3 opacity-40" />
                    <span className="font-mono text-xs uppercase tracking-wider">
                      {comic.title} #{comic.issue}
                    </span>
                    <span className="text-[10px] text-white/30 mt-1">Cover Preview Offline</span>
                  </div>
                )}

                {/* Gloss / Reflection Sheen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/[0.07] pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                  <span
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase backdrop-blur-md shadow-lg"
                    style={{
                      backgroundColor: `${hero.theme.bg}ee`,
                      color: hero.theme.primary,
                      border: `1px solid ${hero.theme.primary}50`,
                    }}
                  >
                    ISSUE #{comic.issue}
                  </span>

                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono text-white/90 bg-black/70 backdrop-blur-md border border-white/10 flex items-center gap-1 shadow-lg">
                    <Calendar className="w-3 h-3 text-white/60" />
                    <span>{comic.coverDate}</span>
                  </span>
                </div>

                {/* Hover Quick Action Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 z-20">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedComicIndex(idx);
                    }}
                    className="px-4 py-2.5 rounded-xl bg-white text-black font-semibold text-xs tracking-wider uppercase font-mono flex items-center gap-2 shadow-2xl hover:scale-105 active:scale-95 transition-transform"
                  >
                    <Maximize2 className="w-4 h-4" />
                    <span>Open Dossier & Reader</span>
                  </button>
                </div>
              </div>

              {/* Card Meta & Details */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-white transition-colors">
                    {comic.title}
                  </h3>

                  {/* Creators */}
                  <div className="flex items-start gap-2 mt-2 text-xs text-white/60">
                    <Users className="w-3.5 h-3.5 mt-0.5 text-white/40 flex-shrink-0" />
                    <span className="font-sans line-clamp-1">{comic.creators}</span>
                  </div>

                  {/* Why It Matters */}
                  <div
                    className="mt-3.5 p-3 rounded-lg text-xs leading-relaxed border-l-2 bg-white/[0.02]"
                    style={{
                      borderColor: hero.theme.primary,
                      color: 'rgba(255, 255, 255, 0.82)',
                    }}
                  >
                    <span className="font-mono text-[10px] uppercase tracking-wider block text-white/40 mb-1">
                      Historical Significance
                    </span>
                    <p className="font-sans italic">{comic.why}</p>
                  </div>
                </div>

                {/* Actions Bar */}
                <div className="pt-2 border-t border-white/5 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    {/* Primary Action: Read Online */}
                    {comic.readUrl ? (
                      <a
                        href={comic.readUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-3 rounded-lg text-xs font-mono font-semibold tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all text-black hover:opacity-90 active:scale-[0.98]"
                        style={{
                          backgroundColor: hero.theme.primary,
                          color: hero.theme.bg === '#0a0a0c' ? '#000000' : '#ffffff',
                        }}
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Read Online</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setSelectedComicIndex(idx)}
                        className="flex-1 py-2 px-3 rounded-lg text-xs font-mono font-semibold tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all bg-white/10 hover:bg-white/20 text-white"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Open Reader</span>
                      </button>
                    )}

                    {/* Quick Dossier Button */}
                    <button
                      type="button"
                      onClick={() => setSelectedComicIndex(idx)}
                      title="Inspect Comic Dossier"
                      aria-label={`Inspect ${comic.title} #${comic.issue} dossier`}
                      className="p-2 rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                    >
                      <Layers className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Secondary Source Wiki Link */}
                  {comic.sourceUrl && (
                    <a
                      href={comic.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-mono text-white/40 hover:text-white/80 transition-colors flex items-center justify-center gap-1 py-1"
                    >
                      <span>Marvel Fandom / Wiki Archive</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* IN-PAGE COMIC READER & DOSSIER MODAL                                      */}
      {/* ========================================================================= */}
      {activeComic && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${activeComic.title} #${activeComic.issue} Reader Dossier`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={handleClose}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-neutral-950 border border-white/20 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-neutral-900/60">
              <div className="flex items-center gap-3">
                <span
                  className="px-2.5 py-1 rounded-md text-xs font-mono font-bold tracking-wider uppercase"
                  style={{
                    backgroundColor: `${hero.theme.primary}20`,
                    color: hero.theme.primary,
                    border: `1px solid ${hero.theme.primary}40`,
                  }}
                >
                  ISSUE #{activeComic.issue}
                </span>
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-white uppercase font-display">
                    {activeComic.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-white/50 mt-0.5">
                    <span>COVER DATE: {activeComic.coverDate}</span>
                    <span>•</span>
                    <span>INDEX: {(selectedComicIndex ?? 0) + 1} OF {hero.comics.length}</span>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close comic reader modal"
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-6 sm:p-8 flex-1">
              {activeComic.embed && activeComic.readUrl ? (
                /* Embeddable in-page iframe reader (e.g. Internet Archive) */
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/15 bg-black">
                  <iframe
                    src={activeComic.readUrl}
                    title={`${activeComic.title} #${activeComic.issue} In-Page Reader`}
                    className="w-full h-full border-0"
                    allow="fullscreen"
                  />
                </div>
              ) : (
                /* Rich Dossier & Cover View */
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  {/* Left Column: High-Res 2:3 Cover Artwork */}
                  <div className="md:col-span-5 flex flex-col items-center">
                    <div className="relative w-full max-w-[320px] aspect-[2/3] rounded-xl overflow-hidden border border-white/20 shadow-2xl bg-neutral-900 group">
                      <Image
                        src={withBase(activeComic.cover)}
                        alt={`${activeComic.title} #${activeComic.issue} Cover Art`}
                        fill
                        priority
                        className="object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/[0.08] pointer-events-none" />
                    </div>
                    <span className="mt-3 text-[11px] font-mono text-white/40 tracking-wider uppercase text-center">
                      Marvel Vintage Artwork Collection
                    </span>
                  </div>

                  {/* Right Column: Historical Canon & Significance */}
                  <div className="md:col-span-7 flex flex-col gap-6">
                    {/* Creative Team */}
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-1.5 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" />
                        <span>CREATIVE TEAM & ARCHITECTS</span>
                      </h4>
                      <p className="text-base text-white/90 font-medium font-sans">
                        {activeComic.creators}
                      </p>
                    </div>

                    {/* Historical Significance */}
                    <div
                      className="p-4 rounded-xl border border-white/10 bg-white/[0.02]"
                      style={{
                        borderLeftWidth: '4px',
                        borderLeftColor: hero.theme.primary,
                      }}
                    >
                      <h4 className="text-xs font-mono uppercase tracking-widest text-white/50 mb-2 flex items-center gap-1.5">
                        <Bookmark className="w-3.5 h-3.5" />
                        <span>CANON IMPACT & HISTORICAL SIGNIFICANCE</span>
                      </h4>
                      <p className="text-sm leading-relaxed text-white/90 font-sans italic">
                        &ldquo;{activeComic.why}&rdquo;
                      </p>
                    </div>

                    {/* MCU Adaptation Note */}
                    <div className="p-4 rounded-xl border border-white/10 bg-white/[0.01]">
                      <h4 className="text-xs font-mono uppercase tracking-widest text-white/50 mb-1.5 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>MCU CINEMATIC ADAPTATION</span>
                      </h4>
                      <p className="text-xs leading-relaxed text-white/70 font-sans">
                        Elements, themes, costume designs, and character relationships first explored
                        in this issue directly laid the narrative foundation for {hero.alias} in the
                        Marvel Cinematic Universe.
                      </p>
                    </div>

                    {/* External Reader Action CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
                      {activeComic.readUrl && (
                        <a
                          href={activeComic.readUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-3 px-5 rounded-xl font-mono text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                          style={{
                            backgroundColor: hero.theme.primary,
                            color: hero.theme.bg === '#0a0a0c' ? '#000000' : '#ffffff',
                          }}
                        >
                          <BookOpen className="w-4 h-4" />
                          <span>Access on Marvel Reader</span>
                          <ArrowUpRight className="w-4 h-4 opacity-75" />
                        </a>
                      )}

                      {activeComic.sourceUrl && (
                        <a
                          href={activeComic.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-3 px-5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-mono text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Historical Wiki</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Navigation Footer */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-t border-white/10 bg-neutral-900/60">
              <button
                type="button"
                onClick={handlePrev}
                className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white text-xs font-mono tracking-wider uppercase flex items-center gap-2 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev Issue</span>
              </button>

              <span className="text-xs font-mono text-white/40 hidden sm:inline-block">
                Use Arrow Keys ← → to navigate • ESC to close
              </span>

              <button
                type="button"
                onClick={handleNext}
                className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white text-xs font-mono tracking-wider uppercase flex items-center gap-2 transition-colors"
              >
                <span>Next Issue</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
