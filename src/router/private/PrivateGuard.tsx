import { Navigate, Outlet } from 'react-router-dom';

import { AppRoutes } from '../AppRoutes';
import { useAuthContext } from '@/context/AuthContext/AuthContext';

export const PrivateGuard = () => {
  const { authenticated } = useAuthContext();

  return authenticated ? <Outlet /> : <Navigate to={AppRoutes.login} />;
};
