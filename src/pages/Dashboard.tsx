import { CowStatisticsList } from '@/features/cows/components/CowStatisticsList/CowStatisticsList';
import { H2 } from '@/shared/components/H2';
import { LoadingCow } from '@/features/cows/components/LoadingCow/LoadingCow';
import { MainStatistics } from '@/features/dashboard/components/MainStatistics/MainStatistics';
import { QueryBoundary } from '@/shared/components/QueryBoundary';
import { useCowsWithStatitstics } from '@/features/cows/hooks/useCowsWithStatitstics';

export const Dashboard = () => {
  const { cowsWithStatisticsQuery } = useCowsWithStatitstics();

  return (
    <div>
      <H2>Panell</H2>

      <div className="flex flex-col gap-y-4">
        <QueryBoundary
          query={cowsWithStatisticsQuery}
          loadingElement={<LoadingCow />}
        >
          {({
            averageOfAverages,
            cows,
            higherAvgCow,
            lowerAvgCow,
            maxLastBirthCow,
            totalReproductiveCows,
            totalZeroBirthCows,
            totalOnePlusBirthsCows,
          }) => (
            <div className="flex flex-col gap-y-4">
              <MainStatistics
                averageOfAverages={averageOfAverages}
                higherAvgCow={higherAvgCow}
                lowerAvgCow={lowerAvgCow}
                maxLastBirth={maxLastBirthCow}
                totalReproductiveCows={totalReproductiveCows}
                totalZeroBirthCows={totalZeroBirthCows}
                totalOnePlusBirthsCows={totalOnePlusBirthsCows}
              />
              <CowStatisticsList cows={cows} />
            </div>
          )}
        </QueryBoundary>
      </div>
    </div>
  );
};
