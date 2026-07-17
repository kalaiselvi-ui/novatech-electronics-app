import { Bell, Menu } from "lucide-react";
import SearchBar from "../SearchBar.tsx";
import { useAdminSearchStore } from "../../store/useAdminSearchStore.ts";

type AdminHeaderProps = {
  onMenuClick: () => void;
};

const AdminHeader = ({ onMenuClick }: AdminHeaderProps) => {
  const setSearchQuery = useAdminSearchStore((state) => state.setSearchQuery);

  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b bg-white px-6">
      {/* Left */}

      <div className="flex items-center gap-4">
        <button onClick={onMenuClick} className="md:hidden">
          <Menu size={24} />
        </button>

        <div>
          <h2 className="text-2xl font-bold">Dashboard</h2>

          <p className="text-sm text-gray-500">Welcome back, Admin 👋</p>
        </div>
      </div>

      {/* Search */}

      <div className="lg:w-[500px] hidden md:flex">
        <SearchBar
          placeholder="Search products or orders..."
          onSearch={(value) => {
            setSearchQuery(value);
          }}
        />
      </div>
      {/* Right */}

      <div className="flex items-center gap-5">
        <button className="relative">
          <Bell size={22} />

          <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-semibold text-white">
            K
          </div>

          <div className="hidden sm:block">
            <h4 className="font-medium">Kalai</h4>

            <p className="text-sm text-gray-500">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
