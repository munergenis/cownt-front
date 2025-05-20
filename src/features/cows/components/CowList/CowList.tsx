import type { Cow } from '@/cows/interfaces/cow';
import { CowItem } from '../CowItem/CowItem';

interface CowListProps {
  cows: Cow[];
}

export const CowList = ({ cows }: CowListProps) => {
  return (
    <div>
      {cows.map((cow) => (
        <a key={cow.id}>
          <CowItem cow={cow} />
        </a>
      ))}
    </div>
  );
};
