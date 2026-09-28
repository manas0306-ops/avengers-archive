'use client';

import { useState, useEffect, useCallback } from 'react';
import { soundEngine } from '@/lib/audio';

export function useSound() {
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);

  useEffect(() => {
    setSoundEnabled(soundEngine.isEnabled());
  }, []);

  const toggleSound = useCallback(() => {
    const nextState = soundEngine.toggle();
    setSoundEnabled(nextState);
    return nextState;
  }, []);

  const playHover = useCallback(() => soundEngine.playHover(), []);
  const playConfirm = useCallback(() => soundEngine.playConfirm(), []);
  const playArcReactor = useCallback(() => soundEngine.playArcReactor(), []);
  const playSnap = useCallback(() => soundEngine.playSnap(), []);
  const playVictory = useCallback(() => soundEngine.playVictory(), []);

  return {
    soundEnabled,
    toggleSound,
    playHover,
    playConfirm,
    playArcReactor,
    playSnap,
    playVictory,
  };
}
