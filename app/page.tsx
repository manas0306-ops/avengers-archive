import heroesData from '@/data/heroes.json';
import { Hero } from '@/types/hero';
import { ChapterStack } from '@/components/heroes/ChapterStack';

export const metadata = {
  title: "Avengers Archive — Earth's Mightiest Heroes",
  description:
    "Earth's Mightiest Heroes — Their Stories. Their Battles. Their Legacy. An interactive, scroll-driven cinematic archive of the Marvel Cinematic Universe.",
};

export default function HomePage() {
  const heroes = heroesData as unknown as Hero[];

  return (
    <div className="relative min-h-screen bg-transparent">
      {/* Scroll-Driven One-Hero-At-A-Time Experience Stack */}
      <ChapterStack heroes={heroes} />
    </div>
  );
}
