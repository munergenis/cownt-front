import type { CowsStatisticsResponse } from '../../interfaces/cow';
import { cowntApi } from '@/shared/api/cowntApi';

export const getCowsWithStatistics = async () => {
  const { data } = await cowntApi.get<CowsStatisticsResponse>(
    '/cows/cows-with-statistics'
  );

  const cowsWithAvg = data.cows.filter((cow) => cow.birthAverageDays !== null);

  const lowerAvgCow = cowsWithAvg.reduce((tempLowestAvgCow, currCow) => {
    if (currCow.birthAverageDays! < tempLowestAvgCow.birthAverageDays!) {
      return currCow;
    } else {
      return tempLowestAvgCow;
    }
  }, cowsWithAvg[0]);

  const higherAvgCow = cowsWithAvg.reduce((tempHighestAvgCow, currCow) => {
    if (currCow.birthAverageDays! > tempHighestAvgCow.birthAverageDays!) {
      return currCow;
    } else {
      return tempHighestAvgCow;
    }
  }, cowsWithAvg[0]);

  const maxLastBirthCow = data.cows.reduce((tempMaxLastBirthCow, currCow) => {
    if (currCow.lastIntervalDays > tempMaxLastBirthCow.lastIntervalDays) {
      return currCow;
    } else {
      return tempMaxLastBirthCow;
    }
  }, data.cows[0]);

  const totalReproductiveCows = data.cows.length;

  const { totalOnePlusBirthsCows, totalZeroBirthCows } = data.cows.reduce(
    (total, currCow) => {
      if (currCow.children.length === 0) {
        total.totalZeroBirthCows = total.totalZeroBirthCows + 1;
      } else {
        total.totalOnePlusBirthsCows = total.totalOnePlusBirthsCows + 1;
      }
      return total;
    },
    { totalZeroBirthCows: 0, totalOnePlusBirthsCows: 0 }
  );

  return {
    cows: data.cows,
    averageOfAverages: data.averageOfAverages,
    lowerAvgCow,
    higherAvgCow,
    maxLastBirthCow,
    totalReproductiveCows,
    totalZeroBirthCows,
    totalOnePlusBirthsCows,
  };
};
