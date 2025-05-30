import type { CowsStatisticsResponse } from '../../interfaces/cow';
import { cowntApi } from '@/shared/api/cowntApi';

export const getCowsWithStatistics = async () => {
  const { data } = await cowntApi.get<CowsStatisticsResponse>(
    '/cows/cows-with-statistics'
  );

  // Cows with average are cows with 2+ births (birthAvgDays not null, reproductiveIntervalDays null)
  const cowsWithAvg = data.cows.filter((cow) => cow.birthAverageDays !== null);
  // Cows with lastIntervalDays are cows with 1+ births: (birthAvgDays possibly null, lastIntervalDays not null, reproductiveIntervalDays null)
  const cowsWithLastIntervalDays = data.cows.filter(
    (cow) => cow.lastIntervalDays !== null
  );
  // Cows with reproductiveAge are cows with 0 births but with reproductive age (birthAvgDays null, lastIntervalDays null)
  const cowsWithReproductiveAge = data.cows.filter(
    (cow) => cow.reproductiveIntervalDays !== null
  );

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

  const maxLastBirthCow = cowsWithLastIntervalDays.reduce(
    (tempMaxLastBirthCow, currCow) => {
      if (currCow.lastIntervalDays! > tempMaxLastBirthCow.lastIntervalDays!) {
        return currCow;
      } else {
        return tempMaxLastBirthCow;
      }
    },
    data.cows[0]
  );

  const totalReproductiveCows = data.cows.length;
  const totalZeroBirthCows = cowsWithReproductiveAge.length;
  const totalOnePlusBirthsCows = cowsWithLastIntervalDays.length;

  // const { totalOnePlusBirthsCows, totalZeroBirthCows } = data.cows.reduce(
  //   (total, currCow) => {
  //     if (currCow.children.length === 0) {
  //       total.totalZeroBirthCows = total.totalZeroBirthCows + 1;
  //     } else {
  //       total.totalOnePlusBirthsCows = total.totalOnePlusBirthsCows + 1;
  //     }
  //     return total;
  //   },
  //   { totalZeroBirthCows: 0, totalOnePlusBirthsCows: 0 }
  // );

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
