import { useQuery } from "@tanstack/react-query";
import { getMyOrders } from "../services/getMyOrders.ts";

export const useMyOrders = () => {
  return useQuery({
    queryKey: ["my-orders"],
    queryFn: getMyOrders,
  });
};
