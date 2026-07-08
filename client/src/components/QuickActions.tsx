import { Package, Lock, LogOut } from "lucide-react";

interface QuickActionsProps {
  onOpenPasswordModal: () => void; // Tell TS to expect this function
}

export const QuickActions = ({ onOpenPasswordModal }: QuickActionsProps) => {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">Quick Actions</h3>
      <div className="space-y-3">
        <button className="flex w-full items-center gap-3 rounded-lg border p-3 hover:bg-gray-50">
          <Package size={18} />
          My Orders
        </button>
        <button
          onClick={onOpenPasswordModal}
          className="flex w-full items-center gap-3 rounded-lg border p-3 hover:bg-gray-50"
        >
          <Lock size={18} />
          Change Password
        </button>
        <button className="flex w-full items-center gap-3 rounded-lg border border-red-200 p-3 text-red-500 hover:bg-red-50">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
};
