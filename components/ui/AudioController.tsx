'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

class SoundEngine {
  private ctx: AudioContext | null = null;
  private droneGain: GainNode | null = null;
  private osc1: OscillatorNode | null = null;
  private osc2: OscillatorNode | null = null;
  private isRunning = false;

  private initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public startAmbient() {
    this.initContext();
    if (!this.ctx || this.isRunning) return;

    try {
      this.isRunning = true;
      const now = this.ctx.currentTime;

      // Filter for sci-fi warmth
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(140, now);

      this.droneGain = this.ctx.createGain();
      this.droneGain.gain.setValueAtTime(0.001, now);
      this.droneGain.gain.exponentialRampToValueAtTime(0.015, now + 2); // Soft 2s fade-in

      this.osc1 = this.ctx.createOscillator();
      this.osc1.type = 'sine';
      this.osc1.frequency.setValueAtTime(55, now); // A1 note

      this.osc2 = this.ctx.createOscillator();
      this.osc2.type = 'triangle';
      this.osc2.frequency.setValueAtTime(110, now); // A2 note

      this.osc1.connect(filter);
      this.osc2.connect(filter);
      filter.connect(this.droneGain);
      this.droneGain.connect(this.ctx.destination);

      this.osc1.start();
      this.osc2.start();
    } catch {
      // Audio playback blocked or unavailable
    }
  }

  public stopAmbient() {
    if (!this.isRunning || !this.ctx || !this.droneGain) return;
    try {
      const now = this.ctx.currentTime;
      this.droneGain.gain.setValueAtTime(this.droneGain.gain.value, now);
      this.droneGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);

      setTimeout(() => {
        try {
          this.osc1?.stop();
          this.osc2?.stop();
          this.osc1?.disconnect();
          this.osc2?.disconnect();
          this.isRunning = false;
        } catch {}
      }, 500);
    } catch {
      this.isRunning = false;
    }
  }

  public playClick() {
    this.initContext();
    if (!this.ctx || this.ctx.state !== 'running') return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(750, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.04);

      gain.gain.setValueAtTime(0.03, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.05);
    } catch {}
  }
}

const engine = new SoundEngine();

export function AudioController() {
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const saved = localStorage.getItem('avengers_sound_enabled');
    if (saved === 'true') {
      setIsAudioEnabled(true);
    }
    initializedRef.current = true;
  }, []);

  const toggleAudio = useCallback(() => {
    setIsAudioEnabled((prev) => {
      const next = !prev;
      if (typeof window !== 'undefined') {
        localStorage.setItem('avengers_sound_enabled', String(next));
      }
      if (next) {
        engine.startAmbient();
        engine.playClick();
      } else {
        engine.stopAmbient();
      }
      return next;
    });
  }, []);

  // Global click SFX when audio is enabled
  useEffect(() => {
    if (!isAudioEnabled) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest('button, a, [role="button"]')) {
        engine.playClick();
      }
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [isAudioEnabled]);

  return (
    <button
      type="button"
      onClick={toggleAudio}
      aria-label={isAudioEnabled ? 'Mute Tactical SFX & Drone' : 'Enable Tactical SFX & Drone'}
      title={isAudioEnabled ? 'Tactical Audio: ACTIVE (Click to Mute)' : 'Tactical Audio: MUTED (Click to Enable)'}
      className={`p-2 rounded-xl border backdrop-blur-md transition-all duration-200 flex items-center gap-2 text-xs font-mono ${
        isAudioEnabled
          ? 'bg-amber-500/20 border-amber-500/40 text-amber-300 shadow-lg shadow-amber-500/10'
          : 'bg-white/5 border-white/10 text-white/50 hover:text-white hover:bg-white/10'
      }`}
    >
      {isAudioEnabled ? (
        <>
          <Volume2 className="w-4 h-4 animate-pulse text-amber-400" />
          <span className="hidden md:inline font-mono tracking-wider text-[11px] uppercase">
            SFX ON
          </span>
        </>
      ) : (
        <>
          <VolumeX className="w-4 h-4 text-white/40" />
          <span className="hidden md:inline font-mono tracking-wider text-[11px] uppercase">
            SFX OFF
          </span>
        </>
      )}
    </button>
  );
}
