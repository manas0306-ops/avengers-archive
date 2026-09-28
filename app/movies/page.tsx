import { MovieArchive } from '@/components/movies/MovieArchive';
import { MOVIES } from '@/data/movies';

export const metadata = {
  title: 'Movie Milestones | Avengers Archive',
  description: 'Explore all major Avengers films and MCU milestones with release and chronological watch orders.',
};

export default function MoviesPage() {
  return <MovieArchive movies={MOVIES} />;
}
