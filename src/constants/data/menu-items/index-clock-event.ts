// assets
import { MenuGroupType } from "@/constants/types/menu-item";
import { URLEvent } from "@/routes/router-link";
import { ChromeOutlined, QuestionOutlined } from "@ant-design/icons";

// icons
const indexClockEventsIcons = {
  ChromeOutlined,
  QuestionOutlined,
};

// ==============================|| MENU ITEMS - CALENDAR ||============================== //

const indexClockEvents: MenuGroupType = {
  id: "calendar",
  title: "Index",
  type: "group",
  children: [
    {
      id: "monthly-view",
      title: "Today Events",
      type: "item",
      url: URLEvent(),
      icon: indexClockEventsIcons.ChromeOutlined,
    },
  ],
};

export default indexClockEvents;
