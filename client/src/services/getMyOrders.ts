import { API } from "../api/axiosInstance.ts";
import type { OrderProps } from "../types/order.type.ts";

export const getMyOrders = async (): Promise<{ orders: OrderProps[] }> => {
  const response = await API.get("/api/order/my-orders");
  return response.data;
};
