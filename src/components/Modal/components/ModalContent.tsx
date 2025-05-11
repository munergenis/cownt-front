import type { ReactNode } from 'react';

interface ModalContentProps {
  hideModal: () => void;
  children: ReactNode;
}

export const ModalContent = ({ hideModal, children }: ModalContentProps) => {
  return (
    <div className="relative p-8 rounded-lg bg-secondary">
      {children}
      <button
        className="absolute -top-1 right-0 w-12 h-12 text-2xl p-0"
        onClick={hideModal}
      >
        &times;
      </button>
    </div>
  );
};
