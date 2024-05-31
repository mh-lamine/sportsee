import PropTypes from "prop-types";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import "../styles/graph.css";

const Performance = ({ data }) => {

  return (
    <div className="rounded-md bg-[#282d30] text-xs">
      <RadarChart cx={130} cy={130} width={180} height={180} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" tick={{ fill: "white" }} />
        <Radar dataKey="A" fill="#FF0101" fillOpacity={0.6} />
      </RadarChart>
    </div>
  );
};

Performance.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Performance;
