import { useMyOrders } from "../hooks/useOrders";
import { Package, Calendar, CreditCard, ShoppingBag } from "lucide-react";

const MyOrders = () => {
  const { data, isLoading } = useMyOrders();

  const orders = data?.orders ?? [];

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
        <p className="text-sm text-slate-500">
          Looks like you haven't placed any orders yet.
        </p>
      </div>
    );
  }

  // Helper for dynamic status styling
  const getStatusStyles = (status: string) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return "bg-emerald-50 text-emerald-700 border-emerald-200/60";
      case "processing":
      case "pending":
        return "bg-amber-50 text-amber-700 border-amber-200/60";
      case "cancelled":
        return "bg-rose-50 text-rose-700 border-rose-200/60";
      default:
        return "bg-slate-50 text-slate-700 border-slate-200/60";
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 antialiased">
      <div className="flex items-center gap-3 mb-8">
        <ShoppingBag className="text-slate-800" size={28} />
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
          Order History
        </h1>
      </div>

      <div className="space-y-8">
        {orders.map((order) => (
          <div
            key={order._id}
            className="rounded-xl border border-slate-200/80 bg-white shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md"
          >
            {/* Header Block */}
            <div className="bg-slate-50/70 border-b border-slate-200/80 px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
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
                    {new Date(order.createdAt).toLocaleDateString(undefined, {
                      dateStyle: "medium",
                    })}
                  </p>
                </div>
              </div>

              <div className="flex items-center sm:self-center">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getStatusStyles(order.orderStatus)}`}
                >
                  {order.orderStatus}
                </span>
              </div>
            </div>

            {/* Products List */}
            <div className="divide-y divide-slate-100 px-6">
              {order.items.map((item) => (
                <div
                  key={item.product._id}
                  className="py-5 flex items-start gap-4 sm:gap-6"
                >
                  <div className="relative group flex-shrink-0">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-20 h-20 rounded-lg object-cover border border-slate-150 bg-slate-50"
                    />
                  </div>

                  <div className="flex-1 min-w-0 pt-0.5">
                    <h3 className="font-medium text-slate-900 truncate hover:text-blue-600 cursor-pointer transition-colors">
                      {item.product.name}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1 flex items-center gap-3">
                      <span>
                        Qty:{" "}
                        <span className="font-medium text-slate-700">
                          {item.quantity}
                        </span>
                      </span>
                      <span className="text-slate-300">|</span>
                      <span>
                        Unit Price:{" "}
                        <span className="font-medium text-slate-700">
                          ${item.price.toLocaleString()}
                        </span>
                      </span>
                    </p>
                  </div>

                  <div className="text-right pt-0.5 font-semibold text-slate-900">
                    ${(item.price * item.quantity).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Footer */}
            <div className="bg-slate-50/30 border-t border-slate-200/60 px-6 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
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
