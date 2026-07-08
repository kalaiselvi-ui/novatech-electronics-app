import { useState } from "react";
import { X } from "lucide-react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import type { ViewState } from "../../types/auth.type.ts";
import ForgotPasswordForm from "./ForgotPassword.tsx";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [view, setView] = useState<ViewState>("login");

  if (!isOpen) return null;

  return (
    // 1. Removed "no-scrollbar" to ensure viewports can render a scroll context if needed
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto no-scrollbar sm:items-center">
      {/* 
        2. Added `overflow-hidden` here! This fixes the cut rounded-2xl borders.
        3. Changed max-h to a safe viewport fraction [calc(100vh-3rem)] so scrolling triggers reliably.
      */}
      <div className="relative my-auto w-full max-w-md max-h-[calc(100vh-3rem)] flex flex-col rounded-2xl bg-white shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        {/* Close Button - Placed inside a solid z-index stack above the scrolling panel */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-30 rounded-full p-2 bg-white/80 backdrop-blur-sm transition hover:bg-gray-100"
        >
          <X size={20} />
        </button>

        {/* 
          4. Content Wrapper: Added min-h-0 so the flexible layout box can shrink down 
             smaller than its text contents, forcing the scroll mechanics to run perfectly.
        */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 flex flex-col min-h-0 no-scrollbar">
          {/* Heading */}
          <div className="mb-5 text-center mt-2">
            <h2 className="text-3xl font-bold text-primary">
              {view === "login" && "Welcome Back"}
              {view === "register" && "Create Account"}
              {view === "forgot-password" && "Reset Password"}
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              {view === "login" && "Login to continue shopping."}
              {view === "register" && "Create your account to get started."}
              {view === "forgot-password" &&
                "Enter your email to receive a password recovery link."}
            </p>
          </div>

          {/* Forms Area - Wrapped with flex-1 to distribute height correctly */}
          <div className="flex-1">
            {view === "login" && (
              <LoginForm onForgotPassword={() => setView("forgot-password")} />
            )}
            {view === "register" && <RegisterForm />}

            {view === "forgot-password" && (
              <ForgotPasswordForm onBackToLogin={() => setView("login")} />
            )}
          </div>

          {/* Toggle Footnote Links (Hidden if on Forgot Password screen, as it handles its own navigation back) */}
          {view !== "forgot-password" && (
            <div className="text-center text-sm mt-5 mb-1">
              {view === "login" ? (
                <>
                  Don't have an account?{" "}
                  <button
                    onClick={() => setView("register")}
                    className="font-semibold text-primary hover:underline"
                  >
                    Register
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button
                    onClick={() => setView("login")}
                    className="font-semibold text-primary hover:underline"
                  >
                    Login
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
