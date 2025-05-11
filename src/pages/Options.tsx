import type { Breed } from '@/models/breeds';
import { Button } from '@/components/common/Button';
import type { Characteristic } from '@/models/characteristics';
import { PreviewCard } from '@/components/common/PreviewCard';
import { renderContent } from '@/utils/utils';
import { useFetch } from '@/hooks/useFetch';

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
