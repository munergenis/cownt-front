export const AppRoutes = {
  root: '/',
  login: '/login',
  notFound: '/404',

  private: {
    root: '/private',
    dashboard: 'dashboard',
    charts: 'charts',
    cows: 'cows',
  },
};

export const AbsolutePaths = {
  root: AppRoutes.root,
  login: AppRoutes.login,
  notFound: AppRoutes.notFound,

  private: {
    root: AppRoutes.private.root,
    dashboard: `${AppRoutes.private.root}/${AppRoutes.private.dashboard}`,
    charts: `${AppRoutes.private.root}/${AppRoutes.private.charts}`,
    cows: `${AppRoutes.private.root}/${AppRoutes.private.cows}`,
  },
};
