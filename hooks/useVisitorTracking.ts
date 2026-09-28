'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { localDb } from '@/lib/store/localDb';

function getSessionId(): string {
  if (typeof window === 'undefined') return 'server';
  let sid = localStorage.getItem('avengers_session_id');
  if (!sid) {
    sid = 'sid_' + Math.random().toString(36).substring(2, 12) + Date.now().toString(36);
    localStorage.setItem('avengers_session_id', sid);
  }
  return sid;
}

function getStoredDisplayName(): string | undefined {
  if (typeof window === 'undefined') return undefined;
  return localStorage.getItem('avengers_display_name') || undefined;
}

function detectDevice(): 'desktop' | 'mobile' | 'tablet' {
  if (typeof window === 'undefined') return 'desktop';
  const ua = navigator.userAgent.toLowerCase();
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'tablet';
  }
  if (/mobile|iphone|ipod|blackberry|iemobile|opera mini/i.test(ua)) {
    return 'mobile';
  }
  return 'desktop';
}

function detectBrowser(): string {
  if (typeof window === 'undefined') return 'Unknown';
  const ua = navigator.userAgent;
  if (ua.indexOf('Chrome') > -1) return 'Chrome';
  if (ua.indexOf('Safari') > -1) return 'Safari';
  if (ua.indexOf('Firefox') > -1) return 'Firefox';
  if (ua.indexOf('Edge') > -1) return 'Edge';
  return 'Modern Browser';
}

export function useVisitorTracking(characterId?: string) {
  const pathname = usePathname();
  const lastRecordedPath = useRef<string>('');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const sid = getSessionId();
    const displayName = getStoredDisplayName();
    const deviceType = detectDevice();
    const browser = detectBrowser();

    // Touch session
    localDb.touchVisitorSession({
      sessionId: sid,
      path: pathname,
      characterId,
      displayName,
      deviceType,
      browser,
    });

    // Record activity event on distinct page visit
    if (lastRecordedPath.current !== pathname) {
      lastRecordedPath.current = pathname;
      let eventDetail = `Navigated to ${pathname === '/' ? 'Home Archive' : pathname.replace('/', '').toUpperCase()}`;
      if (characterId) {
        eventDetail = `Explored hero archive for ${characterId.replace('-', ' ').toUpperCase()}`;
        localDb.incrementCharacterViews(characterId);
      }
      localDb.recordEvent(sid, characterId ? 'HERO_VIEW' : 'PAGE_VIEW', eventDetail);
    }

    // Set up heartbeat timer (every 30 seconds)
    const interval = setInterval(() => {
      localDb.touchVisitorSession({
        sessionId: sid,
        path: pathname,
        characterId,
        displayName,
        deviceType,
        browser,
      });
    }, 30000);

    return () => clearInterval(interval);
  }, [pathname, characterId]);
}
