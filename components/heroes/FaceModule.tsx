'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Hero } from '@/types/hero';
import { withBase } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

interface FaceModuleProps {
  hero: Hero;
}

export function FaceModule({ hero }: FaceModuleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 10, y: -y * 10 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className="relative w-full max-w-[460px] mx-auto flex flex-col items-center justify-center">
      {/* Background Accent Glow */}
      <div
        className="absolute inset-0 rounded-3xl blur-3xl opacity-35 transition-all duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${hero.theme.primary} 0%, ${hero.theme.glow} 50%, transparent 80%)`,
        }}
      />

      {/* 4:5 Aspect Ratio Face Module Container */}
      <div
        ref={containerRef}
        tabIndex={0}
        role="button"
        aria-label={`${hero.alias} face module. Click or press space to toggle combat mask.`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsRevealed(!isRevealed)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsRevealed(!isRevealed);
          }
        }}
        className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/15 bg-black/60 shadow-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/40 transition-transform duration-300 ease-out"
        style={{
          transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
        }}
      >
        {/* Base Layer: Unmasked Portrait */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={withBase(hero.face.unmasked)}
            alt={`${hero.alias} (${hero.actor}) unmasked`}
            fill
            sizes="(max-width: 1024px) 100vw, 460px"
            className="object-cover object-center transition-opacity duration-500"
            priority={hero.tier === 1}
            unoptimized
          />
        </div>

        {/* Top Layer: Combat Mask / Helmet (Click / Toggle / Hover reveal) */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
            isRevealed ? 'opacity-100' : 'opacity-0 hover:opacity-80'
          }`}
        >
          <Image
            src={withBase(hero.face.masked)}
            alt={`${hero.alias} combat helmet mask`}
            fill
            sizes="(max-width: 1024px) 100vw, 460px"
            className="object-cover object-center"
            unoptimized
          />
        </div>

        {/* Interactive Mode Badge */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>{isRevealed ? 'TACTICAL MASK: ENGAGED' : 'UNMASKED DOSSIER'}</span>
          </span>
          <span className="text-zinc-400 uppercase">[Click / Tap Toggle]</span>
        </div>
      </div>
    </div>
  );
}
