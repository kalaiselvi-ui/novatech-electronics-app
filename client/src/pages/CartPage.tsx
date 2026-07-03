import { useCartStore } from "../store/useCartStore.ts";
import { productList } from "../data/product.ts";
import { ArrowRight, Trash } from "lucide-react";
import { Link } from "react-router-dom";

const CartPage = () => {
  // const [quantity, setQuantity] = useState(1);

  const {
    cart: cartItems,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
  } = useCartStore();

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <h2 className="text-3xl font-bold">Your cart is empty</h2>
        <p className="text-gray-500 mt-2">
          Start adding products to your cart.
        </p>

        <Link
          to="/products"
          className="mt-6 group flex gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:animate-pulse"
        >
          Continue Shopping
          <ArrowRight />
        </Link>
      </div>
    );
  }

  // 1. Calculate the Subtotal up here at the top level!
  const subtotal = cartItems.reduce((acc, item) => {
    const productDetails = productList.find((p) => p.id === item.id);
    return acc + (productDetails ? productDetails.price * item.quantity : 0);
  }, 0);

  // 2. Derive shipping and grand total from the subtotal
  const shipping = subtotal > 500 || subtotal === 0 ? 0 : 15;
  const grandTotal = subtotal + shipping;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-sans">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side: Cart Items List */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => {
            // Find the full product object from your master array using item.productId
            const productDetails = productList.find((p) => p.id === item.id);

            // If the product doesn't exist in your master data, skip rendering it
            if (!productDetails) return null;

            return (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center justify-between border-b pb-4 gap-4"
              >
                {/* Product Image */}
                <img
                  src={productDetails.imageUrls[0]}
                  alt={productDetails.name}
                  className="w-24 h-24 object-cover rounded-lg bg-gray-50 border"
                />

                {/* Product Info */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-semibold text-lg text-gray-800">
                    {productDetails.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    ${productDetails.price.toFixed(2)} each
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center border border-gray-300 rounded-md bg-white shadow-sm">
                  <button
                    disabled={item.quantity === 1}
                    onClick={() => decrementQuantity(item.id)}
                    className="px-3 py-1 text-gray-600 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors font-semibold"
                  >
                    −
                  </button>
                  <span className="px-4 font-medium text-gray-800">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => incrementQuantity(item.id)}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors font-semibold"
                  >
                    +
                  </button>
                </div>

                {/* Price & Actions */}
                <div className="text-center sm:text-right min-w-[100px]">
                  <p className="font-bold text-lg text-gray-900">
                    ${(productDetails.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Trash-icon"
                    className="text-sm text-red-500 hover:text-red-700 hover:underline mt-1 transition-colors"
                  >
                    <Trash size={20} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side: Order Summary Sidebar */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 h-fit shadow-sm">
          <h2 className="text-xl font-bold mb-4 text-gray-900">
            Order Summary
          </h2>

          <div className="space-y-3 text-sm text-gray-600 border-b border-gray-200 pb-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-semibold text-gray-900">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="font-semibold text-gray-900">
                {shipping === 0
                  ? "🎉 You unlocked free shipping!"
                  : `$${shipping.toFixed(2)}`}
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 mb-6">
            <span className="text-base font-bold text-gray-900">Total</span>
            <span className="text-2xl font-black text-gray-900">
              ${grandTotal.toFixed(2)}
            </span>
          </div>

          <button className="w-full bg-primary duration-100 text-white py-3 rounded-lg font-semibold hover:bg-primary/80 transition-colors shadow-md">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
