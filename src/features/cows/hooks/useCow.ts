import { getCowById } from '../actions/cows/getCowById.actions';
import { useQuery } from '@tanstack/react-query';

export const useCow = (id: string) => {
  const cowQuery = useQuery({
    queryKey: ['cows', id],
    queryFn: () => getCowById(id),
  });

  return { cowQuery };
};
