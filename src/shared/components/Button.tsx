import type { ReactNode } from 'react';

interface ButtonProps {
  className?: string;
  onClick: () => void;
  children: ReactNode;
}

export const Button = ({ className, onClick, children }: ButtonProps) => {
  return (
    <button
      className={`bg-primary text-secondary ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
