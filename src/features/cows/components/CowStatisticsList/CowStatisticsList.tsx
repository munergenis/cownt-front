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
  const [hide0ChildCow, setHide0ChildCow] = useState(false);
  const [hide1ChildCow, setHide1ChildCow] = useState(false);
  const [hide2PlusChildCow, setHide2PlusChildCow] = useState(false);
  const [query, setQuery] = useState('');

  const sortedFilteredCows = useMemo(() => {
    let filtered = [...cows];

    if (hide0ChildCow) {
      filtered = filtered.filter((cow) => cow.children.length !== 0);
    }
    if (hide1ChildCow) {
      filtered = filtered.filter((cow) => cow.children.length !== 1);
    }
    if (hide2PlusChildCow) {
      filtered = filtered.filter((cow) => cow.children.length < 2);
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
  }, [cows, sortKey, hide0ChildCow, hide1ChildCow, hide2PlusChildCow, query]);

  return (
    <>
      <h3 className="uppercase font-black text-neutral-500 -translate-x-2 translate-y-8">
        Vaques
      </h3>
      <Card>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <label htmlFor="">Codi</label>
            <input
              className="outline"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="flex gap-2">
            <label htmlFor="">Ordre</label>
            <select
              className="outline"
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
          </div>

          <div className="">
            <div className="flex gap-2">
              <input
                type="checkbox"
                name=""
                id=""
                checked={hide0ChildCow}
                onChange={(e) => setHide0ChildCow(e.target.checked)}
              />
              <label htmlFor="">
                Exclou vaques amb 0 parts (sense mitjana y sense ultim part)
              </label>
            </div>

            <div className="flex gap-2">
              <input
                type="checkbox"
                name=""
                id=""
                checked={hide1ChildCow}
                onChange={(e) => setHide1ChildCow(e.target.checked)}
              />
              <label htmlFor="">Exclou vaques amb 1 part (sense mitjana)</label>
            </div>

            <div className="flex gap-2">
              <input
                type="checkbox"
                name=""
                id=""
                checked={hide2PlusChildCow}
                onChange={(e) => setHide2PlusChildCow(e.target.checked)}
              />
              <label htmlFor="">Exclou vaques amb 2+ parts</label>
            </div>
          </div>
        </div>
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
