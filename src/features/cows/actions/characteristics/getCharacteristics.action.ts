import type { Characteristic } from '../../interfaces/characteristics';
import { cowntApi } from '@/shared/api/cowntApi';

export const getCharacteristics = async () => {
  const { data } = await cowntApi.get<Characteristic[]>(
    '/cows/characteristics'
  );

  return { characteristics: data };
};
