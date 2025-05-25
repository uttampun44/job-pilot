import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Briefcase, Heart, Bell } from "lucide-react";
import CompleteProfile from "./components/CompleteProfile";
import AppliedJobs from "./components/AppliedJobs";
import FavouriteJobs from "./components/FavouriteJobs";
import DashboardChart from "./components/DashboarChart";

export default function Dashboard() {

  const stats = [
    {
      title: "Active Users",
      value: "1,235",
      icon: <Users className="h-6 w-6 text-white" />,
      color: "bg-blue-600",
    },
    {
      title: "Applied Jobs",
      value: "312",
      icon: <Briefcase className="h-6 w-6 text-white" />,
      color: "bg-green-600",
    },
    {
      title: "Favourite Jobs",
      value: "87",
      icon: <Heart className="h-6 w-6 text-white" />,
      color: "bg-pink-500",
    },
    {
      title: "Job Alerts",
      value: "45",
      icon: <Bell className="h-6 w-6 text-white" />,
      color: "bg-yellow-500",
    },
  ];

  return (
    <div className="p-6 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="rounded-2xl shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-md ${stat.color}`}>
                {stat.icon}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="w-full my-4">
          <CompleteProfile />
      </div>
      <div className="w-full flex gap-x-2.5">
           <div className="flex  gap-x-2.5">
            <AppliedJobs />
            <FavouriteJobs />
           </div>
            <div className="chart w-full">
               <DashboardChart />
            </div>
      </div>
    </div>
  );
}
