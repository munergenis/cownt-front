import type { Cow } from '@/cows/interfaces/cow';
import { cowntApi } from '@/shared/api/cowntApi';

export const getAllCows = async () => {
  const { data } = await cowntApi.get<Cow[]>('/cows');

  return { cows: data };
};
