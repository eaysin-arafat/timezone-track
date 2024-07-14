// assets
import { MenuGroupType } from "@/constants/types/menu-item";
import { LockOutlined, LogoutOutlined } from "@ant-design/icons";

// icons
const securityIcons = {
  LockOutlined,
  LogoutOutlined,
};

// ==============================|| MENU ITEMS - SECURITY ||============================== //

const security: MenuGroupType = {
  id: "security",
  title: "Security",
  type: "group",
  children: [
    {
      id: "privacy-settings",
      title: "Privacy Settings",
      type: "item",
      url: "/security/privacy",
      icon: securityIcons.LockOutlined,
    },
    {
      id: "logout",
      title: "Logout",
      type: "item",
      url: "/logout",
      icon: securityIcons.LogoutOutlined,
    },
  ],
};

export default security;
