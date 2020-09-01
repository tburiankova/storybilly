import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let cancelRequest = false;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios(url, options);
        if (cancelRequest) return;
        setResponse(res.data);
        setLoading(false);
      } catch (err) {
        if (cancelRequest) return;
        setError(err);
      }
    };
    fetchData();

    return () => {
      cancelRequest = true;
    };
  }, []);

  return [response, error, loading];
};
