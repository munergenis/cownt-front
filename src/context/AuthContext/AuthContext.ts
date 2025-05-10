import { createContext, useContext } from 'react';

interface AuthContextProps {
  authenticated: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const useAuthContext = () => {
  const ctx = useContext(AuthContext);
  if (!ctx)
    throw new Error('Auth Context must be used within a AuthContextProvider');
  return ctx;
};
