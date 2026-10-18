'use client';

import React from 'react';
import Image from 'next/image';
import { IronManArmor } from '@/types/ironman';
import { withBase } from '@/lib/utils';
import { X, ArrowLeftRight, Trash2, Shield, Zap, Wind, Check, AlertTriangle } from 'lucide-react';

interface ArmorComparisonModalProps {
  suits: IronManArmor[];
  onClose: () => void;
  onRemoveSuit: (mark: number) => void;
  onClearAll: () => void;
}

export function ArmorComparisonModal({ suits, onClose, onRemoveSuit, onClearAll }: ArmorComparisonModalProps) {
  if (suits.length === 0) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="comparison-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl max-h-[94vh] flex flex-col rounded-2xl bg-[#090d16] border border-cyan-500/40 shadow-[0_0_90px_rgba(0,240,255,0.3)] text-white overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Holographic Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-cyan-500/30 bg-cyan-950/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <ArrowLeftRight className="w-5 h-5" />
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-widest text-cyan-400 uppercase">
                STARK LABS COMPARATIVE TELEMETRY MATRIX
              </div>
              <h2 id="comparison-title" className="font-display font-black text-xl sm:text-2xl text-white tracking-wide">
                ARMOR SPECIFICATION COMPARISON ({suits.length} SELECTED)
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClearAll}
              className="text-xs font-mono text-zinc-400 hover:text-rose-400 transition-colors flex items-center gap-1"
            >
              <Trash2 className="w-3.5 h-3.5" />
              CLEAR ALL
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close armor comparison"
              className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Comparison Table / Grid */}
        <div className="p-4 sm:p-6 overflow-x-auto overflow-y-auto max-h-[calc(94vh-100px)]">
          <div className="min-w-[700px]">
            {/* Headers / Suit Cards */}
            <div
              className="grid gap-4 pb-6 border-b border-cyan-500/20"
              style={{ gridTemplateColumns: `180px repeat(${suits.length}, minmax(220px, 1fr))` }}
            >
              <div className="font-mono text-xs text-zinc-400 uppercase flex items-end pb-2">
                METRIC / SUIT
              </div>

              {suits.map((suit) => (
                <div key={suit.mark} className="relative p-3 rounded-xl bg-black/60 border border-cyan-500/30 flex flex-col items-center">
                  <button
                    type="button"
                    onClick={() => onRemoveSuit(suit.mark)}
                    aria-label={`Remove Mark ${suit.mark}`}
                    className="absolute top-2 right-2 p-1 rounded-lg text-zinc-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>

                  <div className="relative w-28 h-28 my-1">
                    <Image
                      src={withBase(suit.image)}
                      alt={suit.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <span className="font-mono text-[10px] text-cyan-400 tracking-wider">
                    {suit.romanNumeral}
                  </span>
                  <span className="font-display font-bold text-sm text-center text-white line-clamp-1">
                    {suit.name}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400 mt-0.5">
                    {suit.firstAppearance.title} ({suit.firstAppearance.year})
                  </span>
                </div>
              ))}
            </div>

            {/* Row: Category */}
            <div
              className="grid gap-4 py-3 border-b border-white/5 items-center font-mono text-xs"
              style={{ gridTemplateColumns: `180px repeat(${suits.length}, minmax(220px, 1fr))` }}
            >
              <span className="text-zinc-400">CATEGORY</span>
              {suits.map((s) => (
                <span key={s.mark} className="text-cyan-300 font-bold">
                  {s.category.replace(/_/g, ' ')}
                </span>
              ))}
            </div>

            {/* Row: Status */}
            <div
              className="grid gap-4 py-3 border-b border-white/5 items-center font-mono text-xs"
              style={{ gridTemplateColumns: `180px repeat(${suits.length}, minmax(220px, 1fr))` }}
            >
              <span className="text-zinc-400">CANONICAL STATUS</span>
              {suits.map((s) => (
                <span
                  key={s.mark}
                  className={
                    s.status === 'ACTIVE'
                      ? 'text-emerald-400'
                      : s.status === 'DESTROYED'
                      ? 'text-rose-400'
                      : 'text-amber-400'
                  }
                >
                  {s.status}
                </span>
              ))}
            </div>

            {/* Row: Flight Velocity */}
            <div
              className="grid gap-4 py-3 border-b border-white/5 items-start font-mono text-xs"
              style={{ gridTemplateColumns: `180px repeat(${suits.length}, minmax(220px, 1fr))` }}
            >
              <span className="text-zinc-400 flex items-center gap-1.5">
                <Wind className="w-3.5 h-3.5 text-cyan-400" />
                MAX VELOCITY
              </span>
              {suits.map((s) => (
                <div key={s.mark}>
                  <div className="font-bold text-white">{s.propulsionAndFlight.flightSpeed}</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">
                    {s.propulsionAndFlight.thrusterType}
                  </div>
                </div>
              ))}
            </div>

            {/* Row: Power System */}
            <div
              className="grid gap-4 py-3 border-b border-white/5 items-start font-mono text-xs"
              style={{ gridTemplateColumns: `180px repeat(${suits.length}, minmax(220px, 1fr))` }}
            >
              <span className="text-zinc-400 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                ARC REACTOR CORE
              </span>
              {suits.map((s) => (
                <div key={s.mark}>
                  <div className="font-bold text-white">{s.powerSystem.arcReactorCore}</div>
                  {s.powerSystem.powerOutput && (
                    <div className="text-[11px] text-zinc-400 mt-0.5">
                      {s.powerSystem.powerOutput}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Row: Materials & Composition */}
            <div
              className="grid gap-4 py-3 border-b border-white/5 items-start text-xs"
              style={{ gridTemplateColumns: `180px repeat(${suits.length}, minmax(220px, 1fr))` }}
            >
              <span className="font-mono text-zinc-400 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
                METALLURGY
              </span>
              {suits.map((s) => (
                <div key={s.mark} className="text-zinc-300 leading-relaxed">
                  {s.materials.composition}
                </div>
              ))}
            </div>

            {/* Row: Key Weapons & Payload */}
            <div
              className="grid gap-4 py-3 border-b border-white/5 items-start text-xs"
              style={{ gridTemplateColumns: `180px repeat(${suits.length}, minmax(220px, 1fr))` }}
            >
              <span className="font-mono text-zinc-400">WEAPONS PAYLOAD</span>
              {suits.map((s) => (
                <ul key={s.mark} className="space-y-1 text-zinc-300">
                  {s.weaponsAndPayload.slice(0, 4).map((w, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-cyan-400">▹</span>
                      <span>{w}</span>
                    </li>
                  ))}
                  {s.weaponsAndPayload.length > 4 && (
                    <li className="font-mono text-[10px] text-zinc-500">
                      +{s.weaponsAndPayload.length - 4} additional systems
                    </li>
                  )}
                </ul>
              ))}
            </div>

            {/* Row: Battles & Milestones */}
            <div
              className="grid gap-4 py-3 border-b border-white/5 items-start text-xs"
              style={{ gridTemplateColumns: `180px repeat(${suits.length}, minmax(220px, 1fr))` }}
            >
              <span className="font-mono text-zinc-400">KEY BATTLES</span>
              {suits.map((s) => (
                <div key={s.mark} className="space-y-1 text-zinc-300">
                  {s.associatedBattles.map((b, i) => (
                    <div key={i} className="text-[11px] text-cyan-300">
                      ★ {b}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Row: Canon Verification */}
            <div
              className="grid gap-4 py-3 items-center font-mono text-xs"
              style={{ gridTemplateColumns: `180px repeat(${suits.length}, minmax(220px, 1fr))` }}
            >
              <span className="text-zinc-400">CANON INTEGRITY</span>
              {suits.map((s) => (
                <span
                  key={s.mark}
                  className={`px-2 py-0.5 rounded text-[10px] w-fit border ${
                    s.verificationStatus === 'VERIFIED_ON_SCREEN'
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                      : s.verificationStatus === 'CANONICAL_REFERENCE'
                      ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
                      : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                  }`}
                >
                  {s.verificationStatus.replace(/_/g, ' ')}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
