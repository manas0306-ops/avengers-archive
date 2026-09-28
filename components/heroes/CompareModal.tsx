'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { Hero } from '@/types/hero';
import { withBase } from '@/lib/utils';
import { X, ArrowLeftRight, Trophy } from 'lucide-react';

interface CompareModalProps {
  heroes: Hero[];
  isOpen: boolean;
  onClose: () => void;
  defaultHeroSlug?: string;
}

const STAT_KEYS = [
  { key: 'strength', label: 'STR' },
  { key: 'speed', label: 'SPD' },
  { key: 'intellect', label: 'INT' },
  { key: 'durability', label: 'DUR' },
  { key: 'energy', label: 'NRG' },
  { key: 'combat', label: 'CBT' },
] as const;

export function CompareModal({
  heroes,
  isOpen,
  onClose,
  defaultHeroSlug,
}: CompareModalProps) {
  const [slugA, setSlugA] = useState<string>(defaultHeroSlug || heroes[0]?.slug || 'iron-man');
  const [slugB, setSlugB] = useState<string>(
    heroes.find((h) => h.slug !== defaultHeroSlug)?.slug || heroes[1]?.slug || 'captain-america'
  );

  useEffect(() => {
    if (defaultHeroSlug) {
      setSlugA(defaultHeroSlug);
      const other = heroes.find((h) => h.slug !== defaultHeroSlug);
      if (other) setSlugB(other.slug);
    }
  }, [defaultHeroSlug, heroes]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const heroA = useMemo(() => heroes.find((h) => h.slug === slugA) || heroes[0], [heroes, slugA]);
  const heroB = useMemo(
    () => heroes.find((h) => h.slug === slugB) || heroes[1] || heroes[0],
    [heroes, slugB]
  );

  // Compute dual radar points
  const { pathA, pathB, axes } = useMemo(() => {
    const size = 300;
    const center = size / 2;
    const radius = 100;
    const angleStep = (Math.PI * 2) / STAT_KEYS.length;

    const pointsA: string[] = [];
    const pointsB: string[] = [];
    const axisLines: { x1: number; y1: number; x2: number; y2: number; labelX: number; labelY: number; label: string }[] = [];

    STAT_KEYS.forEach((stat, i) => {
      const angle = i * angleStep - Math.PI / 2;
      const valA = heroA.stats[stat.key] / 100;
      const valB = heroB.stats[stat.key] / 100;

      const xA = center + radius * valA * Math.cos(angle);
      const yA = center + radius * valA * Math.sin(angle);
      pointsA.push(`${xA.toFixed(1)},${yA.toFixed(1)}`);

      const xB = center + radius * valB * Math.cos(angle);
      const yB = center + radius * valB * Math.sin(angle);
      pointsB.push(`${xB.toFixed(1)},${yB.toFixed(1)}`);

      // Outer Axis Line
      const outerX = center + radius * Math.cos(angle);
      const outerY = center + radius * Math.sin(angle);
      const labelX = center + (radius + 20) * Math.cos(angle);
      const labelY = center + (radius + 20) * Math.sin(angle);

      axisLines.push({
        x1: center,
        y1: center,
        x2: outerX,
        y2: outerY,
        labelX,
        labelY,
        label: stat.label,
      });
    });

    return {
      pathA: `M ${pointsA.join(' L ')} Z`,
      pathB: `M ${pointsB.join(' L ')} Z`,
      axes: axisLines,
    };
  }, [heroA, heroB]);

  // Overall totals
  const totalA = useMemo(
    () => Object.values(heroA.stats).reduce((a, b) => a + b, 0),
    [heroA.stats]
  );
  const totalB = useMemo(
    () => Object.values(heroB.stats).reduce((a, b) => a + b, 0),
    [heroB.stats]
  );

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Avengers Tactical Comparison Module"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] rounded-2xl bg-neutral-950 border border-white/20 shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-neutral-900/60">
          <div className="flex items-center gap-2.5">
            <ArrowLeftRight className="w-5 h-5 text-white/70" />
            <div>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white font-display">
                HERO COMPARISON MATRIX
              </h2>
              <span className="text-xs font-mono text-white/50">
                TACTICAL DUAL-RADAR & TELEMETRY BREAKDOWN
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close comparison modal"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero Selector Header */}
        <div className="grid grid-cols-2 gap-4 p-4 sm:p-6 border-b border-white/5 bg-neutral-900/30">
          {/* Hero A Selector */}
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-mono text-white/40 uppercase tracking-widest">
              PRIMARY HERO
            </span>
            <select
              value={slugA}
              onChange={(e) => setSlugA(e.target.value)}
              className="w-full bg-neutral-900 border border-white/15 rounded-xl px-3 py-2 text-white font-display text-sm uppercase outline-none focus:border-white/40"
            >
              {heroes.map((h) => (
                <option key={h.slug} value={h.slug} disabled={h.slug === slugB}>
                  {h.alias} ({h.realName})
                </option>
              ))}
            </select>
          </div>

          {/* Hero B Selector */}
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-mono text-white/40 uppercase tracking-widest">
              OPPOSING HERO
            </span>
            <select
              value={slugB}
              onChange={(e) => setSlugB(e.target.value)}
              className="w-full bg-neutral-900 border border-white/15 rounded-xl px-3 py-2 text-white font-display text-sm uppercase outline-none focus:border-white/40"
            >
              {heroes.map((h) => (
                <option key={h.slug} value={h.slug} disabled={h.slug === slugA}>
                  {h.alias} ({h.realName})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-4 sm:p-6 flex-1 flex flex-col lg:flex-row items-center gap-8">
          {/* Dual Radar Visualization */}
          <div className="flex flex-col items-center justify-center flex-shrink-0">
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px]">
              <svg viewBox="0 0 300 300" className="w-full h-full overflow-visible">
                {/* Concentric Grid Rings */}
                {[0.25, 0.5, 0.75, 1].map((scale) => (
                  <circle
                    key={scale}
                    cx="150"
                    cy="150"
                    r={100 * scale}
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.08)"
                    strokeWidth="1"
                    strokeDasharray={scale === 1 ? 'none' : '3 3'}
                  />
                ))}

                {/* Axes and Labels */}
                {axes.map((ax, i) => (
                  <g key={i}>
                    <line
                      x1={ax.x1}
                      y1={ax.y1}
                      x2={ax.x2}
                      y2={ax.y2}
                      stroke="rgba(255, 255, 255, 0.12)"
                      strokeWidth="1"
                    />
                    <text
                      x={ax.labelX}
                      y={ax.labelY}
                      fill="rgba(255, 255, 255, 0.5)"
                      fontSize="10"
                      fontFamily="monospace"
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      {ax.label}
                    </text>
                  </g>
                ))}

                {/* Hero A Radar Polygon */}
                <path
                  d={pathA}
                  fill={heroA.theme.primary}
                  fillOpacity="0.3"
                  stroke={heroA.theme.primary}
                  strokeWidth="2.5"
                />

                {/* Hero B Radar Polygon */}
                <path
                  d={pathB}
                  fill={heroB.theme.primary}
                  fillOpacity="0.3"
                  stroke={heroB.theme.primary}
                  strokeWidth="2.5"
                />
              </svg>
            </div>

            {/* Radar Legend */}
            <div className="flex items-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: heroA.theme.primary }}
                />
                <span className="text-xs font-mono font-bold text-white uppercase">
                  {heroA.alias}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: heroB.theme.primary }}
                />
                <span className="text-xs font-mono font-bold text-white uppercase">
                  {heroB.alias}
                </span>
              </div>
            </div>
          </div>

          {/* Stats Breakdown Table */}
          <div className="w-full flex-1 flex flex-col gap-3">
            {/* Total Power Score Highlight */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span className="font-mono text-xs uppercase text-white/70">
                  OVERALL POWER INDEX (MAX 600)
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm font-mono font-bold">
                <span style={{ color: heroA.theme.primary }}>{totalA}</span>
                <span className="text-white/30">VS</span>
                <span style={{ color: heroB.theme.primary }}>{totalB}</span>
              </div>
            </div>

            {/* Individual Stat Rows */}
            {STAT_KEYS.map((stat) => {
              const valA = heroA.stats[stat.key];
              const valB = heroB.stats[stat.key];
              const aWins = valA > valB;
              const bWins = valB > valA;

              return (
                <div
                  key={stat.key}
                  className="flex flex-col gap-1 p-2.5 rounded-lg hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span
                      className={`font-semibold ${
                        aWins ? 'text-white' : 'text-white/50'
                      }`}
                      style={{ color: aWins ? heroA.theme.primary : undefined }}
                    >
                      {valA}
                    </span>
                    <span className="text-[11px] text-white/40 uppercase tracking-widest">
                      {stat.key}
                    </span>
                    <span
                      className={`font-semibold ${
                        bWins ? 'text-white' : 'text-white/50'
                      }`}
                      style={{ color: bWins ? heroB.theme.primary : undefined }}
                    >
                      {valB}
                    </span>
                  </div>

                  {/* Dual Comparison Bars */}
                  <div className="grid grid-cols-2 gap-1.5 h-2 w-full">
                    {/* Hero A Bar (Right-aligned) */}
                    <div className="h-full bg-neutral-900 rounded-sm overflow-hidden flex justify-end">
                      <div
                        className="h-full rounded-sm transition-all duration-500"
                        style={{
                          width: `${valA}%`,
                          backgroundColor: heroA.theme.primary,
                        }}
                      />
                    </div>

                    {/* Hero B Bar (Left-aligned) */}
                    <div className="h-full bg-neutral-900 rounded-sm overflow-hidden flex justify-start">
                      <div
                        className="h-full rounded-sm transition-all duration-500"
                        style={{
                          width: `${valB}%`,
                          backgroundColor: heroB.theme.primary,
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Quick Dossier Comparisons */}
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10 text-xs font-mono">
              <div className="flex flex-col gap-1 p-2.5 rounded-lg bg-neutral-900/50">
                <span className="text-white/40 text-[10px] uppercase">MCU DEBUT</span>
                <span className="text-white font-medium">
                  {heroA.firstAppearance.title} ({heroA.firstAppearance.year})
                </span>
                <span className="text-white/50 text-[10px]">
                  {heroA.appearancesCount} Total Appearances
                </span>
              </div>

              <div className="flex flex-col gap-1 p-2.5 rounded-lg bg-neutral-900/50">
                <span className="text-white/40 text-[10px] uppercase">MCU DEBUT</span>
                <span className="text-white font-medium">
                  {heroB.firstAppearance.title} ({heroB.firstAppearance.year})
                </span>
                <span className="text-white/50 text-[10px]">
                  {heroB.appearancesCount} Total Appearances
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
