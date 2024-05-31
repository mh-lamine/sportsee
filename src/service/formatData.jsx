import fetchData from "./fetchData";
const useMockedData = true;

const formatData = async (id) => {
  const mockedData = {
    userData: {
      pieData: [
        { name: "set", value: 100 },
        { name: "score", value: 45, fill: "#ff0000" },
      ],
      score: 0.45,
      name: "Alice",
      calorieCount: 2500,
      carbohydrateCount: 320,
      lipidCount: 70,
      proteinCount: 180,
    },
    userActivity: {
      barData: [
        { day: "01", kg: 65, kCal: 68.75 },
        { day: "02", kg: 66, kCal: 72.5 },
        { day: "03", kg: 67, kCal: 75.625 },
        { day: "04", kg: 66, kCal: 70 },
        { day: "05", kg: 66, kCal: 71.875 },
        { day: "06", kg: 65, kCal: 73.125 },
        { day: "07", kg: 64, kCal: 78.125 },
      ],
      data: [
        { day: "2024-05-01", kilogram: 65, calories: 200 },
        { day: "2024-05-02", kilogram: 66, calories: 220 },
        { day: "2024-05-03", kilogram: 67, calories: 240 },
        { day: "2024-05-04", kilogram: 66, calories: 210 },
        { day: "2024-05-05", kilogram: 66, calories: 215 },
        { day: "2024-05-06", kilogram: 65, calories: 225 },
        { day: "2024-05-07", kilogram: 64, calories: 250 },
      ],
      legendPayload: [
        { value: "Poids (kg)", type: "circle", color: "#282D30" },
        { value: "Calories brûlées (kCal)", type: "circle", color: "#E60000" },
      ],
      maxValue: 79,
      minValue: 67,
    },
    userAverageSessions: [
      { day: "L", sessionLength: 3.5 },
      { day: "M", sessionLength: 2.0 },
      { day: "M", sessionLength: 4.0 },
      { day: "J", sessionLength: 4.5 },
      { day: "V", sessionLength: 0.5 },
      { day: "S", sessionLength: 1.0 },
      { day: "D", sessionLength: 5.5 },
    ],
    userPerformance: [
      { subject: "cardio", A: 90 },
      { subject: "energy", A: 110 },
      { subject: "endurance", A: 130 },
      { subject: "strength", A: 70 },
      { subject: "speed", A: 150 },
      { subject: "intensity", A: 95 },
    ],
  };

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
