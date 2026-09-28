'use client';

import { X, Cpu, ShieldCheck, Database, Radio, Activity } from 'lucide-react';
import { ArcReactor } from '@/components/ui/ArcReactor';
import { useSound } from '@/hooks/useSound';

interface JarvisModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function JarvisModal({ isOpen, onClose }: JarvisModalProps) {
  const { playConfirm } = useSound();

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg p-6 rounded-2xl bg-archive-darkest border border-marvel-arc/50 shadow-[0_0_60px_rgba(0,240,255,0.25)] text-white overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hologram scanlines effect */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px]" />

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-marvel-arc/30">
          <div className="flex items-center gap-3">
            <ArcReactor size="sm" interactive={false} />
            <div>
              <div className="font-cinematic text-lg font-black tracking-widest text-marvel-arc">
                J.A.R.V.I.S. PROTOCOL
              </div>
              <div className="text-[10px] font-mono text-zinc-400">
                Just A Rather Very Intelligent System • Mark LXXXV
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              playConfirm();
              onClose();
            }}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message */}
        <div className="my-6 p-4 rounded-xl bg-marvel-arc/5 border border-marvel-arc/20">
          <p className="font-mono text-xs text-marvel-arc leading-relaxed">
            &ldquo;Good day. Archive systems are running at peak efficiency. All Stark Industries security
            firewalls and Earth-616 historical logs are synchronized.&rdquo;
          </p>
        </div>

        {/* System Diagnostics Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6 font-mono text-xs">
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
            <Cpu className="w-4 h-4 text-marvel-arc" />
            <div>
              <div className="text-[10px] text-zinc-400 uppercase">Core Frequency</div>
              <div className="text-white font-bold">3.2 THz • Quantum</div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <div>
              <div className="text-[10px] text-zinc-400 uppercase">Perimeter Defense</div>
              <div className="text-white font-bold">Nanotech Active</div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
            <Database className="w-4 h-4 text-marvel-gold" />
            <div>
              <div className="text-[10px] text-zinc-400 uppercase">Catalog Records</div>
              <div className="text-white font-bold">Earth-616 Verified</div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
            <Activity className="w-4 h-4 text-purple-400" />
            <div>
              <div className="text-[10px] text-zinc-400 uppercase">Temporal Drift</div>
              <div className="text-white font-bold">0.00% Sync</div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10 text-[10px] font-mono text-zinc-400">
          <span className="flex items-center gap-1.5 text-marvel-arc">
            <Radio className="w-3.5 h-3.5 animate-pulse" /> SATELLITE UPLINK ACTIVE
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1 rounded bg-marvel-arc/20 hover:bg-marvel-arc/30 text-marvel-arc font-bold border border-marvel-arc/40 uppercase"
          >
            DISMISS HUD
          </button>
        </div>
      </div>
    </div>
  );
}
