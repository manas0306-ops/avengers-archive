'use client';

import Link from 'next/link';
import { Shield, Sparkles, Terminal } from 'lucide-react';
import { ArcReactor } from '@/components/ui/ArcReactor';

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-archive-darkest/95 backdrop-blur-md text-zinc-400 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
        {/* Left Column: Brand & Disclaimer */}
        <div className="max-w-md flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <ArcReactor size="sm" interactive={false} />
            <span className="font-cinematic text-xl font-bold tracking-widest text-white">
              AVENGERS ARCHIVE
            </span>
          </div>
          <p className="text-sm font-sans text-zinc-300">
            Earth&apos;s Mightiest Heroes — Their Stories. Their Battles. Their Legacy.
          </p>
          <p className="text-xs font-mono text-zinc-400 leading-relaxed">
            This is an educational, non-commercial fan-made digital museum and interactive archive.
            All character likenesses, logos, trademarks, and source content belong to Marvel Studios,
            Marvel Entertainment, and The Walt Disney Company. No copyright infringement is intended.
          </p>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mt-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>EARTH-616 ARCHIVE SUBSYSTEMS NOMINAL</span>
          </div>
        </div>

        {/* Center Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs font-mono">
          <div className="flex flex-col gap-2.5">
            <span className="text-zinc-200 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-marvel-red" /> ARCHIVE
            </span>
            <Link href="/heroes" className="hover:text-white transition-colors">Hero Dossiers</Link>
            <Link href="/timeline" className="hover:text-white transition-colors">MCU Timeline</Link>
            <Link href="/movies" className="hover:text-white transition-colors">Movie Milestones</Link>
            <Link href="/gallery" className="hover:text-white transition-colors">Photo Vault</Link>
            <Link href="/wallpapers" className="hover:text-white transition-colors">Wallpapers</Link>
          </div>

          <div className="flex flex-col gap-2.5">
            <span className="text-zinc-200 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-marvel-arc" /> MISSIONS
            </span>
            <Link href="/squad" className="hover:text-white transition-colors">Team Builder</Link>
            <Link href="/trivia" className="hover:text-white transition-colors">Trivia Quiz</Link>
            <Link href="/games" className="hover:text-white transition-colors">Memory Match</Link>
            <Link href="/profile" className="hover:text-white transition-colors">My Avengers</Link>
          </div>

          <div className="flex flex-col gap-2.5">
            <span className="text-zinc-200 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-marvel-gold" /> PROTOCOLS
            </span>
            <Link href="/about" className="hover:text-white transition-colors">About Archive</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Notice</Link>
            <Link href="/admin" className="hover:text-white transition-colors">Director Console</Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-400 gap-4">
        <span>© {new Date().getFullYear()} Avengers Archive • Built with Next.js, TypeScript &amp; Supabase</span>
        <span>Version 2.4.0 • Earth-616 Continuum</span>
      </div>
    </footer>
  );
}
