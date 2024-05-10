import useFetch from "./useFetch";
const useMockedData = false;

const useData = async () => {
  const mockedData = {};
  const { userData, userAverageSessions, userActivity, userPerformance } =
    await useFetch(12);

  return (
    useMockedData ? mockedData : userData,
    userAverageSessions,
    userActivity,
    userPerformance
  );
};

export default useData;
