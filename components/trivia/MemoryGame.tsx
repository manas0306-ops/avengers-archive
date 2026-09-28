'use client';

import { useState, useEffect } from 'react';
import { Gamepad2, RotateCcw, Timer, Award, Sparkles } from 'lucide-react';
import { CHARACTERS } from '@/data/characters';
import { useSound } from '@/hooks/useSound';
import confetti from 'canvas-confetti';

interface MemoryCardItem {
  uid: string;
  heroId: string;
  name: string;
  image: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export function MemoryGame() {
  const [cards, setCards] = useState<MemoryCardItem[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [bestScore, setBestScore] = useState<number | null>(null);

  const { playHover, playConfirm, playVictory } = useSound();

  // Pick 6 heroes to create 12 pairs
  const heroPool = CHARACTERS.slice(0, 6);

  const initializeGame = () => {
    const paired: MemoryCardItem[] = [];
    heroPool.forEach((hero) => {
      // Add pair
      paired.push({
        uid: `${hero.id}-1`,
        heroId: hero.id,
        name: hero.name,
        image: hero.thumbnail,
        isFlipped: false,
        isMatched: false,
      });
      paired.push({
        uid: `${hero.id}-2`,
        heroId: hero.id,
        name: hero.name,
        image: hero.thumbnail,
        isFlipped: false,
        isMatched: false,
      });
    });

    // Shuffle
    const shuffled = paired.sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setFlippedIndices([]);
    setMoves(0);
    setMatches(0);
    setSeconds(0);
    setIsRunning(true);
  };

  useEffect(() => {
    initializeGame();
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('avengers_memory_best');
      if (stored) setBestScore(Number(stored));
    }
  }, []);

  // Timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && matches < heroPool.length) {
      interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, matches, heroPool.length]);

  const handleCardClick = (index: number) => {
    if (!isRunning || cards[index].isFlipped || cards[index].isMatched) return;
    if (flippedIndices.length >= 2) return;

    playConfirm();

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);

    const nextFlipped = [...flippedIndices, index];
    setFlippedIndices(nextFlipped);

    if (nextFlipped.length === 2) {
      setMoves((m) => m + 1);
      const [firstIdx, secondIdx] = nextFlipped;
      if (newCards[firstIdx].heroId === newCards[secondIdx].heroId) {
        // Matched!
        setTimeout(() => {
          playVictory();
          newCards[firstIdx].isMatched = true;
          newCards[secondIdx].isMatched = true;
          setCards([...newCards]);
          setFlippedIndices([]);
          setMatches((prev) => {
            const nextMatches = prev + 1;
            if (nextMatches === heroPool.length) {
              // Game Won!
              setIsRunning(false);
              confetti({
                particleCount: 60,
                spread: 70,
                origin: { y: 0.7 },
                colors: ['#00f0ff', '#e23636', '#f59e0b'],
              });
              if (!bestScore || moves + 1 < bestScore) {
                setBestScore(moves + 1);
                localStorage.setItem('avengers_memory_best', String(moves + 1));
              }
            }
            return nextMatches;
          });
        }, 500);
      } else {
        // Not matched, flip back
        setTimeout(() => {
          newCards[firstIdx].isFlipped = false;
          newCards[secondIdx].isFlipped = false;
          setCards([...newCards]);
          setFlippedIndices([]);
        }, 900);
      }
    }
  };

  const isWon = matches === heroPool.length;

  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-marvel-red/10 border border-marvel-red/30 text-marvel-red text-xs font-mono tracking-widest uppercase mb-4">
          <Gamepad2 className="w-3.5 h-3.5" />
          <span>HERO RECOGNITION DRILL</span>
        </div>
        <h1 className="font-cinematic text-4xl sm:text-5xl font-black text-white tracking-wide mb-2">
          AVENGERS MEMORY MATCH
        </h1>
        <p className="text-zinc-400 font-sans text-sm">
          Match pairs of Avengers operatives in minimum moves and optimal time.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-archive-darker/90 border border-white/10 backdrop-blur-xl mb-8 font-mono text-xs">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-zinc-300">
            <Timer className="w-4 h-4 text-marvel-arc" />
            <span>TIME: <strong className="text-white">{seconds}s</strong></span>
          </div>
          <div>
            MOVES: <strong className="text-white">{moves}</strong>
          </div>
          <div>
            PAIRS: <strong className="text-marvel-gold">{matches}</strong> / {heroPool.length}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {bestScore !== null && (
            <div className="text-zinc-400">
              BEST SCORE: <strong className="text-marvel-arc">{bestScore} moves</strong>
            </div>
          )}
          <button
            type="button"
            onClick={initializeGame}
            className="px-4 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs flex items-center gap-1.5 transition-colors border border-white/10"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>RESTART</span>
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
        {cards.map((card, idx) => {
          const showFace = card.isFlipped || card.isMatched;
          return (
            <div
              key={card.uid}
              onClick={() => handleCardClick(idx)}
              onMouseEnter={() => !showFace && playHover()}
              className={`relative cursor-pointer aspect-square rounded-2xl border transition-all duration-300 transform select-none ${
                card.isMatched
                  ? 'border-emerald-500/80 shadow-[0_0_15px_rgba(16,185,129,0.3)] opacity-80'
                  : showFace
                  ? 'border-marvel-arc shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                  : 'bg-archive-darker border-white/10 hover:border-marvel-red/60 hover:scale-105'
              }`}
            >
              {showFace ? (
                <div className="w-full h-full p-2 flex flex-col items-center justify-between bg-archive-darkest rounded-2xl overflow-hidden animate-fade-in">
                  <div className="relative w-full h-3/4 rounded-xl overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-[11px] font-cinematic font-bold text-white text-center truncate w-full">
                    {card.name}
                  </div>
                </div>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-archive-darker to-archive-darkest rounded-2xl p-4">
                  <div className="w-10 h-10 rounded-full border border-marvel-red/40 flex items-center justify-center text-marvel-red font-cinematic font-black text-xl">
                    A
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Victory Callout */}
      {isWon && (
        <div className="mt-8 p-6 rounded-2xl bg-archive-darker border border-marvel-gold/40 text-center animate-fade-in">
          <Sparkles className="w-8 h-8 text-marvel-gold mx-auto mb-2" />
          <h3 className="font-cinematic text-2xl font-bold text-white">ALL OPERATIVES RECOGNIZED!</h3>
          <p className="font-mono text-xs text-zinc-300 mt-1">
            Completed in {moves} moves across {seconds} seconds.
          </p>
        </div>
      )}
    </div>
  );
}
