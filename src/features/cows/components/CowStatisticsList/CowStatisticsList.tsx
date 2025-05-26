import { CowStatisticsItem } from '../CowStatisticsItem/CowStatisticsItem';
import type { CowWithStatistics } from '../../interfaces/cow';

interface CowStatisticsListProps {
  cows: CowWithStatistics[];
}

export const CowStatisticsList = ({ cows }: CowStatisticsListProps) => {
  return (
    <div className="flex flex-col gap-y-4">
      {cows.map((cow) => (
        <CowStatisticsItem
          key={cow.id}
          cow={cow}
        />
      ))}
    </div>
  );
};
