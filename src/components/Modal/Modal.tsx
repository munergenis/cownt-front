import { ModalOverlay } from './components/ModalOverlay';
import type { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import { useModal } from '@/context/ModalContext/ModalContext';

export const Modal = ({ children }: PropsWithChildren) => {
  const modalRoot = document.getElementById('modal-root')!;

  const { hideModal } = useModal();

  return createPortal(
    <ModalOverlay>
      <div className="relative p-8 rounded-lg bg-secondary">
        {children}
        <button
          className="absolute -top-1 right-0 w-12 h-12 text-2xl p-0"
          onClick={hideModal}
        >
          &times;
        </button>
      </div>
    </ModalOverlay>,
    modalRoot
  );
};
