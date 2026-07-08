import React from "react";

// Mock transactional records
const recentOrdersData = [
  {
    id: "#1023",
    customer: "John Doe",
    email: "john@example.com",
    status: "Delivered",
    total: "$540.00",
    date: "Today, 02:30 PM",
  },
  {
    id: "#1024",
    customer: "Alice Smith",
    email: "alice@example.com",
    status: "Pending",
    total: "$320.50",
    date: "Today, 01:15 PM",
  },
  {
    id: "#1025",
    customer: "Mark Johnson",
    email: "mark@example.com",
    status: "Shipped",
    total: "$180.00",
    date: "Yesterday",
  },
  {
    id: "#1026",
    customer: "Sarah Williams",
    email: "sarah@example.com",
    status: "Delivered",
    total: "$950.00",
    date: "Yesterday",
  },
  {
    id: "#1027",
    customer: "Michael Brown",
    email: "mike@example.com",
    status: "Pending",
    total: "$45.00",
    date: "Oct 14, 2026",
  },
];

// Helper to determine tailwind classes dynamically for execution status badges
const getStatusStyles = (status: string) => {
  switch (status) {
    case "Delivered":
      return "bg-emerald-50 text-emerald-700 border-emerald-100";
    case "Pending":
      return "bg-amber-50 text-amber-700 border-amber-100";
    case "Shipped":
      return "bg-indigo-50 text-indigo-700 border-indigo-100";
    default:
      return "bg-gray-50 text-gray-700 border-gray-100";
  }
};

const RecentOrders = () => {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm flex flex-col justify-between">
      {/* Component Header Block */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Recent Orders</h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Latest customer purchase records
          </p>
        </div>
        <button className="text-xs font-semibold text-primary hover:underline">
          View All
        </button>
      </div>

      {/* Responsive Table Wrapper */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-gray-100 text-2xs font-semibold uppercase tracking-wider text-gray-400 bg-gray-50/50">
              <th className="py-3 px-4 rounded-l-lg">Order ID</th>
              <th className="py-3 px-4">Customer</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 rounded-r-lg text-right">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {recentOrdersData.map((order) => (
              <tr
                key={order.id}
                className="group hover:bg-gray-50/50 transition"
              >
                <td className="py-3.5 px-4 font-semibold text-gray-900">
                  {order.id}
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex flex-col min-w-0">
                    <span className="font-medium text-gray-800 truncate">
                      {order.customer}
                    </span>
                    <span className="text-2xs text-gray-400 mt-0.5 truncate">
                      {order.email}
                    </span>
                  </div>
                </td>
                <td className="py-3.5 px-4">
                  <span
                    className={`inline-flex items-center rounded-md border px-2 py-0.5 font-semibold text-2xs tracking-wide ${getStatusStyles(order.status)}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-3.5 px-4 text-right">
                  <div className="flex flex-col items-end">
                    <span className="font-bold text-gray-900">
                      {order.total}
                    </span>
                    <span className="text-2xs text-gray-400 mt-0.5">
                      {order.date}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
