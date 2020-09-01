import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios(url, options);
        setResponse(res.data);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, []);

  return [response, error, loading];
};
