import PropTypes from "prop-types";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

const Performance = ({ data }) => {
  const normalizedData = data.data.map((item) => {
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
    <div className="bg-[#282D30]">
      <RadarChart
        outerRadius={90}
        width={250}
        height={250}
        data={normalizedData}
      >
        <PolarGrid  />
        <PolarAngleAxis dataKey="subject" />
        <Radar dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    </div>
  );
};

Performance.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Performance;
