import type { ReactNode } from 'react';

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      className="bg-primary text-secondary"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
