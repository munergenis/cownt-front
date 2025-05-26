import { CowItem } from '../CowItem/CowItem';
import type { CowRaw } from '../../interfaces/cow';

interface CowListProps {
  cows: CowRaw[];
}

export const CowList = ({ cows }: CowListProps) => {
  return (
    <div className="flex flex-col gap-y-4">
      {cows.map((cow) => (
        <CowItem
          key={cow.id}
          cow={cow}
        />
      ))}
    </div>
  );
};
