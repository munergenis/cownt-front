import { useCallback, useState } from 'react';

import axios from 'axios';

export const useMutate = <T>(endpoint: string, method: 'post' | 'patch') => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const mutate = useCallback(
    async (object: T) => {
      setError(null);
      setIsLoading(true);
      setSuccess(false);

      try {
        await axios[method]<T>(
          `https://cownt-api.netlify.app/api/${endpoint}`,
          object
        );
        setSuccess(true);
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
    },
    [endpoint, method]
  );

  return { isLoading, error, success, mutate };
};
