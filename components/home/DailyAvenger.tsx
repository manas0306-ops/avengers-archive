'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, Quote, Calendar } from 'lucide-react';
import { CHARACTERS } from '@/data/characters';
import { StatusBadge } from '@/components/ui/Badge';
import { useSound } from '@/hooks/useSound';

export function DailyAvenger() {
  const { playHover, playConfirm } = useSound();

  // Deterministic daily selection by date
  const dailyHero = useMemo(() => {
    const today = new Date();
    // Unique day index
    const dayIndex = Math.floor(
      (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) /
        (1000 * 60 * 60 * 24)
    );
    return CHARACTERS[dayIndex % CHARACTERS.length];
  }, []);

  const todayDateString = useMemo(() => {
    return new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  }, []);

  if (!dailyHero) return null;

  return (
    <section className="relative max-w-6xl mx-auto px-4 my-16">
      {/* Container Card */}
      <div className="relative overflow-hidden rounded-3xl bg-archive-darker/90 border border-white/10 p-6 md:p-10 shadow-[0_16px_48px_rgba(0,0,0,0.8)] backdrop-blur-xl">
        {/* Ambient Gradient glow */}
        <div
          className="absolute -right-20 -top-20 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: dailyHero.accent_theme.glow }}
        />

        <div className="flex flex-col lg:flex-row items-center gap-8 justify-between">
          {/* Left Column: Data & Narrative */}
          <div className="flex-1 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-marvel-arc/10 border border-marvel-arc/30 text-marvel-arc text-[11px] font-mono tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                AVENGER OF THE DAY
              </span>
              <span className="inline-flex items-center gap-1.5 text-zinc-400 text-xs font-mono">
                <Calendar className="w-3 h-3 text-zinc-400" />
                {todayDateString}
              </span>
              <StatusBadge status={dailyHero.status} />
            </div>

            <div>
              <h2 className="font-cinematic text-3xl sm:text-4xl font-black tracking-wide text-white">
                {dailyHero.name}
              </h2>
              <p className="text-sm font-mono text-zinc-400">
                {dailyHero.real_name} • {dailyHero.hero_title}
              </p>
            </div>

            {/* Quote */}
            {dailyHero.quotes.length > 0 && (
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 italic font-serif text-sm sm:text-base text-zinc-200 flex items-start gap-3">
                <Quote className="w-5 h-5 text-marvel-red shrink-0 mt-0.5" />
                <div>
                  &ldquo;{dailyHero.quotes[0].quote}&rdquo;
                  {dailyHero.quotes[0].context && (
                    <span className="block text-[11px] font-mono text-zinc-400 not-italic mt-1">
                      — {dailyHero.quotes[0].context}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Quick Fact */}
            {dailyHero.fun_facts.length > 0 && (
              <div className="text-xs font-mono text-zinc-300">
                <strong className="text-marvel-gold">ARCHIVE FACT:</strong> {dailyHero.fun_facts[0]}
              </div>
            )}

            <div className="text-xs font-mono text-zinc-400">
              <strong className="text-white">FIRST APPEARANCE:</strong> {dailyHero.first_appearance}
            </div>

            <div className="pt-2">
              <Link
                href={`/heroes?id=${dailyHero.id}`}
                onMouseEnter={() => playHover()}
                onClick={() => playConfirm()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold tracking-wider uppercase transition-all duration-200 border border-white/15 hover:border-white/30"
              >
                <span>VIEW THEIR COMPLETE STORY</span>
                <ArrowRight className="w-4 h-4 text-marvel-arc" />
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Portrait Artwork */}
          <div className="relative w-64 h-80 sm:w-72 sm:h-96 shrink-0 rounded-2xl overflow-hidden border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.8)] group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={dailyHero.hero_image}
              alt={dailyHero.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 text-center">
              <span className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase">
                {dailyHero.category}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
