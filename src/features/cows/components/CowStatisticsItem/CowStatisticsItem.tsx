import { AbsolutePaths } from '@/router/AppRoutes';
import { CowStatisticsIcon } from './components/CowStatisticsIcon';
import type { CowWithStatistics } from '../../interfaces/cow';
import { InfoEntry } from '@/features/dashboard/components/MainStatistics/components/InfoEntry';
import { Link } from 'react-router-dom';

interface CowStatisticsItemProps {
  cow: CowWithStatistics;
}

export const CowStatisticsItem = ({ cow }: CowStatisticsItemProps) => {
  return (
    <Link to={AbsolutePaths.private.cow(cow.id)}>
      <div className="group bg-secondary p-4 rounded-sm flex flex-col md:flex-row items-center gap-4">
        <CowStatisticsIcon cow={cow} />

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
          <InfoEntry
            mainInfo={cow.children.length}
            title="Total Parts"
            subtitle="parts"
            size="sm"
          />
          {/* TODO: Afegir vaca sense parts que passa el llindar de dies esperats per primer part.

            cow.lastInterval === null && vaca sense parts desde X dies (inici edat reproducció fins avui) 
          */}
        </div>
      </div>
    </Link>
  );
};
