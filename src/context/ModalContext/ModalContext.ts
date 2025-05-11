import { createContext, useContext, type ReactNode } from 'react';

interface ModalContextProps {
  showModal: (content: ReactNode) => void;
  hideModal: () => void;
}

export const ModalContext = createContext<ModalContextProps | undefined>(
  undefined
);

export const useModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx)
    throw new Error(
      'Modal Context must be used within a Modal Context Provider'
    );

  return ctx;
};
