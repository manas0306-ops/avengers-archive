'use client';

import { useState } from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { DailyAvenger } from '@/components/home/DailyAvenger';
import { ArchiveDiscoveryProgress } from '@/components/home/ArchiveDiscoveryProgress';
import { QuickSections } from '@/components/home/QuickSections';
import { JarvisModal } from '@/components/layout/JarvisModal';

export default function HomePage() {
  const [isJarvisOpen, setIsJarvisOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      <HeroSection onOpenJarvis={() => setIsJarvisOpen(true)} />
      <DailyAvenger />
      <ArchiveDiscoveryProgress />
      <QuickSections />
      <JarvisModal isOpen={isJarvisOpen} onClose={() => setIsJarvisOpen(false)} />
    </div>
  );
}
