import { useState } from "react";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar.tsx";
import { assets } from "../assets/asset";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Categories", href: "/categories" },
  { name: "Deals", href: "/deals" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showMobileSearch, setShowMobileSearch] = useState<boolean>(false);
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <img
          src={assets.logo}
          alt="novaTech-logo"
          className="object-contain w-auto h-12"
        />

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 md:flex">
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
        <div className="hidden md:flex max-w-md w-full relative items-center">
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
          <div className="relative">
            <ShoppingCart size={26} className="cursor-pointer text-primary " />
            <span className="absolute h-4 w-4 rounded-full bg-secondary text-white text-xs right-0 -top-2 justify-center items-center flex">
              2
            </span>
          </div>

          <button className="rounded-lg hidden md:block bg-primary px-4 py-2 text-white transition hover:opacity-90">
            Login
          </button>
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
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}

            <button className="m-4 rounded-lg bg-primary py-3 text-white">
              Login
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
