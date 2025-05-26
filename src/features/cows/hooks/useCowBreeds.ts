import { getBreeds } from '../actions/breeds/getBreeds.action';
import { useQuery } from '@tanstack/react-query';

export const useCowBreeds = () => {
  const cowBreedsQuery = useQuery({
    queryKey: ['cows', 'breeds'],
    queryFn: getBreeds,
  });

  return { cowBreedsQuery };
};
