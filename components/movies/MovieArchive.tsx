'use client';

import { useState, useMemo } from 'react';
import { Film, Play, ExternalLink, Clock, Calendar, Star, Users } from 'lucide-react';
import { Movie } from '@/types/movie';
import { useSound } from '@/hooks/useSound';
import { useSpoilerMode } from '@/hooks/useSpoilerMode';

interface MovieArchiveProps {
  movies: Movie[];
}

export function MovieArchive({ movies }: MovieArchiveProps) {
  const [orderMode, setOrderMode] = useState<'RELEASE' | 'CHRONOLOGICAL'>('RELEASE');
  const [selectedSaga, setSelectedSaga] = useState<'ALL' | 'The Infinity Saga' | 'The Multiverse Saga'>('ALL');
  const { playHover, playConfirm } = useSound();
  const { showSpoilers } = useSpoilerMode();

  const sortedMovies = useMemo(() => {
    let list = [...movies];
    if (selectedSaga !== 'ALL') {
      list = list.filter((m) => m.saga === selectedSaga);
    }
    if (orderMode === 'CHRONOLOGICAL') {
      list.sort((a, b) => a.chronological_order - b.chronological_order);
    } else {
      list.sort((a, b) => a.release_order - b.release_order);
    }
    return list;
  }, [movies, orderMode, selectedSaga]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-marvel-red/10 border border-marvel-red/30 text-marvel-red text-xs font-mono tracking-widest uppercase mb-4">
          <Film className="w-3.5 h-3.5" />
          <span>CINEMATIC ARCHIVE</span>
        </div>
        <h1 className="font-cinematic text-4xl sm:text-5xl font-black text-white tracking-wide mb-3">
          AVENGERS FILM ARCHIVE
        </h1>
        <p className="text-zinc-400 font-sans text-sm sm:text-base">
          Analyze box office records, critical acclaim, director visions, and the evolving saga of Earth&apos;s Mightiest Heroes.
        </p>
      </div>

      {/* Watch Order & Saga Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-archive-darker/90 border border-white/10 backdrop-blur-xl mb-12">
        {/* Watch Order Toggle */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-zinc-500 uppercase mr-1">WATCH ORDER:</span>
          <button
            type="button"
            onClick={() => {
              playConfirm();
              setOrderMode('RELEASE');
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wider transition-colors ${
              orderMode === 'RELEASE'
                ? 'bg-marvel-red text-white shadow-[0_0_12px_rgba(226,54,54,0.5)]'
                : 'bg-white/5 text-zinc-400 hover:text-white'
            }`}
          >
            RELEASE ORDER
          </button>
          <button
            type="button"
            onClick={() => {
              playConfirm();
              setOrderMode('CHRONOLOGICAL');
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wider transition-colors ${
              orderMode === 'CHRONOLOGICAL'
                ? 'bg-marvel-arc text-black shadow-[0_0_12px_rgba(0,240,255,0.5)]'
                : 'bg-white/5 text-zinc-400 hover:text-white'
            }`}
          >
            CHRONOLOGICAL ORDER
          </button>
        </div>

        {/* Saga Filter */}
        <div className="flex items-center gap-1.5">
          {(['ALL', 'The Infinity Saga', 'The Multiverse Saga'] as const).map((saga) => (
            <button
              key={saga}
              type="button"
              onClick={() => {
                playConfirm();
                setSelectedSaga(saga);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-colors ${
                selectedSaga === saga
                  ? 'bg-white/20 text-white font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {saga === 'ALL' ? 'ALL SAGAS' : saga.replace('The ', '')}
            </button>
          ))}
        </div>
      </div>

      {/* Movies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedMovies.map((movie, idx) => (
          <div
            key={movie.id}
            onMouseEnter={() => playHover()}
            className="group relative overflow-hidden rounded-3xl bg-archive-darker/90 border border-white/10 hover:border-marvel-red/40 shadow-[0_12px_36px_rgba(0,0,0,0.7)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
          >
            <div>
              {/* Poster Banner */}
              <div className="relative h-64 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={movie.backdrop_url || movie.poster_url}
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-archive-darker via-archive-darker/50 to-transparent pointer-events-none" />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-mono font-bold border border-white/15">
                    {orderMode === 'CHRONOLOGICAL'
                      ? `#${movie.chronological_order} IN TIMELINE`
                      : `#${movie.release_order} RELEASED`}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-marvel-red/20 text-marvel-red border border-marvel-red/30">
                    Phase {movie.phase}
                  </span>
                </div>

                {movie.rotten_tomatoes && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 text-xs font-mono border border-white/15">
                    <Star className="w-3 h-3 fill-current" />
                    <span>{movie.rotten_tomatoes}</span>
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-cinematic text-2xl font-bold text-white group-hover:text-marvel-red transition-colors">
                    {movie.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs font-mono text-zinc-400 mt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {movie.release_year}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {movie.runtime_minutes} min
                    </span>
                    <span>•</span>
                    <span className="text-marvel-gold font-bold">{movie.box_office}</span>
                  </div>
                </div>

                <p className="text-xs text-zinc-300 font-sans leading-relaxed line-clamp-3">
                  {movie.synopsis}
                </p>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-2 text-xs font-mono">
                  <div>
                    <strong className="text-marvel-arc">DIRECTOR: </strong>
                    <span className="text-zinc-300">{movie.directors.join(', ')}</span>
                  </div>
                  <div>
                    <strong className="text-marvel-gold">IMPACT ON AVENGERS: </strong>
                    <span className="text-zinc-300">{movie.impact_on_avengers}</span>
                  </div>
                </div>

                {/* Spoilers Section */}
                {movie.spoilers.length > 0 && (
                  <div className="text-xs font-mono">
                    <span className="text-zinc-500 uppercase text-[10px] block mb-1">
                      KEY CLIMAX OUTCOME:
                    </span>
                    <p
                      className={`text-zinc-300 transition-all ${
                        !showSpoilers ? 'blur-sm select-none' : ''
                      }`}
                    >
                      {movie.spoilers[0]}
                    </p>
                    {!showSpoilers && (
                      <span className="text-[10px] text-amber-400 font-mono">
                        [SPOILER HIDDEN - Enable in Navbar]
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Footer Trailer Link */}
            <div className="p-6 pt-0 flex items-center justify-between border-t border-white/5 text-xs font-mono">
              <a
                href={movie.trailer_url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playConfirm()}
                className="flex items-center gap-1.5 text-marvel-arc hover:text-white transition-colors"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>OFFICIAL TRAILER</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href={movie.official_site_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors text-[11px]"
              >
                OFFICIAL PAGE
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
