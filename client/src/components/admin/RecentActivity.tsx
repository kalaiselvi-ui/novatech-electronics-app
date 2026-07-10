import { PlusCircle, ShoppingBag, UserPlus, RefreshCw } from "lucide-react";

// Mock log feed data
const activityData = [
  {
    id: 1,
    event: "New category 'Smart Watches' added",
    meta: "by Administrator Kalai",
    time: "5 mins ago",
    icon: PlusCircle,
    iconColor: "text-indigo-600 bg-indigo-50 border-indigo-100",
  },
  {
    id: 2,
    event: "Order #1024 payment status updated",
    meta: "Changed from unpaid to Processing",
    time: "24 mins ago",
    icon: RefreshCw,
    iconColor: "text-amber-600 bg-amber-50 border-amber-100",
  },
  {
    id: 3,
    event: "New vendor account registered",
    meta: "TechPack Dist. requested catalog access",
    time: "2 hours ago",
    icon: UserPlus,
    iconColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
  {
    id: 4,
    event: "Bulk inventory stock refill completed",
    meta: "+50 items to MacBook Pro catalog",
    time: "Yesterday, 04:10 PM",
    icon: ShoppingBag,
    iconColor: "text-rose-600 bg-rose-50 border-rose-100",
  },
];

const RecentActivity = () => {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm flex flex-col justify-between">
      {/* Header Block */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800">System Activity</h2>
        <p className="text-xs text-gray-500 mt-0.5">
          Real-time administrative transaction feeds
        </p>
      </div>

      {/* Vertical Timeline Track */}
      <div className="relative flex-1 space-y-6 before:absolute before:bottom-2 before:left-[19px] before:top-2 before:w-0.5 before:bg-gray-100">
        {activityData.map((activity) => {
          const Icon = activity.icon;
          return (
            <div
              key={activity.id}
              className="relative flex items-start gap-4 text-xs group"
            >
              {/* Event Icon Block act as Timeline Node Anchor */}
              <div
                className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-white ${activity.iconColor}`}
              >
                <Icon size={16} />
              </div>

              {/* Text Description Segment */}
              <div className="flex-1 min-w-0 bg-gray-50/30 rounded-lg p-2.5 border border-gray-100/40 group-hover:bg-gray-50/70 transition">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <p className="font-semibold text-gray-800 line-clamp-1">
                    {activity.event}
                  </p>
                  <span className="text-2xs font-medium text-gray-400 whitespace-nowrap">
                    {activity.time}
                  </span>
                </div>
                <p className="text-2xs text-gray-500 mt-0.5 truncate">
                  {activity.meta}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentActivity;
