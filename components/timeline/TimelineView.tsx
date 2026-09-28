'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Clock,
  MapPin,
  Users,
  AlertTriangle,
  ChevronRight,
  Filter,
  X,
  ExternalLink,
} from 'lucide-react';
import { TimelineEvent } from '@/types/timeline';
import { useSound } from '@/hooks/useSound';
import { useSpoilerMode } from '@/hooks/useSpoilerMode';

interface TimelineViewProps {
  events: TimelineEvent[];
}

export function TimelineView({ events }: TimelineViewProps) {
  const searchParams = useSearchParams();
  const initialEventId = searchParams.get('event');

  const [selectedPhase, setSelectedPhase] = useState<number | 'ALL'>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeModalEvent, setActiveModalEvent] = useState<TimelineEvent | null>(
    events.find((e) => e.id === initialEventId) || null
  );

  const { playHover, playConfirm } = useSound();
  const { showSpoilers } = useSpoilerMode();

  const filteredEvents = useMemo(() => {
    return events.filter((e) => {
      const matchPhase = selectedPhase === 'ALL' || e.phase === selectedPhase;
      const matchCategory = selectedCategory === 'ALL' || e.category === selectedCategory;
      return matchPhase && matchCategory;
    });
  }, [events, selectedPhase, selectedCategory]);

  const categories = ['ALL', 'FOUNDATION', 'BATTLE', 'CRISIS', 'MULTIVERSE'];

  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-marvel-gold/10 border border-marvel-gold/30 text-marvel-gold text-xs font-mono tracking-widest uppercase mb-4">
          <Clock className="w-3.5 h-3.5" />
          <span>CHRONOLOGICAL MATRIX</span>
        </div>
        <h1 className="font-cinematic text-4xl sm:text-5xl font-black text-white tracking-wide mb-3">
          MASTER MCU TIMELINE
        </h1>
        <p className="text-zinc-400 font-sans text-sm sm:text-base">
          From the birth of the first Super Soldier in WWII to the fracturing of the Multiverse across Earth-616.
        </p>
      </div>

      {/* Filter Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-archive-darker/90 border border-white/10 backdrop-blur-xl mb-12">
        {/* Phase Filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          <span className="text-xs font-mono text-zinc-500 mr-2 flex items-center gap-1">
            <Filter className="w-3 h-3" /> PHASE:
          </span>
          {['ALL', 1, 2, 3, 4, 5, 6].map((phase) => (
            <button
              key={phase}
              type="button"
              onClick={() => {
                playConfirm();
                setSelectedPhase(phase as typeof selectedPhase);
              }}
              className={`px-3 py-1 rounded-lg text-xs font-mono tracking-wider transition-colors ${
                selectedPhase === phase
                  ? 'bg-marvel-gold text-black font-bold shadow-[0_0_10px_rgba(245,158,11,0.5)]'
                  : 'bg-white/5 text-zinc-400 hover:text-white'
              }`}
            >
              {phase === 'ALL' ? 'ALL PHASES' : `PHASE ${phase}`}
            </button>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                playConfirm();
                setSelectedCategory(cat);
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono uppercase tracking-wider transition-colors ${
                selectedCategory === cat
                  ? 'bg-marvel-red text-white font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Vertical Interactive Timeline Line & Cards */}
      <div className="relative pl-6 md:pl-10 space-y-12 before:absolute before:left-3 md:before:left-5 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-marvel-red before:via-marvel-gold before:to-marvel-arc">
        {filteredEvents.map((evt, idx) => (
          <div
            key={evt.id}
            className="relative group transition-all duration-300"
          >
            {/* Timeline Marker Dot */}
            <span className="absolute -left-6 md:-left-8 top-1.5 w-4 h-4 rounded-full bg-archive-darkest border-2 border-marvel-gold group-hover:border-marvel-red group-hover:scale-125 transition-all shadow-[0_0_10px_#f59e0b]" />

            {/* Event Card */}
            <div
              onClick={() => {
                playConfirm();
                setActiveModalEvent(evt);
              }}
              onMouseEnter={() => playHover()}
              className="cursor-pointer p-6 rounded-3xl bg-archive-darker/90 hover:bg-archive-darker border border-white/10 hover:border-marvel-gold/50 shadow-[0_10px_30px_rgba(0,0,0,0.7)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-marvel-gold/20 text-marvel-gold text-xs font-mono font-bold">
                    {evt.year}
                  </span>
                  <span className="text-xs font-mono text-zinc-400 uppercase">
                    {evt.era} • Phase {evt.phase}
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase bg-white/5 text-zinc-300 border border-white/10">
                  {evt.category}
                </span>
              </div>

              <h3 className="font-cinematic text-2xl font-bold text-white group-hover:text-marvel-gold transition-colors mb-2">
                {evt.title}
              </h3>
              <p className="text-xs text-marvel-arc font-mono mb-3">{evt.tagline}</p>

              <p
                className={`text-sm text-zinc-300 font-sans leading-relaxed mb-4 ${
                  evt.spoiler && !showSpoilers ? 'blur-sm select-none' : ''
                }`}
              >
                {evt.what_happened}
              </p>

              {/* Tags & Action */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/5 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <MapPin className="w-3.5 h-3.5 text-marvel-red" />
                  <span>{evt.location}</span>
                </div>
                <div className="flex items-center gap-1 text-marvel-arc group-hover:translate-x-1 transition-transform">
                  <span>EXPLORE EVENT DETAILS</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CINEMATIC EVENT MODAL */}
      {activeModalEvent && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveModalEvent(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6 sm:p-8 rounded-3xl bg-archive-darkest border border-marvel-gold/40 shadow-[0_0_60px_rgba(245,158,11,0.2)] text-white"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveModalEvent(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-marvel-gold/20 text-marvel-gold text-xs font-mono font-bold">
                {activeModalEvent.year}
              </span>
              <span className="text-xs font-mono text-zinc-400 uppercase">
                {activeModalEvent.era}
              </span>
            </div>

            <h2 className="font-cinematic text-3xl font-black text-white mb-2">
              {activeModalEvent.title}
            </h2>
            <p className="text-sm font-mono text-marvel-arc mb-6">
              {activeModalEvent.tagline}
            </p>

            <div className="space-y-6 text-sm font-sans text-zinc-200">
              <div>
                <h4 className="font-mono text-xs text-marvel-gold font-bold uppercase tracking-wider mb-2">
                  WHAT HAPPENED
                </h4>
                <p className="leading-relaxed bg-white/5 p-4 rounded-xl border border-white/10">
                  {activeModalEvent.what_happened}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-marvel-red font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" /> KEY FIGURES INVOLVED
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalEvent.who_was_involved.map((person, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-marvel-red/10 border border-marvel-red/30 text-marvel-red text-xs font-mono"
                    >
                      {person}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-mono text-xs text-marvel-arc font-bold uppercase tracking-wider mb-2">
                  WHY IT MATTERED TO THE AVENGERS
                </h4>
                <p className="leading-relaxed text-zinc-300">
                  {activeModalEvent.why_it_mattered}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-purple-400 font-bold uppercase tracking-wider mb-2">
                  LONG-TERM TIMELINE CONSEQUENCES
                </h4>
                <ul className="list-disc pl-5 space-y-1.5 text-xs text-zinc-300">
                  {activeModalEvent.consequences.map((c, idx) => (
                    <li key={idx}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-marvel-red" />
                {activeModalEvent.location}
              </span>
              <button
                type="button"
                onClick={() => setActiveModalEvent(null)}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white uppercase tracking-wider font-bold"
              >
                CLOSE DOSSIER
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
