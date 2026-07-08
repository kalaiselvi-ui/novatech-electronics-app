import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar.tsx";
import AdminHeader from "../components/admin/AdminHeader.tsx";
import { useState } from "react";

const AdminLayout = () => {
  const [isSidebarOpen, isSetSidebarOpen] = useState(false);

  return (
    // Set fixed h-screen and overflow-hidden on outer shell so scrolling only happens inside main
    <div className="flex h-screen w-screen overflow-hidden bg-gray-100">
      <AdminSidebar
        onClose={() => isSetSidebarOpen(!isSidebarOpen)}
        isOpen={isSidebarOpen}
      />

      <div className="flex flex-1 flex-col h-full min-w-0 overflow-hidden">
        <AdminHeader onMenuClick={() => isSetSidebarOpen(!isSidebarOpen)} />

        {/* Scrollable Main Area */}
        <main className="flex-1 p-4 md:p-6 min-w-0 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
