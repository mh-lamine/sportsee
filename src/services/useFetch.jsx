import { useState, useEffect } from "react";

function useFetch(userId) {
  const [userData, setUserData] = useState();
  const [userPerformance, setUserPerformance] = useState();
  const [userAverageSessions, setUserAverageSessions] = useState();
  const [userActivity, setUserActivity] = useState();

  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
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
        const userAverageSessionsJson =
          await userAverageSessionsResponse.json();
        const userActivityJson = await userActivityResponse.json();

        setLoading(false);

        setUserData(userDataJson.data);
        setUserPerformance(userPerformanceJson.data);
        setUserAverageSessions(userAverageSessionsJson.data);
        setUserActivity(userActivityJson.data);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [userId]);
  return {
    userData,
    userPerformance,
    userAverageSessions,
    userActivity,
    loading,
    error,
  };
}

export default useFetch;
