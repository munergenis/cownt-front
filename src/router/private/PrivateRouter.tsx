import { Navigate, Route } from 'react-router-dom';

import { AppLayout } from '@/layouts/AppLayout/AppLayout';
import { AppRoutes } from '../AppRoutes';
import { Cow } from '@/pages/Cow';
import { Cows } from '@/pages/Cows';
import { Dashboard } from '@/pages/Dashboard';
import { Options } from '@/pages/Options';
import { RoutesWithNotFound } from '../RoutesWithNotFound';

export const PrivateRouter = () => {
  return (
    <RoutesWithNotFound>
      <Route element={<AppLayout />}>
        <Route
          index
          element={<Navigate to={AppRoutes.private.dashboard} />}
        />
        <Route
          path={AppRoutes.private.dashboard}
          element={<Dashboard />}
        />
        <Route path={AppRoutes.private.cows}>
          <Route
            index
            element={<Cows />}
          />
          <Route
            path={AppRoutes.private.cow}
            element={<Cow />}
          />
        </Route>
        <Route
          path={AppRoutes.private.options}
          element={<Options />}
        />
      </Route>
    </RoutesWithNotFound>
  );
};
