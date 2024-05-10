const useFetch = async (id) => {
  try {
    const [
      userDataResponse,
      userAverageSessionsResponse,
      userActivityResponse,
      userPerformanceResponse,
    ] = await Promise.all([
      fetch(`http://localhost:3000/user/${id}`),
      fetch(`http://localhost:3000/user/${id}/average-sessions`),
      fetch(`http://localhost:3000/user/${id}/activity`),
      fetch(`http://localhost:3000/user/${id}/performance`),
    ]);

    const [
      userDataJson,
      userAverageSessionsJson,
      userActivityJson,
      userPerformanceJson,
    ] = await Promise.all([
      userDataResponse.json(),
      userAverageSessionsResponse.json(),
      userActivityResponse.json(),
      userPerformanceResponse.json(),
    ]);

    return {
      userDataJson,
      userAverageSessionsJson,
      userActivityJson,
      userPerformanceJson,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default useFetch;
