import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../assets/novaTech_logo.png";

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
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <img
          src={logo}
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

        {/* Desktop Icons */}
        <div className="items-center gap-4 flex">
          <div className="relative">
            <ShoppingCart size={26} className="cursor-pointer text-primary " />
            <span className="absolute h-4 w-4 rounded-full bg-secondary text-white text-xs right-0 -top-2 justify-center items-center flex">
              0
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
