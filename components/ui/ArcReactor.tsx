'use client';

import { useState } from 'react';
import { useSound } from '@/hooks/useSound';

interface ArcReactorProps {
  size?: 'sm' | 'md' | 'lg';
  onJarvisTrigger?: () => void;
  interactive?: boolean;
}

export function ArcReactor({
  size = 'md',
  onJarvisTrigger,
  interactive = true,
}: ArcReactorProps) {
  const [clickCount, setClickCount] = useState(0);
  const { playArcReactor } = useSound();

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
  }[size];

  const handleClick = () => {
    if (!interactive) return;
    playArcReactor();
    const nextCount = clickCount + 1;
    setClickCount(nextCount);

    if (nextCount >= 3) {
      setClickCount(0);
      if (onJarvisTrigger) {
        onJarvisTrigger();
      }
    }
  };

  return (
    <div
      onClick={handleClick}
      role={interactive ? 'button' : undefined}
      title={interactive ? 'Arc Reactor Core (Click 3x for J.A.R.V.I.S. Mode)' : 'Arc Reactor Core'}
      aria-label="Arc Reactor Core"
      className={`relative inline-flex items-center justify-center rounded-full transition-transform duration-300 ${sizeClasses} ${
        interactive ? 'cursor-pointer hover:scale-110 active:scale-95' : ''
      }`}
    >
      {/* Outer Glow Halo */}
      <div className="absolute inset-0 rounded-full bg-marvel-arc/20 blur-md animate-pulse-glow" />

      {/* Outer Metallic Ring */}
      <div className="absolute inset-0 rounded-full border-2 border-slate-600/80 shadow-[inset_0_0_10px_rgba(0,240,255,0.4)]" />

      {/* Rotating Segment Ring */}
      <div className="absolute inset-1 rounded-full border border-dashed border-marvel-arc/70 animate-arc-rotate" />

      {/* Inner Chamber */}
      <div className="absolute inset-2.5 rounded-full bg-archive-darkest border border-marvel-arc/50 flex items-center justify-center">
        {/* Core Light Triangle / Circle */}
        <div className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_#00f0ff,0_0_20px_#00f0ff]" />
      </div>

      {/* Subtle click streak indicator */}
      {clickCount > 0 && (
        <span className="absolute -bottom-5 text-[9px] font-mono tracking-widest text-marvel-arc opacity-80 uppercase animate-fade-in">
          {clickCount}/3
        </span>
      )}
    </div>
  );
}
