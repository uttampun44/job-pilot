import { createBrowserRouter } from 'react-router-dom';
import CreateAccount from '@pages/frontend/createaccount/CreateAccount';
import Home from '@/pages/frontend/home/Home';
import FrontLayout from '@/layout/frontend/FrontLayout';
import ListingDetails from '@/pages/frontend/listing/ListingDetails';
import Login from '@/pages/frontend/login/Login';
import ForgetPassword from '@/pages/frontend/forgetpassword/forgetpassword';
import ResetPassword from '@/pages/frontend/resetpassword/ResetPassword';
import EmailVerification from '@/pages/frontend/emailverification/EmailVerification';
import Dashboard from '@/pages/backend/dashboard/Dashboard';
import ProtectedRoutes from './ProtectedRoutes';
import Calendar from '@/pages/backend/calendar/Calendar';
import Candidate from '@/pages/frontend/candidate/Candidate';
import Employer from '@/pages/frontend/employer/Employer';
import Profile from '@/pages/backend/settings/profile/Profile';
import Permission from '@/pages/backend/settings/permissions/Permission';
import EmployerProfile from '@/pages/backend/settings/employer/EmployerProfile';
import RolePermission from '@/pages/backend/settings/permissions/RolePermission';
import CandidateEdit from '@/pages/backend/settings/profile/components/Edit';



export const router = createBrowserRouter([

    // Frontend Routes
    {
        Component: FrontLayout,
        children: [
            {
                path: '/',
                Component: Home
            },
            {
                path: '/candidate',
                Component: Candidate
            },
            {
                path: '/employer',
                Component: Employer
            },
            {
                path: '/listing-details',
                Component: ListingDetails
            }
        ]
    },
    {
        path: '/register',
        Component: CreateAccount
    },
    {
        path: '/login',
        Component: Login
    },
    {
        path: '/reset-password',
        Component: ResetPassword
    },
    {
        path: '/email-verification',
        Component: EmailVerification
    },
    {
        path: '/forget-password',
        Component: ForgetPassword
    },


    // Backend Routes
    {

        Component: ProtectedRoutes,
        children: [
            {
                path: '/dashboard',
                Component: Dashboard,
            },
            {
                path: '/calendar',
                Component: Calendar
            },
           
            {
                path: '/settings/candidate-profile',
                Component: Profile
            },
            {
                path: "/settings/candidate-profile/edit",
                Component: CandidateEdit
            },
            {
                path: '/settings/company-information',
                Component: EmployerProfile
            },
            {
                path: '/settings/permissions',
                Component: Permission
            },
            {
                path: '/settings/role/:id',
                Component: RolePermission
            }
        ]
    }

])
