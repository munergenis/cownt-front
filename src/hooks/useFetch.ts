import { useEffect, useState } from 'react';

import axios from 'axios';

export const useFetch = <T>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      setIsLoading(true);

      try {
        const res = await axios.get<T>(
          `https://cownt-api.netlify.app/api/${endpoint}`
        );
        setData(res.data);
      } catch (err) {
        console.error(err);
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Unknown error');
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [endpoint]);

  return { data, isLoading, error };
};
