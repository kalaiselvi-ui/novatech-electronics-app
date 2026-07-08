import { Bell, Menu, Search } from "lucide-react";

type AdminHeaderProps = {
  onMenuClick: () => void;
};

const AdminHeader = ({ onMenuClick }: AdminHeaderProps) => {
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

      <div className="hidden lg:block relative w-80">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-lg border py-2 pl-10 pr-4 outline-none focus:border-primary"
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
