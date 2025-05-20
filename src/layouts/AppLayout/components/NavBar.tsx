import { Link, NavLink } from 'react-router-dom';

import { AbsolutePaths } from '@/router/AppRoutes';
import { Button } from '@/shared/components/Button';

interface NavBarProps {
  logout: () => void;
}

export const NavBar = ({ logout }: NavBarProps) => {
  return (
    <nav className="px-8 py-2 flex justify-between items-center bg-secondary">
      <Link to={AbsolutePaths.private.root}>Cownt</Link>
      <NavLink
        className={({ isActive }) => (isActive ? 'underline' : '')}
        to={AbsolutePaths.private.dashboard}
      >
        Panell
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'underline' : '')}
        to={AbsolutePaths.private.cows}
      >
        Vaques
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'underline' : '')}
        to={AbsolutePaths.private.options}
      >
        Opcions
      </NavLink>
      <Button onClick={logout}>Desconectar</Button>
    </nav>
  );
};
