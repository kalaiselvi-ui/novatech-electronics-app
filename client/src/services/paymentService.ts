import { API } from "../api/axiosInstance.ts";
import type { CartItemProps } from "../types/cart.type.ts";

interface PaymentIntentPayload {
  items: CartItemProps[];
}

export const createPaymentIntent = async (data: PaymentIntentPayload) => {
  const response = await API.post("/payment/create-payment-intent", data);

  return response.data;
};
