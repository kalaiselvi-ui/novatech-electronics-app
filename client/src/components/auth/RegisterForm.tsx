import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import SocialLogin from "./SocialLogin";
import {
  registerSchema,
  type RegisterFormData,
} from "../../schemas/auth.schema.ts";
import { useAuthMutations } from "../../hooks/useAuthMutations.ts";
import { useAuthStore } from "../../store/useAuthStore.ts";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { registerMutation } = useAuthMutations();
  const { setView, closeAuthModal } = useAuthStore();

  const [formData, setFormData] = useState<RegisterFormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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
    const result = registerSchema.safeParse(formData);
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
    registerMutation.mutate(formData, {
      onSuccess: () => {
        setView("login");
        toast.success("Registration successful! Please log in.");
        setFormData({
          email: "",
          password: "",
          username: "",
          confirmPassword: "",
        });

        closeAuthModal();
      },
      onError: (err: any) => {
        toast.error(err.response?.data?.message || "Registration Failed!");
      },
    });
  };

  return (
    <form className="space-y-2" onSubmit={handleSubmit}>
      {/* Full Name */}
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Full Name
        </label>

        <input
          id="name"
          type="text"
          name="username"
          value={formData.username}
          onChange={(e) => handleChange(e)}
          placeholder="Enter your full name"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
        {errors.username && (
          <span className="mt-1 block text-xs font-medium text-red-500">
            {errors.username}
          </span>
        )}
      </div>

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
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => handleChange(e)}
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
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
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

      {/* Confirm Password */}
      <div>
        <label
          htmlFor="confirmPassword"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Confirm Password
        </label>

        <div className="relative">
          <input
            id="confirmPassword"
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={(e) => handleChange(e)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-12 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />

          <button
            type="button"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary"
          >
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
          {errors.confirmPassword && (
            <span className="mt-1 block text-xs font-medium text-red-500">
              {errors.confirmPassword}
            </span>
          )}
        </div>
      </div>

      {/* Register Button */}
      <button
        type="submit"
        className="w-full rounded-lg bg-primary py-3 font-semibold text-white transition hover:opacity-90"
      >
        {registerMutation.isPending ? "registering..." : "Create Account"}
      </button>

      {/* Social Login */}
      <SocialLogin />
    </form>
  );
};

export default RegisterForm;
