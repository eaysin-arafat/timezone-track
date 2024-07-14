// assets
import { MenuGroupType } from "@/constants/types/menu-item";
import {
  URLAccountSettings,
  URLProfile,
  URLWorkingHours,
} from "@/routes/router-link";
import {
  BellOutlined,
  ClockCircleOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";

// icons
const userSettingsIcons = {
  UserOutlined,
  SettingOutlined,
  BellOutlined,
  ClockCircleOutlined,
};

// ==============================|| MENU ITEMS - USER SETTINGS ||============================== //

const userSettings: MenuGroupType = {
  id: "user-settings",
  title: "User Settings",
  type: "group",
  children: [
    {
      id: "profile",
      title: "Profile",
      type: "item",
      url: URLProfile(),
      icon: userSettingsIcons.UserOutlined,
    },
    {
      id: "account-settings",
      title: "Account Settings",
      type: "item",
      url: URLAccountSettings(),
      icon: userSettingsIcons.SettingOutlined,
    },
    {
      id: "working-hours",
      title: "Working Hours & Availability",
      type: "item",
      url: URLWorkingHours(),
      icon: userSettingsIcons.ClockCircleOutlined,
    },
  ],
};

export default userSettings;
