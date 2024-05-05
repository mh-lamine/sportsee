function normalizeData(data) {
    console.log(data)
  return data.map((item) => ({
    day: item.day.split("-")[2], 
    kg: item.kilogram, 
    kCal: item.calories, 
  }));
}

export default normalizeData;
