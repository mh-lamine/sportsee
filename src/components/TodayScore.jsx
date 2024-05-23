import {
  Cell,
  Pie,
  PieChart,
} from "recharts";
import PropTypes from "prop-types";
import "../styles/graph.css";

const TodayScore = ({ score }) => {
  const data = [
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

  return (
    <div className="bg-[#FBFBFB] relative">
      <h3 className="z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center rounded-full w-1/2 h-1/2 bg-white text-sm">
        <span className="text-2xl">{score * 100}%</span>de votre objectif
      </h3>
      <span className="z-10 absolute top-0 left-0 p-4">Score</span>
      <PieChart width={180} height={180}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={45}
          outerRadius={55}
          startAngle={90}
          endAngle={-360}
          cornerRadius={100}
          dataKey="value"
        >
          <Cell fill={"#FBFBFB"} />
        </Pie>
      </PieChart>
    </div>
  );
};

TodayScore.propTypes = {
  score: PropTypes.number.isRequired,
};

export default TodayScore;
