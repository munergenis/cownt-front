import { Button } from '@/shared/components/Button';
import { CowList } from '@/features/cows/components/CowList/CowList';
import { CowsFilters } from '@/features/cows/components/Filters/CowsFilters';
import { H2 } from '@/shared/components/H2';
import { LoadingCow } from '@/features/cows/components/LoadingCow/LoadingCow';
import { QueryBoundary } from '@/shared/components/QueryBoundary';
import { useCowBreeds } from '@/features/cows/hooks/useCowBreeds';
import { useCowCharacteristics } from '@/features/cows/hooks/useCowCharacteristics';
import { useCows } from '@/features/cows/hooks/useCows';
import { useCowsFilter } from '@/features/cows/hooks/useCowsFilter';
import { useState } from 'react';

// import { useModal } from '@/context/ModalContext/ModalContext';

export const Cows = () => {
  const [showFilters, setShowFilters] = useState(false);

  const { cowBreedsQuery } = useCowBreeds();
  const { cowCharacteristicsQuery } = useCowCharacteristics();
  const { cowsQuery } = useCows();
  const cows = cowsQuery.data?.cows;

  const { filteredCows, filters, setFilters } = useCowsFilter(cows);

  return (
    <div>
      <H2>Vaques</H2>

      <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-2 py-4">
        <CowsFilters
          cowBreedsQuery={cowBreedsQuery}
          cowCharacteristicsQuery={cowCharacteristicsQuery}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          filters={filters}
          setFilters={setFilters}
        />
        <Button onClick={() => console.log('todo: cow form')}>
          Nova Compra
        </Button>
      </div>

      <div className="text-2xl text-right">{filteredCows.length} Vaques</div>

      <QueryBoundary
        query={cowsQuery}
        loadingElement={<LoadingCow />}
      >
        {() => <CowList cows={filteredCows} />}
      </QueryBoundary>
    </div>
  );
};
