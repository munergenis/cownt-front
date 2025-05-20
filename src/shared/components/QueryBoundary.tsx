import type { ReactNode } from 'react';
import type { UseQueryResult } from '@tanstack/react-query';

interface QueryBoundaryProps<T> {
  query: UseQueryResult<T, Error>;
  loadingElement?: ReactNode;
  errorElement?: ReactNode;
  children: (data: T) => ReactNode;
}

export const QueryBoundary = <T,>({
  query,
  loadingElement,
  errorElement,
  children,
}: QueryBoundaryProps<T>) => {
  if (query.isLoading) return loadingElement ?? <div>loading...</div>;
  if (query.isError) return errorElement ?? <div>error...</div>;

  if (!query.data) return null;

  return children(query.data);
};
