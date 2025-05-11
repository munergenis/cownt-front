import { AppRouter } from './router/AppRouter';
import { AuthContextProvider } from './context/AuthContext/AuthContextProvider.tsx';
import { ModalContextProvider } from './context/ModalContext/ModalContextProvider.tsx';

const App = () => {
  return (
    <AuthContextProvider>
      <ModalContextProvider>
        <AppRouter />
      </ModalContextProvider>
    </AuthContextProvider>
  );
};
export default App;
