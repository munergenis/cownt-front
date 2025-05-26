export const AppRoutes = {
  root: '/',
  login: '/login',
  notFound: '/404',

  private: {
    root: '/private',
    dashboard: 'dashboard',
    cows: 'cows',
    cow: ':id',
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
    cow: (term: string) =>
      `${AppRoutes.private.root}/${AppRoutes.private.cows}/${term}`,
    options: `${AppRoutes.private.root}/${AppRoutes.private.options}`,
  },
};
