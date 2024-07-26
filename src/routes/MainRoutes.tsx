import { lazy } from "react";

// project import
import Loadable from "@/components/core/loadable";
import Clock from "@/pages/clock";
import Overview from "@/pages/overview";
import {
  URLClock,
  URLColorThemes,
  URLHome,
  URLOverview,
  URLSamplePage,
  URLShadows,
  URLTypography,
} from "./router-link";

const RootLayout = Loadable(lazy(() => import("@/layout/root-layout")));
const Color = Loadable(lazy(() => import("@/pages/component-overview/color")));
const Typography = Loadable(
  lazy(() => import("@/pages/component-overview/typography"))
);
const Shadow = Loadable(
  lazy(() => import("@/pages/component-overview/shadows"))
);
const DashboardDefault = Loadable(
  lazy(() => import("@/pages/dashboard/index"))
);

// render - sample page
const SamplePage = Loadable(
  lazy(() => import("@/pages/extra-pages/sample-page"))
);

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: URLHome(),
  element: <RootLayout />,
  children: [
    {
      path: URLHome(),
      element: <DashboardDefault />,
    },
    {
      path: URLOverview(),
      element: <Overview />,
    },
    {
      path: URLClock(),
      element: <Clock />,
    },
    {
      path: URLColorThemes(),
      element: <Color />,
    },
    {
      path: "dashboard",
      children: [
        {
          path: "default",
          element: <DashboardDefault />,
        },
      ],
    },
    {
      path: URLSamplePage(),
      element: <SamplePage />,
    },
    {
      path: URLShadows(),
      element: <Shadow />,
    },
    {
      path: URLTypography(),
      element: <Typography />,
    },
  ],
};

export default MainRoutes;
