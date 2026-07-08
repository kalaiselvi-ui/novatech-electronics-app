import { ArrowLeft } from "lucide-react";

interface ForgotPasswordFormProps {
  onBackToLogin: () => void;
}

const ForgotPasswordForm = ({ onBackToLogin }: ForgotPasswordFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Send password reset link API call");
    // Your backend/Firebase auth logic goes here
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
          required
          placeholder="Enter your registered email"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
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
