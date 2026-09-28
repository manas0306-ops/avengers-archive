'use client';

import { useState, useMemo } from 'react';
import {
  Compass,
  Crown,
  ShieldAlert,
  Cpu,
  Sparkles,
  Target,
  Crosshair,
  HeartHandshake,
  Check,
  RotateCcw,
  Save,
  Share2,
  X,
  Users,
} from 'lucide-react';
import { CHARACTERS } from '@/data/characters';
import { SquadRole, SavedSquad } from '@/types/squad';
import { localDb } from '@/lib/store/localDb';
import { useSound } from '@/hooks/useSound';
import confetti from 'canvas-confetti';

const SQUAD_SLOTS: Array<{ role: SquadRole; label: string; icon: typeof Crown; desc: string }> = [
  { role: 'LEADER', label: 'TEAM LEADER', icon: Crown, desc: 'Field General & Moral Center' },
  { role: 'HEAVY', label: 'HEAVY HITTER', icon: ShieldAlert, desc: 'Frontline Brute & Tank' },
  { role: 'TECH', label: 'TECH GENIUS', icon: Cpu, desc: 'Engineering & Defense Systems' },
  { role: 'MYSTIC', label: 'MYSTIC MASTER', icon: Sparkles, desc: 'Dimensional & Chaos Magic' },
  { role: 'RANGED', label: 'RANGED SPECIALIST', icon: Target, desc: 'Aerial Artillery & Sniper' },
  { role: 'TACTICAL', label: 'TACTICAL AGENT', icon: Crosshair, desc: 'Stealth, Infiltration & Combat' },
  { role: 'SUPPORT', label: 'SUPPORT & RECON', icon: HeartHandshake, desc: 'Reconnaissance & Medical' },
];

