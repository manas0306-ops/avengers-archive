'use client';

import React, { useEffect, useRef, useState } from 'react';

export function StarkCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (typeof window === 'undefined') return;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Check if hovering over clickable element
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = !!target.closest(
          'a, button, [role="button"], input, select, textarea, .cursor-pointer, [data-clickable="true"]'
        );
        setIsPointer(isClickable);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);

    // Smooth lerp loop for the targeting reticle ring
    const render = () => {
      // Direct dot movement
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }

      // Smooth trailing ring
      ringX += (mouseX - ringX) * 0.22;
      ringY += (mouseY - ringY) * 0.22;

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Center Laser Dot */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 w-2 h-2 rounded-full transition-transform duration-75 ease-out will-change-transform ${
          isClicking ? 'scale-150' : 'scale-100'
        }`}
        style={{
          backgroundColor: 'var(--primary, #C8102E)',
          boxShadow: '0 0 8px var(--primary, #C8102E)',
        }}
      />

      {/* Outer Tactical Reticle Ring */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 rounded-full border border-dashed will-change-transform flex items-center justify-center transition-all duration-200 ${
          isPointer
            ? 'w-10 h-10 border-white/80 rotate-45 scale-110 bg-white/[0.03]'
            : 'w-7 h-7 border-white/30 rotate-0 scale-100'
        } ${isClicking ? 'scale-75' : ''}`}
        style={{
          borderColor: isPointer ? 'var(--primary, #ffffff)' : 'rgba(255, 255, 255, 0.4)',
        }}
      >
        {/* Reticle Corner Crosshair Ticks when locked on */}
        {isPointer && (
          <>
            <span
              className="absolute -top-1 w-1.5 h-0.5"
              style={{ backgroundColor: 'var(--primary, #ffffff)' }}
            />
            <span
              className="absolute -bottom-1 w-1.5 h-0.5"
              style={{ backgroundColor: 'var(--primary, #ffffff)' }}
            />
            <span
              className="absolute -left-1 w-0.5 h-1.5"
              style={{ backgroundColor: 'var(--primary, #ffffff)' }}
            />
            <span
              className="absolute -right-1 w-0.5 h-1.5"
              style={{ backgroundColor: 'var(--primary, #ffffff)' }}
            />
          </>
        )}
      </div>
    </div>
  );
}
