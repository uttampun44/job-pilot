import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useFetch from "@/hooks/api/useFetch";
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js';

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
   const {data: usersWithRoles} =  useFetch('/api/v1/total-users-with-roles');

    const usersWithRolesData = Array.isArray(usersWithRoles) ? usersWithRoles : [];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Chart </CardTitle>
      </CardHeader>
      <CardContent>
         <Line data={{
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
            }} />
      </CardContent>
    </Card>
  );
}
