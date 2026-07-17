import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  forgotPasswordApi,
  googleLoginApi,
  loginApi,
  logoutApi,
  registerApi,
  resetPasswordApi,
} from "../api/authApi.ts";
import { useAuthStore } from "../store/useAuthStore.ts";

export const useAuthMutations = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const logout = useAuthStore((state) => state.logout);
  const queryClient = useQueryClient();

  const loginMutation = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      console.log("Login API Response:", data); // 👈 Inspect this output in DevTools!
      setUser(data.user);
    },
  });
  // 2. Register Mutation Hook
  const registerMutation = useMutation({
    mutationFn: registerApi,
    onSuccess: (data) => {
      setUser(data.user);
    },
  });

  // 2. Register Mutation Hook
  const logoutMutation = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      logout();
      queryClient.clear();
    },
    onError: (error) => {
      // Fallback: Clear local session even if server request fails
      logout();
      queryClient.clear();
      console.error("Logout error:", error);
    },
  });

  // 2. Register Mutation Hook
  const forgotPasswordMutation = useMutation({
    mutationFn: forgotPasswordApi,
  });

  // 2. Register Mutation Hook
  const resetPasswordMutation = useMutation({
    mutationFn: resetPasswordApi,
    onSuccess: (data) => {
      setUser(data.user);
    },
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
    resetPasswordMutation,
    logoutMutation,
  };
};
