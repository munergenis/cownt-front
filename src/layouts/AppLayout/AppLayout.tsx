import { NavBar } from './components/NavBar';
import { Outlet } from 'react-router-dom';
import { useAuthContext } from '@/context/AuthContext/AuthContext';

export const AppLayout = () => {
  const { logout } = useAuthContext();

  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <NavBar logout={logout} />
      <main className="grow p-8 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};
