import { BrowserRouter, Navigate, Route } from 'react-router-dom';

import { AppRoutes } from './AppRoutes';
import { Login } from '../pages/Login';
import { PrivateGuard } from './private/PrivateGuard';
import { PrivateRouter } from './private/PrivateRouter';
import { RoutesWithNotFound } from './RoutesWithNotFound';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>
        <Route
          path={AppRoutes.root}
          element={
            <Navigate
              to={AppRoutes.private.root}
              replace
            />
          }
        />

        <Route
          path={AppRoutes.login}
          element={<Login />}
        />

        <Route
          path={`${AppRoutes.private.root}/*`}
          element={<PrivateGuard />}
        >
          <Route
            path="*"
            element={<PrivateRouter />}
          />
        </Route>
      </RoutesWithNotFound>
    </BrowserRouter>
  );
};
