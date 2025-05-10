import type { ReactNode } from 'react';

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      className="bg-purple-400 text-purple-50 px-4 py-2 rounded-sm font-semibold cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
