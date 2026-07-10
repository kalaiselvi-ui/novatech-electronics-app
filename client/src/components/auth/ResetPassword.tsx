import React, { useState } from "react";
import { Eye, EyeOff, Lock, CheckCircle2, AlertCircle } from "lucide-react";
import {
  resetPasswordSchema,
  type ResetPasswordFormData,
} from "../../schemas/auth.schema.ts";

interface ResetPasswordProps {
  onBackToLogin?: () => void;
}

export const ResetPassword = ({ onBackToLogin }: ResetPasswordProps) => {
  // 1. Extract the token from the URL
  const queryParams = new URLSearchParams(window.location.search);
  const token = queryParams.get("token");

  // 2. State management
  const [formData, setFormData] = useState<ResetPasswordFormData>({
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear field-specific error on typing
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    if (!token) {
      setStatusMessage(
        "Invalid or missing reset token. Please request a new link.",
      );
      return;
    }

    // 3. Validate form data with Zod
    const result = resetPasswordSchema.safeParse(formData);

    if (!result.success) {
      const formattedErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as string;
        if (fieldName && !formattedErrors[fieldName]) {
          formattedErrors[fieldName] = issue.message;
        }
      });
      setErrors(formattedErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      // 4. API Call placeholder
      /*
      await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token: token,
          newPassword: result.data.password,
        }),
      });
      */

      setIsSuccess(true);
    } catch (error) {
      setStatusMessage("Failed to reset password. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-6 rounded-2xl bg-white p-8 shadow-xl border border-gray-100">
        {!isSuccess ? (
          <>
            {/* Header */}
            <div className="text-center space-y-2">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Lock size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Set New Password
              </h2>
              <p className="text-sm text-gray-500">
                Please enter and confirm your new password below.
              </p>
            </div>

            {/* Error / Alert Message Banner */}
            {statusMessage && (
              <div className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-600 border border-red-200">
                <AlertCircle size={18} className="shrink-0" />
                <span>{statusMessage}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* New Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-1.5 block text-sm font-medium text-gray-700"
                >
                  New Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 pr-10 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-xs text-red-500">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-1.5 block text-sm font-medium text-gray-700"
                >
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 pr-10 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-primary py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-50 mt-2"
              >
                {isSubmitting ? "Updating..." : "Reset Password"}
              </button>
            </form>
          </>
        ) : (
          /* Success Screen */
          <div className="text-center space-y-4 py-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
              <CheckCircle2 size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Password Reset Complete!
            </h2>
            <p className="text-sm text-gray-600">
              Your password has been successfully updated. You can now log in
              with your new credentials.
            </p>
            {onBackToLogin && (
              <button
                type="button"
                onClick={onBackToLogin}
                className="w-full rounded-lg bg-primary py-3 font-semibold text-white transition hover:opacity-90 mt-2"
              >
                Go to Login
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
