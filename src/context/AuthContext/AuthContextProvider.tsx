import { useState, type PropsWithChildren } from 'react';
import { AuthContext } from './AuthContext';

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [authenticated, setAuthenticated] = useState(false);

  const login = () => {
    setAuthenticated(true);
  };

  const logout = () => {
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
