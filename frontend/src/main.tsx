import React from "react";
import ReactDOM from "react-dom/client";
import Root, { loader as rootLoader } from "./routes/root";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Dashboard, { loader as dashboardRootLoader } from "./routes/dashboard";
import DashboardIndex from "./routes/dashboard/index";
import DashboardNew, {
  action as dashboardNewAction,
} from "./routes/dashboard/new";
import DashboardLink, {
  loader as dashboardLinkLoader,
} from "./routes/dashboard/link";
import { action as destroyLinkAction } from "./routes/dashboard/destroy";
import RegisterPage, { action as registerAction } from "./routes/register";
import LoginPage, { action as loginAction } from "./routes/login";
import { action as logoutAction } from "./routes/logout";
import IndexPage, {
  loader as indexLoader,
  action as indexAction,
} from "./routes/index";
import RedirectPage, { loader as redirectLoader } from "./routes/redirect";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        index: true,
        element: <IndexPage />,
        loader: indexLoader,
        action: indexAction,
      },
      {
        path: "r/:linkId",
        element: <RedirectPage />,
        loader: redirectLoader,
      },
      {
        path: "register",
        element: <RegisterPage />,
        action: registerAction,
      },
      {
        path: "login",
        element: <LoginPage />,
        action: loginAction,
      },
      {
        path: "logout",
        action: logoutAction,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        loader: dashboardRootLoader,
        children: [
          {
            index: true,
            element: <DashboardIndex />,
          },
          {
            path: "new",
            element: <DashboardNew />,
            action: dashboardNewAction,
          },
          {
            path: "link/:linkId",
            element: <DashboardLink />,
            loader: dashboardLinkLoader,
          },
          {
            path: "link/:linkId/destroy",
            action: destroyLinkAction,
            errorElement: <div>Oops! There was an error.</div>,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
