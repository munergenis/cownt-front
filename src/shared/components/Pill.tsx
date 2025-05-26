import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'success' | 'danger' | 'dark';

interface PillProps {
  variant?: Variant;
  children: ReactNode;
}

const variantDict: Record<Variant, string> = {
  primary: 'bg-primary text-secondary',
  secondary: 'bg-secondary text-primary',
  success: 'bg-green-700 text-white',
  danger: 'bg-red-500 text-white',
  dark: 'bg-purple-900 text-white',
};

export const Pill = ({ variant = 'primary', children }: PillProps) => {
  return (
    <span className={`${variantDict[variant]} px-2 py-1 rounded-sm font-bold`}>
      {children}
    </span>
  );
};
