import type { ReactNode } from 'react';

export const renderContent = (
  isLoading: boolean,
  error: string | null,
  content: ReactNode
) => {
  if (isLoading) return <div>loading</div>;
  if (error) return <div>Error!!</div>;

  return content;
};
