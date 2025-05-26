import type { CowPopulated } from '../../interfaces/cow';
import { cowntApi } from '@/shared/api/cowntApi';

export const getCowById = async (id: string) => {
  const { data } = await cowntApi.get<CowPopulated>(`/cows/${id}`);

  return { cow: data };
};
