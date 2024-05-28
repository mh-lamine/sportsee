import PropTypes from "prop-types";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import "../styles/graph.css";

const Performance = ({ data }) => {

  const normalizedData = data.map((item) => {
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
      subject: subject,
      A: item.value,
    };
  });

  return (
    <div className="rounded-md bg-[#282d30] text-xs">
      <RadarChart
        cx={130}
        cy={130}
        width={180}
        height={180}
        data={normalizedData}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <Radar dataKey="A" fill="#FF0101" fillOpacity={0.6} />
      </RadarChart>
    </div>
  );
};

Performance.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Performance;
