import type { ReactNode } from 'react';
import clsx from 'clsx';

interface PreviewCardProps {
  className?: string;
  children: ReactNode;
}

export const PreviewCard = ({ children, className }: PreviewCardProps) => {
  return (
    <div className={clsx('w-full bg-secondary rounded-md p-4', className)}>
      {children}
    </div>
  );
};
