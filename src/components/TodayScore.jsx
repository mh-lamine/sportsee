import { PieChart, Pie, Cell } from "recharts";
import PropTypes from "prop-types";
import "../styles/graph.css";

const TodayScore = ({ score }) => {
  const pieScore = score * 100;
  const remaining = 100 - pieScore;

  const data = [
    { name: "score", value: pieScore },
    { name: "remaining", value: remaining },
  ];

  const COLORS = ["#FF0000", "#FBFBFB"];

  return (
    <div className="bg-[#FBFBFB]">
      <PieChart width={180} height={180}>
        <Pie
          data={data}
          innerRadius={70}
          outerRadius={83}
          startAngle={90}
          endAngle={450}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

TodayScore.propTypes = {
  score: PropTypes.number.isRequired,
};

export default TodayScore;
