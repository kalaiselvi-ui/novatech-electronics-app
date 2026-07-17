import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { forgotPasswordSchema } from "../../schemas/auth.schema.ts";
import { useAuthMutations } from "../../hooks/useAuthMutations.ts";
import toast from "react-hot-toast";
import { useAuthStore } from "../../store/useAuthStore.ts";

interface ForgotPasswordFormProps {
  onBackToLogin: () => void;
}

const ForgotPasswordForm = ({ onBackToLogin }: ForgotPasswordFormProps) => {
  const [errors, setErrors] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const { forgotPasswordMutation } = useAuthMutations();
  const { closeAuthModal } = useAuthStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Send password reset link API call");
    const result = forgotPasswordSchema.safeParse({ email });
    if (!result.success) {
      setErrors(result.error.issues[0].message);
      return;
    }
    setErrors("");
    forgotPasswordMutation.mutate(
      { email },
      {
        onSuccess: () => {
          toast.success("Password reset link sent to your email!");
          setEmail("");
          closeAuthModal();
        },
        onError: (err: any) => {
          toast.error(
            err.response?.data?.message || "Failed to send reset link.",
          );
        },
      },
    );
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="reset-email"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Email Address
        </label>
        <input
          id="reset-email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
          placeholder="Enter your registered email"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
        {errors && (
          <span className="mt-1 block text-xs font-medium text-red-500">
            {errors}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-primary py-3 font-semibold text-white transition hover:opacity-90"
      >
        Send Reset Link
      </button>

      {/* Back to Login link */}
      <button
        type="button"
        onClick={onBackToLogin}
        className="flex items-center justify-center gap-2 w-full text-sm font-medium text-gray-500 hover:text-primary transition mt-2"
      >
        <ArrowLeft size={16} />
        Back to Login
      </button>
    </form>
  );
};

export default ForgotPasswordForm;

//  <div className="success-state">
//           <h2>Check Your Email ✉️</h2>
//           <p>
//             We sent a password recovery link to <strong>{email}</strong>.
//           </p>
//           <p className="hint">
//             Didn't receive the email? Check your spam folder or try again.
//           </p>
//           <button onClick={onBackToLogin}>Back to Login</button>
//         </div>
