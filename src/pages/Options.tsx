import type { Breed } from '@/features/cows/interfaces/breeds';
import { Button } from '@/shared/components/Button';
import type { Characteristic } from '@/features/cows/interfaces/characteristics';
import { PreviewCard } from '@/shared/components/PreviewCard';
import { renderContent } from '@/shared/lib/utils';
import { useFetch } from '@/shared/hooks/useFetch';

export const Options = () => {
  const {
    data: breeds,
    isLoading: isLoadingBreeds,
    error: breedsError,
    refetch: refetchBreeds,
  } = useFetch<Breed[]>('/cows/breeds');
  const {
    data: characteristics,
    isLoading: isLoadingCharacteristics,
    error: characteristicsError,
    refetch: refetchCharacteristics,
  } = useFetch<Characteristic[]>('/cows/characteristics');

  return (
    <div className="space-y-4">
      <h2>Breeds</h2>
      <PreviewCard>
        <Button onClick={refetchBreeds}>Refresh</Button>
        {renderContent(
          isLoadingBreeds,
          breedsError,
          breeds?.map((breed) => <div key={breed.id}>{breed.value}</div>)
        )}
      </PreviewCard>

      <h2>Characteristics</h2>
      <PreviewCard>
        <Button onClick={refetchCharacteristics}>Refresh</Button>
        {renderContent(
          isLoadingCharacteristics,
          characteristicsError,
          characteristics?.map((charac) => (
            <div key={charac.id}>{charac.value}</div>
          ))
        )}
      </PreviewCard>
    </div>
  );
};
