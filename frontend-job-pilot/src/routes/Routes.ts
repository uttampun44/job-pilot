import { createBrowserRouter } from 'react-router';
import CreateAccount from '@pages/frontend/createaccount/CreateAccount';
import Home from '@/pages/frontend/home/Home';
import FrontLayout from '@/layout/frontend/FrontLayout';
import BackendLayout from '@/layout/backend/BackendLayout';
import ListingDetails from '@/pages/frontend/listing/ListingDetails';
import Login from '@/pages/frontend/login/Login';

export const router = createBrowserRouter([

    // Frontend Routes
    {
        path: '/',
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
        path: '/sign-up',
        Component: CreateAccount
    },
    {
        path: '/login',
        Component: Login
    },

    // Backend Routes
    {
        path: '/',
        Component: BackendLayout

    }

])
