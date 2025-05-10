import { AppRoutes } from '@/router/AppRoutes';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <div>
      <h2 className="text-4xl font-semibold">Dashboard</h2>
      <div>Charts</div>
      <Link to={`${AppRoutes.private.root}/${AppRoutes.private.cows}`}>
        <div>Cows</div>
      </Link>
    </div>
  );
};
