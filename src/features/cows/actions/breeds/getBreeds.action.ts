import type { Breed } from '../../interfaces/breeds';
import { cowntApi } from '@/shared/api/cowntApi';

export const getBreeds = async () => {
  const { data } = await cowntApi.get<Breed[]>('/cows/breeds');

  const sortedBreeds = data.sort((a, b) =>
    a.value.localeCompare(b.value, 'ca', { sensitivity: 'base' })
  );

  return { breeds: sortedBreeds };
};
