import { H3 } from './H3';
import type { ReactNode } from 'react';
import clsx from 'clsx';

interface PreviewCardProps {
  title?: string;
  className?: string;
  children: ReactNode;
}

export const Card = ({ title, children, className }: PreviewCardProps) => {
  return (
    <>
      {title && <H3 className="-translate-x-2 translate-y-8">{title}</H3>}
      <div className={clsx('bg-secondary rounded-md p-4', className)}>
        {children}
      </div>
    </>
  );
};
