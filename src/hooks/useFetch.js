import { useState } from 'react';

export function useFetch() {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadData = async (url) => {
    setError(null);
    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      setError(errorMessage);
      // eslint-disable-next-line no-console
      console.error('There was an error!', error);
    } finally {
      setLoading(false);
    }
  };

  return { loadData, data, loading, error };
}
