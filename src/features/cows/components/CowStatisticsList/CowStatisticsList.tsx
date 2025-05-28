import { useMemo, useState } from 'react';

import { Card } from '@/shared/components/Card';
import { CowStatisticsItem } from '../CowStatisticsItem/CowStatisticsItem';
import type { CowWithStatistics } from '../../interfaces/cow';

interface CowStatisticsListProps {
  cows: CowWithStatistics[];
}

type SortKey =
  | 'avg-asc'
  | 'avg-des'
  | 'last-asc'
  | 'last-des'
  | 'total-asc'
  | 'total-des';

export const CowStatisticsList = ({ cows }: CowStatisticsListProps) => {
  const [sortKey, setSortKey] = useState<SortKey>('avg-asc');
  const [hideAvgless, setHideAvgless] = useState(false);
  const [query, setQuery] = useState('');

  const sortedFilteredCows = useMemo(() => {
    let filtered = [...cows];

    if (hideAvgless) {
      filtered = filtered.filter((cow) => cow.birthAverageDays !== null);
    }

    if (query) {
      filtered = filtered.filter(
        (cow) => cow.longCode.includes(query) || cow.shortCode.includes(query)
      );
    }

    return filtered.sort((cowA, cowB) => {
      switch (sortKey) {
        case 'avg-asc': {
          const cowAVal = cowA.birthAverageDays ?? Infinity;
          const cowBVal = cowB.birthAverageDays ?? Infinity;
          return cowAVal - cowBVal;
        }
        case 'avg-des': {
          const cowAVal = cowA.birthAverageDays ?? Infinity;
          const cowBVal = cowB.birthAverageDays ?? Infinity;
          return cowBVal - cowAVal;
        }
        case 'last-asc':
          return cowA.lastIntervalDays - cowB.lastIntervalDays;
        case 'last-des':
          return cowB.lastIntervalDays - cowA.lastIntervalDays;
        case 'total-asc':
          return cowA.children.length - cowB.children.length;
        case 'total-des':
          return cowB.children.length - cowA.children.length;
        default:
          return 0;
      }
    });
  }, [cows, sortKey, hideAvgless, query]);

  return (
    <>
      <h3 className="uppercase font-black text-neutral-500 -translate-x-2 translate-y-8">
        Vaques
      </h3>
      <Card>
        <label htmlFor="">Codi</label>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <select
          name=""
          id=""
          value={sortKey}
          onChange={(e) => setSortKey(e.target.value as SortKey)}
        >
          <option value="avg-asc">Mitjana Ascendent</option>
          <option value="avg-des">Mitjana Descendent</option>
          <option value="last-asc">Últim Part Ascendent</option>
          <option value="last-des">Últim Part Descendent</option>
          <option value="total-asc">Total Ascendent</option>
          <option value="total-des">Total Descendent</option>
        </select>

        <input
          type="checkbox"
          name=""
          id=""
          checked={hideAvgless}
          onChange={(e) => setHideAvgless(e.target.checked)}
        />
        <label htmlFor="">Exclou vaques sense mitjana</label>
      </Card>

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
