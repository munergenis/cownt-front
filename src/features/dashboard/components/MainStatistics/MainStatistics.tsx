import { Card } from '@/shared/components/Card';
import type { CowWithStatistics } from '@/features/cows/interfaces/cow';
import { InfoEntry } from './components/InfoEntry';

interface MainStatisticsProps {
  averageOfAverages: number | null;
  lowerAvgCow: CowWithStatistics;
  higherAvgCow: CowWithStatistics;
  maxLastBirth: CowWithStatistics;
}

export const MainStatistics = ({
  averageOfAverages,
  lowerAvgCow,
  higherAvgCow,
  maxLastBirth,
}: MainStatisticsProps) => {
  return (
    <Card>
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto">
        <InfoEntry
          className="col-span-1 md:col-span-3"
          size="lg"
          title="Mitjana Parts Ramat"
          subtitle="dies"
          mainInfo={averageOfAverages}
        />
        <InfoEntry
          title="Millor Mitjana"
          subtitle="dies"
          mainInfo={lowerAvgCow.birthAverageDays}
          size="md"
          linkLabel="Veure vaca &rarr;"
          linkTo={`/cows/${lowerAvgCow.id}`}
        />
        <InfoEntry
          title="Pitjor Mitjana"
          subtitle="dies"
          mainInfo={higherAvgCow.birthAverageDays}
          size="md"
          linkLabel="Veure vaca &rarr;"
          linkTo={`/cows/${higherAvgCow.id}`}
        />
        <InfoEntry
          title="Max Ultim Part"
          subtitle="dies"
          mainInfo={maxLastBirth.lastIntervalDays}
          size="md"
          linkLabel="Veure vaca &rarr;"
          linkTo={`/cows/${maxLastBirth.id}`}
        />
      </div>
    </Card>
  );
};
