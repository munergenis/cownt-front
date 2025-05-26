import { getCowsWithStatistics } from '../actions/cows/getCowsWithStatistics.actions';
import { useQuery } from '@tanstack/react-query';

export const useCowsWithStatitstics = () => {
  const cowsWithStatisticsQuery = useQuery({
    queryKey: ['cows', 'statistics'],
    queryFn: getCowsWithStatistics,
  });

  return { cowsWithStatisticsQuery };
};
