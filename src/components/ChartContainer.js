import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  YAxis,
  XAxis,
} from "recharts";
import { useTheme } from "../context/ThemeContext";

function ChartContainer({ data, chartType }) {
  const { darkMode } = useTheme();
  const colors = darkMode ? ["#8884d8", "#82ca9d"] : ["#8884d8", "#ff7300"];

  const renderChart = () => {
    switch (chartType) {
      case "bar":
        return (
          <BarChart
            width={500}
            height={300}
            data={data.datasets[0].data.map((d, i) => ({
              name: data.labels[i],
              value: d,
            }))}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill={colors[0]} />
          </BarChart>
        );
      case "line":
        return (
          <LineChart
            width={500}
            height={300}
            data={data.datasets[0].data.map((d, i) => ({
              name: data.labels[i],
              value: d,
            }))}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke={colors[0]} />
          </LineChart>
        );
      case "pie":
        return (
          <PieChart width={400} height={300}>
            <Pie
              data={data.labels.map((l, i) => ({
                name: l,
                value: data.datasets[0].data[i],
              }))}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
            >
              {data.labels.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center">
      {renderChart()}
    </div>
  );
}

export default ChartContainer;
