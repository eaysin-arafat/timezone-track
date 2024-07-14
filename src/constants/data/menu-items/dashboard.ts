// assets
import { MenuGroupType } from "@/constants/types/menu-item";
import { URLInsightsReports, URLOverview } from "@/routes/router-link";
import { DashboardOutlined } from "@ant-design/icons";

// icons
const icons = {
  DashboardOutlined,
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard: MenuGroupType = {
  id: "group-dashboard",
  title: "Dashboard",
  type: "group",
  children: [
    {
      id: "1",
      title: "Overview",
      type: "item",
      url: URLOverview(),
      icon: icons.DashboardOutlined,
      breadcrumbs: false,
    },
    {
      id: "2",
      title: "Insights & Reports",
      type: "item",
      url: URLInsightsReports(),
      icon: icons.DashboardOutlined,
      breadcrumbs: false,
    },
  ],
};

export default dashboard;
