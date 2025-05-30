import { useMemo, useState } from 'react';

import type { CowWithStatistics } from '../interfaces/cow';

export type SortKey =
  | 'avg-asc'
  | 'avg-des'
  | 'last-asc'
  | 'last-des'
  | 'total-asc'
  | 'total-des';

export interface CowStatisticsFilter {
  sortKey: SortKey;
  hide0ChildCow: boolean;
  hide1ChildCow: boolean;
  hide2PlusChildCow: boolean;
  query: string;
}

const initialFilter: CowStatisticsFilter = {
  sortKey: 'avg-asc',
  hide0ChildCow: false,
  hide1ChildCow: false,
  hide2PlusChildCow: false,
  query: '',
};

export const useFilterCowStatistics = (cows: CowWithStatistics[]) => {
  const [filters, setFilters] = useState<CowStatisticsFilter>(initialFilter);

  const sortedFilteredCows = useMemo(() => {
    let filtered = [...cows];

    if (filters.hide0ChildCow) {
      filtered = filtered.filter((cow) => cow.children.length !== 0);
    }
    if (filters.hide1ChildCow) {
      filtered = filtered.filter((cow) => cow.children.length !== 1);
    }
    if (filters.hide2PlusChildCow) {
      filtered = filtered.filter((cow) => cow.children.length < 2);
    }

    if (filters.query) {
      filtered = filtered.filter(
        (cow) =>
          cow.longCode.includes(filters.query) ||
          cow.shortCode.includes(filters.query)
      );
    }

    return filtered.sort((cowA, cowB) => {
      switch (filters.sortKey) {
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
        case 'last-asc': {
          const cowAVal =
            cowA.lastIntervalDays ?? cowA.reproductiveIntervalDays;
          const cowBVal =
            cowB.lastIntervalDays ?? cowB.reproductiveIntervalDays;
          return cowAVal! - cowBVal!;
        }
        case 'last-des': {
          const cowAVal =
            cowA.lastIntervalDays ?? cowA.reproductiveIntervalDays;
          const cowBVal =
            cowB.lastIntervalDays ?? cowB.reproductiveIntervalDays;
          return cowBVal! - cowAVal!;
        }
        case 'total-asc':
          return cowA.children.length - cowB.children.length;
        case 'total-des':
          return cowB.children.length - cowA.children.length;
        default:
          return 0;
      }
    });
  }, [filters, cows]);

  return { sortedFilteredCows, setFilters, filters };
};
