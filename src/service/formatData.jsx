import fetchData from "./fetchData";
const useMockedData = false;

const formatData = async (id) => {
  const mockedData = {};

  if (useMockedData) {
    return mockedData;
  }

  const { userData, userActivity, userAverageSessions, userPerformance } =
    await fetchData(id);

  const score = userData.data.score || userData.data.todayScore;
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

  const data = userActivity.data.sessions;
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

  const performance = userPerformance.data.data.map((item) => {
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

  const sessions = userAverageSessions.data.sessions.map((item) => ({
    day: formatDay(item.day),
    sessionLength: item.sessionLength / 10,
  }));

  return {
    userData: {
      pieData,
      score,
      name: userData.data.userInfos.firstName,
      calorieCount: userData.data.keyData.calorieCount,
      carbohydrateCount: userData.data.keyData.carbohydrateCount,
      lipidCount: userData.data.keyData.lipidCount,
      proteinCount: userData.data.keyData.proteinCount,
    },
    userActivity: {
      barData,
      legendPayload,
      minValue,
      maxValue,
      data,
    },
    userPerformance: performance,
    userAverageSessions: sessions,
  };
};

export default formatData;

/*
- appeler le service dans un useEffect qui renvoie un objet unique avec les sous objets
- service renvoie soit les donnees mockees soit appelle chaque route d'un coup et recupere les datas d'un composant et chaque data est formatée pour le composant
- service renvoie un objet
*/
