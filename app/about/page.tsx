import Link from 'next/link';
import { Shield, Sparkles, Database, Terminal, Film, ExternalLink } from 'lucide-react';
import { ArcReactor } from '@/components/ui/ArcReactor';

export const metadata = {
  title: 'About the Archive | Avengers Archive',
  description: 'Mission statement, canonical research principles, and technical architecture of the Avengers Archive.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="mb-4">
          <ArcReactor size="md" interactive={false} />
        </div>
        <h1 className="font-cinematic text-4xl sm:text-5xl font-black text-white tracking-wide mb-3">
          AVENGERS ARCHIVE
        </h1>
        <p className="text-zinc-400 font-sans text-sm sm:text-base">
          Earth&apos;s Mightiest Heroes — Their Stories. Their Battles. Their Legacy.
        </p>
      </div>

      <div className="space-y-8 font-sans text-sm text-zinc-300">
        {/* Project Mission */}
        <div className="p-6 sm:p-8 rounded-3xl bg-archive-darker/90 border border-white/10 space-y-3">
          <h2 className="font-cinematic text-xl font-bold text-white flex items-center gap-2">
            <Shield className="w-5 h-5 text-marvel-red" />
            1. The Archive Mission
          </h2>
          <p className="leading-relaxed text-zinc-400">
            The <strong>Avengers Archive</strong> was conceived as a high-fidelity digital museum,
            chronological encyclopedia, and cinematic visual repository celebrating over fifteen years
            of Marvel Cinematic Universe storytelling.
          </p>
          <p className="leading-relaxed text-zinc-400">
            Rather than a flat informational wiki, the Archive delivers a Netflix-grade visual
            experience with interactive character dossiers, timeline event modeling, team-building
            simulators, and tactical trivia challenges.
          </p>
        </div>

        {/* Fact-Checking & Canonical Integrity */}
        <div className="p-6 sm:p-8 rounded-3xl bg-archive-darker/90 border border-white/10 space-y-3">
          <h2 className="font-cinematic text-xl font-bold text-white flex items-center gap-2">
            <Database className="w-5 h-5 text-marvel-gold" />
            2. Canonical Integrity &amp; Sourcing Standards
          </h2>
          <p className="leading-relaxed text-zinc-400">
            In strict adherence to project standards, all hero storylines, weapon manifests, battle
            outcomes, and timeline coordinates are cross-verified against official Marvel Studios
            theatrical releases and production documentation.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-zinc-400 text-xs font-mono">
            <li>Zero hallucinated future movie spoilers or fan fiction theories.</li>
            <li>Unreleased projects are marked strictly as <em>CONFIRMED</em> or <em>UPCOMING</em>.</li>
            <li>All dossiers retain verification timestamps and official external source URLs.</li>
          </ul>
        </div>

        {/* Technical Architecture */}
        <div className="p-6 sm:p-8 rounded-3xl bg-archive-darker/90 border border-white/10 space-y-4">
          <h2 className="font-cinematic text-xl font-bold text-white flex items-center gap-2">
            <Terminal className="w-5 h-5 text-marvel-arc" />
            3. Technical Stack
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <strong className="text-white block mb-1">FRONTEND &amp; MOTION</strong>
              <span className="text-zinc-400">Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, Framer Motion</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <strong className="text-white block mb-1">BACKEND &amp; DATABASE</strong>
              <span className="text-zinc-400">Next.js Server Actions, PostgreSQL (Supabase), Local Persistence Engine</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <strong className="text-white block mb-1">AUDIO ENGINE</strong>
              <span className="text-zinc-400">Browser Web Audio API (Synthesized oscillators, 0 MP3 dependencies)</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <strong className="text-white block mb-1">VISITOR INTELLIGENCE</strong>
              <span className="text-zinc-400">Privacy-preserving SHA-256 session hashing, real analytics, admin monitor</span>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="p-6 sm:p-8 rounded-3xl bg-archive-darker/90 border border-white/10 space-y-2 text-xs font-mono text-zinc-400">
          <h3 className="text-white font-bold uppercase tracking-wider">LEGAL DISCLAIMER</h3>
          <p className="leading-relaxed">
            This website is a non-commercial, educational fan project. It is not affiliated with,
            endorsed by, or sponsored by Marvel Studios, Marvel Entertainment, or The Walt Disney Company.
            Avengers and all related characters and elements are trademarks of Marvel Characters, Inc.
          </p>
        </div>
      </div>
    </div>
  );
}
