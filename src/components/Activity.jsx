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

const Activity = ({ data }) => {
  const normalizedData = data.map((item) => ({
    day: item.day.split("-")[2],
    kg: item.kilogram,
    kCal: item.calories,
  }));

  const minValue = Math.round(
    Math.min(...data.map((item) => item.kilogram - 1))
  );

  const maxValue = Math.round(
    Math.max(...data.map((item) => item.kilogram + 1))
  );

  const legendPayload = [
    { value: "Poids (kg)", type: "circle", color: "#E60000" },
    { value: "Calories brûlées (kCal)", type: "circle", color: "#282D30" },
  ];

  return (
    <div>
      <h2 className="">Activité quotidienne</h2>
      <BarChart width={600} height={300} data={normalizedData} barGap={10}>
        <CartesianGrid strokeDasharray="3" vertical={false} />
        <XAxis dataKey="day" />
        <YAxis
          dataKey="kg"
          orientation="right"
          domain={[minValue, maxValue]}
          allowDecimals={false}
        />
        <Tooltip />
        <Legend
          wrapperStyle={{
            top: -100,
          }}
          align="right"
          verticalAlign="top"
          iconType="circle"
          payload={legendPayload}
        />
        <Bar
          barSize={10}
          dataKey="kg"
          fill="#E60000"
          radius={[100, 100, 0, 0]}
          strokeWidth={5}
        />
        <Bar
          barSize={10}
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
