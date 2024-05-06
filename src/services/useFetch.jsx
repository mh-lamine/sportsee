import { useState, useEffect } from "react";

function useFetch(userId) {
  const [userData, setUserData] = useState();
  const [userPerformance, setUserPerformance] = useState();
  const [userAverageSessions, setUserAverageSessions] = useState();
  const [userActivity, setUserActivity] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const [
        userDataResponse,
        userPerformanceResponse,
        userAverageSessionsResponse,
        userActivityResponse,
      ] = await Promise.all([
        fetch(`http://localhost:3000/user/${userId}`),
        fetch(`http://localhost:3000/user/${userId}/performance`),
        fetch(`http://localhost:3000/user/${userId}/average-sessions`),
        fetch(`http://localhost:3000/user/${userId}/activity`),
      ]);

      const userDataJson = await userDataResponse.json();
      const userPerformanceJson = await userPerformanceResponse.json();
      const userAverageSessionsJson = await userAverageSessionsResponse.json();
      const userActivityJson = await userActivityResponse.json();

      setUserData(userDataJson.data);
      setUserPerformance(userPerformanceJson.data);
      setUserAverageSessions(userAverageSessionsJson.data);
      setUserActivity(userActivityJson.data);
    };

    fetchData();
  }, [userId]);

  return {
    userData,
    userPerformance,
    userAverageSessions,
    userActivity,
  };
}

export default useFetch;

/*
- faire un service qui va appeler ce service ou les donnees mock pour récupérer les données et qui va les formatter pour les composants
*/