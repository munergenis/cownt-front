import type { ReactNode } from 'react';
import clsx from 'clsx';

interface PreviewCardProps {
  className?: string;
  children: ReactNode;
}

export const Card = ({ children, className }: PreviewCardProps) => {
  return (
    <div className={clsx('bg-secondary rounded-md p-4', className)}>
      {children}
    </div>
  );
};
