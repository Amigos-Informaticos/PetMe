import { useState, useEffect } from 'react';
import connection from '../helpers/Connection';

const useFetch = (initialUrl, token=null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(initialUrl);
  
  const handleUrl = (url) => {
    setUrl(url);
  }

  useEffect(() => {    
    const abortController = new AbortController();
    const { signal } = abortController;

    const fetchData = async () => {
      setLoading(true);
      try {        
        const options = {
          /*
          'Content-Type': 'application/json',     
          Accept: 'application/json',
          */ 
          headers: {
            Token: token
          }          
        };
        connection().get(url, options).then(async response =>{
          setLoading(true);
          if (response.ok) {
            const json = await response.json();
            setData(json);
            setLoading(false);
          } else {
            const fetchError = new Error('Error en la petición fetch');
            fetchError.status = response.status || '00';
            fetchError.statusText = response.statusText || 'Ocurrió un error';
            throw fetchError;
          }
        }).catch(err => {
          if (!signal.aborted) {
            setData(null);
            setError(err);
            setLoading(false);
          }
        })
      } catch (err) {
        if (!signal.aborted) {
          setData(null);
          setError(err);
          setLoading(false);
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
  }, [url, token]);

  return { data, error, loading, handleUrl};
};

export default useFetch;
