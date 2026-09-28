'use client';

import { useState } from 'react';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { ParticlesBackground } from '@/components/ui/ParticlesBackground';
import { SearchModal } from '@/components/layout/SearchModal';
import { SnapEffect } from '@/components/layout/SnapEffect';
import { JarvisModal } from '@/components/layout/JarvisModal';
import { SystemIntro } from '@/components/layout/SystemIntro';
import { useVisitorTracking } from '@/hooks/useVisitorTracking';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isJarvisOpen, setIsJarvisOpen] = useState(false);
  const [hasEnteredArchive, setHasEnteredArchive] = useState(false);

  // Global visitor tracking
  useVisitorTracking();

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <title>Avengers Archive — Earth&apos;s Mightiest Heroes</title>
        <meta
          name="description"
          content="Earth's Mightiest Heroes — Their Stories. Their Battles. Their Legacy. An interactive cinematic archive of the Marvel Cinematic Universe."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#060709" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-archive-darkest text-zinc-100 font-sans selection:bg-marvel-red selection:text-white antialiased overflow-x-hidden min-h-screen flex flex-col justify-between">
        {/* System Entry Intro Animation (Skippable) */}
        {!hasEnteredArchive && (
          <SystemIntro onEnter={() => setHasEnteredArchive(true)} />
        )}

        {/* Ambient Canvas Particles */}
        <ParticlesBackground />

        {/* Custom Cinematic Cursor with Spotlight */}
        <CustomCursor />

        {/* Main Floating Glass Navbar */}
        <Navbar
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenJarvis={() => setIsJarvisOpen(true)}
        />

        {/* Main Page Body */}
        <main className="flex-1 w-full relative z-10">{children}</main>

        {/* Cinematic Footer */}
        <Footer />

        {/* Global Instant Search Modal (Cmd+K) */}
        <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

        {/* J.A.R.V.I.S. Protocol Assistant Modal */}
        <JarvisModal isOpen={isJarvisOpen} onClose={() => setIsJarvisOpen(false)} />

        {/* "DO NOT SNAP" Easter Egg Button */}
        <SnapEffect />
      </body>
    </html>
  );
}
