import { API } from "./axiosInstance.ts";

export const createProductApi = async (formData: FormData) => {
  const { data } = await API.post("/product/create", formData);
  return data;
};

export const updateProductApi = async ({
  id,
  formData,
}: {
  id: string;
  formData: FormData;
}) => {
  const { data } = await API.put(`/product/update/${id}`, formData);
  return data;
};

export const deleteProductApi = async (id: string) => {
  const { data } = await API.delete(`/product/delete/${id}`);
  return data;
};
export const fetchProductsApi = async () => {
  try {
    const response = await API.get("/product/all");
    return response.data.data;
  } catch (err) {
    console.error("API ERROR:", err);
    throw err;
  }
};
