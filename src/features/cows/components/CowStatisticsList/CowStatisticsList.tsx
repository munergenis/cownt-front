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
      <h3 className="uppercase font-black text-neutral-500 -translate-x-2 translate-y-8">
        Vaques
      </h3>

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
