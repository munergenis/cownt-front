import { ABSENCE, type ORIGIN, type SEX } from '@/shared/consts/consts';
import type { CowRaw } from '../interfaces/cow';
import { useMemo, useState } from 'react';

export interface CowFilter {
  query: string;
  sex: SEX | '';
  origin: ORIGIN | '';
  breed: string;
  childs: 0 | 1 | 2 | '';
  absence: ABSENCE | null | '';
  characteristics: string[];
}

const initialFilters: CowFilter = {
  query: '',
  sex: '',
  origin: '',
  breed: '',
  childs: '',
  absence: '',
  characteristics: [],
};

export const useCowsFilter = (cows?: CowRaw[]) => {
  const [filters, setFilters] = useState<CowFilter>(initialFilters);

  const filteredCows = useMemo(() => {
    if (!cows) return [];

    return cows.filter((cow) => {
      //  Text search on codes
      if (filters.query) {
        const q = filters.query.toLowerCase();
        if (
          !cow.shortCode.toLowerCase().includes(q) &&
          !cow.longCode.toLowerCase().includes(q)
        )
          return false;
      }

      // Sex filter
      if (filters.sex && cow.sex !== filters.sex) return false;

      // Origin filter
      if (filters.origin && cow.origin !== filters.origin) return false;

      // Breed filter
      if (filters.breed && cow.breed !== filters.breed) return false;

      // Children count filter: 0, 1, or 2+ (represented by 2)
      if (filters.childs !== '') {
        const count = cow.children.length;
        if (filters.childs === 2) {
          if (count < 2) return false;
        } else {
          if (filters.childs !== count) return false;
        }
      }

      // Absence filter: null = present, '' = no filter
      if (filters.absence !== '') {
        if (filters.absence === null) {
          if (cow.absence !== null) return false;
        } else {
          if (cow.absence !== filters.absence) return false;
        }
      }

      // Characteristics filter
      if (filters.characteristics.length > 0) {
        const cowCharIds = cow.characteristics;
        if (!filters.characteristics.every((id) => cowCharIds.includes(id)))
          return false;
      }

      // MATCHES THE FILTER
      return true;
    });
  }, [cows, filters]);

  return { filters, setFilters, filteredCows };
};
