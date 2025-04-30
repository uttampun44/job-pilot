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
import ProtectedRoutes from './ProtecteedRoutes';


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
        path: 'auth',
        children: [
         {
            path: '/dashboard',
            Component: Dashboard
         }
       ]
    }

])
