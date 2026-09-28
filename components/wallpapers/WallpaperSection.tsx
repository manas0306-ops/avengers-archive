'use client';

import { useState, useMemo } from 'react';
import { Sparkles, Monitor, Smartphone, Maximize, ExternalLink, Download } from 'lucide-react';
import { GALLERY_ITEMS } from '@/data/gallery';
import { useSound } from '@/hooks/useSound';

export function WallpaperSection() {
  const [deviceFilter, setDeviceFilter] = useState<'ALL' | 'DESKTOP' | 'MOBILE' | 'ULTRAWIDE'>('ALL');
  const [characterFilter, setCharacterFilter] = useState<string>('ALL');
  const { playHover, playConfirm } = useSound();

  const wallpapers = useMemo(() => {
    return GALLERY_ITEMS.filter((item) => item.category === 'WALLPAPERS' || item.category === 'POSTERS');
  }, []);

  const characters = ['ALL', 'Iron Man', 'Captain America', 'Thor', 'Spider-Man'];

  const filteredWallpapers = useMemo(() => {
    return wallpapers.filter((w) => {
      const matchDevice =
        deviceFilter === 'ALL' ||
        (deviceFilter === 'MOBILE' && w.aspect_ratio === '9:16') ||
        (deviceFilter === 'DESKTOP' && w.aspect_ratio === '16:9') ||
        (deviceFilter === 'ULTRAWIDE' && w.aspect_ratio === '21:9');

      const matchCharacter =
        characterFilter === 'ALL' ||
        (w.character_name && w.character_name.toLowerCase().includes(characterFilter.toLowerCase())) ||
        w.tags.some((t) => t.toLowerCase().includes(characterFilter.toLowerCase()));

      return matchDevice && matchCharacter;
    });
  }, [wallpapers, deviceFilter, characterFilter]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-marvel-arc/10 border border-marvel-arc/30 text-marvel-arc text-xs font-mono tracking-widest uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>DISPLAY RESOLUTION VAULT</span>
        </div>
        <h1 className="font-cinematic text-4xl sm:text-5xl font-black text-white tracking-wide mb-3">
          AVENGERS WALLPAPERS
        </h1>
        <p className="text-zinc-400 font-sans text-sm sm:text-base">
          Curated high-resolution backgrounds formatted for desktop monitors, ultrawide gaming displays, and mobile devices.
        </p>
      </div>

      {/* Filter Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-archive-darker/90 border border-white/10 backdrop-blur-xl mb-12">
        {/* Device Aspect Filters */}
        <div className="flex items-center gap-2">
          {[
            { id: 'ALL', label: 'ALL DEVICES', icon: Maximize },
            { id: 'DESKTOP', label: 'DESKTOP (16:9)', icon: Monitor },
            { id: 'MOBILE', label: 'MOBILE (9:16)', icon: Smartphone },
          ].map((dev) => {
            const Icon = dev.icon;
            return (
              <button
                key={dev.id}
                type="button"
                onClick={() => {
                  playConfirm();
                  setDeviceFilter(dev.id as typeof deviceFilter);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wider transition-colors ${
                  deviceFilter === dev.id
                    ? 'bg-marvel-arc text-black shadow-[0_0_12px_rgba(0,240,255,0.4)]'
                    : 'bg-white/5 text-zinc-400 hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {dev.label}
              </button>
            );
          })}
        </div>

        {/* Character Quick Filter */}
        <div className="flex items-center gap-1.5">
          {characters.map((char) => (
            <button
              key={char}
              type="button"
              onClick={() => {
                playConfirm();
                setCharacterFilter(char);
              }}
              className={`px-3 py-1 rounded-lg text-xs font-mono uppercase tracking-wider transition-colors ${
                characterFilter === char
                  ? 'bg-marvel-red text-white font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {char}
            </button>
          ))}
        </div>
      </div>

      {/* Wallpapers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredWallpapers.map((wp) => (
          <div
            key={wp.id}
            onMouseEnter={() => playHover()}
            className="group relative overflow-hidden rounded-3xl bg-archive-darker border border-white/10 hover:border-marvel-arc/50 shadow-[0_12px_36px_rgba(0,0,0,0.8)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={wp.url}
                alt={wp.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-archive-darker via-transparent to-transparent pointer-events-none" />

              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-mono border border-white/15">
                {wp.resolution || wp.aspect_ratio}
              </span>
            </div>

            <div className="p-6">
              <h3 className="font-cinematic text-lg font-bold text-white group-hover:text-marvel-arc transition-colors">
                {wp.title}
              </h3>
              <p className="text-xs font-mono text-zinc-400 mt-1 mb-4">
                {wp.character_name || 'Avengers Collective'}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs font-mono">
                <span className="text-[10px] text-zinc-500">{wp.source}</span>
                <a
                  href={wp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playConfirm()}
                  className="flex items-center gap-1 text-marvel-arc hover:text-white"
                >
                  <span>VIEW SOURCE</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
