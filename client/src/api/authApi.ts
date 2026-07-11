import axios from "axios";
import type { ForgotPasswordPayload } from "../types/auth.type.ts";
import { API } from "./axiosInstance.ts";

export const loginApi = async (formData: Record<string, any>) => {
  const { data } = await API.post("/user/login", formData);
  return data;
};

export const registerApi = async (formData: Record<string, any>) => {
  const { data } = await API.post("/user/register", formData);

  return data;
};

export const forgotPasswordApi = async (email: ForgotPasswordPayload) => {
  const { data } = await API.post("/user/forgot-password", email);

  return data;
};
export const resetPasswordApi = async (formData: Record<string, any>) => {
  const { data } = await API.post("/user/reset-password", formData);
  return data;
};
export const logoutApi = async (formData: Record<string, any>) => {
  const { data } = await API.post("/user/logout");
  return data;
};
export const googleLoginApi = async (payload: { credential: string }) => {
  const response = await axios.post("/api/auth/google", payload);

  return response.data;
};
