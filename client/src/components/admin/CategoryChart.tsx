import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

// Mock data reflecting standard admin catalog distributions
const data = [
  { name: "Electronics", value: 4500, color: "#4F46E5" }, // Primary Blue/Indigo
  { name: "Accessories", value: 3100, color: "#10B981" }, // Emerald Green
  { name: "Laptops", value: 2400, color: "#F59E0B" }, // Amber/Yellow
  { name: "Smart Watches", value: 1800, color: "#EC4899" }, // Pink
];

const TOTAL_VALUE = data.reduce((sum, item) => sum + item.value, 0);

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const item = payload[0].payload;
    const percentage = ((item.value / TOTAL_VALUE) * 100).toFixed(1);
    return (
      <div className="rounded-xl border bg-white p-3 shadow-xl text-xs">
        <p className="font-semibold text-gray-800">{item.name}</p>
        <p className="mt-1 font-medium text-gray-500">
          Stock/Sales:{" "}
          <span className="font-bold text-gray-900">
            ${item.value.toLocaleString()}
          </span>
        </p>
        <p className="text-2xs text-primary font-medium">
          Share: {percentage}%
        </p>
      </div>
    );
  }
  return null;
};

const CategoryChart = () => {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm flex flex-col justify-between">
      {/* Header Info */}
      <div>
        <h2 className="text-xl font-bold text-gray-800">
          Category Distribution
        </h2>
        <p className="text-xs text-gray-500 mt-0.5">
          Product share by transactional volume
        </p>
      </div>

      {/* Donut Graphic & Center Label */}
      <div className="relative my-6 flex h-52 items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip content={<CustomTooltip />} />
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={65}
              outerRadius={85}
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Absolute Centered Readout */}
        <div className="absolute text-center">
          <span className="text-2xs font-medium uppercase tracking-wider text-gray-400">
            Total Sales
          </span>
          <p className="text-2xl font-bold text-gray-800">
            ${(TOTAL_VALUE / 1000).toFixed(1)}k
          </p>
        </div>
      </div>

      {/* Styled Inline Legend Metrics */}
      <div className="grid grid-cols-2 gap-3 text-xs border-t pt-4">
        {data.map((item) => {
          const percent = ((item.value / TOTAL_VALUE) * 100).toFixed(0);
          return (
            <div
              key={item.name}
              className="flex items-center justify-between rounded-lg bg-gray-50/50 p-2 border border-gray-100/50"
            >
              <div className="flex items-center gap-2 min-w-0">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="truncate font-medium text-gray-600">
                  {item.name}
                </span>
              </div>
              <span className="font-bold text-gray-800 ml-1">{percent}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryChart;
