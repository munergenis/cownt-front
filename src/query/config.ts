export type QueryProfile = 'singleUser' | 'multiUser';

interface QuerySettings {
  staleTime: number;
  cacheTime: number;
  refetchOnWindowFocus: boolean;
  refetchOnMount: boolean;
}

const profiles: Record<QueryProfile, QuerySettings> = {
  singleUser: {
    staleTime: Infinity, // never stale (manual invalidation)
    cacheTime: 1000 * 60 * 5, // 5 minutes cache time
    refetchOnWindowFocus: false, // never refetch
    refetchOnMount: false, // never refetch
  },
  multiUser: {
    staleTime: 1000 * 20, // 20 seconds fresh data time
    cacheTime: 1000 * 60 * 10, // 10 minutes cache time
    refetchOnWindowFocus: true, // refetch on focus
    refetchOnMount: true, // refetch on mount
  },
};

export function getQuerySettings(): QuerySettings {
  const mode: QueryProfile = 'singleUser';
  return profiles[mode];
}
