import { Card } from '@/shared/components/Card';
import type { CowWithStatistics } from '@/features/cows/interfaces/cow';
import { InfoEntry } from './components/InfoEntry';

interface MainStatisticsProps {
  averageOfAverages: number | null;
  lowerAvgCow: CowWithStatistics;
  higherAvgCow: CowWithStatistics;
  maxLastBirth: CowWithStatistics;
  totalReproductiveCows: number;
  totalZeroBirthCows: number;
  totalOnePlusBirthsCows: number;
}

export const MainStatistics = ({
  averageOfAverages,
  lowerAvgCow,
  higherAvgCow,
  maxLastBirth,
  totalReproductiveCows,
  totalZeroBirthCows,
  totalOnePlusBirthsCows,
}: MainStatisticsProps) => {
  return (
    <>
      <Card title="Estadístiques">
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
            linkLabel={lowerAvgCow.longCode}
            linkTo={`/private/cows/${lowerAvgCow.id}`}
          />
          <InfoEntry
            title="Pitjor Mitjana"
            subtitle="dies"
            mainInfo={higherAvgCow.birthAverageDays}
            size="md"
            linkLabel={higherAvgCow.longCode}
            linkTo={`/private/cows/${higherAvgCow.id}`}
          />
          <InfoEntry
            title="Max Ultim Part"
            subtitle="dies"
            mainInfo={maxLastBirth.lastIntervalDays}
            size="md"
            linkLabel={maxLastBirth.longCode}
            linkTo={`/private/cows/${maxLastBirth.id}`}
          />
          <InfoEntry
            title="Total Vaques Reproductives"
            subtitle="vaques"
            mainInfo={totalReproductiveCows}
            size="md"
          />
          <InfoEntry
            title="Total 1+ Parts"
            subtitle="vaques"
            mainInfo={totalOnePlusBirthsCows}
            size="md"
          />
          <InfoEntry
            title="Total Novelles"
            subtitle="vaques"
            mainInfo={totalZeroBirthCows}
            size="md"
          />
        </div>
      </Card>
    </>
  );
};
