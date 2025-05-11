export const AppRoutes = {
  root: '/',
  login: '/login',
  notFound: '/404',

  private: {
    root: '/private',
    dashboard: 'dashboard',
    cows: 'cows',
    options: 'options',
  },
};

export const AbsolutePaths = {
  root: AppRoutes.root,
  login: AppRoutes.login,
  notFound: AppRoutes.notFound,

  private: {
    root: AppRoutes.private.root,
    dashboard: `${AppRoutes.private.root}/${AppRoutes.private.dashboard}`,
    cows: `${AppRoutes.private.root}/${AppRoutes.private.cows}`,
    options: `${AppRoutes.private.root}/${AppRoutes.private.options}`,
  },
};
