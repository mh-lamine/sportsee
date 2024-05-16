import PropTypes from "prop-types";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import "../styles/graph.css";


const AverageSessions = ({ data }) => {
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

  const normalizedData = data.map((item) => ({
    day: formatDay(item.day),
    sessionLength: item.sessionLength,
  }));

  return (
    <div className="bg-[#fF0000] relative">
      <h2 className="text-white opacity-50 absolute p-4 ">Durée moyenne des sessions</h2>
      <LineChart width={180} height={180} data={normalizedData}>
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          padding={{ left: 10, right: 10 }}
          tick={{ fill: "white" }}
          fillOpacity={0.5}
        />
        <YAxis dataKey="sessionLength" hide={true} />
        <Tooltip content={<div>coucou</div>} />
        <Line
          type="natural"
          dataKey="sessionLength"
          stroke="#fff"
          dot={false}
        />
      </LineChart>
    </div>
  );
};

AverageSessions.propTypes = {
  data: PropTypes.array.isRequired,
};

export default AverageSessions;
