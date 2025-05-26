import type { Breed } from '../../interfaces/breeds';
import { cowntApi } from '@/shared/api/cowntApi';

export const getBreeds = async () => {
  const { data } = await cowntApi.get<Breed[]>('/cows/breeds');

  return { breeds: data };
};
