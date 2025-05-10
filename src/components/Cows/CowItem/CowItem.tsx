import type { Cow } from '@/models/cow';

interface CowItemProps {
  cow: Cow;
}

export const CowItem = ({ cow }: CowItemProps) => {
  return (
    <div>
      <h2>{cow.longCode}</h2>
      <small>{cow.origin}</small>
    </div>
  );
};
