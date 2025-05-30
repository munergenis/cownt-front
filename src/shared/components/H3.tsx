import type { ReactNode } from 'react';

interface H3Props {
  className?: string;
  children: ReactNode;
}

export const H3 = ({ className, children }: H3Props) => {
  return (
    <h3 className={`uppercase font-black text-neutral-500 ${className}`}>
      {children}
    </h3>
  );
};
