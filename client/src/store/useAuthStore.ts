import { create } from "zustand";
import type { AuthState } from "../types/auth.type.ts";
import { createJSONStorage, persist } from "zustand/middleware";

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isAuthModalOpen: false,
      openAuthModal: (view = "login") =>
        set({ isAuthModalOpen: true, currentView: view }),
      closeAuthModal: () =>
        set({ isAuthModalOpen: false, currentView: "login" }),
      currentView: "login",
      setView: (view) => set({ currentView: view }),
      setUser: (user) => set({ user, isAuthenticated: true }),
      logout: () => {
        set({ user: null, isAuthenticated: false, currentView: "login" });
        localStorage.removeItem("token");
        localStorage.removeItem("auth-storage");
      },
    }),
    {
      name: "auth-storage", // Unique key in localStorage
      storage: createJSONStorage(() => localStorage),
      partialize: (state: AuthState) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
);
