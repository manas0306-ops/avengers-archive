'use client';

import { useState, useEffect, useCallback } from 'react';
import { localDb } from '@/lib/store/localDb';

function getSessionId(): string {
  if (typeof window === 'undefined') return 'server-session';
  let sid = localStorage.getItem('avengers_session_id');
  if (!sid) {
    sid = 'sid_' + Math.random().toString(36).substring(2, 12) + Date.now().toString(36);
    localStorage.setItem('avengers_session_id', sid);
  }
  return sid;
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<Array<{ id: string; itemType: string; itemId: string }>>([]);
  const [sessionId, setSessionId] = useState<string>('');

  const refreshFavorites = useCallback(() => {
    if (typeof window !== 'undefined') {
      const sid = getSessionId();
      setSessionId(sid);
      setFavorites(localDb.getFavorites(sid));
    }
  }, []);

  useEffect(() => {
    refreshFavorites();
  }, [refreshFavorites]);

  const isFavorited = useCallback(
    (itemType: string, itemId: string) => {
      return favorites.some((f) => f.itemType === itemType && f.itemId === itemId);
    },
    [favorites]
  );

  const toggleFavorite = useCallback(
    (itemType: string, itemId: string, itemName?: string) => {
      const sid = getSessionId();
      const isAdded = localDb.toggleFavorite(sid, itemType, itemId);
      refreshFavorites();

      // Log event
      if (isAdded) {
        localDb.recordEvent(
          sid,
          'FAVORITE_ADD',
          `Added ${itemName || itemId} to favorites`
        );
      }
      return isAdded;
    },
    [refreshFavorites]
  );

  return {
    favorites,
    isFavorited,
    toggleFavorite,
    refreshFavorites,
    sessionId,
  };
}
