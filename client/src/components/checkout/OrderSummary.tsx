import { ShieldCheck, Truck } from "lucide-react";
import { useCartStore } from "../../store/useCartStore.ts";
import { productList } from "../../data/product.ts";

const OrderSummary = () => {
  const { cart: cartItems } = useCartStore();

  // 1. Calculate the Subtotal up here at the top level!
  const subtotal = cartItems.reduce((acc, item) => {
    const productDetails = productList.find((p) => p.id === item.id);
    return acc + (productDetails ? productDetails.price * item.quantity : 0);
  }, 0);
  const shipping = 0; // Free
  const tax = 25;
  const total = subtotal + shipping + tax;

  return (
    <div className="sticky top-24 space-y-6">
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">
          Order Summary
        </h2>

        {/* Product List */}
        <div className="max-h-60 overflow-y-auto border-b pb-4 space-y-4">
          {cartItems.map((item) => {
            const productDetails = productList.find((p) => p.id === item.id);

            // If the product doesn't exist in your master data, skip rendering it
            if (!productDetails) return null;

            return (
              <div
                key={item.id}
                className="flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={productDetails.imageUrls[0]}
                    alt={productDetails.name}
                    className="h-12 w-12 rounded-lg border object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-gray-800 text-sm line-clamp-1">
                      {productDetails.name}
                    </h4>
                    <p className="text-xs text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>
                </div>
                <p className="font-semibold text-gray-800 text-sm">
                  ${productDetails.price * item.quantity}
                </p>
              </div>
            );
          })}
        </div>

        {/* Coupon Code Section */}
        <div className="my-4 flex gap-2 border-b pb-4">
          <input
            type="text"
            placeholder="Coupon Code"
            className="w-full rounded-lg border px-3 py-2 text-sm outline-none transition focus:border-primary"
          />
          <button className="rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 transition">
            Apply
          </button>
        </div>

        {/* Calculations */}
        <div className="border-b pb-4 text-sm text-gray-600 space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span className="font-semibold text-gray-800">${subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span className="font-semibold text-green-600">
              {shipping === 0 ? "Free" : `$${shipping}`}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Estimated Tax</span>
            <span className="font-semibold text-gray-800">${tax}</span>
          </div>
        </div>

        {/* Grand Total */}
        <div className="mt-4 flex items-center justify-between text-lg font-bold text-gray-900">
          <span>Total</span>
          <span>${total}</span>
        </div>

        {/* Main CTA */}
        <button className="mt-6 w-full rounded-lg bg-primary py-3 text-center font-semibold text-white transition hover:opacity-90">
          Place Order
        </button>
      </div>

      {/* Trust Badges */}
      <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 space-y-3">
        <div className="flex items-start gap-3 text-sm text-gray-600">
          <Truck className="mt-0.5 text-primary" size={18} />
          <div>
            <p className="font-semibold text-gray-800">Estimated Delivery</p>
            <p className="text-xs text-gray-500">
              Delivery within 2-3 business days.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 text-sm text-gray-600">
          <ShieldCheck className="mt-0.5 text-primary" size={18} />
          <div>
            <p className="font-semibold text-gray-800">Secure Checkout</p>
            <p className="text-xs text-gray-500">
              Your payment credentials are safely processed and encrypted.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
