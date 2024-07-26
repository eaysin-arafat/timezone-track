import Loadable from "@/components/core/loadable";
import MinimalLayout from "@/layout/minimal-layout";
import { lazy } from "react";

// project import

// render - login
const AuthLogin = Loadable(lazy(() => import("@/pages/authentication/login")));
const AuthRegister = Loadable(
  lazy(() => import("@/pages/authentication/register"))
);

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: "/",
  element: <MinimalLayout />,
  children: [
    {
      path: "/login",
      element: <AuthLogin />,
    },
    {
      path: "/register",
      element: <AuthRegister />,
    },
  ],
};

export default LoginRoutes;
