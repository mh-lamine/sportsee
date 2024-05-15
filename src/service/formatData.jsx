import fetchData from "./fetchData";
const useMockedData = false;

const formatData = async (id, path) => {
  const mockedData = {};

  const fetchedData = await fetchData(id, path);
  const formattedData = fetchedData;

  return useMockedData ? mockedData : formattedData;
};

export default formatData;
