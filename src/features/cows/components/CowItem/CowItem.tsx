import type { Cow } from '@/models/cow';

interface CowItemProps {
  cow: Cow;
}

export const CowItem = ({ cow }: CowItemProps) => {
  return (
    <div>
      <h3>{cow.longCode}</h3>
      <small>{cow.origin}</small>
    </div>
  );
};
