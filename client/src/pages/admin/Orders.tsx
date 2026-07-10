// pages/AdminOrdersPage.tsx
import { useState } from "react";
import { Eye, Package, ArrowLeft } from "lucide-react";
import { usePagination } from "../../hooks/usePagination.ts";
import Pagination from "../../components/Pagination.tsx";

// 1. Types for Order Management
interface OrderItem {
  id: string;
  customerName: string;
  email: string;
  date: string;
  total: number;
  status: "Pending" | "Processing" | "Shipped" | "Delivered" | "Cancelled";
  itemsCount: number;
}

const Orders = () => {
  // 2. Mock Dataset for Orders
  const [orders, setOrders] = useState<OrderItem[]>([
    {
      id: "ORD-9842",
      customerName: "Sarah Connor",
      email: "sarah.c@gmail.com",
      date: "2026-07-06",
      total: 1299.0,
      status: "Processing",
      itemsCount: 1,
    },
    {
      id: "ORD-9841",
      customerName: "Alex Mercer",
      email: "alex.m@outlook.com",
      date: "2026-07-06",
      total: 299.98,
      status: "Pending",
      itemsCount: 2,
    },
    {
      id: "ORD-9840",
      customerName: "Elena Fisher",
      email: "elena.f@sony.com",
      date: "2026-07-05",
      total: 149.99,
      status: "Shipped",
      itemsCount: 1,
    },
    {
      id: "ORD-9839",
      customerName: "Bruce Wayne",
      email: "bruce@waynecorp.com",
      date: "2026-07-04",
      total: 5450.0,
      status: "Delivered",
      itemsCount: 5,
    },
    {
      id: "ORD-9838",
      customerName: "Peter Parker",
      email: "peter.p@dailybugle.com",
      date: "2026-07-04",
      total: 89.95,
      status: "Cancelled",
      itemsCount: 3,
    },
  ]);

  // Selected order details modal/view controller
  const [selectedOrder, setSelectedOrder] = useState<OrderItem | null>(null);

  // 3. Pagination Setup (10 rows per page)
  const {
    currentItems: paginatedOrders,
    currentPage,
    totalPages,
    goToPage,
  } = usePagination({ data: orders, itemsPerPage: 10 });

  // Status Badge Component
  const StatusBadge = ({ status }: { status: OrderItem["status"] }) => {
    const styles = {
      Pending: "bg-amber-50 text-amber-700 border-amber-200",
      Processing: "bg-blue-50 text-blue-700 border-blue-200",
      Shipped: "bg-indigo-50 text-indigo-700 border-indigo-200",
      Delivered: "bg-emerald-50 text-emerald-700 border-emerald-200",
      Cancelled: "bg-rose-50 text-rose-700 border-rose-200",
    };

    return (
      <span
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full border ${styles[status]}`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-current" />
        {status}
      </span>
    );
  };

  const handleUpdateStatus = (id: string, newStatus: OrderItem["status"]) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order,
      ),
    );
    if (selectedOrder?.id === id) {
      setSelectedOrder({ ...selectedOrder, status: newStatus });
    }
  };

  return (
    <div className="w-full space-y-4 md:space-y-6">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 w-full">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            Order Management
          </h2>
          <p className="text-xs md:text-sm text-gray-500">
            Monitor incoming invoices, handle dispatches, and update fulfillment
            records.
          </p>
        </div>
      </div>

      {selectedOrder ? (
        /* Detailed View Mode */
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 md:p-6 space-y-6 animate-in fade-in-50 duration-200">
          <button
            onClick={() => setSelectedOrder(null)}
            className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition"
          >
            <ArrowLeft size={16} />
            Back to Orders List
          </button>

          <div className="border-b border-gray-100 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-bold text-gray-900">
                  {selectedOrder.id}
                </h3>
                <StatusBadge status={selectedOrder.status} />
              </div>
              <p className="text-xs text-gray-400 mt-1">
                Placed on {selectedOrder.date}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Update Status:
              </label>
              <select
                value={selectedOrder.status}
                onChange={(e) =>
                  handleUpdateStatus(
                    selectedOrder.id,
                    e.target.value as OrderItem["status"],
                  )
                }
                className="text-sm bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 font-medium text-gray-700 focus:outline-none focus:border-primary"
              >
                <option value="Pending">Pending</option>
                <option value="Processing">Processing</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
          </div>

          {/* Dummy customer layout profile info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Customer Profile
              </h4>
              <div className="bg-gray-50 rounded-lg p-4 space-y-1 text-sm text-gray-600">
                <p className="font-semibold text-gray-900">
                  {selectedOrder.customerName}
                </p>
                <p>{selectedOrder.email}</p>
                <p className="text-xs text-gray-400 pt-2">
                  Fulfillment items Count: {selectedOrder.itemsCount} pcs
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Payment Overview
              </h4>
              <div className="bg-gray-50 rounded-lg p-4 flex justify-between items-center">
                <span className="text-sm text-gray-600 font-medium">
                  Total Gross Value
                </span>
                <span className="text-xl font-bold text-gray-900">
                  ${selectedOrder.total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Primary Orders Data Table Grid Container */
        <div className="space-y-4">
          <div className="w-full bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse text-sm table-auto">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200 text-gray-600 font-semibold text-xs uppercase tracking-wider">
                    <th className="px-4 py-3 md:px-6 md:py-4">Order ID</th>
                    <th className="px-4 py-3 md:px-6 md:py-4">Customer</th>
                    <th className="px-4 py-3 md:px-6 md:py-4 hidden sm:table-cell">
                      Date
                    </th>
                    <th className="px-4 py-3 md:px-6 md:py-4 hidden md:table-cell">
                      Items
                    </th>
                    <th className="px-4 py-3 md:px-6 md:py-4">Total Price</th>
                    <th className="px-4 py-3 md:px-6 md:py-4">Status</th>
                    <th className="px-4 py-3 md:px-6 md:py-4 text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  {orders.length === 0 ? (
                    <tr>
                      <td
                        colSpan={7}
                        className="text-center py-12 text-gray-400 bg-white"
                      >
                        <Package
                          className="mx-auto text-gray-300 mb-2"
                          size={36}
                        />
                        No orders recorded yet.
                      </td>
                    </tr>
                  ) : (
                    paginatedOrders.map((order) => (
                      <tr
                        key={order.id}
                        className="hover:bg-gray-50/70 transition-colors"
                      >
                        {/* Order ID */}
                        <td className="px-4 py-3 md:px-6 md:py-4 font-bold text-primary whitespace-nowrap">
                          {order.id}
                        </td>

                        {/* Customer Information Column */}
                        <td className="px-4 py-3 md:px-6 md:py-4 font-medium text-gray-900">
                          <div className="flex flex-col">
                            <span className="truncate max-w-[130px] sm:max-w-xs">
                              {order.customerName}
                            </span>
                            <span className="text-xs text-gray-400 font-normal hidden sm:inline">
                              {order.email}
                            </span>
                          </div>
                        </td>

                        {/* Order Placement Date (Hidden on mobile phones) */}
                        <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap text-gray-500 hidden sm:table-cell">
                          {order.date}
                        </td>

                        {/* Product Items Volume Count */}
                        <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap text-gray-600 hidden md:table-cell">
                          {order.itemsCount}{" "}
                          {order.itemsCount === 1 ? "item" : "items"}
                        </td>

                        {/* Total Value */}
                        <td className="px-4 py-3 md:px-6 md:py-4 font-semibold text-gray-900 whitespace-nowrap">
                          ${order.total.toFixed(2)}
                        </td>

                        {/* Live Fulfillment Status */}
                        <td className="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap">
                          <StatusBadge status={order.status} />
                        </td>

                        {/* Action Controllers */}
                        <td className="px-4 py-3 md:px-6 md:py-4 text-right whitespace-nowrap">
                          <button
                            onClick={() => setSelectedOrder(order)}
                            title="Review Complete Invoice File"
                            className="p-1.5 text-gray-500 hover:text-primary rounded-lg hover:bg-blue-50 transition"
                          >
                            <Eye size={16} className="text-primary" />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination Blocks - Auto centers completely below layout container */}
          {totalPages > 1 && (
            <div className="flex justify-center pt-2">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={goToPage}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Orders;
