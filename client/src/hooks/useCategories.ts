import { useQuery } from "@tanstack/react-query";
import { fetchCategoriesApi } from "../api/categoryApi.ts";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategoriesApi,
  });
};
