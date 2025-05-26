import { getCharacteristics } from '../actions/characteristics/getCharacteristics.action';
import { useQuery } from '@tanstack/react-query';

export const useCowCharacteristics = () => {
  const cowCharacteristicsQuery = useQuery({
    queryKey: ['cows', 'characteristics'],
    queryFn: getCharacteristics,
  });

  return { cowCharacteristicsQuery };
};
