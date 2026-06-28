import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../assets/novaTech_logo.png";

const Footer = () => {
  const shopLinks = [
    "Mobiles",
    "Laptops",
    "TV & Home Entertainment",
    "Audio Devices",
    "Smart Watches",
    "Accessories",
  ];

  const socials = [FaFacebookF, FaInstagram, FaTwitter, FaYoutube];

  return (
    <footer className="bg-[#0B1220] text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-y-3 md:gap-10">
          {/* BRAND */}
          <div className="md:col-span-2">
            <img
              src={logo}
              alt="novaTech-logo"
              className="object-contain w-26 h-12"
            />
            <p className="text-sm mt-3 text-gray-400 leading-relaxed">
              Your trusted electronics destination. Explore smartphones,
              laptops, accessories & smart devices at the best prices.
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-5 text-lg">
              {socials.map((Icon, index) => (
                <Icon
                  key={index}
                  className="text-secondary cursor-pointer transition ease-in duration-200 hover:-translate-y-1"
                />
              ))}
            </div>
          </div>

          {/* SHOP */}
          <div>
            <h3 className="text-secondary font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              {shopLinks.map((item) => (
                <li className="hover:text-secondary cursor-pointer" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-secondary font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-secondary cursor-pointer">
                Contact Us
              </li>
              <li className="hover:text-secondary cursor-pointer">
                Help Center
              </li>
              <li className="hover:text-secondary cursor-pointer">
                Order Tracking
              </li>
              <li className="hover:text-secondary cursor-pointer">
                Warranty Policy
              </li>
              <li className="hover:text-secondary cursor-pointer">
                Returns & Refunds
              </li>
              <li className="hover:text-secondary cursor-pointer">
                Service Centers
              </li>
            </ul>
          </div>

          {/* COMPANY + LEGAL */}
          <div>
            <h3 className="text-secondary font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-secondary cursor-pointer">About Us</li>
              <li className="hover:text-secondary cursor-pointer">Careers</li>
              <li className="hover:text-secondary cursor-pointer">Blog</li>
              <li className="hover:text-secondary cursor-pointer">Press</li>
            </ul>
          </div>
          <div>
            <h3 className="text-secondary font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-secondary cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-secondary cursor-pointer">
                Terms of Service
              </li>
              <li className="hover:text-secondary cursor-pointer">Cookies</li>
            </ul>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-secondary font-semibold">
              Subscribe to our newsletter
            </h3>
            <p className="text-sm text-gray-400">
              Get deals, offers & new product updates
            </p>
          </div>

          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full md:w-72 bg-gray-800 text-secondary outline-none"
            />
            <button className="bg-secondary px-5 py-2 text-primary hover:bg-secondary/70">
              Subscribe
            </button>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-800 mt-8 pt-5 text-center text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="text-secondary">Nova Tech</span> Electronics. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
