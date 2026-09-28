import React from 'react';
import { CharacterStatus, CharacterCategory } from '@/types/character';

interface StatusBadgeProps {
  status: CharacterStatus | string;
  className?: string;
}

export function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  const getColors = () => {
    switch (status) {
      case 'ACTIVE':
        return 'bg-emerald-950/70 border-emerald-500/50 text-emerald-300 shadow-[0_0_8px_rgba(16,185,129,0.2)]';
      case 'FALLEN':
        return 'bg-red-950/70 border-red-500/50 text-red-300 shadow-[0_0_8px_rgba(239,68,68,0.2)]';
      case 'RETIRED':
        return 'bg-amber-950/70 border-amber-500/50 text-amber-300 shadow-[0_0_8px_rgba(245,158,11,0.2)]';
      case 'LEGACY':
        return 'bg-purple-950/70 border-purple-500/50 text-purple-300 shadow-[0_0_8px_rgba(168,85,247,0.2)]';
      case 'UNKNOWN':
      case 'MIA':
        return 'bg-zinc-900/80 border-zinc-600 text-zinc-400';
      case 'AFFILIATED HERO':
        return 'bg-cyan-950/70 border-cyan-500/50 text-cyan-300';
      default:
        return 'bg-slate-900 border-slate-700 text-slate-300';
    }
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono tracking-wider font-semibold border uppercase ${getColors()} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
      {status}
    </span>
  );
}

interface CategoryBadgeProps {
  category: CharacterCategory | string;
  className?: string;
}

export function CategoryBadge({ category, className = '' }: CategoryBadgeProps) {
  const getColors = () => {
    switch (category) {
      case 'CORE AVENGERS':
        return 'border-marvel-red/60 text-marvel-red bg-marvel-red/10';
      case 'NEWER / SUCCESSOR AVENGERS':
        return 'border-marvel-arc/60 text-marvel-arc bg-marvel-arc/10';
      case 'AVENGERS-ALLIED HEROES':
        return 'border-purple-400/60 text-purple-300 bg-purple-500/10';
      default:
        return 'border-slate-500/50 text-slate-300 bg-slate-800/40';
    }
  };

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono tracking-widest uppercase border ${getColors()} ${className}`}
    >
      {category}
    </span>
  );
}
