import { useState, useEffect } from "react";

const useFetch = (id) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/user/${id}`);
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, [id]);

  return { data };
};

export default useFetch;
