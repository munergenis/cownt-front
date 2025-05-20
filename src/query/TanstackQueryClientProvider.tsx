import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import type { PropsWithChildren } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { getQuerySettings } from './config';

const querySettings = getQuerySettings();
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: querySettings.staleTime,
      gcTime: querySettings.cacheTime,
      refetchOnWindowFocus: querySettings.refetchOnWindowFocus,
      refetchOnMount: querySettings.refetchOnMount,
    },
  },
});

export const TanstackQueryClientProvider = ({
  children,
}: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
