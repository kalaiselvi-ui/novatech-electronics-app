import { Package, Calendar, CreditCard, ShoppingBag } from "lucide-react";
import { useMyOrders } from "../../hooks/useOrders.ts";

interface Product {
  _id: string;
  name: string;
  images: string[];
}

interface OrderItem {
  product: Product;
  quantity: number;
  price: number;
}

// Updated to use your exact status values
export interface Order {
  _id: string;
  orderStatus: "Processing" | "Shipped" | "Delivered" | "Cancelled";
  createdAt: string;
  items: OrderItem[];
  paymentStatus: string;
  paymentMethod: string;
  totalAmount: number;
}

const MyOrders = () => {
  const { data, isLoading } = useMyOrders();

  const orders: Order[] = data?.orders ?? [];

  const handleStatusChange = async (
    orderId: string,
    newStatus: Order["orderStatus"],
  ) => {
    try {
      console.log(`Updating order ${orderId} to ${newStatus}`);
      // Trigger your API patch request or mutation hook here
      // e.g., await updateStatus({ orderId, status: newStatus });
    } catch (error) {
      console.error("Failed to update status", error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-900" />
      </div>
    );
  }

  if (!orders.length) {
    return (
      <div className="max-w-md mx-auto my-16 text-center px-4">
        <div className="inline-flex p-4 rounded-full bg-slate-50 text-slate-400 mb-4">
          <Package size={32} />
        </div>
        <h2 className="text-xl font-semibold text-slate-900 mb-1">
          No orders found
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 antialiased">
      <div className="flex items-center gap-3 mb-8">
        <ShoppingBag className="text-slate-800" size={28} />
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
          Order Management
        </h1>
      </div>

      <div className="space-y-8">
        {orders.map((order) => (
          <div
            key={order._id}
            className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden"
          >
            {/* Header Block with Select Dropdown */}
            <div className="bg-slate-50/70 border-b border-slate-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="grid grid-cols-2 sm:flex sm:items-center gap-x-8 gap-y-2">
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                    Order ID
                  </p>
                  <p className="font-mono text-sm font-semibold text-slate-700">
                    #{order._id.slice(-8).toUpperCase()}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                    Date Placed
                  </p>
                  <p className="text-sm font-medium text-slate-600 flex items-center gap-1.5">
                    <Calendar size={14} className="text-slate-400" />
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Status Selector Dropdown mapping your precise types */}
              <div className="flex items-center gap-2">
                <label className="text-xs font-semibold text-slate-500 uppercase">
                  Status:
                </label>
                <select
                  value={order.orderStatus}
                  onChange={(e) =>
                    handleStatusChange(
                      order._id,
                      e.target.value as Order["orderStatus"],
                    )
                  }
                  className={`text-xs font-semibold px-3 py-1.5 rounded-lg border bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer transition-colors
                    ${order.orderStatus === "Delivered" ? "text-emerald-700 border-emerald-200 bg-emerald-50/50" : ""}
                    ${order.orderStatus === "Processing" ? "text-amber-700 border-amber-200 bg-amber-50/50" : ""}
                    ${order.orderStatus === "Shipped" ? "text-blue-700 border-blue-200 bg-blue-50/50" : ""}
                    ${order.orderStatus === "Cancelled" ? "text-rose-700 border-rose-200 bg-rose-50/50" : ""}
                  `}
                >
                  <option value="Processing">Processing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
            </div>

            {/* Products List */}
            <div className="divide-y divide-slate-100 px-6">
              {order.items.map((item) => (
                <div
                  key={item.product._id}
                  className="py-5 flex items-start gap-4"
                >
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-20 h-20 rounded-lg object-cover border bg-slate-50"
                  />
                  <div className="flex-1 min-w-0 pt-0.5">
                    <h3 className="font-medium text-slate-900 truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">
                      Qty:{" "}
                      <span className="font-medium text-slate-700">
                        {item.quantity}
                      </span>
                    </p>
                  </div>
                  <div className="text-right pt-0.5 font-semibold text-slate-900">
                    ${(item.price * item.quantity).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Summary */}
            <div className="bg-slate-50/30 border-t border-slate-200 px-6 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600">
                <div className="flex items-center gap-1.5">
                  <CreditCard size={15} className="text-slate-400" />
                  <span>Payment:</span>
                  <span
                    className={`font-medium ${order.paymentStatus.toLowerCase() === "paid" ? "text-emerald-600" : "text-slate-700"}`}
                  >
                    {order.paymentStatus}
                  </span>
                </div>
                <div className="hidden sm:inline text-slate-300">|</div>
                <div>
                  Method:{" "}
                  <span className="font-medium text-slate-700">
                    {order.paymentMethod}
                  </span>
                </div>
              </div>
              <div className="flex items-baseline justify-between sm:justify-end gap-4 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100">
                <span className="text-sm font-medium text-slate-500">
                  Total Amount:
                </span>
                <span className="text-2xl font-bold text-slate-900">
                  ${order.totalAmount.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
