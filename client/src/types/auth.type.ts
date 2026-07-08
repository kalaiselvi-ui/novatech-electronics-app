export type ViewState = "login" | "register" | "forgot-password";

// Define strict types for the user data payload
export interface User {
  id: string;
  email: string;
  name?: string;
}

export interface ForgotPasswordPayload {
  email: string;
}

export type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  currentView: ViewState; // Track which screen is showing
  setView: (view: ViewState) => void; // Action to switch screens
  setUser: (user: User) => void;
  logout: () => void;
};
