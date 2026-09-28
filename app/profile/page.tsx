'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import {
  User,
  Heart,
  Compass,
  Award,
  Clock,
  ArrowRight,
  Shield,
  Film,
  Image as ImageIcon,
  Edit2,
  Check,
} from 'lucide-react';
import { useFavorites } from '@/hooks/useFavorites';
import { CHARACTERS } from '@/data/characters';
import { MOVIES } from '@/data/movies';
import { TIMELINE_EVENTS } from '@/data/timeline';
import { localDb } from '@/lib/store/localDb';
import { SavedSquad } from '@/types/squad';
import { QuizAttempt } from '@/types/trivia';
import { useSound } from '@/hooks/useSound';

export default function ProfilePage() {
  const { favorites, toggleFavorite } = useFavorites();
  const [displayName, setDisplayName] = useState('Archive Operative #042');
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState('');
  const [savedSquads, setSavedSquads] = useState<SavedSquad[]>([]);
  const [quizAttempts, setQuizAttempts] = useState<QuizAttempt[]>([]);
  const { playHover, playConfirm } = useSound();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('avengers_display_name');
      if (stored) setDisplayName(stored);
      setSavedSquads(localDb.getSavedSquads());
      setQuizAttempts(localDb.getQuizAttempts());
    }
  }, []);

  const handleSaveName = () => {
    if (tempName.trim()) {
      setDisplayName(tempName.trim());
      localStorage.setItem('avengers_display_name', tempName.trim());
    }
    setIsEditingName(false);
    playConfirm();
  };

  // Favorited Items resolution
  const favCharacters = useMemo(() => {
    const ids = favorites.filter((f) => f.itemType === 'CHARACTER').map((f) => f.itemId);
    return CHARACTERS.filter((c) => ids.includes(c.id));
  }, [favorites]);

  const favMovies = useMemo(() => {
    const ids = favorites.filter((f) => f.itemType === 'MOVIE').map((f) => f.itemId);
    return MOVIES.filter((m) => ids.includes(m.id));
  }, [favorites]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      {/* Header Profile Card */}
      <div className="p-8 rounded-3xl bg-archive-darker/90 border border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.8)] backdrop-blur-xl mb-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-2xl bg-marvel-red/10 border-2 border-marvel-red/40 flex items-center justify-center text-marvel-red text-2xl font-cinematic font-black shadow-[0_0_20px_rgba(226,54,54,0.3)]">
            A
          </div>
          <div>
            <div className="flex items-center gap-2">
              {isEditingName ? (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={tempName}
                    onChange={(e) => setTempName(e.target.value)}
                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/20 text-white font-cinematic text-xl font-bold"
                    placeholder="Enter display name"
                  />
                  <button
                    type="button"
                    onClick={handleSaveName}
                    className="p-1.5 rounded-lg bg-marvel-arc text-black"
                  >
                    <Check className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <h1 className="font-cinematic text-2xl sm:text-3xl font-black text-white">
                    {displayName}
                  </h1>
                  <button
                    type="button"
                    onClick={() => {
                      setTempName(displayName);
                      setIsEditingName(true);
                    }}
                    className="p-1 text-zinc-500 hover:text-white"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
            <p className="text-xs font-mono text-zinc-400 mt-1">
              EARTH-616 RECON OPERATIVE • CLEARANCE LEVEL 4
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
          <div className="text-center p-3 rounded-xl bg-white/5 border border-white/5">
            <span className="text-marvel-red text-lg font-bold block">{favorites.length}</span>
            <span>FAVORITES</span>
          </div>
          <div className="text-center p-3 rounded-xl bg-white/5 border border-white/5">
            <span className="text-marvel-arc text-lg font-bold block">{savedSquads.length}</span>
            <span>SQUADS</span>
          </div>
          <div className="text-center p-3 rounded-xl bg-white/5 border border-white/5">
            <span className="text-marvel-gold text-lg font-bold block">{quizAttempts.length}</span>
            <span>QUIZZES</span>
          </div>
        </div>
      </div>

      {/* FAVORITES: MY AVENGERS */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-cinematic text-2xl font-bold text-white flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-500 fill-current" />
            MY FAVORITE HEROES &amp; MEDIA
          </h2>
          <span className="text-xs font-mono text-zinc-400">
            {favCharacters.length} HEROES BOOKMARKED
          </span>
        </div>

        {favCharacters.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favCharacters.map((char) => (
              <div
                key={char.id}
                className="group relative overflow-hidden rounded-2xl bg-archive-darker border border-white/10 hover:border-marvel-red/40 flex flex-col justify-between"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={char.thumbnail}
                    alt={char.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <button
                    type="button"
                    onClick={() => toggleFavorite('CHARACTER', char.id, char.name)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-red-500 hover:text-white"
                  >
                    <Heart className="w-4 h-4 fill-current" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-cinematic text-base font-bold text-white">{char.name}</h3>
                  <p className="text-xs font-mono text-zinc-400 mb-3">{char.real_name}</p>
                  <Link
                    href={`/heroes?id=${char.id}`}
                    className="w-full py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white font-mono text-xs flex items-center justify-center gap-1 transition-colors"
                  >
                    <span>OPEN DOSSIER</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center text-xs font-mono text-zinc-400">
            No favorite heroes saved yet. Visit the{' '}
            <Link href="/heroes" className="text-marvel-arc hover:underline">
              Hero Archive
            </Link>{' '}
            and click the heart icon to bookmark favorites!
          </div>
        )}
      </section>

      {/* SAVED SQUADS */}
      <section className="mb-16">
        <h2 className="font-cinematic text-2xl font-bold text-white flex items-center gap-2 mb-6">
          <Compass className="w-5 h-5 text-marvel-arc" />
          SAVED STRIKE SQUADS
        </h2>

        {savedSquads.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {savedSquads.map((sq) => (
              <div
                key={sq.id}
                className="p-6 rounded-2xl bg-archive-darker border border-white/10 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-cinematic text-xl font-bold text-white">{sq.name}</h3>
                  <span className="text-[10px] font-mono text-marvel-arc bg-marvel-arc/10 px-2 py-0.5 rounded border border-marvel-arc/20">
                    {sq.mission_codename}
                  </span>
                </div>
                <div className="text-xs font-mono text-zinc-300">
                  <strong className="text-marvel-gold">ROSTER: </strong>
                  {Object.values(sq.slots).filter(Boolean).join(', ')}
                </div>
                <div className="text-[11px] font-mono text-zinc-400">
                  Created: {new Date(sq.created_at).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center text-xs font-mono text-zinc-400">
            No custom squads assembled yet. Build your custom 7-hero team in the{' '}
            <Link href="/squad" className="text-marvel-arc hover:underline">
              Team Builder
            </Link>
            .
          </div>
        )}
      </section>

      {/* QUIZ HISTORY */}
      <section>
        <h2 className="font-cinematic text-2xl font-bold text-white flex items-center gap-2 mb-6">
          <Award className="w-5 h-5 text-marvel-gold" />
          TRIVIA PERFORMANCE LOGS
        </h2>

        {quizAttempts.length > 0 ? (
          <div className="space-y-3 font-mono text-xs">
            {quizAttempts.map((attempt) => (
              <div
                key={attempt.id}
                className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between"
              >
                <div>
                  <div className="text-white font-bold">{attempt.mode}</div>
                  <div className="text-zinc-500 text-[10px]">
                    {new Date(attempt.timestamp).toLocaleString()}
                  </div>
                </div>
                <span className="text-marvel-arc font-bold text-sm">
                  {attempt.score} / {attempt.total_questions} PTS
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center text-xs font-mono text-zinc-400">
            No quiz attempts recorded. Test your Marvel lore knowledge in the{' '}
            <Link href="/trivia" className="text-marvel-arc hover:underline">
              Trivia Mode
            </Link>
            .
          </div>
        )}
      </section>
    </div>
  );
}
