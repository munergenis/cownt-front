import { AbsolutePaths } from '@/router/AppRoutes';
import { Button } from '@/components/common/Button';
import { Link } from 'react-router-dom';

interface NavBarProps {
  logout: () => void;
}

export const NavBar = ({ logout }: NavBarProps) => {
  return (
    <nav className="px-8 py-2 flex justify-between items-center bg-secondary">
      <Link to={AbsolutePaths.private.root}>Cownt</Link>
      <Link to={AbsolutePaths.private.dashboard}>Dashboard</Link>
      <Link to={AbsolutePaths.private.charts}>Charts</Link>
      <Link to={AbsolutePaths.private.cows}>Cows</Link>
      <Button onClick={logout}>Logout</Button>
    </nav>
  );
};
