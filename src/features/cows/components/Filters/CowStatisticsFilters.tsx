import type {
  CowStatisticsFilter,
  SortKey,
} from '../../hooks/useFilterCowStatistics';

import { Card } from '@/shared/components/Card';

interface CowStatisticsFiltersProps {
  filters: CowStatisticsFilter;
  setFilters: React.Dispatch<React.SetStateAction<CowStatisticsFilter>>;
}

export const CowStatisticsFilters = ({
  filters,
  setFilters,
}: CowStatisticsFiltersProps) => {
  return (
    <Card>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <label htmlFor="">Codi</label>
          <input
            className="outline"
            type="text"
            value={filters.query}
            onChange={(e) =>
              setFilters((pFilters) => ({
                ...pFilters,
                query: e.target.value,
              }))
            }
          />
        </div>

        <div className="flex gap-2">
          <label htmlFor="">Ordre</label>
          <select
            className="outline"
            name=""
            id=""
            value={filters.sortKey}
            onChange={(e) =>
              setFilters((pFilters) => ({
                ...pFilters,
                sortKey: e.target.value as SortKey,
              }))
            }
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
              checked={filters.hide0ChildCow}
              onChange={(e) =>
                setFilters((pFilters) => ({
                  ...pFilters,
                  hide0ChildCow: e.target.checked,
                }))
              }
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
              checked={filters.hide1ChildCow}
              onChange={(e) =>
                setFilters((pFilters) => ({
                  ...pFilters,
                  hide1ChildCow: e.target.checked,
                }))
              }
            />
            <label htmlFor="">Exclou vaques amb 1 part (sense mitjana)</label>
          </div>

          <div className="flex gap-2">
            <input
              type="checkbox"
              name=""
              id=""
              checked={filters.hide2PlusChildCow}
              onChange={(e) =>
                setFilters((pFilters) => ({
                  ...pFilters,
                  hide2PlusChildCow: e.target.checked,
                }))
              }
            />
            <label htmlFor="">Exclou vaques amb 2+ parts</label>
          </div>
        </div>
      </div>
    </Card>
  );
};
