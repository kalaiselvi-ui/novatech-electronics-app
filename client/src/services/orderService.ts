import { API } from "../api/axiosInstance.ts";
import type { CartItemProps } from "../types/cart.type.ts";

interface OrderData {
  items: CartItemProps[];
  shippingAddress: object;
  paymentMethod: string;
  paymentStatus: string;
  paymentIntentId?: string;
  totalAmount: number;
}

export const createOrder = async (data: OrderData) => {
  const response = await API.post("/order/orders", data);
  return response.data;
};
