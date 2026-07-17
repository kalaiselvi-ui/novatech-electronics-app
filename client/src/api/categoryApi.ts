import { type ApiResponse } from "../types/api.ts";
import type { Category } from "../types/category.ts";
import { API } from "./axiosInstance.ts";

export const createCategoryApi = async (formData: FormData) => {
  const { data } = await API.post("/category/create", formData);
  return data;
};

export const updateCategoryApi = async ({
  id,
  formData,
}: {
  id: string;
  formData: FormData;
}) => {
  const { data } = await API.put(`/category/update/${id}`, formData);
  return data;
};

export const deleteCategoryApi = async (id: string) => {
  const { data } = await API.delete(`/category/delete/${id}`);
  return data;
};

export const fetchCategoriesApi = async (): Promise<Category[]> => {
  const { data } = await API.get<ApiResponse<Category[]>>("/category/all");
  return data.data;
};
