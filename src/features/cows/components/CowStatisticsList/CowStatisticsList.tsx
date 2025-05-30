import { CowStatisticsFilters } from '../Filters/CowStatisticsFilters';
import { CowStatisticsItem } from '../CowStatisticsItem/CowStatisticsItem';
import type { CowWithStatistics } from '../../interfaces/cow';
import { useFilterCowStatistics } from '../../hooks/useFilterCowStatistics';

interface CowStatisticsListProps {
  cows: CowWithStatistics[];
}

export const CowStatisticsList = ({ cows }: CowStatisticsListProps) => {
  const { sortedFilteredCows, setFilters, filters } =
    useFilterCowStatistics(cows);

  return (
    <>
      <CowStatisticsFilters
        filters={filters}
        setFilters={setFilters}
      />

      <div className="flex flex-col gap-y-4">
        {sortedFilteredCows.map((cow) => (
          <CowStatisticsItem
            key={cow.id}
            cow={cow}
          />
        ))}
      </div>
    </>
  );
};
