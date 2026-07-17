import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createCategoryApi,
  deleteCategoryApi,
  updateCategoryApi,
} from "../api/categoryApi.ts";

export const useCategoryMutations = () => {
  const queryClient = useQueryClient();
  const createCategoryMutation = useMutation({
    mutationFn: createCategoryApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });

  const updateCategoryMutation = useMutation({
    mutationFn: updateCategoryApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
  const deleteCategoryMutation = useMutation({
    mutationFn: deleteCategoryApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });

  return {
    createCategoryMutation,
    updateCategoryMutation,
    deleteCategoryMutation,
  };
};
