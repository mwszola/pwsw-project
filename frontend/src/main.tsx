import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root';
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./error-page";
import Dashboard from "./routes/dashboard";
import DashboardIndex from "./routes/dashboard/index";
import RegisterPage, {action as registerAction } from './routes/register';
import LoginPage, { action as loginAction } from './routes/login';
import IndexPage, {loader as indexLoader} from './routes/index'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <IndexPage/>,
                loader: indexLoader
            },
            {
                path: 'register',
                element: <RegisterPage/>,
                action: registerAction,
            },
            {
                path: 'login',
                element: <LoginPage />,
                action: loginAction,
            },
            {
                path: 'dashboard',
                element: <Dashboard/>,
                children: [
                    {
                        index: true,
                        element: <DashboardIndex/>
                    }
                ]
            }
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
