import type { Characteristic } from '../../interfaces/characteristics';
import { cowntApi } from '@/shared/api/cowntApi';

export const getCharacteristics = async () => {
  const { data } = await cowntApi.get<Characteristic[]>(
    '/cows/characteristics'
  );

  const sortedCharacteristics = data.sort((a, b) =>
    a.value.localeCompare(b.value, 'ca', { sensitivity: 'base' })
  );

  return { characteristics: sortedCharacteristics };
};
