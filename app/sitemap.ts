import { MetadataRoute } from 'next';
import { CHARACTERS } from '@/data/characters';
import { MOVIES } from '@/data/movies';
import heroesData from '@/data/heroes.json';
import { Hero } from '@/types/hero';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://manas0306-ops.github.io/avengers-archive';
  const heroes = heroesData as unknown as Hero[];

  const staticPages = [
    '',
    '/heroes',
    '/timeline',
    '/movies',
    '/gallery',
    '/wallpapers',
    '/squad',
    '/trivia',
    '/games',
    '/about',
    '/privacy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const heroDossierPages = heroes.map((hero) => ({
    url: `${baseUrl}/heroes/${hero.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: hero.tier === 1 ? 0.95 : 0.85,
  }));

  const characterPages = CHARACTERS.map((char) => ({
    url: `${baseUrl}/heroes?id=${char.id}`,
    lastModified: new Date(char.last_verified),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const moviePages = MOVIES.map((movie) => ({
    url: `${baseUrl}/movies?id=${movie.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...heroDossierPages, ...characterPages, ...moviePages];
}

