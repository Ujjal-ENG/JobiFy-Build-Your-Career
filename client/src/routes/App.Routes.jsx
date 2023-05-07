/* eslint-disable react/jsx-indent */
/* eslint-disable import/prefer-default-export */
/* eslint-disable comma-dangle */
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Dashboard from '../components/pages/Dashboard';
import ErrorPage from '../components/pages/ErrorPage';
import Home from '../components/pages/Home';
import Login from '../components/pages/Login&Register/Login';
import Register from '../components/pages/Login&Register/Register';
import LatestJobs from '../components/pages/Menu/LatestJobs';
import UpdateProfile from '../components/pages/Menu/UpdateProfile';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: (
                    <PublicRoute>
                        <Home />
                    </PublicRoute>
                )
            },
            {
                path: '/login',
                element: (
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                )
            },
            {
                path: '/register',
                element: (
                    <PublicRoute>
                        <Register />
                    </PublicRoute>
                )
            },
            {
                path: '/dashboard',
                element: (
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                ),
                children: [
                    {
                        path: 'latest-jobs',
                        element: <LatestJobs />
                    },
                    {
                        path: 'update-profile',
                        element: <UpdateProfile />
                    }
                ]
            }
        ]
    }
]);
