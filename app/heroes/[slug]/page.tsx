import React from 'react';
import { notFound } from 'next/navigation';
import heroesData from '@/data/heroes.json';
import { Hero } from '@/types/hero';
import { UniversalHeroDossier } from '@/components/heroes/UniversalHeroDossier';

interface HeroPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const heroes = heroesData as unknown as Hero[];
  return heroes.map((hero) => ({
    slug: hero.slug,
  }));
}

export function generateMetadata({ params }: HeroPageProps) {
  const heroes = heroesData as unknown as Hero[];
  const hero = heroes.find((h) => h.slug === params.slug);

  if (!hero) {
    return {
      title: 'Hero Dossier Not Found | Avengers Archive',
    };
  }

  return {
    title: `${hero.alias} (${hero.realName}) — Universal Hero Dossier | Avengers Archive`,
    description: `Complete Earth-616 dossier for ${hero.alias}: Story chapters, powers, weapons, verified appearances, and legacy.`,
  };
}

export default function HeroDetailPage({ params }: HeroPageProps) {
  const heroes = heroesData as unknown as Hero[];
  const hero = heroes.find((h) => h.slug === params.slug);

  if (!hero) {
    notFound();
  }

  return <UniversalHeroDossier hero={hero} />;
}
