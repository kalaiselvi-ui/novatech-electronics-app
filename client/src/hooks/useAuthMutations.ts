import { useMutation } from "@tanstack/react-query";
import {
  forgotPasswordApi,
  googleLoginApi,
  loginApi,
  registerApi,
} from "../api/authApi.ts";
import { useAuthStore } from "../store/useAuthStore.ts";

export const useAuthMutations = () => {
  const setUser = useAuthStore((state) => state.setUser);

  const loginMutation = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      setUser(data);
    },
  });
  // 2. Register Mutation Hook
  const registerMutation = useMutation({
    mutationFn: registerApi,
    onSuccess: (data) => {
      setUser(data);
    },
  });

  // 2. Register Mutation Hook
  const forgotPasswordMutation = useMutation({
    mutationFn: forgotPasswordApi,
  });

  const googleLoginMutation = useMutation({
    mutationFn: googleLoginApi,
    onSuccess: (data) => {
      setUser(data.user);
    },
  });

  return {
    loginMutation,
    registerMutation,
    forgotPasswordMutation,
    googleLoginMutation,
  };
};
