import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result.meals);
      } catch (e) {
        console.error(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(url);
  }, [url]);

  return { data, isLoading };
};

export default useFetch;
