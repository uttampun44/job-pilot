import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js';
import { useGetDashboardQuery } from "@/reduxtoolkit/api/apiSlice";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function DashboardChart() {
  
  const {data, isLoading, isError} = useGetDashboardQuery();

  const usersWithRolesData = data?.totalUsersWithRoles;
  
  if(isLoading) return <div>Loading...</div>;
  if(isError) return <div>Error!</div>;
  return (
    <Card>
      <CardHeader>
        <CardTitle>Total Users with Roles</CardTitle>
      </CardHeader>
      <CardContent>
         {/* <Line data={{
                labels: usersWithRolesData.map((user: any,  index:number) => user.name),
                datasets: [{
                    label: 'Users',
                    data: usersWithRolesData.map((user: any , index:number) => user.total),
                    borderColor: 'rgb(75, 192, 192)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                }]
            }} options={{
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top' as const,
                    },
                    title: {
                        display: true,
                        text: 'Total Users with Roles',
                    },
                },
            }} /> */}
      </CardContent>
    </Card>
  );
}
