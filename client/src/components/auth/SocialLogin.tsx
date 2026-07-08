const SocialLogin = () => {
  const handleGoogleLogin = () => {
    console.log("Google Login");
    // Firebase / Auth API logic will go here later
  };

  return (
    <div className="mt-1">
      {/* Divider */}
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-gray-300" />
        <span className="text-sm text-gray-500">OR</span>
        <div className="h-px flex-1 bg-gray-300" />
      </div>

      {/* Google Button */}
      <button
        type="button"
        onClick={handleGoogleLogin}
        className="mt-6 flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 font-medium text-gray-700 transition-all hover:bg-gray-50 hover:shadow-sm"
      >
        {/* <chrome className="h-5 w-5 text-red-500" /> */}
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