export function SquadBuilder() {
  const [squad, setSquad] = useState<Record<SquadRole, string | null>>({
    LEADER: 'captain-america',
    HEAVY: 'thor',
    TECH: 'iron-man',
    MYSTIC: 'doctor-strange',
    RANGED: 'spider-man',
    TACTICAL: 'black-widow',
    SUPPORT: 'black-panther',
  });

  const [activeSlotSelecting, setActiveSlotSelecting] = useState<SquadRole | null>(null);
  const [squadName, setSquadName] = useState('Avengers Alpha Protocol');
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);

  const { playHover, playConfirm, playVictory } = useSound();

  const selectedHeroes = useMemo(() => {
    return Object.entries(squad).map(([role, id]) => {
      const hero = id ? CHARACTERS.find((c) => c.id === id) : null;
      return { role: role as SquadRole, hero };
    });
  }, [squad]);

  // Calculate synergy notes
  const synergies = useMemo(() => {
    const notes: string[] = [];
    const ids = Object.values(squad).filter(Boolean);

    if (ids.includes('iron-man') && ids.includes('doctor-strange')) {
      notes.push('⚡ Mystic-Tech Synergy: Tony Stark nanotech amplified by Eldritch sorcery shields.');
    }
    if (ids.includes('captain-america') && ids.includes('thor')) {
      notes.push('🛡️ Lightning Ricochet: Thor lightning channeled directly off Steve Rogers vibranium shield.');
    }
    if (ids.includes('iron-man') && ids.includes('spider-man')) {
      notes.push('🕷️ Mentor-Protégé Protocol: Nanotech Iron Spider armor support in combat.');
    }
    if (ids.includes('scarlet-witch') && ids.includes('doctor-strange')) {
      notes.push('🔮 Chaos & Order Arcana: Combined reality warping and Mirror Dimension containment.');
    }
    if (ids.length >= 6) {
      notes.push('✨ Fully Balanced Roster: Complete tactical coverage across all military threat vectors.');
    }
    return notes;
  }, [squad]);

  const handleSelectHero = (heroId: string) => {
    if (!activeSlotSelecting) return;
    playConfirm();
    setSquad((prev) => ({
      ...prev,
      [activeSlotSelecting]: heroId,
    }));
    setActiveSlotSelecting(null);
  };

  const handleReset = () => {
    playConfirm();
    setSquad({
      LEADER: null,
      HEAVY: null,
      TECH: null,
      MYSTIC: null,
      RANGED: null,
      TACTICAL: null,
      SUPPORT: null,
    });
  };

  const handleSaveSquad = () => {
    playVictory();
    const newSquad: SavedSquad = {
      id: `sqd-${Date.now()}`,
      name: squadName,
      mission_codename: 'TASK FORCE EARTH-616',
      slots: squad,
      total_power_score: 9500,
      synergy_notes: synergies,
      created_at: new Date().toISOString(),
    };

    localDb.saveSquad(newSquad);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);

    confetti({
      particleCount: 40,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#00f0ff', '#e23636', '#f59e0b'],
    });
  };

  const handleShare = () => {
    playConfirm();
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setShareSuccess(true);
      setTimeout(() => setShareSuccess(false), 2500);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-marvel-arc/10 border border-marvel-arc/30 text-marvel-arc text-xs font-mono tracking-widest uppercase mb-4">
          <Compass className="w-3.5 h-3.5" />
          <span>TACTICAL SQUAD COMPOSER</span>
        </div>
        <h1 className="font-cinematic text-4xl sm:text-5xl font-black text-white tracking-wide mb-3">
          BUILD YOUR AVENGERS
        </h1>
        <p className="text-zinc-400 font-sans text-sm sm:text-base">
          Assemble a customized strike team. Assign roles, examine tactical synergy bonuses, and deploy your roster.
        </p>
      </div>

      {/* Squad Name & Action Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-archive-darker/90 border border-white/10 backdrop-blur-xl mb-10">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Users className="w-5 h-5 text-marvel-red shrink-0" />
          <input
            type="text"
            value={squadName}
            onChange={(e) => setSquadName(e.target.value)}
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white font-mono focus:outline-none focus:border-marvel-arc w-full sm:w-72"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <button
            type="button"
            onClick={handleReset}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
            title="Reset Roster"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleShare}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors border border-white/10"
          >
            <Share2 className="w-4 h-4" />
            <span>{shareSuccess ? 'LINK COPIED!' : 'SHARE'}</span>
          </button>
          <button
            type="button"
            onClick={handleSaveSquad}
            className="px-5 py-2 rounded-xl bg-marvel-red hover:bg-red-600 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-[0_0_15px_rgba(226,54,54,0.5)] transition-all hover:scale-105"
          >
            <Save className="w-4 h-4" />
            <span>{savedSuccess ? 'SQUAD SAVED!' : 'SAVE SQUAD'}</span>
          </button>
        </div>
      </div>

      {/* 7 Squad Slots Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 mb-12">
        {SQUAD_SLOTS.map((slot) => {
          const Icon = slot.icon;
          const assignedId = squad[slot.role];
          const hero = assignedId ? CHARACTERS.find((c) => c.id === assignedId) : null;

          return (
            <div
              key={slot.role}
              onClick={() => {
                playConfirm();
                setActiveSlotSelecting(slot.role);
              }}
              onMouseEnter={() => playHover()}
              className="cursor-pointer group relative overflow-hidden rounded-2xl bg-archive-darker border border-white/10 hover:border-marvel-arc transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.6)] flex flex-col justify-between min-h-[300px]"
            >
              {/* Header */}
              <div className="p-3 bg-white/5 border-b border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-marvel-arc uppercase tracking-wider flex items-center gap-1">
                  <Icon className="w-3.5 h-3.5" /> {slot.label}
                </span>
                {hero && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSquad((prev) => ({ ...prev, [slot.role]: null }));
                    }}
                    className="p-1 rounded text-zinc-500 hover:text-white"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Slot Body */}
              {hero ? (
                <div className="p-3 flex-1 flex flex-col justify-between">
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-2 border border-white/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={hero.thumbnail}
                      alt={hero.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <h4 className="font-cinematic text-sm font-bold text-white group-hover:text-marvel-arc transition-colors">
                      {hero.name}
                    </h4>
                    <p className="text-[10px] font-mono text-zinc-400 line-clamp-1">
                      {hero.hero_title}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-6 flex-1 flex flex-col items-center justify-center text-center">
                  <span className="p-4 rounded-full bg-white/5 border border-dashed border-white/20 text-zinc-500 group-hover:text-marvel-arc group-hover:border-marvel-arc transition-colors mb-3">
                    <Icon className="w-6 h-6" />
                  </span>
                  <span className="text-xs font-mono font-bold text-zinc-400 group-hover:text-white">
                    SELECT HERO
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500 mt-1">{slot.desc}</span>
                </div>
              )}

              {/* Footer action hint */}
              <div className="p-2 bg-black/40 text-center text-[9px] font-mono text-zinc-500 group-hover:text-marvel-arc">
                CLICK TO CHANGE
              </div>
            </div>
          );
        })}
      </div>

      {/* Synergies Panel */}
      <div className="p-6 rounded-3xl bg-archive-darker border border-white/10 backdrop-blur-xl">
        <h3 className="font-cinematic text-xl font-bold text-white mb-3 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-marvel-gold" />
          SQUAD TACTICAL SYNERGIES &amp; COMBAT ANALYSIS
        </h3>
        {synergies.length > 0 ? (
          <div className="space-y-2 font-mono text-xs text-zinc-300">
            {synergies.map((note, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/5">
                {note}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs font-mono text-zinc-500">
            Select heroes into your squad slots to calculate tactical synergy bonuses.
          </p>
        )}
      </div>

      {/* HERO SELECTION MODAL */}
      {activeSlotSelecting && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveSlotSelecting(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl max-h-[80vh] overflow-y-auto p-6 rounded-3xl bg-archive-darkest border border-marvel-arc/40 text-white"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div>
                <h3 className="font-cinematic text-2xl font-bold text-white">
                  SELECT {activeSlotSelecting}
                </h3>
                <p className="text-xs font-mono text-zinc-400">
                  Choose a character from the verified Earth-616 roster
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveSlotSelecting(null)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {CHARACTERS.map((hero) => (
                <div
                  key={hero.id}
                  onClick={() => handleSelectHero(hero.id)}
                  onMouseEnter={() => playHover()}
                  className="cursor-pointer p-3 rounded-2xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-marvel-arc transition-all text-center group"
                >
                  <div className="relative aspect-square rounded-xl overflow-hidden mb-2 border border-white/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={hero.thumbnail}
                      alt={hero.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="font-cinematic text-xs font-bold text-white group-hover:text-marvel-arc">
                    {hero.name}
                  </div>
                  <div className="text-[10px] font-mono text-zinc-400">{hero.status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
