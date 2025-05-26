import { AppRoutes } from '../router/AppRoutes';
import { Button } from '@/shared/components/Button';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '@/context/AuthContext/AuthContext';

export const Login = () => {
  const { authenticated, login } = useAuthContext();

  return authenticated ? (
    <Navigate to={AppRoutes.private.root} />
  ) : (
    <div className="flex flex-col items-center justify-center h-screen">
      <Button onClick={login}>Login</Button>
    </div>
  );
};
