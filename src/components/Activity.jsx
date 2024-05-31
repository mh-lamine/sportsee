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

  return (
    <div className="bg-[#FBFBFB]">
      <h2 className="p-4">Activité quotidienne</h2>
      <BarChart width={600} height={300} data={data.barData} barGap={10}>
        <CartesianGrid strokeDasharray="3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis
          dataKey="kg"
          orientation="right"
          domain={[data.minValue, data.maxValue]}
          allowDecimals={false}
        />
        <Tooltip content={<CustomTooltip data={data.data} />} />
        <Legend
          align="right"
          verticalAlign="top"
          iconType="circle"
          payload={data.legendPayload}
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
  data: PropTypes.object.isRequired,
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
