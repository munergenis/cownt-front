import { Card } from '@/shared/components/Card';
import { H2 } from '@/shared/components/H2';
import { QueryBoundary } from '@/shared/components/QueryBoundary';
import { useCowBreeds } from '@/features/cows/hooks/useCowBreeds';
import { useCowCharacteristics } from '@/features/cows/hooks/useCowCharacteristics';

export const Options = () => {
  const { cowBreedsQuery } = useCowBreeds();
  const { cowCharacteristicsQuery } = useCowCharacteristics();

  return (
    <div className="space-y-4">
      <H2>Opcions</H2>
      <h2>Breeds</h2>
      <Card>
        <QueryBoundary query={cowBreedsQuery}>
          {({ breeds }) =>
            breeds.map((breed) => <div key={breed.id}>{breed.value}</div>)
          }
        </QueryBoundary>
      </Card>

      <h2>Characteristics</h2>
      <Card>
        <QueryBoundary query={cowCharacteristicsQuery}>
          {({ characteristics }) =>
            characteristics.map((char) => <div key={char.id}>{char.value}</div>)
          }
        </QueryBoundary>
      </Card>
    </div>
  );
};
