'use client';

import { useState, useEffect } from 'react';

const SPOILER_KEY = 'avengers_spoilers_enabled';

export function useSpoilerMode() {
  const [showSpoilers, setShowSpoilers] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(SPOILER_KEY);
      if (stored !== null) {
        setShowSpoilers(stored === 'true');
      }
    }
  }, []);

  const toggleSpoilers = () => {
    setShowSpoilers((prev) => {
      const next = !prev;
      localStorage.setItem(SPOILER_KEY, String(next));
      return next;
    });
  };

  return { showSpoilers, toggleSpoilers };
}
