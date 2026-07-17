import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createProductApi,
  deleteProductApi,
  updateProductApi,
} from "../api/productApi.ts";

export const useProductMutation = () => {
  const queryClient = useQueryClient();
  const createProductMutation = useMutation({
    mutationFn: createProductApi,
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const updateProductMutation = useMutation({
    mutationFn: updateProductApi,
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
  const deleteProductMutation = useMutation({
    mutationFn: deleteProductApi,

    onSuccess: (data) => {
      console.log("Delete response:", data);

      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  return {
    createProductMutation,
    updateProductMutation,
    deleteProductMutation,
  };
};
