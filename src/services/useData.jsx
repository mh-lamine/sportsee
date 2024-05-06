import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
const shouldFetch = true;

const useData = () => {
  const { id } = useParams();
  const { userData, userPerformance, userAverageSessions, userActivity } =
    useFetch(id);
  const mockData = {};

  const formatDay = (dayNumber) => {
    switch (dayNumber) {
      case 1:
        return "L";
      case 2:
        return "M";
      case 3:
        return "M";
      case 4:
        return "J";
      case 5:
        return "V";
      case 6:
        return "S";
      case 7:
        return "D";
    }
  };

  const averageSessionsData = userAverageSessions.map((item) => ({
    day: formatDay(item.day),
    sessionLength: item.sessionLength,
  }));

  return shouldFetch
    ? {
        userData: userData.userInfos.firstName,
        userActivity: userActivity.data,
        userPerformance: userPerformance.data,
        userAverageSessions: averageSessionsData,
      }
    : mockData;
};

export default useData;
