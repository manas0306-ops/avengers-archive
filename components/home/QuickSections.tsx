'use client';

import Link from 'next/link';
import {
  Users,
  Clock,
  Film,
  Sparkles,
  HelpCircle,
  Compass,
  ArrowRight,
  TrendingUp,
  Image as ImageIcon,
} from 'lucide-react';
import { CHARACTERS } from '@/data/characters';
import { MOVIES } from '@/data/movies';
import { TIMELINE_EVENTS } from '@/data/timeline';
import { GALLERY_ITEMS } from '@/data/gallery';
import { useSound } from '@/hooks/useSound';

export function QuickSections() {
  const { playHover, playConfirm } = useSound();

  const featuredHeroes = CHARACTERS.slice(0, 4);
  const featuredMovies = MOVIES.slice(0, 3);
  const timelinePreview = TIMELINE_EVENTS.slice(2, 5);
  const photoOfTheDay = GALLERY_ITEMS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 space-y-24 my-20">
      {/* 1. MOST VIEWED & FEATURED HEROES */}
      <section>
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-marvel-red font-bold uppercase tracking-wider mb-1">
              <TrendingUp className="w-4 h-4" /> HERO DOSSIERS
            </div>
            <h2 className="font-cinematic text-3xl font-bold text-white">
              POPULAR ARCHIVE ENTRIES
            </h2>
          </div>
          <Link
            href="/heroes"
            onMouseEnter={() => playHover()}
            onClick={() => playConfirm()}
            className="text-xs font-mono text-marvel-arc hover:text-white flex items-center gap-1.5 transition-colors"
          >
            VIEW ALL HEROES ({CHARACTERS.length}) <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredHeroes.map((hero) => (
            <Link
              key={hero.id}
              href={`/heroes?id=${hero.id}`}
              onMouseEnter={() => playHover()}
              onClick={() => playConfirm()}
              className="group relative overflow-hidden rounded-2xl bg-archive-darker border border-white/10 hover:border-marvel-red/50 transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.6)] hover:-translate-y-1.5 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={hero.thumbnail}
                  alt={hero.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-archive-darker via-archive-darker/40 to-transparent pointer-events-none" />
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-black/60 backdrop-blur-md text-white border border-white/10">
                  {hero.status}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-cinematic text-xl font-bold text-white group-hover:text-marvel-red transition-colors">
                    {hero.name}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 mb-2">{hero.real_name}</p>
                  <p className="text-xs text-zinc-300 font-sans line-clamp-2">
                    {hero.hero_title}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400 group-hover:text-white">
                  <span>{hero.first_appearance.split('(')[0]}</span>
                  <span>EXPLORE →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 2. TIMELINE PREVIEW & PHOTO OF THE DAY */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Timeline Preview (2 cols) */}
        <div className="lg:col-span-2 p-6 sm:p-8 rounded-3xl bg-archive-darker border border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.7)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-mono text-marvel-gold font-bold uppercase tracking-wider flex items-center gap-1.5 mb-1">
                  <Clock className="w-4 h-4" /> MASTER TIMELINE
                </span>
                <h3 className="font-cinematic text-2xl font-bold text-white">
                  PIVOTAL TURNING POINTS
                </h3>
              </div>
              <Link
                href="/timeline"
                onClick={() => playConfirm()}
                className="text-xs font-mono text-marvel-arc hover:text-white transition-colors"
              >
                FULL TIMELINE →
              </Link>
            </div>

            <div className="space-y-4">
              {timelinePreview.map((evt) => (
                <Link
                  key={evt.id}
                  href={`/timeline?event=${evt.id}`}
                  onClick={() => playConfirm()}
                  className="block p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-marvel-gold/40 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-1">
                    <span className="px-2 py-0.5 rounded bg-marvel-gold/20 text-marvel-gold text-[10px] font-mono font-bold">
                      {evt.year}
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-marvel-gold transition-colors">
                      {evt.title}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 font-sans line-clamp-1">{evt.tagline}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 text-xs font-mono text-zinc-400 flex items-center justify-between">
            <span>Tracking {TIMELINE_EVENTS.length} major Earth-616 historical events</span>
            <Link href="/timeline" className="text-marvel-arc hover:underline">
              Enter Timeline Matrix →
            </Link>
          </div>
        </div>

        {/* Photo of the Day (1 col) */}
        {photoOfTheDay && (
          <div className="p-6 rounded-3xl bg-archive-darker border border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.7)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-marvel-arc font-bold uppercase tracking-wider mb-1">
                <ImageIcon className="w-4 h-4" /> ARCHIVE VAULT
              </div>
              <h3 className="font-cinematic text-2xl font-bold text-white mb-4">
                PHOTO OF THE DAY
              </h3>

              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-white/15 mb-4 group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photoOfTheDay.url}
                  alt={photoOfTheDay.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h4 className="text-sm font-bold text-white">{photoOfTheDay.title}</h4>
              <p className="text-xs font-mono text-zinc-400">{photoOfTheDay.movie}</p>
            </div>

            <div className="pt-4 border-t border-white/5">
              <Link
                href="/gallery"
                onClick={() => playConfirm()}
                className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border border-white/10 transition-colors"
              >
                <span>OPEN PHOTO VAULT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </section>

      {/* 3. MOVIES & MISSIONS CALLOUT */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Movie Milestones */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-archive-darker to-archive-darkest border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-marvel-red font-bold uppercase tracking-wider mb-2">
              <Film className="w-4 h-4" /> CINEMATIC ARCHIVE
            </div>
            <h3 className="font-cinematic text-3xl font-bold text-white mb-3">
              AVENGERS FILMS &amp; MILESTONES
            </h3>
            <p className="text-sm text-zinc-300 font-sans mb-6">
              Review box office records, critical reception, directors, plot impacts, and chronological vs. release order across Phase 1 through Phase 6.
            </p>

            <div className="space-y-2 mb-6">
              {featuredMovies.map((m) => (
                <div key={m.id} className="flex items-center justify-between text-xs font-mono py-1.5 border-b border-white/5">
                  <span className="text-zinc-200 font-semibold">{m.title}</span>
                  <span className="text-zinc-400">{m.release_year} • {m.box_office}</span>
                </div>
              ))}
            </div>
          </div>

          <Link
            href="/movies"
            onClick={() => playConfirm()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-marvel-red hover:bg-red-600 text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors w-fit shadow-[0_0_20px_rgba(226,54,54,0.4)]"
          >
            <span>EXPLORE MOVIE ARCHIVE</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Squad Builder Mission Callout */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-archive-darker to-archive-darkest border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-marvel-arc font-bold uppercase tracking-wider mb-2">
              <Compass className="w-4 h-4" /> TACTICAL SIMULATION
            </div>
            <h3 className="font-cinematic text-3xl font-bold text-white mb-3">
              BUILD YOUR SQUAD
            </h3>
            <p className="text-sm text-zinc-300 font-sans mb-6">
              Design a custom 7-hero Avengers tactical team. Select your Leader, Heavy, Tech, Mystic, Ranged, Tactical, and Support specialists, and analyze team synergy and combined movie appearances.
            </p>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-zinc-300 mb-6">
              <div className="text-marvel-gold font-bold mb-1">PRO-TIP:</div>
              Pairing Iron Man and Doctor Strange unlocks unique tech-mystic tactical offensive bonuses.
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/squad"
              onClick={() => playConfirm()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors border border-white/15"
            >
              <span>LAUNCH TEAM BUILDER</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/trivia"
              onClick={() => playConfirm()}
              className="text-xs font-mono text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
            >
              <HelpCircle className="w-3.5 h-3.5" /> Trivia Quiz
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
