// assets
import { MenuGroupType } from "@/constants/types/menu-item";
import { URLLogin, URLRegister } from "@/routes/router-link";
import { LoginOutlined, ProfileOutlined } from "@ant-design/icons";

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined,
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages: MenuGroupType = {
  id: "authentication",
  title: "Authentication",
  type: "group",
  children: [
    {
      id: "login1",
      title: "Login",
      type: "item",
      url: URLLogin(),
      icon: icons.LoginOutlined,
      target: true,
    },
    {
      id: "register1",
      title: "Register",
      type: "item",
      url: URLRegister(),
      icon: icons.ProfileOutlined,
      target: true,
    },
  ],
};

export default pages;
