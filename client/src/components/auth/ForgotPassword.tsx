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
  // const [email, setEmail] = useState("");
  // const [error, setError] = useState("");
  // const [isSent, setIsSent] = useState(false);

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   // 1. Validate email with Zod
  //   const result = forgotPasswordSchema.safeParse({ email });
  //   if (!result.success) {
  //     setError(result.error.issues[0].message);
  //     return;
  //   }

  //   setError("");

  //   // 2. Call backend API to send email
  //   console.log("Send password reset link API call for:", email);

  //   // 3. Switch view to success state
  //   setIsSent(true);
  // };

  // SUCCESS STATE (After clicking Send Reset Link)
  // if (isSent) {
  //   return (
  //     <div className="text-center space-y-4 py-2">
  //       <h2 className="text-xl font-bold text-gray-900">Check Your Email ✉️</h2>
  //       <p className="text-sm text-gray-600">
  //         We sent a password recovery link to <strong className="text-gray-800">{email}</strong>.
  //       </p>
  //       <p className="text-xs text-gray-400">
  //         Didn't receive the email? Check your spam folder or try again.
  //       </p>
  //       <button
  //         type="button"
  //         onClick={onBackToLogin}
  //         className="w-full rounded-lg bg-primary py-2.5 font-semibold text-white transition hover:opacity-90"
  //       >
  //         Back to Login
  //       </button>
  //     </div>
  //   );
  // }

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
