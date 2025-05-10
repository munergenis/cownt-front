import { Link, Outlet } from 'react-router-dom';

import { AbsolutePaths } from '@/router/AppRoutes';
import { Button } from '@/components/common/Button';
import { useAuthContext } from '@/context/AuthContext/AuthContext';

export const AppLayout = () => {
  const { logout } = useAuthContext();

  return (
    <div>
      <div className="flex justify-between items-center bg-purple-100">
        <Link to={AbsolutePaths.private.root}>Cownt</Link>
        <Link to={AbsolutePaths.private.dashboard}>Dashboard</Link>
        <Link to={AbsolutePaths.private.cows}>Cows</Link>
        <Button onClick={logout}>Logout</Button>
      </div>
      <Outlet />
    </div>
  );
};
