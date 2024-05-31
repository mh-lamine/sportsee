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
  if (path === "performance") {
    const data = rawData.data;
    const normalizedData = data.data.map((item) => {
      let subject;
      switch (item.kind) {
        case 1:
          subject = "cardio";
          break;
        case 2:
          subject = "energy";
          break;
        case 3:
          subject = "endurance";
          break;
        case 4:
          subject = "strength";
          break;
        case 5:
          subject = "speed";
          break;
        case 6:
          subject = "intensity";
          break;
        default:
          subject = "unknown";
      }
      return {
        subject,
        A: item.value,
      };
    });
    return {
      data: normalizedData,
    };
  } 
  else {
    const formattedData = rawData;

    return formattedData;
  }
};

export default formatData;

/*
- appeler le service dans un useEffect qui renvoie un objet unique avec les sous objets
- service renvoie soit les donnees mockees soit appelle chaque route d'un coup et recupere les datas d'un composant et chaque data est formatée pour le composant
- service renvoie un objet
*/