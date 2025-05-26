import { ABSENCE, ORIGIN, SEX } from '@/shared/consts/consts';
import {
  absenceLabels,
  originLabels,
  sexLabels,
} from '@/shared/translations/translations';

import type { Breed } from '../../interfaces/breeds';
import { Button } from '@/shared/components/Button';
import type { Characteristic } from '../../interfaces/characteristics';
import type { CowFilter } from '../../hooks/useCowsFilter';
import { QueryBoundary } from '@/shared/components/QueryBoundary';
import type { UseQueryResult } from '@tanstack/react-query';

interface CowsFiltersProps {
  showFilters: boolean;
  setShowFilters: React.Dispatch<React.SetStateAction<boolean>>;
  filters: CowFilter;
  setFilters: React.Dispatch<React.SetStateAction<CowFilter>>;
  cowBreedsQuery: UseQueryResult<{ breeds: Breed[] }, Error>;
  cowCharacteristicsQuery: UseQueryResult<
    { characteristics: Characteristic[] },
    Error
  >;
}

export const CowsFilters = ({
  showFilters,
  setShowFilters,
  filters,
  setFilters,
  cowBreedsQuery,
  cowCharacteristicsQuery,
}: CowsFiltersProps) => {
  return (
    <div className="grow relative">
      <Button
        className="absolute"
        onClick={() => setShowFilters((pShow) => !pShow)}
      >
        Filtres {showFilters ? <span>&uarr;</span> : <span>&darr;</span>}
      </Button>
      {/* Query (Codes) */}
      <div className="space-x-2 mt-14">
        <span>Codi</span>
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
      <div className={`${!showFilters && 'hidden'} py-4 flex flex-col gap-4`}>
        {/* 
                FILTER
            */}

        {/* Sex */}
        <div className="space-x-2">
          <span>Sexe</span>
          <select
            className="outline"
            name=""
            id=""
            value={filters.sex}
            onChange={(e) =>
              setFilters((pFilters) => ({
                ...pFilters,
                sex: e.target.value as SEX | '',
              }))
            }
          >
            <option value="">Tots</option>
            <option value={SEX.F}>{sexLabels[SEX.F]}</option>
            <option value={SEX.M}>{sexLabels[SEX.M]}</option>
          </select>
        </div>

        {/* Origin */}
        <div className="space-x-2">
          <span>Origen</span>
          <select
            className="outline"
            name=""
            id=""
            value={filters.origin}
            onChange={(e) =>
              setFilters((pFilters) => ({
                ...pFilters,
                origin: e.target.value as ORIGIN | '',
              }))
            }
          >
            <option value="">Tots</option>
            <option value={ORIGIN.BORN}>{originLabels[ORIGIN.BORN]}</option>
            <option value={ORIGIN.BOUGHT}>{originLabels[ORIGIN.BOUGHT]}</option>
          </select>
        </div>

        {/* Children */}
        <div className="space-x-2">
          <span>Fills</span>
          <select
            className="outline"
            name=""
            id=""
            value={filters.childs}
            onChange={(e) => {
              const childs =
                e.target.value === ''
                  ? ''
                  : (Number(e.target.value) as 0 | 1 | 2);

              setFilters((pFilters) => ({
                ...pFilters,
                childs,
              }));
            }}
          >
            <option value="">Tots</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2+</option>
          </select>
        </div>

        {/* Absence */}
        <div className="space-x-2">
          <span>Estat</span>
          <select
            className="outline"
            name=""
            id=""
            value={filters.absence === null ? 'present' : filters.absence}
            onChange={(e) => {
              const absence =
                e.target.value === 'present'
                  ? null
                  : (e.target.value as ABSENCE | '');
              setFilters((pFilters) => ({ ...pFilters, absence }));
            }}
          >
            <option value="">Tots</option>
            <option value="present">Present</option>
            <option value={ABSENCE.DEAD}>{absenceLabels[ABSENCE.DEAD]}</option>
            <option value={ABSENCE.SOLD}>{absenceLabels[ABSENCE.SOLD]}</option>
          </select>
        </div>

        {/* Breeds */}
        <QueryBoundary
          query={cowBreedsQuery}
          loadingElement="Carregant..."
        >
          {({ breeds }) => (
            <div className="space-x-2">
              <span>Raça</span>
              <select
                className="outline"
                name=""
                id=""
                value={filters.breed}
                onChange={(e) =>
                  setFilters((pFilters) => ({
                    ...pFilters,
                    breed: e.target.value,
                  }))
                }
              >
                <option value="">Tots</option>
                {breeds.map((breed) => (
                  <option
                    key={breed.id}
                    value={breed.id}
                  >
                    {breed.value}
                  </option>
                ))}
              </select>
            </div>
          )}
        </QueryBoundary>

        {/* Characteristics */}
        {/* TODO: Multiselect */}
        <QueryBoundary
          query={cowCharacteristicsQuery}
          loadingElement="Carregant"
        >
          {({ characteristics }) => (
            <select
              multiple
              name=""
              id=""
              value={filters.characteristics}
              onChange={(e) => {
                const selected = Array.from(e.target.selectedOptions)
                  .map((opt) => opt.value)
                  .filter((optVal) => optVal !== '');
                setFilters((pFilters) => ({
                  ...pFilters,
                  characteristics: selected,
                }));
              }}
            >
              <option value="">Reset</option>
              {characteristics.map((char) => (
                <option
                  key={char.id}
                  value={char.id}
                >
                  {char.value}
                </option>
              ))}
            </select>
          )}
        </QueryBoundary>
      </div>
    </div>
  );
};
