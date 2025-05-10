import type { Cow } from '@/models/cow';
import { CowItem } from '../CowItem/CowItem';
import { useFetch } from '@/hooks/useFetch';

export const CowList = () => {
  const { data, isLoading, error } = useFetch<Cow[]>('cows');

  if (isLoading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {data?.map((cow) => (
        <a key={cow.id}>
          <CowItem cow={cow} />
        </a>
      ))}
    </div>
  );
};
