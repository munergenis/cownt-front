import {
  absenceLabels,
  originLabels,
  sexLabels,
} from '@/shared/translations/translations';

import { AbsolutePaths } from '@/router/AppRoutes';
import type { CowPopulated } from '../../interfaces/cow';
import { Link } from 'react-router-dom';
import { Pill } from '@/shared/components/Pill';
import { SEX } from '@/shared/consts/consts';
import cowFemaleIcon from '../../assets/icons/cow/cow-icon.svg';
import cowMaleIcon from '../../assets/icons/cow/cow-male2-icon.svg';

interface CowDetailsProps {
  cow: CowPopulated;
}

export const CowDetails = ({ cow }: CowDetailsProps) => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <div>
          {/* STATUS */}
          <img
            className="w-24"
            src={cow.sex === SEX.F ? cowFemaleIcon : cowMaleIcon}
            alt={`Icona de vaca ${sexLabels[cow.sex]}`}
          />
        </div>
        {/* CODES */}
        <div className="flex flex-col">
          <h3 className="font-bold">{cow.longCode}</h3>
          <span className="italic">{cow.shortCode}</span>
        </div>
      </div>

      {/* INFO */}
      <div className="flex flex-col">
        <div>
          <Pill variant={cow.absence ? 'dark' : 'success'}>
            {cow.absence ? absenceLabels[cow.absence] : 'Present'}
          </Pill>
        </div>
        <span>{sexLabels[cow.sex]}</span>
        <span>{cow.breed.value}</span>
        <span>
          {cow.birthDate &&
            new Date(Number(cow.birthDate)).toLocaleDateString()}
        </span>
        <span>{cow.weight}kg</span>
        <span>{originLabels[cow.origin]}</span>
      </div>

      {/* REV */}
      <h2>Revenue</h2>
      <div className="flex flex-col">
        <span>Buy ~ {cow.buyPrice}€</span>
        <span>Sale ~ {cow.salePrice}€</span>
      </div>

      {/* TAGS */}
      <h2>Tags</h2>
      <div className="flex flex-col">
        {cow.characteristics.map((char) => (
          <span key={char.id}>{char.value}</span>
        ))}
      </div>

      {/* GEN */}
      <h2>Generations</h2>
      <div className="flex flex-col">
        {cow.mother && (
          <Link to={`${AbsolutePaths.private.cows}/${cow.mother.id}`}>
            Veure Mare &rarr;
          </Link>
        )}
        {cow.children.map((child, idx) => (
          <Link
            key={`${cow.id}-${child.id}`}
            to={`${AbsolutePaths.private.cows}/${child.id}`}
          >
            Veure Fill {idx + 1} &rarr;
          </Link>
        ))}
      </div>
    </div>
  );
};
