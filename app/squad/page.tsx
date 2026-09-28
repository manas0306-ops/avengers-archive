import { SquadBuilder } from '@/components/squad/SquadBuilder';

export const metadata = {
  title: 'Team Builder | Avengers Archive',
  description: 'Design your custom Avengers tactical squad, assess combat synergies, and save your roster.',
};

export default function SquadPage() {
  return <SquadBuilder />;
}
