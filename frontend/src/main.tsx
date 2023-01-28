import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root';
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./error-page";
import Dashboard from "./routes/dashboard";
import DashboardIndex from "./routes/dashboard/index";
import Login from './routes/login';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'dashboard',
                element: <Dashboard />,
                children: [
                    {
                        index: true,
                        element: <DashboardIndex />
                    }
                ]
            }
        ]
    },
    {
        path: 'login',
        element: <Login />,
    }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
