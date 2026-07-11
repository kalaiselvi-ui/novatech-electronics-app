import { useState } from "react";
import { Menu, X, ShoppingCart, Search, User2Icon } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar.tsx";
import { assets } from "../assets/asset";
import { useCartStore } from "../store/useCartStore.ts";
import AuthModal from "./auth/AuthModal.tsx";
import { useBodyScrollLock } from "../utils/useBodyScrollLock.ts";
import { useAuthStore } from "../store/useAuthStore.ts";
import { useAuthMutations } from "../hooks/useAuthMutations.ts";
import toast from "react-hot-toast";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Cart", href: "/cart" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showMobileSearch, setShowMobileSearch] = useState<boolean>(false);

  const openAuthModal = useAuthStore((state) => state.openAuthModal);
  const isAuthModalOpen = useAuthStore((state) => state.isAuthModalOpen);
  const user = useAuthStore((state) => state.user);
  const { logoutMutation } = useAuthMutations();

  const navigate = useNavigate();
  const { cart } = useCartStore();
  console.log({ user });

  useBodyScrollLock(isAuthModalOpen);

  const handleLogout = () => {
    logoutMutation.mutate(
      {},
      {
        onSuccess: () => {
          toast.success("Logout Successfully");
          navigate("/");
        },
        onError: (error) => {
          console.log(error);
          toast.error("Failed to log out. Please try again.");
        },
      },
    );
  };
  // console.log(showUserMenu);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-2 lg:px-6 py-4">
        {/* Logo */}
        <Link to="/">
          {" "}
          <img
            src={assets.logo}
            alt="novaTech-logo"
            className="object-contain w-auto h-12"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center md:gap-4 lg:gap-6 xl:gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-secondary" : "text-primary"
                  } font-medium transition hover:text-secondary`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex w-64 lg:w-96 xl:w-96 relative items-center">
          <SearchBar />
          <Search size={18} className="absolute left-3 text-textPrimary" />
          {/* <button className="absolute right-3 top-1/2 -translate-y-1/2">
            <X size={18} />
          </button> */}
        </div>

        {/* Desktop Icons */}
        <div className="items-center gap-4 flex">
          {/* Action Group */}
          <div className="items-center gap-2 flex shrink-0 relative">
            {/* Mobile Search Toggle Button */}

            <button
              className="md:hidden text-primary"
              onClick={() => setShowMobileSearch(!showMobileSearch)}
              aria-label="Toggle search"
            >
              {!showMobileSearch && <Search size={24} />}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                showMobileSearch
                  ? "max-w-[200px] opacity-100 scale-100"
                  : "max-w-0 w-0 opacity-0 scale-95"
              }`}
            >
              <SearchBar />
            </div>
            {showMobileSearch && (
              <button
                onClick={() => setShowMobileSearch(!showMobileSearch)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <X size={18} />
              </button>
            )}
          </div>
          <button
            type="button"
            onClick={() => navigate("/cart")}
            className="relative"
          >
            <ShoppingCart
              size={26}
              className="cursor-pointer text-primary pointer-events-none"
            />
            <span className="absolute h-4 w-4 rounded-full bg-secondary text-white text-xs right-0 -top-2 justify-center items-center flex">
              {cart.length}
            </span>
          </button>

          <div className="relative hidden md:block">
            {!user ? (
              <button
                onClick={() => {
                  setIsOpen(false);
                  openAuthModal("login"); // 👈 6. Mobile Login Trigger
                }}
                className="rounded-lg bg-primary px-4 py-2 text-white transition hover:opacity-90"
              >
                Login
              </button>
            ) : (
              <div className="relative group flex items-center gap-1 py-2 cursor-pointer">
                {/* The Icon & Username - They automatically turn text-secondary on hover */}
                <User2Icon className="text-primary w-6 h-6 shrink-0 group-hover:text-secondary transition-colors" />

                {/* Username with truncation for long strings */}
                <span className="font-medium text-primary group-hover:text-secondary transition-colors max-w-[120px] lg:max-w-[180px] truncate block">
                  {user.username}
                </span>

                {/* Dropdown Menu - Controlled completely via Tailwind group-hover */}
                <div className="absolute right-0 top-full mt-1 w-48 rounded-lg border bg-white shadow-lg overflow-hidden hidden group-hover:block z-50">
                  <NavLink
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Profile
                  </NavLink>

                  <NavLink
                    to="/orders"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Orders
                  </NavLink>

                  {user?.role === "admin" && (
                    <NavLink
                      to="/admin"
                      className="block px-4 py-2 hover:bg-gray-100 text-red-600"
                    >
                      Admin Dashboard
                    </NavLink>
                  )}

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                  >
                    {logoutMutation.isPending ? "Logging out..." : "Logout"}
                  </button>
                </div>
              </div>
            )}
          </div>
          <AuthModal />
          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="text-primary" size={24} />
            ) : (
              <Menu className="text-primary" size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t bg-white md:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block border-b px-6 py-4 text-text hover:bg-gray-100"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {link.name}
                </a>
              </li>
            ))}

            {!user ? (
              <button
                onClick={() => {
                  setIsOpen(false);
                  openAuthModal("login");
                }}
                className="m-4 rounded-lg bg-primary py-3 text-white"
              >
                Login
              </button>
            ) : (
              <div className="flex flex-col">
                <div className="px-6 py-3 font-semibold border-b">
                  <span className="font-medium text-primary group-hover:text-secondary transition-colors max-w-[120px] lg:max-w-[180px] truncate block">
                    {user.username}
                  </span>
                </div>

                <NavLink
                  to="/profile"
                  className="px-6 py-3 border-b"
                  onClick={() => setIsOpen(false)}
                >
                  Profile
                </NavLink>

                <NavLink
                  to="/orders"
                  className="px-6 py-3 border-b"
                  onClick={() => setIsOpen(false)}
                >
                  Orders
                </NavLink>

                {user.role === "admin" && (
                  <NavLink
                    to="/admin"
                    className="px-6 py-3 border-b text-red-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Admin Dashboard
                  </NavLink>
                )}

                <button
                  onClick={handleLogout}
                  className="m-4 rounded-lg bg-red-500 py-3 text-white"
                >
                  {logoutMutation.isPending ? "Logging out..." : "Logout"}
                </button>
              </div>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
