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
export default function UsersChart() {

    const {data: usersWithRoles} =  useFetch('/api/v1/total-users-with-roles');
    return (
        <div className="m-4 p-4">
            <Line data={{
                labels: usersWithRoles.map((user) => user.name),
                datasets: [{
                    label: 'Users',
                    data: usersWithRoles.map((user) => user.total),
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
        </div>
    );
}