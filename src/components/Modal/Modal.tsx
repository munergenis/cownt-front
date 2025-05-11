import { ModalContent } from './components/ModalContent';
import { ModalOverlay } from './components/ModalOverlay';
import type { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import { useModal } from '@/context/ModalContext/ModalContext';

export const Modal = ({ children }: PropsWithChildren) => {
  const modalRoot = document.getElementById('modal-root')!;

  const { hideModal } = useModal();

  return createPortal(
    <ModalOverlay>
      <ModalContent hideModal={hideModal}>{children}</ModalContent>
    </ModalOverlay>,
    modalRoot
  );
};
