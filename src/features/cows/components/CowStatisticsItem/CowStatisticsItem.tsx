import type { CowRaw, CowWithStatistics } from '../../interfaces/cow';
import { originLabels, sexLabels } from '@/shared/translations/translations';

import { AbsolutePaths } from '@/router/AppRoutes';
import { InfoEntry } from '@/features/dashboard/components/MainStatistics/components/InfoEntry';
import { Link } from 'react-router-dom';
import { SEX } from '@/shared/consts/consts';
import cowFemaleIcon from '../../assets/icons/cow/cow-icon.svg';
import cowMaleIcon from '../../assets/icons/cow/cow-male2-icon.svg';

interface CowStatisticsItemProps {
  cow: CowWithStatistics;
}

export const CowStatisticsItem = ({ cow }: CowStatisticsItemProps) => {
  return (
    <Link to={AbsolutePaths.private.cow(cow.id)}>
      <div className="group bg-secondary p-4 rounded-sm flex flex-col md:flex-row items-center gap-4">
        {/* STATUS */}
        {/* TODO: conditional icon: dead => deadIcon / sold => soldIcon */}

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

        <div className="flex gap-4 justify-around w-full">
          <InfoEntry
            mainInfo={cow.birthAverageDays}
            title="Mitjana Parts"
            subtitle="dies"
            size="sm"
          />
          <InfoEntry
            mainInfo={cow.lastIntervalDays}
            title="Ultim Part"
            subtitle="dies"
            size="sm"
          />
          {/* DESC */}
          {/* <div className="flex flex-col">
            <span>{cow.birthDate}</span>
            <span>{cow.weight}</span>
            <span>{originLabels[cow.origin]}</span>
          </div> */}

          {/* REV */}
          {/* <div className="flex flex-col">
            <span>{cow.buyPrice}€</span>
            <span>{cow.salePrice}€</span>
          </div> */}
        </div>
      </div>
    </Link>
  );
};
