'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Clock, Shield, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { ArcReactor } from '@/components/ui/ArcReactor';
import { useSound } from '@/hooks/useSound';

interface HeroSectionProps {
  onOpenJarvis?: () => void;
}

export function HeroSection({ onOpenJarvis }: HeroSectionProps) {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const { playHover, playConfirm } = useSound();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMouseOffset({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-20"
    >
      {/* Layered Cinematic Background with subtle parallax */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-300 ease-out scale-105 opacity-25"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1635863138275-d9b33299680b?q=80&w=1920&auto=format&fit=crop")',
          transform: `translate(${mouseOffset.x * -0.5}px, ${mouseOffset.y * -0.5}px) scale(1.05)`,
        }}
      />

      {/* Atmospheric Gradients */}
      <div className="absolute inset-0 z-0 bg-hero-vignette pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-archive-darkest via-transparent to-transparent pointer-events-none" />

      {/* Central Interactive Content */}
      <div
        className="relative z-10 flex flex-col items-center max-w-4xl transition-transform duration-200 ease-out"
        style={{
          transform: `translate(${mouseOffset.x * 0.3}px, ${mouseOffset.y * 0.3}px)`,
        }}
      >
        {/* Arc Reactor Centerpiece */}
        <div className="mb-6">
          <ArcReactor size="lg" onJarvisTrigger={onOpenJarvis} />
        </div>

        {/* Small Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-marvel-red/10 border border-marvel-red/30 text-marvel-red text-xs font-mono tracking-widest uppercase mb-4 animate-fade-in shadow-[0_0_15px_rgba(226,54,54,0.3)]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>EARTH&apos;S MIGHTIEST HEROES ARCHIVE</span>
        </div>

        {/* Large Cinematic Title */}
        <h1 className="font-cinematic text-5xl sm:text-7xl md:text-8xl font-black tracking-wider text-white mb-2 leading-tight drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]">
          AVENGERS
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500 font-extrabold tracking-widest text-4xl sm:text-6xl md:text-7xl">
            ARCHIVE
          </span>
        </h1>

        {/* Staggered Subtitle */}
        <div className="text-zinc-300 font-sans text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
          <span className="block font-medium text-white/90">
            Every hero. Every battle. Every sacrifice. Every legacy.
          </span>
          <span className="block text-xs font-mono text-zinc-400 mt-1 uppercase tracking-widest">
            Earth&apos;s Mightiest Heroes — Their Stories. Their Battles. Their Legacy.
          </span>
        </div>

        {/* Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          <Link
            href="/heroes"
            onMouseEnter={() => playHover()}
            onClick={() => playConfirm()}
            className="group px-8 py-4 rounded-xl bg-marvel-red hover:bg-red-600 text-white font-mono text-xs tracking-widest font-bold uppercase transition-all duration-300 shadow-[0_0_25px_rgba(226,54,54,0.6)] hover:shadow-[0_0_40px_rgba(226,54,54,0.9)] hover:scale-105 flex items-center gap-2"
          >
            <Shield className="w-4 h-4 text-white" />
            <span>ENTER THE ARCHIVE</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/timeline"
            onMouseEnter={() => playHover()}
            onClick={() => playConfirm()}
            className="px-7 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-200 hover:text-white font-mono text-xs tracking-widest font-bold uppercase transition-all duration-300 border border-white/15 hover:border-white/30 backdrop-blur-md flex items-center gap-2"
          >
            <Clock className="w-4 h-4 text-marvel-arc" />
            <span>EXPLORE TIMELINE</span>
          </Link>
        </div>

        {/* Interaction Guidance Hint */}
        <div className="flex items-center gap-3 text-xs font-mono text-zinc-400 bg-black/40 px-4 py-2 rounded-full border border-white/5">
          <ArrowLeft className="w-3.5 h-3.5 text-marvel-arc animate-pulse" />
          <span>Swipe / Use ← → to travel through the archive</span>
          <ArrowRight className="w-3.5 h-3.5 text-marvel-arc animate-pulse" />
        </div>
      </div>
    </section>
  );
}
