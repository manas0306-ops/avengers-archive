'use client';

import React, { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { Hero } from '@/types/hero';
import { withBase } from '@/lib/utils';
import { Crosshair, Eye, Smartphone, RefreshCw, Compass } from 'lucide-react';

interface TrackingPortraitProps {
  hero: Hero;
}

type PoseKey = 'tl' | 't' | 'tr' | 'l' | 'c' | 'r' | 'bl' | 'b' | 'br';

const POSE_KEYS: PoseKey[] = ['tl', 't', 'tr', 'l', 'c', 'r', 'bl', 'b', 'br'];

export function TrackingPortrait({ hero }: TrackingPortraitProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const portraitFrameRef = useRef<HTMLDivElement>(null);
  const textBgRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const poseImgRefs = useRef<Record<PoseKey, HTMLImageElement | null>>({
    tl: null,
    t: null,
    tr: null,
    l: null,
    c: null,
    r: null,
    bl: null,
    b: null,
    br: null,
  });

  // Telemetry state for HUD display
  const [telemetry, setTelemetry] = useState({
    x: 0,
    y: 0,
    azimuth: 0,
    distance: 0,
    mode: 'MOUSE' as 'MOUSE' | 'TOUCH' | 'TILT' | 'AUTO-SWAY',
    isTracking: false,
  });

  const [tiltSupported, setTiltSupported] = useState(false);
  const [tiltActive, setTiltActive] = useState(false);
  const [hasPoseError, setHasPoseError] = useState(false);

  // Physics animation refs
  const stateRef = useRef({
    targetX: 0,
    targetY: 0,
    currentX: 0,
    currentY: 0,
    lastMoveTime: performance.now(),
    isInteracting: false,
    mode: 'MOUSE' as 'MOUSE' | 'TOUCH' | 'TILT' | 'AUTO-SWAY',
  });

  // Check device orientation capability
  useEffect(() => {
    if (typeof window !== 'undefined' && 'DeviceOrientationEvent' in window) {
      setTiltSupported(true);
    }
  }, []);

  // Request tilt permission (required by iOS 13+)
  const requestTiltPermission = useCallback(async () => {
    if (typeof window === 'undefined') return;

    try {
      const win = window as unknown as {
        DeviceOrientationEvent?: {
          requestPermission?: () => Promise<string>;
        };
      };
      if (typeof win.DeviceOrientationEvent?.requestPermission === 'function') {
        const permissionState = await win.DeviceOrientationEvent.requestPermission();
        if (permissionState === 'granted') {
          setTiltActive(true);
          stateRef.current.mode = 'TILT';
        }
      } else {
        setTiltActive((prev) => {
          const next = !prev;
          stateRef.current.mode = next ? 'TILT' : 'MOUSE';
          return next;
        });
      }
    } catch (err) {
      console.warn('Device orientation error:', err);
    }
  }, []);

  // Handle device orientation events
  useEffect(() => {
    if (!tiltActive) return;

    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma === null || e.beta === null) return;

      // Gamma: left-to-right tilt in [-90, 90]. Map [-30, 30] to [-1, 1]
      const clampedGamma = Math.max(-30, Math.min(30, e.gamma));
      const nx = clampedGamma / 30;

      // Beta: front-to-back tilt in [-180, 180]. Typical handheld ~ 45deg. Map [20, 70] to [-1, 1]
      const clampedBeta = Math.max(20, Math.min(70, e.beta));
      const ny = (clampedBeta - 45) / 25;

      stateRef.current.targetX = Math.max(-1, Math.min(1, nx));
      stateRef.current.targetY = Math.max(-1, Math.min(1, ny));
      stateRef.current.lastMoveTime = performance.now();
      stateRef.current.isInteracting = true;
      stateRef.current.mode = 'TILT';
    };

    window.addEventListener('deviceorientation', handleOrientation);
    return () => window.removeEventListener('deviceorientation', handleOrientation);
  }, [tiltActive]);

  // Pointer move handler (mouse + pen)
  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = (e.clientX - centerX) / (rect.width / 2);
    const dy = (e.clientY - centerY) / (rect.height / 2);

    stateRef.current.targetX = Math.max(-1, Math.min(1, dx));
    stateRef.current.targetY = Math.max(-1, Math.min(1, dy));
    stateRef.current.lastMoveTime = performance.now();
    stateRef.current.isInteracting = true;
    stateRef.current.mode = e.pointerType === 'touch' ? 'TOUCH' : 'MOUSE';
  }, []);

  // Pointer leave handler
  const handlePointerLeave = useCallback(() => {
    stateRef.current.targetX = 0;
    stateRef.current.targetY = 0;
    stateRef.current.isInteracting = false;
  }, []);

  // Reset to center
  const handleCenterSnap = useCallback(() => {
    stateRef.current.targetX = 0;
    stateRef.current.targetY = 0;
    stateRef.current.isInteracting = false;
  }, []);

  // Main 60 FPS requestAnimationFrame animation loop with 0.12 lerp factor
  useEffect(() => {
    let animId: number;
    let lastTelemetryUpdate = 0;

    const renderLoop = (time: number) => {
      const state = stateRef.current;

      // 1. Idle Detection: after 3 seconds of inactivity, ease back to center (0, 0)
      if (state.isInteracting && time - state.lastMoveTime > 3000) {
        state.targetX = 0;
        state.targetY = 0;
        state.isInteracting = false;
      }

      // 2. On Mobile / Idle Auto-Sway fallback if completely idle
      if (!state.isInteracting && !tiltActive) {
        // Gentle subtle breathing motion
        const t = time * 0.001;
        state.targetX = Math.sin(t * 0.8) * 0.25;
        state.targetY = Math.cos(t * 0.6) * 0.18;
      }

      // 3. Lerp Physics (factor = 0.12 as per spec)
      const lerp = 0.12;
      state.currentX += (state.targetX - state.currentX) * lerp;
      state.currentY += (state.targetY - state.currentY) * lerp;

      const cx = state.currentX;
      const cy = state.currentY;

      // 4. Parallax Background Typography (-24px opposite cursor offset)
      if (textBgRef.current) {
        const px = -cx * 24;
        const py = -cy * 24;
        textBgRef.current.style.transform = `translate3d(${px.toFixed(2)}px, ${py.toFixed(2)}px, 0)`;
      }

      // 5. Parallax Glow Movement
      if (glowRef.current) {
        const gx = 50 + cx * 6;
        const gy = 50 + cy * 6;
        glowRef.current.style.transform = `translate(-50%, -50%) translate3d(${gx - 50}%, ${gy - 50}%, 0)`;
      }

      // 6. Bilinear Tensor-Product Pose Opacity Calculation
      // 1D X-weights: [-1, 0, 1]
      const wxLeft = cx < 0 ? -cx : 0;
      const wxRight = cx > 0 ? cx : 0;
      const wxCenter = 1 - Math.abs(cx);

      // 1D Y-weights: [-1, 0, 1]
      const wyTop = cy < 0 ? -cy : 0;
      const wyBottom = cy > 0 ? cy : 0;
      const wyCenter = 1 - Math.abs(cy);

      // 2D grid weights
      const weights: Record<PoseKey, number> = {
        tl: wxLeft * wyTop,
        t: wxCenter * wyTop,
        tr: wxRight * wyTop,
        l: wxLeft * wyCenter,
        c: wxCenter * wyCenter,
        r: wxRight * wyCenter,
        bl: wxLeft * wyBottom,
        b: wxCenter * wyBottom,
        br: wxRight * wyBottom,
      };

      // Directly update pose image opacities
      for (const key of POSE_KEYS) {
        const img = poseImgRefs.current[key];
        if (img) {
          const w = Math.max(0, Math.min(1, weights[key]));
          // Optimization: skip setting if effectively 0
          img.style.opacity = w.toFixed(3);
        }
      }

      // 7. Fallback CSS 3D Tilt on portrait frame if poses failed
      if (hasPoseError && portraitFrameRef.current) {
        portraitFrameRef.current.style.transform = `perspective(1000px) rotateY(${(
          cx * 12
        ).toFixed(2)}deg) rotateX(${(-cy * 12).toFixed(2)}deg)`;
      }

      // 8. Throttled HUD Telemetry state update (~120ms intervals)
      if (time - lastTelemetryUpdate > 120) {
        lastTelemetryUpdate = time;
        const rad = Math.atan2(cy, cx);
        let deg = (rad * 180) / Math.PI;
        if (deg < 0) deg += 360;
        const dist = Math.sqrt(cx * cx + cy * cy);

        setTelemetry({
          x: cx,
          y: cy,
          azimuth: deg,
          distance: Math.min(1, dist),
          mode: state.mode,
          isTracking: state.isInteracting,
        });
      }

      animId = requestAnimationFrame(renderLoop);
    };

    animId = requestAnimationFrame(renderLoop);
    return () => cancelAnimationFrame(animId);
  }, [tiltActive, hasPoseError]);

  return (
    <section
      ref={containerRef}
      aria-label={`${hero.alias} Real-Time Cursor Tracking Portrait`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="tracking-portrait-band relative w-full min-h-[90svh] flex items-center justify-center overflow-hidden select-none bg-neutral-950 py-16 sm:py-24"
      style={{
        backgroundColor: hero.theme.bg,
      }}
    >
      {/* Dynamic Background Atmosphere Glow */}
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/2 w-[70vw] max-w-[800px] h-[70vw] max-h-[800px] rounded-full blur-[140px] pointer-events-none opacity-25 transition-colors duration-700"
        style={{
          backgroundColor: hero.theme.primary,
        }}
      />

      {/* Subtle Tactical HUD Grid Lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* ========================================================================= */}
      {/* BIG OUTLINED ALIAS TYPOGRAPHY (Moves opposite cursor up to 24px)          */}
      {/* ========================================================================= */}
      <div
        ref={textBgRef}
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden"
      >
        <span
          className="text-[16vw] sm:text-[19vw] font-black uppercase tracking-tighter leading-none whitespace-nowrap opacity-20 font-display select-none transition-transform will-change-transform"
          style={{
            WebkitTextStroke: '2px rgba(255, 255, 255, 0.35)',
            color: 'transparent',
          }}
        >
          {hero.alias}
        </span>
      </div>

      {/* ========================================================================= */}
      {/* 3×3 HEAD POSES PORTRAIT FRAME                                             */}
      {/* ========================================================================= */}
      <div
        ref={portraitFrameRef}
        className="relative z-10 w-[280px] sm:w-[380px] md:w-[440px] lg:w-[480px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 group"
        style={{
          boxShadow: `0 25px 60px -15px ${hero.theme.glow}, 0 0 0 1px rgba(255, 255, 255, 0.1)`,
        }}
      >
        {/* Tactical Corner Brackets */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-white/40 z-20 pointer-events-none" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-white/40 z-20 pointer-events-none" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-white/40 z-20 pointer-events-none" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-white/40 z-20 pointer-events-none" />

        {/* 9 Head Pose Image Stack */}
        {POSE_KEYS.map((key) => {
          const isCenter = key === 'c';
          return (
            <div
              key={key}
              className="absolute inset-0 w-full h-full will-change-[opacity]"
            >
              <Image
                ref={(el) => {
                  poseImgRefs.current[key] = el;
                }}
                src={withBase(hero.poses[key])}
                alt={`${hero.alias} tracking gaze pose ${key}`}
                fill
                priority={isCenter}
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 380px, 480px"
                className="object-cover object-center pointer-events-none select-none transition-opacity duration-75"
                style={{
                  opacity: isCenter ? 1 : 0,
                }}
                onError={() => setHasPoseError(true)}
              />
            </div>
          );
        })}

        {/* Soft Contrast Gradient Overlay at Bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none z-10" />

        {/* Floating Reticle Crosshair Indicator Over Face */}
        <div
          className="absolute w-8 h-8 rounded-full border border-dashed border-white/30 pointer-events-none z-20 flex items-center justify-center transition-transform duration-75"
          style={{
            top: `${50 + telemetry.y * 18}%`,
            left: `${50 + telemetry.x * 18}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: hero.theme.primary }}
          />
        </div>
      </div>

      {/* ========================================================================= */}
      {/* HUD CAPTIONS & TACTICAL DIAGNOSTICS                                       */}
      {/* ========================================================================= */}

      {/* Top Left: Block Header */}
      <div className="absolute top-6 left-6 sm:top-10 sm:left-12 z-20 pointer-events-none flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span
            className="inline-block w-2.5 h-2.5 rounded-full animate-ping"
            style={{ backgroundColor: hero.theme.primary }}
          />
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-white/70">
            BLOCK F • KINETIC GAZE TRACKER
          </span>
        </div>
        <span className="text-[11px] font-mono text-white/40 uppercase tracking-wider">
          LIVE HEAD POSE SENSOR MATRIX
        </span>
      </div>

      {/* Top Right: Interaction Controls & Tilt Mode Toggle */}
      <div className="absolute top-6 right-6 sm:top-10 sm:right-12 z-20 flex items-center gap-2.5">
        {tiltSupported && (
          <button
            type="button"
            onClick={requestTiltPermission}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all backdrop-blur-md border ${
              tiltActive
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10'
            }`}
            title="Toggle Gyroscope Device Tilt Control"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>{tiltActive ? 'TILT ACTIVE' : 'ENABLE TILT'}</span>
          </button>
        )}

        <button
          type="button"
          onClick={handleCenterSnap}
          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-colors backdrop-blur-md"
          title="Reset Gaze to Center Pose"
          aria-label="Reset Gaze"
        >
          <RefreshCw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Bottom Left: Tactical Target Lock Caption */}
      <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-12 z-20 pointer-events-none flex flex-col gap-1.5 max-w-sm">
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-white/60 animate-pulse" />
          <h3 className="text-sm sm:text-base font-mono font-bold tracking-wider uppercase text-white">
            {hero.alias} is watching you
          </h3>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono text-white/50">
          <span className="flex items-center gap-1">
            <Compass className="w-3 h-3 text-white/40" />
            AZIMUTH: {telemetry.azimuth.toFixed(0)}°
          </span>
          <span>•</span>
          <span>DISTANCE: {(telemetry.distance * 100).toFixed(0)}%</span>
        </div>
      </div>

      {/* Bottom Right: 60 FPS LERP Telemetry Status */}
      <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-12 z-20 pointer-events-none hidden sm:flex flex-col items-end gap-1">
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-white/70 backdrop-blur-md">
          <Crosshair className="w-3 h-3 text-white/40" />
          <span>X: {telemetry.x.toFixed(2)} | Y: {telemetry.y.toFixed(2)}</span>
        </div>
        <span className="text-[10px] font-mono tracking-widest uppercase text-white/40">
          60 FPS LERP (0.12) • 9-POSE CROSSFADE
        </span>
      </div>
    </section>
  );
}
