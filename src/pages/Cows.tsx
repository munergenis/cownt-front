import { Button } from '@/shared/components/Button';
import { CowForm } from '@/features/cows/components/CowForm/CowForm';
import { CowList } from '@/features/cows/components/CowList/CowList';
import { QueryBoundary } from '@/shared/components/QueryBoundary';
import { useCows } from '@/features/cows/hooks/useCows';
import { useModal } from '@/context/ModalContext/ModalContext';

export const Cows = () => {
  const { cowsQuery } = useCows();

  const { showModal } = useModal();

  const onErrorFetchingForm = (error: string) => {
    showModal(error);
  };

  const handleShowModal = () => {
    showModal(<CowForm onError={onErrorFetchingForm} />);
  };

  return (
    <div>
      <h2>Vaques</h2>
      <Button onClick={handleShowModal}>Nova</Button>

      <QueryBoundary query={cowsQuery}>
        {({ cows }) => <CowList cows={cows} />}
      </QueryBoundary>
    </div>
  );
};
