import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import minimalRoutes from "./MinimalRoutes";
import appRoutes from "./AppRoutes";
import Login from "../pages/Login";
import App from "../layouts/App";
import ErrorPage from "@/components/ErrorPage";
import Scan from "../pages/Scan";
import Minimal from "../layouts/Minimal";
import Menu from "../pages/Menu";
import Items from "../pages/Items";
import Order from "../pages/Order";
import Welcome from "../pages/Welcome";

const router = createBrowserRouter([
  {
    path: "",
    element: <Minimal />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "ablaze",
        element: <Welcome />,
      },
    ],
  },
  {
    path: "/app",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Menu />,
      },
      {
        path: "menu/:item",
        element: <Items />,
      },
      {
        path: "order",
        element: <Order />,
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
