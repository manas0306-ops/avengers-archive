'use client';

import { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, Award, RotateCcw, ArrowRight } from 'lucide-react';
import { TRIVIA_QUESTIONS } from '@/data/trivia';
import { localDb } from '@/lib/store/localDb';
import { useSound } from '@/hooks/useSound';
import confetti from 'canvas-confetti';

export function TriviaQuiz() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const { playHover, playConfirm, playVictory } = useSound();

  const questions = TRIVIA_QUESTIONS;
  const currentQ = questions[currentIdx];

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    if (idx === currentQ.correct_index) {
      setScore((prev) => prev + 1);
      playVictory();
    } else {
      playConfirm();
    }
  };

  const handleNext = () => {
    playConfirm();
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
      playVictory();
      confetti({
        particleCount: 50,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#00f0ff', '#e23636', '#f59e0b'],
      });

      // Record in localDb
      localDb.recordQuizAttempt({
        id: `att-${Date.now()}`,
        user_display_name: 'Archive Operative',
        total_questions: questions.length,
        score: score + (selectedOption === currentQ.correct_index ? 1 : 0),
        mode: 'Standard Archive Quiz',
        timestamp: new Date().toISOString(),
      });
    }
  };

  const handleRestart = () => {
    playConfirm();
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-24">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-marvel-arc/10 border border-marvel-arc/30 text-marvel-arc text-xs font-mono tracking-widest uppercase mb-4">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>TACTICAL KNOWLEDGE ASSESSMENT</span>
        </div>
        <h1 className="font-cinematic text-4xl sm:text-5xl font-black text-white tracking-wide mb-2">
          HOW MUCH DO YOU KNOW?
        </h1>
        <p className="text-zinc-400 font-sans text-sm">
          Test your memory of Earth-616 timeline events, artifacts, and hero storylines.
        </p>
      </div>

      {!isFinished ? (
        <div className="p-6 sm:p-10 rounded-3xl bg-archive-darker/95 border border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.8)] backdrop-blur-xl">
          {/* Progress Header */}
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400 pb-4 border-b border-white/10 mb-6">
            <span className="text-marvel-gold font-bold uppercase">{currentQ.category}</span>
            <span>
              QUESTION <strong className="text-white">{currentIdx + 1}</strong> OF {questions.length}
            </span>
            <span className="text-marvel-arc font-bold">SCORE: {score}</span>
          </div>

          {/* Question Text */}
          <h2 className="font-cinematic text-xl sm:text-2xl font-bold text-white mb-8 leading-snug">
            {currentQ.question}
          </h2>

          {/* 4 Choices */}
          <div className="space-y-3 mb-8">
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === currentQ.correct_index;

              let style = 'bg-white/5 border-white/10 text-zinc-200 hover:bg-white/10 hover:border-white/20';
              if (isAnswered) {
                if (isCorrect) {
                  style = 'bg-emerald-950/80 border-emerald-500 text-emerald-300 font-bold';
                } else if (isSelected) {
                  style = 'bg-red-950/80 border-red-500 text-red-300';
                } else {
                  style = 'bg-white/5 border-white/5 text-zinc-500 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  type="button"
                  disabled={isAnswered}
                  onClick={() => handleSelectOption(idx)}
                  onMouseEnter={() => !isAnswered && playHover()}
                  className={`w-full p-4 rounded-2xl border text-left text-sm font-sans transition-all duration-200 flex items-center justify-between ${style}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center font-mono text-xs text-zinc-300">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{option}</span>
                  </div>

                  {isAnswered && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  )}
                  {isAnswered && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Feedback & Explanation */}
          {isAnswered && (
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 animate-fade-in">
              <div className="font-mono text-xs font-bold uppercase mb-1 flex items-center gap-2">
                {selectedOption === currentQ.correct_index ? (
                  <span className="text-emerald-400">CORRECT! ACCESS CONFIRMED.</span>
                ) : (
                  <span className="text-red-400">NOT QUITE. ARCHIVE CORRECTION:</span>
                )}
              </div>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Next Button */}
          {isAnswered && (
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-3 rounded-xl bg-marvel-red hover:bg-red-600 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(226,54,54,0.5)]"
              >
                <span>{currentIdx + 1 === questions.length ? 'VIEW FINAL RESULTS' : 'NEXT QUESTION'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Final Score Panel */
        <div className="p-8 sm:p-12 rounded-3xl bg-archive-darker/95 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.9)] text-center animate-fade-in">
          <Award className="w-16 h-16 text-marvel-gold mx-auto mb-4 animate-bounce" />
          <h2 className="font-cinematic text-3xl font-black text-white mb-2">
            MISSION COMPLETE
          </h2>
          <p className="text-zinc-400 font-mono text-xs uppercase tracking-wider mb-6">
            Your Avengers Archive Tactical Score
          </p>

          <div className="font-cinematic text-6xl font-black text-marvel-arc mb-4">
            {score} <span className="text-zinc-500 text-3xl">/ {questions.length}</span>
          </div>

          <p className="text-sm text-zinc-300 font-sans max-w-md mx-auto mb-8">
            {score >= 10
              ? 'Outstanding! You possess Supreme Sorcerer / Stark level canonical knowledge.'
              : score >= 6
              ? 'Well done! A worthy operative of the Avengers intelligence network.'
              : 'Archive access renewed. Review hero dossiers and try again!'}
          </p>

          <button
            type="button"
            onClick={handleRestart}
            className="px-8 py-3.5 rounded-xl bg-marvel-red hover:bg-red-600 text-white font-mono text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 shadow-[0_0_20px_rgba(226,54,54,0.5)] transition-all hover:scale-105"
          >
            <RotateCcw className="w-4 h-4" />
            <span>PLAY AGAIN</span>
          </button>
        </div>
      )}
    </div>
  );
}
