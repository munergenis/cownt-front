import type { PropsWithChildren } from 'react';

export const ModalOverlay = ({ children }: PropsWithChildren) => {
  return (
    <div className="absolute top-0 left-0 h-screen w-screen flex items-center justify-center bg-black/50">
      {children}
    </div>
  );
};
