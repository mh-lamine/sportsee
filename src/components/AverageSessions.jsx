import PropTypes from "prop-types";
import { Line, LineChart, Rectangle, Tooltip, XAxis, YAxis } from "recharts";
import "../styles/graph.css";

const AverageSessions = ({ data }) => {

  return (
    <div className="bg-[#fF0000] relative">
      <h2 className="text-white opacity-50 absolute p-2 z-10">
        Durée moyenne des sessions
      </h2>
      <LineChart width={180} height={180} data={data}>
        <XAxis
          dataKey="day"
          tick={{ fill: "white" }}
          axisLine={false}
          tickLine={false}
          fillOpacity={0.5}
        />
        <YAxis hide={true} />
        <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
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

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 shadow-md">
        <p className="text-black">{`${payload[0].value*10} min`}</p>
      </div>
    );
  }
  CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
  };
};

const CustomCursor = (props) => {
  const { points, width, height } = props;
  const { x, y } = points[0];
  return <Rectangle fill="#e60000" x={x} y={y} width={width} height={height} />;
};
CustomCursor.propTypes = {
  points: PropTypes.array,
  width: PropTypes.number,
  height: PropTypes.number,
  stroke: PropTypes.string,
};
