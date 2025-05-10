import { Navigate, Route, Routes } from 'react-router-dom';

import type { PropsWithChildren } from 'react';

export const RoutesWithNotFound = ({ children }: PropsWithChildren) => {
  return (
    <Routes>
      {children}
      <Route
        path="/404"
        element={<div>Not found</div>}
      />
      <Route
        path="*"
        element={
          <Navigate
            to="/404"
            replace
          />
        }
      />
    </Routes>
  );
};
