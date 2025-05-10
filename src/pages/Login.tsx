import { AppRoutes } from '../router/AppRoutes';
import { Button } from '@/components/common/Button';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '@/context/AuthContext/AuthContext';

export const Login = () => {
  const { authenticated, login } = useAuthContext();

  return authenticated ? (
    <Navigate to={AppRoutes.private.root} />
  ) : (
    <div>
      <h2>Login</h2>
      <Button onClick={login}>Login</Button>
    </div>
  );
};
