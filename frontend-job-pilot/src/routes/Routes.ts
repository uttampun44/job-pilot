import {createBrowserRouter} from 'react-router';
import CreateAccount from '@pages/frontend/createaccount/CreateAccount';
import Home from '@/pages/frontend/home/Home';

export const router = createBrowserRouter([ 
    {
        path: '/sign-up',
        Component: CreateAccount
    },
    {
        path: '/',
        Component: Home   
    }

])
