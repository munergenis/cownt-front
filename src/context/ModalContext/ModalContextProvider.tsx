import {
  useCallback,
  useState,
  type PropsWithChildren,
  type ReactNode,
} from 'react';
import { ModalContext } from './ModalContext';
import { Modal } from '@/shared/components/Modal/Modal';

export const ModalContextProvider = ({ children }: PropsWithChildren) => {
  const [content, setContent] = useState<ReactNode | null>(null);

  const showModal = useCallback((content: ReactNode) => {
    setContent(content);
  }, []);

  const hideModal = useCallback(() => {
    setContent(null);
  }, []);

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      {content && <Modal>{content}</Modal>}
    </ModalContext.Provider>
  );
};
