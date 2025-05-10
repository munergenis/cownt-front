import { AbsolutePaths } from '@/router/AppRoutes';
import { ChartsPreview } from '@/components/Dashboard/ChartsPreview';
import { CowsPreview } from '@/components/Dashboard/CowsPreview';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>

      <div className="flex flex-col gap-y-4">
        <section>
          <h3>Charts</h3>
          <Link to={AbsolutePaths.private.charts}>
            <ChartsPreview />
          </Link>
        </section>

        <section>
          <h3>Cows</h3>
          <Link to={AbsolutePaths.private.cows}>
            <CowsPreview />
          </Link>
        </section>
      </div>
    </div>
  );
};
