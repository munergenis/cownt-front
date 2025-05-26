import type { CowRaw } from '../../interfaces/cow';
import { cowntApi } from '@/shared/api/cowntApi';

export const getAllCows = async () => {
  const { data } = await cowntApi.get<CowRaw[]>('/cows');

  return { cows: data };
};
