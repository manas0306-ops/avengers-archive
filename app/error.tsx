'use client';

import { ShieldAlert, RotateCcw } from 'lucide-react';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center text-center px-4 pt-20">
      <div className="w-16 h-16 rounded-full bg-red-950/80 border border-red-500/50 flex items-center justify-center text-red-400 mb-6">
        <ShieldAlert className="w-8 h-8" />
      </div>

      <h1 className="font-cinematic text-3xl sm:text-4xl font-black text-white tracking-wide mb-3">
        ARCHIVE SYSTEMS TEMPORARILY OFFLINE
      </h1>

      <p className="text-zinc-400 font-sans text-sm max-w-md mx-auto mb-8">
        An anomaly occurred in our communication relays. Stark Industries diagnostics have been alerted.
      </p>

      <button
        type="button"
        onClick={() => reset()}
        className="px-6 py-3 rounded-xl bg-marvel-red hover:bg-red-600 text-white font-mono text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 shadow-[0_0_20px_rgba(226,54,54,0.5)]"
      >
        <RotateCcw className="w-4 h-4" />
        <span>REINITIALIZE ARCHIVE</span>
      </button>
    </div>
  );
}
