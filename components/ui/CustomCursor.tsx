'use client';

import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailPosition, setTrailPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Detect touch device
    if (typeof window !== 'undefined') {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsTouchDevice(isTouch);
      if (isTouch) return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over a clickable element
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') !== null ||
          target.closest('a') !== null ||
          target.getAttribute('role') === 'button' ||
          window.getComputedStyle(target).cursor === 'pointer';
        setIsPointer(Boolean(isClickable));
      }
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  // Smooth trail follower
  useEffect(() => {
    if (isTouchDevice) return;
    let animationFrameId: number;
    const follow = () => {
      setTrailPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.25,
        y: prev.y + (position.y - prev.y) * 0.25,
      }));
      animationFrameId = requestAnimationFrame(follow);
    };
    animationFrameId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Outer ambient spotlight */}
      <div
        className="pointer-events-none fixed z-40 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 transition-opacity duration-300 blur-3xl"
        style={{
          left: `${trailPosition.x}px`,
          top: `${trailPosition.y}px`,
          background: 'radial-gradient(circle, rgba(226, 54, 54, 0.4) 0%, rgba(0, 240, 255, 0.15) 50%, transparent 80%)',
        }}
      />

      {/* Main cursor dot */}
      <div
        className="pointer-events-none fixed z-50 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-marvel-arc transition-transform duration-100 shadow-[0_0_12px_#00f0ff]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.8 : 1})`,
        }}
      />

      {/* Sleek magnetic ring follower */}
      <div
        className={`pointer-events-none fixed z-50 rounded-full border border-marvel-red/60 transition-all duration-150 -translate-x-1/2 -translate-y-1/2 ${
          isPointer ? 'h-10 w-10 border-marvel-arc bg-marvel-arc/10' : 'h-7 w-7'
        }`}
        style={{
          left: `${trailPosition.x}px`,
          top: `${trailPosition.y}px`,
        }}
      />
    </>
  );
}
