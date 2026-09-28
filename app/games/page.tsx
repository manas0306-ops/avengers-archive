import { MemoryGame } from '@/components/trivia/MemoryGame';

export const metadata = {
  title: 'Memory Match | Avengers Archive',
  description: 'Hero recognition training drill and card matching mini-game.',
};

export default function GamesPage() {
  return <MemoryGame />;
}
