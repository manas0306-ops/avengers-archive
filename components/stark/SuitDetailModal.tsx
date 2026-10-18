'use client';

import React from 'react';
import Image from 'next/image';
import { IronManArmor } from '@/types/ironman';
import { withBase } from '@/lib/utils';
import { X, Shield, Zap, Wind, AlertTriangle, Layers, ExternalLink, Activity, Crosshair } from 'lucide-react';

interface SuitDetailModalProps {
  armor: IronManArmor | null;
  onClose: () => void;
  onCompare?: (armor: IronManArmor) => void;
  isCompared?: boolean;
}

export function SuitDetailModal({ armor, onClose, onCompare, isCompared }: SuitDetailModalProps) {
  if (!armor) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="suit-detail-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[#090d16] border border-cyan-500/40 shadow-[0_0_80px_rgba(0,240,255,0.25)] text-white overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Holographic scanning overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px]" />
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />

        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-cyan-500/20 bg-cyan-950/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono font-bold text-sm">
              {armor.romanNumeral}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] tracking-widest text-cyan-400 uppercase">
                  STARK ARMOR VAULT • SPECIFICATION SHEET
                </span>
                <span
                  className={`text-[9px] font-mono px-2 py-0.5 rounded border uppercase ${
                    armor.verificationStatus === 'VERIFIED_ON_SCREEN'
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                      : armor.verificationStatus === 'CANONICAL_REFERENCE'
                      ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
                      : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                  }`}
                >
                  {armor.verificationStatus.replace(/_/g, ' ')}
                </span>
              </div>
              <h2 id="suit-detail-title" className="font-display font-black text-xl sm:text-2xl text-white tracking-wide">
                {armor.name} {armor.nickname ? `("${armor.nickname}")` : ''}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {onCompare && (
              <button
                type="button"
                onClick={() => onCompare(armor)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider border transition-all ${
                  isCompared
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                    : 'bg-white/5 text-zinc-300 hover:text-white border-white/10 hover:border-cyan-500/30'
                }`}
              >
                {isCompared ? '✓ IN COMPARISON' : '+ COMPARE'}
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close suit inspection"
              className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 max-h-[calc(92vh-100px)]">
          {/* Top Layout: Image + Core Telemetry */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Visual Frame */}
            <div className="md:col-span-5 relative rounded-2xl bg-black/60 border border-cyan-500/30 p-4 flex flex-col items-center justify-center overflow-hidden">
              <div className="relative w-full aspect-[4/5] max-h-[360px]">
                <Image
                  src={withBase(armor.image)}
                  alt={`${armor.name} schematic rendering`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>

              {/* Status & Category Bar */}
              <div className="w-full mt-4 pt-3 border-t border-cyan-500/20 flex items-center justify-between font-mono text-xs">
                <span className="text-zinc-400">CATEGORY:</span>
                <span className="text-cyan-300 font-bold">{armor.category.replace(/_/g, ' ')}</span>
              </div>
              <div className="w-full mt-1 flex items-center justify-between font-mono text-xs">
                <span className="text-zinc-400">STATUS:</span>
                <span
                  className={
                    armor.status === 'ACTIVE'
                      ? 'text-emerald-400'
                      : armor.status === 'DESTROYED'
                      ? 'text-rose-400'
                      : 'text-amber-400'
                  }
                >
                  {armor.status}
                </span>
              </div>
            </div>

            {/* Quick Metrics & First Appearance */}
            <div className="md:col-span-7 space-y-4">
              <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20">
                <div className="font-mono text-xs text-cyan-400 tracking-wider uppercase mb-1 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5" />
                  FIRST CANONICAL APPEARANCE
                </div>
                <div className="text-white font-bold text-base">
                  {armor.firstAppearance.title} ({armor.firstAppearance.year})
                </div>
                {armor.firstAppearance.timelineEvent && (
                  <div className="text-xs text-zinc-400 font-mono mt-1">
                    Event: {armor.firstAppearance.timelineEvent}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Propulsion & Flight */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-mono text-[11px] text-cyan-400 uppercase flex items-center gap-1.5 mb-1">
                    <Wind className="w-3.5 h-3.5" />
                    MAX VELOCITY
                  </div>
                  <div className="text-sm font-bold text-white">
                    {armor.propulsionAndFlight.flightSpeed}
                  </div>
                  <div className="text-[11px] text-zinc-400 font-mono mt-0.5">
                    {armor.propulsionAndFlight.thrusterType}
                  </div>
                </div>

                {/* Power System */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-mono text-[11px] text-cyan-400 uppercase flex items-center gap-1.5 mb-1">
                    <Zap className="w-3.5 h-3.5" />
                    POWER SYSTEM
                  </div>
                  <div className="text-sm font-bold text-white">
                    {armor.powerSystem.arcReactorCore}
                  </div>
                  {armor.powerSystem.powerOutput && (
                    <div className="text-[11px] text-zinc-400 font-mono mt-0.5">
                      Output: {armor.powerSystem.powerOutput}
                    </div>
                  )}
                </div>
              </div>

              {/* Metallurgy & Materials */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="font-mono text-[11px] text-cyan-400 uppercase flex items-center gap-1.5 mb-1">
                  <Shield className="w-3.5 h-3.5" />
                  METALLURGY & COMPOSITION
                </div>
                <p className="text-xs text-zinc-200 leading-relaxed">
                  {armor.materials.composition}
                </p>
                {armor.materials.notes && (
                  <p className="text-[11px] text-zinc-400 font-mono mt-1 italic">
                    Note: {armor.materials.notes}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Development History */}
          <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10">
            <h3 className="font-mono text-xs text-cyan-400 tracking-wider uppercase mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              ENGINEERING & DEVELOPMENT CHRONICLE
            </h3>
            <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
              {armor.developmentHistory}
            </p>
          </div>

          {/* Weapons & Special Capabilities */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h3 className="font-mono text-xs text-cyan-400 tracking-wider uppercase mb-2.5 flex items-center gap-1.5">
                <Crosshair className="w-4 h-4" />
                WEAPONS & COMBAT PAYLOAD
              </h3>
              <ul className="space-y-1.5 text-xs text-zinc-300">
                {armor.weaponsAndPayload.map((weapon, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5">▹</span>
                    <span>{weapon}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h3 className="font-mono text-xs text-cyan-400 tracking-wider uppercase mb-2.5 flex items-center gap-1.5">
                <Zap className="w-4 h-4" />
                SPECIALIZED PROTOCOLS & SUIT SYSTEMS
              </h3>
              <ul className="space-y-1.5 text-xs text-zinc-300">
                {armor.specialFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5">▹</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Limitations, Damage History & Associated Battles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/20">
              <h3 className="font-mono text-xs text-rose-400 tracking-wider uppercase mb-2 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" />
                LIMITATIONS & DAMAGE HISTORY
              </h3>
              <ul className="space-y-1.5 text-xs text-zinc-300">
                {armor.limitationsAndDamage.map((lim, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-rose-400 mt-0.5">•</span>
                    <span>{lim}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h3 className="font-mono text-xs text-cyan-400 tracking-wider uppercase mb-2 flex items-center gap-1.5">
                <Activity className="w-4 h-4" />
                DOCUMENTED COMBAT THEATERS
              </h3>
              <ul className="space-y-1.5 text-xs text-zinc-300">
                {armor.associatedBattles.map((battle, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5">★</span>
                    <span>{battle}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Explicit Unknown Fields / Editorial Disclaimer (Non-Negotiable Rule 7 & 8) */}
          {armor.unknownFields && armor.unknownFields.length > 0 && (
            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 font-mono text-xs">
              <div className="text-amber-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" />
                CANON VERIFICATION NOTICE — UNVERIFIED / UNKNOWN SPECIFICATIONS
              </div>
              <p className="text-zinc-300 mb-2">
                In strict accordance with the MCU Earth-616 Canon Integrity Protocol, the following parameters are not explicitly detailed in released Marvel Studios materials and are logged as UNKNOWN:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                {armor.unknownFields.map((field, idx) => (
                  <li key={idx}>{field}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Canonical Source Link */}
          <div className="flex items-center justify-between pt-3 border-t border-cyan-500/20 text-xs font-mono text-zinc-400">
            <span>DATABASE REFERENCE ID: STARK-ARMOR-{armor.mark.toString().padStart(2, '0')}</span>
            <a
              href={armor.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 hover:underline flex items-center gap-1"
            >
              <span>CANONICAL SOURCE PROFILE</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
