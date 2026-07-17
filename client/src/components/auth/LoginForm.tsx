import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import SocialLogin from "./SocialLogin";
import { loginSchema, type LoginFormData } from "../../schemas/auth.schema.ts";
import { useAuthMutations } from "../../hooks/useAuthMutations.ts";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore.ts";
import toast from "react-hot-toast";

const LoginForm = ({ onForgotPassword }: any) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const { closeAuthModal } = useAuthStore();
  const navigate = useNavigate();
  const { loginMutation } = useAuthMutations();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = loginSchema.safeParse(formData);

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
    loginMutation.mutate(formData, {
      onSuccess: (data) => {
        if (data?.token) {
          localStorage.setItem("token", data.token); // Adjust 'data.token' if your backend names it 'data.accessToken'
        }
        // 2. Save user to Zustand store
        if (data?.user) {
          useAuthStore.getState().setUser(data.user);
        }
        const username = data?.user?.username || "User";
        toast.success(`Welcome back, ${username}! 🎉`);
        setFormData({ email: "", password: "" });
        closeAuthModal();
        navigate("/");
      },
      onError: (err: any) => {
        toast.error(err.response?.data?.message || "Invalid credentials!");
      },
    });
  };

  return (
    <form className="space-y-2" onSubmit={handleSubmit}>
      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Email Address
        </label>

        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => handleChange(e)}
          placeholder="Enter your email"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
        {errors.email && (
          <span className="mt-1 block text-xs font-medium text-red-500">
            {errors.email}
          </span>
        )}
      </div>

      {/* Password */}
      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Password
        </label>

        <div className="relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={(e) => handleChange(e)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-12 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />

          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
          {errors.password && (
            <span className="mt-1 block text-xs font-medium text-red-500">
              {errors.password}
            </span>
          )}
        </div>
      </div>

      {/* Remember + Forgot */}
      <div className="flex flex-col md:flex-row md:items-center justify-between text-sm">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="h-4 w-4 accent-primary" />
          Remember Me
        </label>

        <button
          onClick={() => onForgotPassword?.()}
          type="button"
          className="font-medium text-primary hover:underline"
        >
          Forgot Password?
        </button>
      </div>

      {/* Login Button */}
      <button
        type="submit"
        className="w-full rounded-lg bg-primary py-3 font-semibold text-white transition hover:opacity-90"
      >
        {loginMutation.isPending ? "Logging in..." : "Login"}
      </button>

      {/* Social Login */}
      <SocialLogin />
    </form>
  );
};

export default LoginForm;
