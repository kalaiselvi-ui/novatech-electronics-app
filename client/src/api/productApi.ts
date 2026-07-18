import { API } from "./axiosInstance.ts";

export const createProductApi = async (formData: FormData) => {
  const { data } = await API.post("/api/product/create", formData);
  return data;
};

export const updateProductApi = async ({
  id,
  formData,
}: {
  id: string;
  formData: FormData;
}) => {
  const { data } = await API.put(`/api/product/update/${id}`, formData);
  return data;
};

export const deleteProductApi = async (id: string) => {
  const { data } = await API.delete(`/api/product/delete/${id}`);
  return data;
};
export const fetchProductsApi = async () => {
  try {
    const response = await API.get("/api/product/all");
    return response.data.data;
  } catch (err) {
    console.error("API ERROR:", err);
    throw err;
  }
};
