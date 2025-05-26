import type { ReactNode } from 'react';

interface H2Props {
  className?: string;
  children: ReactNode;
}

export const H2 = ({ className, children }: H2Props) => {
  return (
    <h2
      className={`
        py-1 w-fit mx-auto
        text-center font-black uppercase text-6xl md:text-8xl lg:text-9xl
        bg-gradient-to-b from-primary/0 via-primary/10 to-primary/30 bg-clip-text text-transparent
        scale-x-200 scale-y-125 -translate-y-11 md:-translate-y-13 lg:-translate-y-14 
        ${className}
        `}
    >
      {children}
    </h2>
  );
};
