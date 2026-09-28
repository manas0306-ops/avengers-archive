'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Hero } from '@/types/hero';
import { withBase } from '@/lib/utils';
import { Sparkles, Eye, ShieldAlert } from 'lucide-react';

interface FaceModuleProps {
  hero: Hero;
}

export function FaceModule({ hero }: FaceModuleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const topLayerRef = useRef<HTMLDivElement>(null);

  // Interaction States
  const [isHovered, setIsHovered] = useState(false);
  const [isFullRevealed, setIsFullRevealed] = useState(false);
  const [hasErrorUnmasked, setHasErrorUnmasked] = useState(false);
  const [hasErrorMasked, setHasErrorMasked] = useState(false);

  // Position and Lerp Physics
  const targetPos = useRef({ x: 0, y: 0, r: 0 });
  const currentPos = useRef({ x: 0, y: 0, r: 0 });
  const rafId = useRef<number | null>(null);
  const radiusTween = useRef<{ startTime: number; startR: number; endR: number; duration: number } | null>(null);

  const LERP_FACTOR = 0.18; // Lerp smoothing factor per Spec 7B
  const SPOT_RATIO = 0.24; // 24% of module width per Spec 7B

  // Ease function: power2.out
  const easeOutPower2 = (t: number) => 1 - (1 - t) * (1 - t);

  // Continuous animation loop for mouse tracking & radius tweening
  const updateLoop = useCallback(() => {
    // 1. Smooth cursor coordinates with lerp factor 0.18
    currentPos.current.x += (targetPos.current.x - currentPos.current.x) * LERP_FACTOR;
    currentPos.current.y += (targetPos.current.y - currentPos.current.y) * LERP_FACTOR;

    // 2. Animate radius --r
    if (radiusTween.current) {
      const now = performance.now();
      const elapsed = now - radiusTween.current.startTime;
      const progress = Math.min(1, elapsed / radiusTween.current.duration);
      const eased = easeOutPower2(progress);

      currentPos.current.r =
        radiusTween.current.startR +
        (radiusTween.current.endR - radiusTween.current.startR) * eased;

      if (progress >= 1) {
        radiusTween.current = null;
      }
    } else {
      currentPos.current.r += (targetPos.current.r - currentPos.current.r) * LERP_FACTOR;
    }

    // 3. Apply CSS variables to top layer for radial-gradient mask
    if (topLayerRef.current) {
      topLayerRef.current.style.setProperty('--x', `${currentPos.current.x.toFixed(1)}px`);
      topLayerRef.current.style.setProperty('--y', `${currentPos.current.y.toFixed(1)}px`);
      topLayerRef.current.style.setProperty('--r', `${currentPos.current.r.toFixed(1)}px`);
    }

    rafId.current = requestAnimationFrame(updateLoop);
  }, []);

  useEffect(() => {
    rafId.current = requestAnimationFrame(updateLoop);
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [updateLoop]);

  // Pointer Movement over Module
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current || isFullRevealed) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    targetPos.current.x = x;
    targetPos.current.y = y;
  };

  // Pointer Enter (animate --r from 0 to full over 350ms)
  const handlePointerEnter = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current || isFullRevealed) return;
    setIsHovered(true);

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const maxRadius = rect.width * SPOT_RATIO;

    targetPos.current.x = x;
    targetPos.current.y = y;
    currentPos.current.x = x;
    currentPos.current.y = y;

    radiusTween.current = {
      startTime: performance.now(),
      startR: currentPos.current.r,
      endR: maxRadius,
      duration: 350, // 350ms duration per Spec 7B
    };
  };

  // Pointer Leave (animate --r back to 0)
  const handlePointerLeave = () => {
    if (isFullRevealed) return;
    setIsHovered(false);

    radiusTween.current = {
      startTime: performance.now(),
      startR: currentPos.current.r,
      endR: 0,
      duration: 350,
    };
  };

  // Touch / Click Toggle: 500ms circular wipe
  const triggerWipeToggle = (originX?: number, originY?: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = originX !== undefined ? originX : rect.width / 2;
    const y = originY !== undefined ? originY : rect.height / 2;

    const diagonal = Math.hypot(rect.width, rect.height);

    if (!isFullRevealed) {
      // Reveal mask to full bounds (500ms wipe)
      setIsFullRevealed(true);
      targetPos.current.x = x;
      targetPos.current.y = y;
      currentPos.current.x = x;
      currentPos.current.y = y;

      radiusTween.current = {
        startTime: performance.now(),
        startR: currentPos.current.r,
        endR: diagonal * 1.15,
        duration: 500, // 500ms circular wipe per Spec 7B
      };
    } else {
      // Revert back to unmasked
      setIsFullRevealed(false);
      radiusTween.current = {
        startTime: performance.now(),
        startR: currentPos.current.r,
        endR: 0,
        duration: 500,
      };
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // If it's a touch or tap event
    if (e.pointerType === 'touch') {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        triggerWipeToggle(x, y);
      }
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      triggerWipeToggle(x, y);
    }
  };

  // Keyboard accessibility: Enter or Space
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      triggerWipeToggle();
    }
  };

  const isDegradedFallback = hasErrorUnmasked || hasErrorMasked;

  return (
    <div className="relative w-full max-w-[460px] mx-auto flex flex-col items-center justify-center">
      {/* Background Ambient Glow */}
      <div
        className="absolute inset-0 rounded-3xl blur-3xl opacity-35 transition-all duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${hero.theme.primary} 0%, ${hero.theme.glow} 50%, transparent 80%)`,
        }}
      />

      {/* 4:5 Face Module Frame */}
      <div
        ref={containerRef}
        tabIndex={0}
        role="button"
        aria-label={`${hero.alias} interactive face module. Move cursor to reveal combat mask. Press Enter to toggle full wipe.`}
        aria-pressed={isFullRevealed}
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onPointerDown={handlePointerDown}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-white/20 bg-black/80 shadow-[0_20px_50px_rgba(0,0,0,0.8)] cursor-crosshair select-none focus:outline-none focus:ring-2 focus:ring-white/50 transition-shadow duration-300"
      >
        {/* BASE LAYER: Unmasked Portrait */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <Image
            src={withBase(hero.face.unmasked)}
            alt={`${hero.alias} (${hero.actor}) unmasked portrait`}
            fill
            sizes="(max-width: 1024px) 100vw, 460px"
            className="object-cover object-center"
            priority={hero.tier === 1}
            onError={() => setHasErrorUnmasked(true)}
            unoptimized
          />
        </div>

        {/* TOP LAYER: Combat Mask / Helmet Layer with Radial Cursor Mask */}
        <div
          ref={topLayerRef}
          className="absolute inset-0 w-full h-full pointer-events-none will-change-[mask-image]"
          style={{
            maskImage:
              'radial-gradient(circle var(--r, 0px) at var(--x, 50%) var(--y, 50%), #000000 70%, transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(circle var(--r, 0px) at var(--x, 50%) var(--y, 50%), #000000 70%, transparent 100%)',
          }}
        >
          <Image
            src={withBase(hero.face.masked)}
            alt={`${hero.alias} tactical combat mask`}
            fill
            sizes="(max-width: 1024px) 100vw, 460px"
            className="object-cover object-center"
            priority={hero.tier === 1}
            onError={() => setHasErrorMasked(true)}
            unoptimized
          />
        </div>

        {/* HUD Targeting Reticle & Status Banner */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 font-mono text-[9px] text-zinc-400 uppercase tracking-widest pointer-events-none flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>FACIAL SCANNER // {isFullRevealed ? 'MASK LOCKED' : isHovered ? 'TARGET SCANNING' : 'ONLINE'}</span>
        </div>

        {/* Interactive Mode Badge */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300 pointer-events-none">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span className="font-semibold" style={{ color: hero.theme.secondary }}>
              {isFullRevealed ? 'COMBAT HELMET ENGAGED' : 'HOVER TO REVEAL MASK'}
            </span>
          </span>
          <span className="text-zinc-400 uppercase">[Click / Space Toggle]</span>
        </div>

        {/* Fallback Notice if degraded */}
        {isDegradedFallback && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 rounded-xl bg-black/90 border border-amber-500/40 text-center text-xs font-mono text-amber-300 pointer-events-none">
            <ShieldAlert className="w-5 h-5 mx-auto mb-1 text-amber-400" />
            <span>PRIMARY SENSOR OFFLINE</span>
          </div>
        )}
      </div>
    </div>
  );
}
