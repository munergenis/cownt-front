import type { CowWithStatistics } from '@/features/cows/interfaces/cow';
import { SEX } from '@/shared/consts/consts';
import cowFemaleIcon from '@/features/cows/assets/icons/cow/cow-icon.svg';
import cowMaleIcon from '@/features/cows/assets/icons/cow/cow-male2-icon.svg';
import { sexLabels } from '@/shared/translations/translations';

interface CowStatisticsIconProps {
  cow: CowWithStatistics;
}

export const CowStatisticsIcon = ({ cow }: CowStatisticsIconProps) => {
  return (
    <div className="flex gap-4 translate-x-8 group-hover:translate-x-0 transition-transform">
      <img
        className="w-12"
        src={cow.sex === SEX.F ? cowFemaleIcon : cowMaleIcon}
        alt={`Icona de vaca ${sexLabels[cow.sex]}`}
      />
      <div className="flex flex-col">
        <h3 className="font-semibold">{cow.shortCode}</h3>
        <span className="text-sm text-gray-600 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
          {cow.longCode}
        </span>
      </div>
    </div>
  );
};
