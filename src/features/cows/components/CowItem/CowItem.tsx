import { originLabels, sexLabels } from '@/shared/translations/translations';

import { AbsolutePaths } from '@/router/AppRoutes';
import type { CowRaw } from '../../interfaces/cow';
import { Link } from 'react-router-dom';
import { SEX } from '@/shared/consts/consts';
import cowFemaleIcon from '../../assets/icons/cow/cow-icon.svg';
import cowMaleIcon from '../../assets/icons/cow/cow-male2-icon.svg';

interface CowItemProps {
  cow: CowRaw;
}

export const CowItem = ({ cow }: CowItemProps) => {
  return (
    <Link to={AbsolutePaths.private.cow(cow.id)}>
      <div className="bg-secondary p-4 rounded-sm">
        {/* STATUS */}
        {/* TODO: conditional icon: dead => deadIcon / sold => soldIcon */}

        <img
          className="w-12"
          src={cow.sex === SEX.F ? cowFemaleIcon : cowMaleIcon}
          alt={`Icona de vaca ${sexLabels[cow.sex]}`}
        />
        <div className="flex flex-col">
          {/* CODES */}
          <div className="flex flex-col">
            <h3>{cow.longCode}</h3>
            <span>{cow.shortCode}</span>
          </div>

          {/* DESC */}
          <div className="flex flex-col">
            <span>{cow.birthDate}</span>
            <span>{cow.weight}</span>
            <span>{originLabels[cow.origin]}</span>
          </div>

          {/* REV */}
          <div className="flex flex-col">
            <span>{cow.buyPrice}€</span>
            <span>{cow.salePrice}€</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
