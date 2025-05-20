import { getAllCows } from '../actions/cows/getAllCows.actions';
import { useQuery } from '@tanstack/react-query';

export const useCows = () => {
  const cowsQuery = useQuery({ queryKey: ['cows'], queryFn: getAllCows });

  return { cowsQuery };
};
