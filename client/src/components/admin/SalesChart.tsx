import React, { useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { TrendingUp } from "lucide-react";

// Mock data for analytics
const data = [
  { month: "Jan", revenue: 4000, orders: 240 },
  { month: "Feb", revenue: 3000, orders: 198 },
  { month: "Mar", revenue: 9800, orders: 605 },
  { month: "Apr", revenue: 5780, orders: 348 },
  { month: "May", revenue: 4890, orders: 310 },
  { month: "Jun", revenue: 12390, orders: 840 },
  { month: "Jul", revenue: 14900, orders: 930 },
];

// Custom clean Tooltip component to replace default browser stylings
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-xl border bg-white p-4 shadow-xl">
        <p className="font-semibold text-gray-800 mb-2">{label}</p>
        <p className="text-sm text-primary font-medium">
          Revenue:{" "}
          <span className="font-bold">
            ${payload[0].value.toLocaleString()}
          </span>
        </p>
        {payload[1] && (
          <p className="text-sm text-emerald-600 font-medium mt-0.5">
            Orders: <span className="font-bold">{payload[1].value}</span>
          </p>
        )}
      </div>
    );
  }
  return null;
};

const SalesChart = () => {
  const [timeframe, setTimeframe] = useState("6M");

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      {/* Header Controls */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Sales Analytics</h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Gross revenue and transactional volume
          </p>
        </div>

        {/* Filter Pill Actions */}
        <div className="flex items-center gap-1.5 rounded-lg bg-gray-100 p-1 text-xs font-semibold text-gray-600">
          {["1M", "6M", "1Y"].map((item) => (
            <button
              key={item}
              onClick={() => setTimeframe(item)}
              className={`rounded-md px-3 py-1.5 transition ${
                timeframe === item
                  ? "bg-white text-gray-900 shadow-sm"
                  : "hover:text-gray-900"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Embedded High-level Metrics summary */}
      <div className="mb-6 flex gap-6 border-b pb-4 text-sm">
        <div>
          <span className="text-xs text-gray-400">Total Period Earnings</span>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-2xl font-bold text-gray-800">$54,760</span>
            <span className="flex items-center gap-0.5 text-xs font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
              <TrendingUp size={12} /> +12.5%
            </span>
          </div>
        </div>
      </div>

      {/* Graph Section */}
      <div className="h-80 w-full text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              {/* Primary Gradient Fill */}
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#F3F4F6"
            />
            <XAxis
              dataKey="month"
              stroke="#9CA3AF"
              tickLine={false}
              axisLine={false}
              dy={10}
            />
            <YAxis stroke="#9CA3AF" tickLine={false} axisLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Legend verticalAlign="top" height={36} iconType="circle" />

            <Area
              name="Revenue ($)"
              type="monotone"
              dataKey="revenue"
              stroke="#4F46E5"
              strokeWidth={2.5}
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
            <Area
              name="Orders Placed"
              type="monotone"
              dataKey="orders"
              stroke="#10B981"
              strokeWidth={2}
              fill="none"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesChart;
