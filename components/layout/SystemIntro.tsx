'use client';

import { useState, useEffect } from 'react';
import { Shield, ChevronRight } from 'lucide-react';
import { ArcReactor } from '@/components/ui/ArcReactor';
import { useSound } from '@/hooks/useSound';

interface SystemIntroProps {
  onEnter: () => void;
}

export function SystemIntro({ onEnter }: SystemIntroProps) {
  const [phase, setPhase] = useState<'initializing' | 'ready'>('initializing');
  const [progress, setProgress] = useState(0);
  const { playArcReactor, playConfirm } = useSound();

  useEffect(() => {
    // Check if user already entered archive in this session
    const hasEntered = sessionStorage.getItem('avengers_entered');
    if (hasEntered) {
      onEnter();
      return;
    }

    playArcReactor();
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setPhase('ready');
          return 100;
        }
        return prev + 20;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onEnter, playArcReactor]);

  const handleEnter = () => {
    playConfirm();
    sessionStorage.setItem('avengers_entered', 'true');
    onEnter();
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-archive-darkest text-white px-6">
      {/* Background vignette & grid */}
      <div className="absolute inset-0 bg-subtle-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-hero-vignette pointer-events-none" />

      {/* Main Center Console */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
        <div className="mb-6">
          <ArcReactor size="lg" interactive={false} />
        </div>

        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-marvel-red/10 border border-marvel-red/30 text-marvel-red font-mono text-[11px] tracking-widest uppercase mb-4 animate-pulse">
          <Shield className="w-3.5 h-3.5" />
          {phase === 'initializing' ? 'INITIALIZING ARCHIVE SYSTEMS...' : 'ACCESS GRANTED • EARTH-616'}
        </div>

        <h1 className="font-cinematic text-4xl sm:text-5xl font-black tracking-widest text-white mb-2">
          AVENGERS ARCHIVE
        </h1>
        <p className="text-zinc-400 font-sans text-sm max-w-md mb-8">
          Earth&apos;s Mightiest Heroes — Their Stories. Their Battles. Their Legacy.
        </p>

        {/* Progress Bar */}
        {phase === 'initializing' ? (
          <div className="w-64 flex flex-col items-center gap-2 font-mono text-xs text-zinc-400">
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-marvel-arc transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span>DECRYPTING CLASSIFIED STARK LOGS... {progress}%</span>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row items-center gap-3 animate-fade-in">
            <button
              type="button"
              onClick={handleEnter}
              className="px-8 py-3.5 rounded-xl bg-marvel-red hover:bg-red-600 text-white font-mono text-xs tracking-widest font-bold uppercase transition-all duration-300 shadow-[0_0_25px_rgba(226,54,54,0.6)] hover:shadow-[0_0_35px_rgba(226,54,54,0.9)] hover:scale-105 flex items-center gap-2"
            >
              ENTER THE ARCHIVE <ChevronRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleEnter}
              className="px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white font-mono text-xs tracking-widest uppercase transition-colors border border-white/10"
            >
              SKIP INTRO
            </button>
          </div>
        )}
      </div>

      {/* Security Notice */}
      <div className="absolute bottom-6 text-center font-mono text-[10px] text-zinc-400 tracking-wider">
        S.H.I.E.L.D. SECURE PROTOCOL • AUTHORIZED ACCESS ONLY
      </div>
    </div>
  );
}
