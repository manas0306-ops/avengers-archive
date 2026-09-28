import { Suspense } from 'react';
import { HeroArchiveCarousel } from '@/components/heroes/HeroArchiveCarousel';
import { CHARACTERS } from '@/data/characters';

export const metadata = {
  title: 'Heroes Dossiers | Avengers Archive',
  description: 'Explore the canonical stories, battles, powers, and sacrifices of Earth\'s Mightiest Heroes.',
};

export default function HeroesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center font-mono text-xs text-marvel-arc">
          DECRYPTING HERO DOSSIERS...
        </div>
      }
    >
      <HeroArchiveCarousel characters={CHARACTERS} />
    </Suspense>
  );
}
