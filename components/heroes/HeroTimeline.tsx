'use client';

import React, { useState, useRef } from 'react';
import { Hero } from '@/types/hero';
import { ChevronLeft, ChevronRight, Clock, Calendar, CheckCircle2 } from 'lucide-react';

interface HeroTimelineProps {
  hero: Hero;
}

export function HeroTimeline({ hero }: HeroTimelineProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedEventIndex, setSelectedEventIndex] = useState<number>(0);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -260, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 260, behavior: 'smooth' });
    }
  };

  const selectedEvent = hero.timeline[selectedEventIndex] || hero.timeline[0];

  return (
    <div className="w-full my-16 flex flex-col items-center">
      {/* Timeline Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between w-full mb-8 pb-3 border-b border-white/10 gap-3">
        <div>
          <span className="font-mono text-[10px] tracking-widest text-zinc-400 uppercase flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-zinc-400" />
            CHRONOLOGICAL EARTH-616 IN-UNIVERSE TIMELINE • BLOCK D
          </span>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-wide mt-1">
            KEY MCU TURNING POINTS
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={scrollLeft}
            aria-label="Scroll timeline back"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={scrollRight}
            aria-label="Scroll timeline forward"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-white transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Interactive Timeline Bar */}
      <div className="relative w-full py-6">
        {/* Horizontal Connecting Track */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/15 -translate-y-1/2 z-0" />

        {/* Scrollable Node Strip */}
        <div
          ref={scrollRef}
          className="relative z-10 flex items-center gap-12 sm:gap-20 overflow-x-auto pb-4 scrollbar-none px-6"
        >
          {hero.timeline.map((node, idx) => {
            const isSelected = selectedEventIndex === idx;

            return (
              <button
                key={idx}
                onClick={() => setSelectedEventIndex(idx)}
                className="group flex flex-col items-center flex-shrink-0 focus:outline-none"
              >
                {/* In-Universe Year Label */}
                <span
                  className={`font-mono text-xs sm:text-sm font-bold tracking-wider mb-3 transition-colors ${
                    isSelected ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'
                  }`}
                  style={{ color: isSelected ? hero.theme.secondary : undefined }}
                >
                  {node.year}
                </span>

                {/* Node Circle */}
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${
                    isSelected
                      ? 'scale-125 border-white shadow-[0_0_16px_rgba(255,255,255,0.8)]'
                      : 'border-white/30 bg-zinc-900 group-hover:border-white/60 group-hover:scale-110'
                  }`}
                  style={{
                    backgroundColor: isSelected ? hero.theme.primary : undefined,
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                {/* Brief Title Snippet */}
                <span className="font-sans text-[11px] text-zinc-400 group-hover:text-zinc-300 max-w-[130px] text-center mt-3 truncate">
                  {node.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Expanded Dossier Card for Selected Event */}
      {selectedEvent && (
        <div className="w-full max-w-3xl mt-6 p-6 sm:p-8 rounded-3xl bg-zinc-950/80 border border-white/15 backdrop-blur-xl shadow-2xl transition-all duration-500 animate-fade-in">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-white/10 gap-2">
            <div>
              <span className="font-mono text-xs text-zinc-400 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                IN-UNIVERSE TIMING: {selectedEvent.inUniverse}
              </span>
              <h4 className="font-sans font-bold text-xl sm:text-2xl text-white mt-1">
                {selectedEvent.title}
              </h4>
            </div>

            <span
              className="px-3 py-1 rounded-full font-mono text-xs font-bold border"
              style={{
                borderColor: `${hero.theme.secondary}40`,
                color: hero.theme.secondary,
                backgroundColor: `${hero.theme.secondary}15`,
              }}
            >
              YEAR {selectedEvent.year}
            </span>
          </div>

          <p className="font-sans text-base leading-relaxed text-zinc-200 mt-4">
            {selectedEvent.event}
          </p>

          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              CANONICAL S.H.I.E.L.D. RECORD
            </span>
            <span>NODE {selectedEventIndex + 1} OF {hero.timeline.length}</span>
          </div>
        </div>
      )}
    </div>
  );
}
