import { CowDetails } from '@/features/cows/components/CowDetails/CowDetails';
import { H2 } from '@/shared/components/H2';
import { LoadingCow } from '@/features/cows/components/LoadingCow/LoadingCow';
import { QueryBoundary } from '@/shared/components/QueryBoundary';
import { useCow } from '@/features/cows/hooks/useCow';
import { useParams } from 'react-router-dom';

export const Cow = () => {
  const { id } = useParams<{ id: string }>();
  const { cowQuery } = useCow(id!);

  return (
    <>
      <H2>Detall</H2>
      <QueryBoundary
        query={cowQuery}
        loadingElement={<LoadingCow />}
      >
        {({ cow }) => <CowDetails cow={cow} />}
      </QueryBoundary>
    </>
  );
};
