import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {    
    const abortController = new AbortController();
    const { signal } = abortController;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (response.ok) {
          const json = await response.json();
          if (!signal.aborted) {
            setData(json);
            setError(null);
          }
        } else {
          const fetchError = new Error('Error en la petición fetch');
          fetchError.status = response.status || '00';
          fetchError.statusText = response.statusText || 'Ocurrió un error';
          throw fetchError;
        }
      } catch (err) {
        if (!signal.aborted) {
          setData(null);
          setError(err);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };
    fetchData();

    return () => {
      abortController.abort();
    };
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
