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
import "../styles/graph.css";

const Activity = ({ data }) => {
  const minValue = Math.round(
    Math.min(...data.map((item) => item.kilogram - 5))
  );

  const maxValue = Math.round(
    Math.max(...data.map((item) => item.kilogram + 5))
  );

  const minValueCalories = Math.round(
    Math.min(...data.map((item) => item.calories - 5))
  );

  const maxValueCalories = Math.round(
    Math.max(...data.map((item) => item.calories + 5))
  );

  const normalizedData = data.map((item) => ({
    day: item.day.split("-")[2],
    kg: item.kilogram,
    kCal:
      ((item.calories - minValueCalories) /
        (maxValueCalories - minValueCalories)) *
        (maxValue - minValue) +
      minValue,
  }));

  const legendPayload = [
    { value: "Poids (kg)", type: "circle", color: "#282D30" },
    {
      value: "Calories brûlées (kCal)",
      type: "circle",
      color: "#E60000",
    },
  ];

  return (
    <div className="bg-[#FBFBFB]">
      <h2 className="p-4">Activité quotidienne</h2>
      <BarChart width={600} height={300} data={normalizedData} barGap={10}>
        <CartesianGrid strokeDasharray="3" vertical={false} />
        <XAxis dataKey="day" />
        <YAxis
          dataKey="kg"
          orientation="right"
          domain={[minValue, maxValue]}
          allowDecimals={false}
        />
        <Tooltip content={<CustomTooltip data={data} />} />
        <Legend
          align="right"
          verticalAlign="top"
          iconType="circle"
          payload={legendPayload}
        />
        <Bar
          barSize={10}
          dataKey="kg"
          fill="#282D30"
          radius={[100, 100, 0, 0]}
          strokeWidth={5}
        />
        <Bar
          barSize={10}
          dataKey="kCal"
          fill="#E60000"
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

const CustomTooltip = ({ active, payload, data }) => {
  if (active && payload && payload.length) {
    const day = payload[1].payload.day - 1;
    const kcal = data[day].calories;
    return (
      <div className="bg-[#FF0000] p-4 shadow-md">
        <p className="text-white">{`${payload[0].value} kg`}</p>
        <p className="text-white">{`${kcal} kCal`}</p>
      </div>
    );
  }
  CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
    data: PropTypes.array,
  };
};
