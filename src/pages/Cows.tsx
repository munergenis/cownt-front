import { Button } from '@/shared/components/Button';
import { CowList } from '@/features/cows/components/CowList/CowList';
import { H2 } from '@/shared/components/H2';
import { LoadingCow } from '@/features/cows/components/LoadingCow/LoadingCow';
import { QueryBoundary } from '@/shared/components/QueryBoundary';
import { useCows } from '@/features/cows/hooks/useCows';
// import { useModal } from '@/context/ModalContext/ModalContext';

export const Cows = () => {
  const { cowsQuery } = useCows();

  // const { showModal } = useModal();

  // const onErrorFetchingForm = (error: string) => {
  //   showModal(error);
  // };

  // const handleShowModal = () => {
  //   showModal(<CowForm onError={onErrorFetchingForm} />);
  // };

  return (
    <div>
      <H2>Vaques</H2>
      <Button onClick={() => console.log('todo: cow form')}>Nova</Button>

      <QueryBoundary
        query={cowsQuery}
        loadingElement={<LoadingCow />}
      >
        {({ cows }) => <CowList cows={cows} />}
      </QueryBoundary>
    </div>
  );
};
