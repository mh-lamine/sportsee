import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import PropTypes from "prop-types";
import normalizeData from "../utils/normalizeData";

const Activity = ({ data }) => {
  const normalizedData = normalizeData(data);
  const minValue = Math.round(
    Math.min(...data.map((item) => item.kilogram - 1))
  );

  const maxValue = Math.round(
    Math.max(...data.map((item) => item.kilogram + 1))
  );

  const legendPayload = [
    { value: "Poids (kg)", type: "square", color: "#E60000" },
    { value: "Calories brûlées (kCal)", type: "square", color: "#282D30" },
  ];

  return (
    <div>
      <BarChart width={600} height={300} data={normalizedData}>
        <CartesianGrid strokeDasharray="3" vertical={false} />
        <XAxis dataKey="day" />
        <YAxis dataKey="kg" orientation="right" domain={[minValue, maxValue]} />
        <Tooltip />
        <Legend
          align="right"
          verticalAlign="top"
          iconType="circle"
          payload={legendPayload}
        />
        <Bar
          dataKey="kg"
          fill="#E60000"
          radius={[100, 100, 0, 0]}
          strokeWidth={5}
        />
        <Bar
          dataKey="kCal"
          fill="#282D30"
          radius={[100, 100, 0, 0]}
        />
      </BarChart>
    </div>
  );
};

Activity.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Activity;
