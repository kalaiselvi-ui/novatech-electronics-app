import axios from "axios";
import type { ForgotPasswordPayload } from "../types/auth.type.ts";

export const loginApi = async (formData: Record<string, any>) => {
  const { data } = await axios.post(
    "http://localhost:3000/api/user/login",
    formData,
  );
  return data;
};

export const registerApi = async (formData: Record<string, any>) => {
  const { data } = await axios.post(
    "http://localhost:3000/api/user/register",
    formData,
    {
      headers: {
        Authorization: `Bearer`,
      },
    },
  );
  return data;
};

export const forgotPasswordApi = async (email: ForgotPasswordPayload) => {
  const { data } = await axios.post(
    "http://localhost:3000/api/user/register",
    email,
  );
  return data;
};
export const googleLoginApi = async (payload: { credential: string }) => {
  const response = await axios.post("/api/auth/google", payload);

  return response.data;
};
