// assets
import { MenuGroupType } from "@/constants/types/menu-item";
import { URLClock } from "@/routes/router-link";
import {
  ClockCircleOutlined,
  PlusCircleOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";

// icons
const clockIcons = {
  ClockCircleOutlined,
  PlusCircleOutlined,
  ShareAltOutlined,
};

// ==============================|| MENU ITEMS - CLOCKS ||============================== //

const clocks: MenuGroupType = {
  id: "clocks",
  title: "Clocks",
  type: "group",
  children: [
    {
      id: "my-clocks",
      title: "My Clocks",
      type: "item",
      url: URLClock(),
      icon: clockIcons.ClockCircleOutlined,
    },
    {
      id: "add-new-clock",
      title: "Add New Clock",
      type: "item",
      url: "/clocks/add-new",
      icon: clockIcons.PlusCircleOutlined,
      onClick: () => {},
    },
  ],
};

export default clocks;
