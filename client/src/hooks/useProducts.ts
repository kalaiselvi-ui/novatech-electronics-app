import { useQuery } from "@tanstack/react-query";
import { fetchProductsApi } from "../api/productApi.ts";
import { type ProductProps } from "../types/type.ts";

export const useProducts = () => {
  return useQuery<ProductProps[]>({
    queryKey: ["products"],
    queryFn: fetchProductsApi,
  });
};
