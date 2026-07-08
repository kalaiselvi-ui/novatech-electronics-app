import {
  LayoutDashboard,
  Package,
  Shapes,
  ShoppingCart,
  LogOut,
  X,
  MoveLeft,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useBodyScrollLock } from "../../utils/useBodyScrollLock.ts";

type AdminSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const links = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/admin",
  },
  {
    name: "Products",
    icon: Package,
    path: "/admin/products",
  },
  {
    name: "Categories",
    icon: Shapes,
    path: "/admin/categories",
  },
  {
    name: "Orders",
    icon: ShoppingCart,
    path: "/admin/orders",
  },
  {
    name: "Go back Website",
    icon: MoveLeft,
    path: "/",
  },
];

const AdminSidebar = ({ isOpen, onClose }: AdminSidebarProps) => {
  useBodyScrollLock(isOpen);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      <aside
        className={`
        fixed md:sticky
        top-0 left-0
        z-50
        h-screen
        w-64
        bg-white
        border-r
        transition-transform
        duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
      `}
      >
        {/* Logo */}

        <div className="flex items-center justify-between border-b p-6">
          <div>
            <h1 className="text-2xl font-bold text-primary">NovaTech</h1>

            <p className="text-xs text-gray-500">Admin Panel</p>
          </div>

          <button onClick={onClose} className="md:hidden">
            <X size={22} />
          </button>
        </div>

        {/* Navigation */}

        <nav className="flex flex-col gap-2 p-4">
          {links.map(({ name, icon: Icon, path }) => (
            <NavLink
              key={name}
              to={path}
              end={path === "/admin"}
              onClick={onClose}
              className={({ isActive }) =>
                `
                flex items-center gap-3
                rounded-lg
                px-4 py-3
                transition

                ${
                  isActive
                    ? "bg-primary text-white"
                    : "hover:bg-gray-200 text-gray-700 "
                }
              `
              }
            >
              <Icon size={20} />

              <span>{name}</span>
            </NavLink>
          ))}
        </nav>

        {/* Footer */}

        <div className="absolute bottom-0 w-full border-t p-4">
          <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-red-500 hover:bg-red-50">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
