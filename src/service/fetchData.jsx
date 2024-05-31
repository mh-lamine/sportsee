async function fetchData(id) {
  const [
    userDataResponse,
    userActivityResponse,
    userAverageSessionsResponse,
    userPerformanceResponse,
  ] = await Promise.all([
    fetch(`http://localhost:3000/user/${id}`),
    fetch(`http://localhost:3000/user/${id}/activity`),
    fetch(`http://localhost:3000/user/${id}/average-sessions`),
    fetch(`http://localhost:3000/user/${id}/performance`),
  ]);
  const userData = await userDataResponse.json();
  const userActivity = await userActivityResponse.json();
  const userAverageSessions = await userAverageSessionsResponse.json();
  const userPerformance = await userPerformanceResponse.json();

  return {
    userData,
    userActivity,
    userAverageSessions,
    userPerformance,
  };
}

export default fetchData;
