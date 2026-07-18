import ShippingForm, {
  type ShippingAddressData,
} from "../components/checkout/ShippingForm";
import OrderSummary from "../components/checkout/OrderSummary";
import { CreditCard, Banknote } from "lucide-react";
import stripePromise from "../lib/stripe.ts";
import { Elements } from "@stripe/react-stripe-js";
import StripeCheckout from "../components/StripeCheckout.tsx";
import { useRef, useState } from "react";
import { createPaymentIntent } from "../services/paymentService.ts";
import { useCartStore } from "../store/useCartStore.ts";
import { createOrder } from "../services/orderService.ts";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  const [shippingAddress, setShippingAddress] = useState<ShippingAddressData>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "United Arab Emirates",
  });
  const validateShippingAddress = () => {
    if (!shippingAddress.fullName.trim()) {
      alert("Please enter your full name");
      return false;
    }

    if (!shippingAddress.email.trim()) {
      alert("Please enter your email");
      return false;
    }

    if (!shippingAddress.phone.trim()) {
      alert("Please enter your phone number");
      return false;
    }

    if (!shippingAddress.address.trim()) {
      alert("Please enter your address");
      return false;
    }

    if (!shippingAddress.city.trim()) {
      alert("Please enter your city");
      return false;
    }

    if (!shippingAddress.state.trim()) {
      alert("Please enter your state");
      return false;
    }

    if (!shippingAddress.country.trim()) {
      alert("Please enter your country");
      return false;
    }

    return true;
  };
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setShippingAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSavedAddress = () => {
    alert("Trigger API or Context to autofill form fields with user data!");
  };
  const stripeRef = useRef<any>(null);
  const { cart: cartItems, clearCart } = useCartStore();

  const handlePlaceOrder = async () => {
    try {
      if (!validateShippingAddress()) return;

      if (paymentMethod === "card") {
        const { clientSecret } = await createPaymentIntent({
          items: cartItems,
        });

        const paymentIntent =
          await stripeRef.current.confirmPayment(clientSecret);
        if (paymentIntent) {
          console.log("Payment completed");
          // 1. Fire the API call and capture the response
          const response = await createOrder({
            items: cartItems,
            shippingAddress,
            paymentMethod: "CARD",
            paymentStatus: "Paid",
            paymentIntentId: paymentIntent.id,
            totalAmount,
          });
          toast.success("Order placed successfully 🎉");

          clearCart();

          // 4. Safely navigate using the returned order ID from your backend response
          if (response?.order?._id) {
            navigate(`/order-success/${response.order._id}`);
          }
        }
      }
      if (paymentMethod === "cod") {
        console.log("Create COD order");
        const response = await createOrder({
          items: cartItems,
          shippingAddress,
          paymentMethod: "COD",
          paymentStatus: "Pending",
          totalAmount,
        });

        toast.success("Order placed successfully 🎉");

        clearCart();

        // 4. Safely navigate using the returned order ID from your backend response
        if (response?.order?._id) {
          navigate(`/order-success/${response.order._id}`);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Elements stripe={stripePromise}>
      <div className="mx-auto max-w-7xl px-4 py-8">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">Checkout</h1>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Columns - Form Configurations */}
          <div className="lg:col-span-2 space-y-8">
            {/* Shipping Form Component */}
            <ShippingForm
              values={shippingAddress}
              onChange={handleInputChange}
              onUseSavedAddress={handleSavedAddress}
            />
            {/* Payment Card Wrapper */}
            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold text-gray-800">
                Payment Method
              </h2>

              <div className="space-y-3">
                {/* Cash on Delivery Option */}
                <label className="flex cursor-pointer items-center justify-between rounded-lg border p-4 transition hover:border-primary/50 hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="h-4 w-4 text-primary focus:ring-primary"
                    />
                    <div className="flex items-center gap-2">
                      <Banknote size={20} className="text-gray-500" />
                      <span className="font-medium text-gray-800">
                        Cash on Delivery (COD)
                      </span>
                    </div>
                  </div>
                </label>

                {/* Credit Card Option - Coming Soon */}
                <label className="flex cursor-pointer items-center justify-between rounded-lg border p-4 transition hover:border-primary/50 hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="h-4 w-4 text-primary focus:ring-primary"
                    />
                    <div className="flex items-center gap-2">
                      <CreditCard size={20} className="text-gray-400" />
                      <span className="font-medium text-gray-800">
                        Credit / Debit Card
                      </span>
                    </div>
                  </div>
                  {/* <span className="rounded bg-gray-200 px-2 py-0.5 text-2xs font-medium text-gray-600 uppercase tracking-wider">
                    <StripeCheckout />
                  </span> */}
                </label>
                {paymentMethod === "card" && (
                  <div className="mt-4 w-full">
                    <StripeCheckout ref={stripeRef} />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary Component */}
          <div>
            <OrderSummary
              onPlaceOrder={handlePlaceOrder}
              onTotalCalculate={setTotalAmount}
            />
          </div>
        </div>
      </div>
    </Elements>
  );
};

export default Checkout;
