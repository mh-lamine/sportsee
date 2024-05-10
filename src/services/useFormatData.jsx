import { useState } from "react";
import useFetchData from "./useFetchData";
// const fetchData = true;

const useFormatData = (id, path) => {
  // const mockedData = {};
  const [data, setData] = useState(null);

  const fetchedData = useFetchData(id, path);
  fetchedData ? setData(fetchedData) : setData("no go");

  return data
};

export default useFormatData;
