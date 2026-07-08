import React from "react";
import {
  Package,
  Shapes,
  ShoppingBag,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

// Mock operational metrics
const statsData = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    isPositive: true,
    icon: DollarSign,
    color: "text-indigo-600 bg-indigo-50 border-indigo-100",
  },
  {
    title: "Orders Placed",
    value: "+3,104",
    change: "+12.2%",
    isPositive: true,
    icon: ShoppingBag,
    color: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
  {
    title: "Active Products",
    value: "2,456",
    change: "+4.5%",
    isPositive: true,
    icon: Package,
    color: "text-amber-600 bg-amber-50 border-amber-100",
  },
  {
    title: "Categories",
    value: "48",
    change: "-1.8%",
    isPositive: false,
    icon: Shapes,
    color: "text-rose-600 bg-rose-50 border-rose-100",
  },
];

const DashboardStats = () => {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {statsData.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <div
            key={idx}
            className="rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-500">
                {stat.title}
              </span>
              <div className={`rounded-lg border p-2 ${stat.color}`}>
                <Icon size={18} />
              </div>
            </div>

            <div className="mt-4 flex items-baseline justify-between">
              <span className="text-2xl font-bold tracking-tight text-gray-800">
                {stat.value}
              </span>

              <span
                className={`flex items-center gap-0.5 text-xs font-bold px-2 py-0.5 rounded-full ${
                  stat.isPositive
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                    : "bg-rose-50 text-rose-700 border border-rose-100"
                }`}
              >
                {stat.isPositive ? (
                  <ArrowUpRight size={14} />
                ) : (
                  <ArrowDownRight size={14} />
                )}
                {stat.change}
              </span>
            </div>
            <p className="mt-1.5 text-2xs text-gray-400">
              Compared to previous month
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardStats;
