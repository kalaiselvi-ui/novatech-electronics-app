import { create } from "zustand";
import type { AuthState } from "../types/auth.type.ts";

export interface User {
  id: string;
  email: string;
  name?: string;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  currentView: "login",
  setView: (view) => set({ currentView: view }),
  setUser: (user) => set({ user, isAuthenticated: true }),
  logout: () => {
    set({ user: null, isAuthenticated: false });
    localStorage.removeItem("token");
  },
}));
