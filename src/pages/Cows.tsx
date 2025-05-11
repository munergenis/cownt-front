import { Button } from '@/components/common/Button';
import { CowList } from '@/components/Cows/CowList/CowList';
import { useModal } from '@/context/ModalContext/ModalContext';

export const Cows = () => {
  const { showModal } = useModal();

  const handleShowModal = () => {
    showModal(
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, magnam.
      </div>
    );
  };

  return (
    <div>
      <h2>Vaques</h2>
      <Button onClick={handleShowModal}>Nova</Button>
      <CowList />
    </div>
  );
};
