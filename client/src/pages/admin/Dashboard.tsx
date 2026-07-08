import DashboardStats from "../../components/admin/DashboardStats.tsx";
import SalesChart from "../../components/admin/SalesChart";
import CategoryChart from "../../components/admin/CategoryChart";
import RecentOrders from "../../components/admin/RecentOrders";
import RecentActivity from "../../components/admin/RecentActivity";

const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold text-primary">Dashboard</h1>

        <p className="mt-1 text-gray-500">
          Welcome back 👋 Here's what's happening today.
        </p>
      </div>

      {/* Statistics */}
      <DashboardStats />

      {/* Charts */}
      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <SalesChart />
        </div>

        <CategoryChart />
      </div>

      {/* Bottom Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        <RecentOrders />

        <RecentActivity />
      </div>
    </div>
  );
};

export default Dashboard;
