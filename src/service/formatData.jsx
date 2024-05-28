import fetchData from "./fetchData";
const useMockedData = false;

const formatData = async (id, path) => {
  const mockedData = {};

  if (useMockedData) {
    return mockedData;
  }

  const rawData = await fetchData(id, path);
  if (!path) {
    const score = rawData.data.score || rawData.data.todayScore;
    const pieData = [
      {
        name: "set",
        value: 100,
      },
      {
        name: "score",
        value: score * 100,
        fill: "#ff0000",
      },
    ];
    return {
      pieData,
      score,
      name: rawData.data.userInfos.firstName,
      calorieCount: rawData.data.keyData.calorieCount,
      carbohydrateCount: rawData.data.keyData.carbohydrateCount,
      lipidCount: rawData.data.keyData.lipidCount,
      proteinCount: rawData.data.keyData.proteinCount,
    };
  }
  if (path === "activity") {
    const data = rawData.data.sessions;
    const minValue = Math.round(
      Math.min(...data.map((item) => item.kilogram - 5))
    );

    const maxValue = Math.round(
      Math.max(...data.map((item) => item.kilogram + 5))
    );

    const minValueCalories = Math.round(
      Math.min(...data.map((item) => item.calories - 5))
    );

    const maxValueCalories = Math.round(
      Math.max(...data.map((item) => item.calories + 5))
    );

    const barData = data.map((item) => ({
      day: item.day.split("-")[2],
      kg: item.kilogram,
      kCal:
        ((item.calories - minValueCalories) /
          (maxValueCalories - minValueCalories)) *
          (maxValue - minValue) +
        minValue,
    }));

    const legendPayload = [
      { value: "Poids (kg)", type: "circle", color: "#282D30" },
      {
        value: "Calories brûlées (kCal)",
        type: "circle",
        color: "#E60000",
      },
    ];

    return {
      barData,
      legendPayload,
      minValue,
      maxValue,
      rawData: data,
    };
  }
  // if (path === "performance") {
  //   const data = rawData.data;
  //   const normalizedData = [];
  //   console.log(normalizedData);
  //   for (const [key, value] of Object.entries(data.kind)) {
  //     normalizedData.push({
  //       subject: key,
  //       A: value,
  //     });
  //   }
  //   const formattedData = Object.values(normalizedData);
  //   console.log(formattedData);
  //   return {
  //     formattedData,
  //   };
  // } 
  else {
    const formattedData = rawData;

    return formattedData;
  }
};

export default formatData;
