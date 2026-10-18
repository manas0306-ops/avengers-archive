'use client';

import React, { useState, useMemo } from 'react';
import { STARK_INVENTIONS } from '@/data/stark_inventions';
import { StarkInvention, InventionCategory } from '@/types/ironman';
import { Search, Filter, Cpu, Zap, Users, ExternalLink, ShieldAlert, Sparkles, Layers } from 'lucide-react';

export function StarkInventionsView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [selectedInvention, setSelectedInvention] = useState<StarkInvention | null>(null);

  const categories: Array<{ id: string; label: string }> = [
    { id: 'ALL', label: 'ALL SYSTEMS' },
    { id: 'POWER_GENERATION', label: 'POWER & ARC REACTOR' },
    { id: 'ARTIFICIAL_INTELLIGENCE', label: 'AI & FRIDAY / JARVIS' },
    { id: 'NANOTECHNOLOGY', label: 'NANOTECHNOLOGY' },
    { id: 'DEFENSE_NETWORK', label: 'DEFENSE & EDITH' },
    { id: 'HOLOGRAPHIC_INTERFACE', label: 'BARF & HOLOGRAPHY' },
    { id: 'TEMPORAL_MECHANICS', label: 'QUANTUM GPS' },
    { id: 'ARMOR_AND_EXOSKELETON', label: 'EXOSKELETONS' }
  ];

  const filteredInventions = useMemo(() => {
    return STARK_INVENTIONS.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.purpose.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.leadCreator.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.collaborators && item.collaborators.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()))) ||
        item.capabilities.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCat = activeCategory === 'ALL' || item.category === activeCategory;
      return matchesSearch && matchesCat;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="w-full space-y-8">
      {/* Search & Category Filter Controls */}
      <div className="p-4 sm:p-6 rounded-2xl bg-black/60 border border-cyan-500/20 backdrop-blur-md">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search inventions, AI, creators, nanotech..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-cyan-500/30 text-white placeholder-zinc-500 font-mono text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40"
            />
          </div>

          {/* Result Count */}
          <div className="font-mono text-xs text-zinc-400 self-end md:self-center">
            INDEXED SYSTEMS: <span className="text-cyan-400 font-bold">{filteredInventions.length}</span>
          </div>
        </div>

        {/* Categories Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-4 mt-4 border-t border-white/5 scrollbar-thin">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-[11px] font-mono whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-[0_0_12px_rgba(0,240,255,0.2)]'
                    : 'bg-white/5 text-zinc-400 hover:text-white border-transparent hover:border-white/10'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Inventions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredInventions.map((item) => (
          <div
            key={item.id}
            className="group relative flex flex-col justify-between p-5 rounded-2xl bg-[#090d16]/90 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]"
          >
            {/* Top Bar */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] tracking-widest text-cyan-400 uppercase flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" />
                  {item.category.replace(/_/g, ' ')}
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  {item.yearIntroduced}
                </span>
              </div>

              <h3 className="font-display font-black text-xl text-white group-hover:text-cyan-300 transition-colors">
                {item.name}
              </h3>
              {item.designation && (
                <div className="text-xs font-mono text-zinc-400 mt-0.5">
                  {item.designation}
                </div>
              )}

              <p className="text-xs text-zinc-300 leading-relaxed mt-3">
                {item.purpose}
              </p>

              {/* Creators & Collaborators */}
              <div className="mt-4 pt-3 border-t border-white/5 text-xs font-mono">
                <div className="text-zinc-400 flex items-center gap-1 mb-1">
                  <Users className="w-3.5 h-3.5 text-cyan-400" />
                  <span>CREATOR:</span>
                  <span className="text-white font-semibold ml-1">{item.leadCreator}</span>
                </div>
                {item.collaborators && item.collaborators.length > 0 && (
                  <div className="text-[11px] text-zinc-400 ml-4">
                    Collab: {item.collaborators.join(', ')}
                  </div>
                )}
              </div>

              {/* Capabilities Preview */}
              <div className="mt-4 space-y-1.5">
                <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                  PRIMARY SPECIFICATIONS:
                </div>
                {item.capabilities.slice(0, 3).map((cap, i) => (
                  <div key={i} className="text-xs text-zinc-300 flex items-start gap-1.5">
                    <span className="text-cyan-400 mt-0.5">▹</span>
                    <span className="line-clamp-2">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Action */}
            <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-[10px] font-mono text-zinc-500">
                FIRST SEEN: {item.firstAppearance}
              </span>
              <button
                type="button"
                onClick={() => setSelectedInvention(item)}
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group/btn"
              >
                <span>SYSTEM DETAILS</span>
                <span className="group-hover/btn:translate-x-0.5 transition-transform">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Invention Detail Modal */}
      {selectedInvention && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fade-in"
          onClick={() => setSelectedInvention(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl bg-[#090d16] border border-cyan-500/40 p-6 text-white overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-cyan-500/20">
              <div>
                <span className="font-mono text-[10px] text-cyan-400 tracking-widest uppercase">
                  STARK RESEARCH & DEVELOPMENT FILE
                </span>
                <h3 className="font-display font-black text-2xl text-white mt-1">
                  {selectedInvention.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedInvention(null)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10"
              >
                ✕
              </button>
            </div>

            <div className="my-6 space-y-5 text-xs text-zinc-200">
              <p className="text-sm leading-relaxed text-zinc-100">
                {selectedInvention.description}
              </p>

              <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 space-y-2">
                <div className="font-mono text-cyan-400 font-bold uppercase">CREATOR AUDIT:</div>
                <div>Lead Architect: <span className="text-white font-bold">{selectedInvention.leadCreator}</span></div>
                {selectedInvention.collaborators && (
                  <div>Collaborators: <span className="text-zinc-300">{selectedInvention.collaborators.join(', ')}</span></div>
                )}
                <div>Canon Classification: <span className="text-cyan-300 font-mono">{selectedInvention.canonStatus}</span></div>
              </div>

              <div>
                <div className="font-mono text-cyan-400 font-bold uppercase mb-2">FULL CAPABILITIES MATRIX:</div>
                <ul className="space-y-1.5 pl-2">
                  {selectedInvention.capabilities.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400">▹</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/20">
                <div className="font-mono text-rose-400 font-bold uppercase mb-1.5 flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  KNOWN TECHNICAL LIMITATIONS & VULNERABILITIES:
                </div>
                <ul className="space-y-1 pl-2">
                  {selectedInvention.limitations.map((lim, i) => (
                    <li key={i} className="text-zinc-300">
                      • {lim}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="font-mono text-[11px] text-zinc-400 pt-2 border-t border-white/10 flex items-center justify-between">
                <span>KEY MCU APPEARANCES: {selectedInvention.keyAppearances.join(', ')}</span>
                <a
                  href={selectedInvention.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                >
                  SOURCE <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
