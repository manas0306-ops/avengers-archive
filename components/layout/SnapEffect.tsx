'use client';

import { useState } from 'react';
import { Flame, Sparkles } from 'lucide-react';
import { useSound } from '@/hooks/useSound';

export function SnapEffect() {
  const [snapped, setSnapped] = useState(false);
  const [flickering, setFlickering] = useState(false);
  const { playSnap, playVictory } = useSound();

  const handleSnap = () => {
    if (snapped || flickering) return;
    playSnap();
    setFlickering(true);

    // Apply dust styling to 50% of random elements
    setTimeout(() => {
      setSnapped(true);
      setFlickering(false);

      // Restore after 4.5 seconds with Iron Man's snap sound & message
      setTimeout(() => {
        playVictory();
        setSnapped(false);
      }, 4500);
    }, 800);
  };

  return (
    <>
      {/* Floating Easter Egg Button */}
      <button
        type="button"
        onClick={handleSnap}
        aria-label="Do Not Snap Easter Egg"
        title="⚠️ Caution: Infinity Gauntlet Protocol"
        className="fixed bottom-6 right-6 z-40 px-3.5 py-2 rounded-xl bg-purple-950/80 hover:bg-purple-900 border border-purple-500/40 text-purple-300 hover:text-white font-mono text-[11px] tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:scale-105 flex items-center gap-2 group backdrop-blur-md"
      >
        <Flame className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-12 transition-transform" />
        <span>DO NOT SNAP</span>
      </button>

      {/* Screen Cosmic Flash & Dust Effect */}
      {flickering && (
        <div className="fixed inset-0 z-50 pointer-events-none bg-purple-600/30 backdrop-invert transition-opacity duration-200 animate-pulse" />
      )}

      {snapped && (
        <div className="fixed inset-0 z-50 pointer-events-none flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="p-6 rounded-2xl bg-archive-darkest/90 border border-purple-500/50 text-center max-w-sm shadow-[0_0_50px_rgba(147,51,234,0.5)]">
            <Sparkles className="w-8 h-8 text-amber-400 mx-auto mb-3 animate-spin" />
            <div className="font-cinematic text-2xl font-black text-purple-300 tracking-widest mb-1">
              &ldquo;PERFECTLY BALANCED...&rdquo;
            </div>
            <div className="font-mono text-xs text-zinc-400">
              50% of archive records temporarily dissolved to cosmic dust.
            </div>
            <div className="mt-4 font-mono text-[10px] text-marvel-arc animate-pulse">
              RESTORE PROTOCOL: &ldquo;AND I... AM... IRON MAN.&rdquo;
            </div>
          </div>
        </div>
      )}
    </>
  );
}
