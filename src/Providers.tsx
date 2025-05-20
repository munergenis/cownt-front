import { AuthContextProvider } from './context/AuthContext/AuthContextProvider';
import { ModalContextProvider } from './context/ModalContext/ModalContextProvider';
import type { PropsWithChildren } from 'react';
import { TanstackQueryClientProvider } from './query/TanstackQueryClientProvider';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <AuthContextProvider>
      <TanstackQueryClientProvider>
        <ModalContextProvider>{children}</ModalContextProvider>
      </TanstackQueryClientProvider>
    </AuthContextProvider>
  );
};
export default Providers;
