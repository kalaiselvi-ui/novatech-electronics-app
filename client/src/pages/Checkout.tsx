import React from "react";
import ShippingForm from "../components/checkout/ShippingForm";
import OrderSummary from "../components/checkout/OrderSummary";
import { CreditCard, Banknote } from "lucide-react";

const Checkout = () => {
  const handleUseSavedAddress = () => {
    alert("Trigger API or Context to autofill form fields with user data!");
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold text-gray-900">Checkout</h1>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left Columns - Form Configurations */}
        <div className="lg:col-span-2 space-y-8">
          {/* Shipping Form Component */}
          <ShippingForm onUseSavedAddress={handleUseSavedAddress} />

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
                    defaultChecked
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
              <label className="flex cursor-not-allowed items-center justify-between rounded-lg border border-gray-100 bg-gray-50/50 p-4 opacity-60">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                    disabled
                    className="h-4 w-4"
                  />
                  <div className="flex items-center gap-2">
                    <CreditCard size={20} className="text-gray-400" />
                    <span className="font-medium text-gray-400">
                      Credit / Debit Card
                    </span>
                  </div>
                </div>
                <span className="rounded bg-gray-200 px-2 py-0.5 text-2xs font-medium text-gray-600 uppercase tracking-wider">
                  Coming Soon
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Right Column - Order Summary Component */}
        <div>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
