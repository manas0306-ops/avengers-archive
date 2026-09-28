'use client';

import { useState, useMemo } from 'react';
import {
  Image as ImageIcon,
  Grid,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  ExternalLink,
  Layers,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';
import { GalleryItem, GalleryCategory } from '@/types/gallery';
import { useSound } from '@/hooks/useSound';

interface GalleryViewProps {
  items: GalleryItem[];
}

export function GalleryView({ items }: GalleryViewProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('ALL');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const { playHover, playConfirm } = useSound();

  const categories: GalleryCategory[] = [
    'ALL',
    'HEROES',
    'TEAM',
    'BATTLES',
    'POSTERS',
    'WALLPAPERS',
  ];

  const filteredItems = useMemo(() => {
    if (activeCategory === 'ALL') return items;
    return items.filter((item) => item.category === activeCategory);
  }, [items, activeCategory]);

  const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handleNext = () => {
    if (lightboxIndex === null) return;
    playConfirm();
    setLightboxIndex((prev) => ((prev! + 1) % filteredItems.length));
    setIsZoomed(false);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    playConfirm();
    setLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
    setIsZoomed(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-marvel-arc/10 border border-marvel-arc/30 text-marvel-arc text-xs font-mono tracking-widest uppercase mb-4">
          <ImageIcon className="w-3.5 h-3.5" />
          <span>VISUAL ARCHIVE</span>
        </div>
        <h1 className="font-cinematic text-4xl sm:text-5xl font-black text-white tracking-wide mb-3">
          AVENGERS PHOTO VAULT
        </h1>
        <p className="text-zinc-400 font-sans text-sm sm:text-base">
          Stark Industries visual repository: iconic battle stills, promotional artwork, and high-resolution posters.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-2 rounded-2xl bg-archive-darker/90 border border-white/10 backdrop-blur-xl max-w-2xl mx-auto mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => {
              playConfirm();
              setActiveCategory(cat);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-marvel-arc text-black shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => {
              playConfirm();
              setLightboxIndex(idx);
            }}
            onMouseEnter={() => playHover()}
            className="group relative cursor-pointer overflow-hidden rounded-2xl bg-archive-darker border border-white/10 hover:border-marvel-arc/50 transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.6)] hover:-translate-y-1.5 flex flex-col justify-between"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.thumbnail_url || item.url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-archive-darkest via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity pointer-events-none" />

              <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-black/60 text-white backdrop-blur-md border border-white/10">
                {item.category}
              </span>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="p-3 rounded-full bg-marvel-arc text-black shadow-[0_0_20px_#00f0ff]">
                  <Maximize2 className="w-5 h-5" />
                </span>
              </div>
            </div>

            <div className="p-4">
              <h3 className="font-cinematic text-sm font-bold text-white group-hover:text-marvel-arc transition-colors line-clamp-1">
                {item.title}
              </h3>
              <p className="text-[11px] font-mono text-zinc-400 mt-1">
                {item.movie || item.character_name || 'Avengers Archive'}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* FULLSCREEN LIGHTBOX */}
      {activeItem && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl animate-fade-in"
        >
          {/* Controls */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20 text-white font-mono text-xs">
            <div>
              <span className="text-marvel-arc font-bold">{activeItem.title}</span>
              <span className="text-zinc-500 ml-2">({lightboxIndex + 1} / {filteredItems.length})</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsZoomed(!isZoomed);
                }}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white"
              >
                {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
              </button>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 hover:bg-marvel-red text-white border border-white/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 hover:bg-marvel-red text-white border border-white/20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Display */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[80vh] flex flex-col items-center justify-center p-2"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={activeItem.url}
              alt={activeItem.title}
              className={`max-w-full max-h-[75vh] object-contain rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.9)] transition-transform duration-300 ${
                isZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            />

            {/* Bottom Metadata & Source Reference */}
            <div className="w-full mt-4 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-400 bg-archive-darkest/80 p-3 rounded-xl border border-white/10">
              <div>
                <span>Source: {activeItem.source}</span>
                <span className="block text-[10px] text-zinc-500">{activeItem.license_note}</span>
              </div>
              <a
                href={activeItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-marvel-arc hover:text-white"
              >
                <span>VIEW SOURCE ASSET</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
