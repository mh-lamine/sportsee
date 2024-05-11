import "./graph.css";
import { PieChart, Pie } from "recharts";

const TodayScore = ({ userData }) => {

  console.log(userData)

  // const pieScore = score * 100;
  // const remaining = 100 - pieScore;

  // const data = [
  //   { name: "score", value: pieScore },
  //   { name: "remaining", value: remaining },
  // ];

  return (
    <PieChart width={250} height={250}>
      <Pie
        // data={data}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      ></Pie>
    </PieChart>
  );
};

export default TodayScore;
