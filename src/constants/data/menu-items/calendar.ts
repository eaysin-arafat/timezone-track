import { generate } from "shortid";

// assets
import { MenuGroupType } from "@/constants/types/menu-item";
import { URLCalendar } from "@/routes/router-link";
import { ChromeOutlined, QuestionOutlined } from "@ant-design/icons";

// icons
const calendarIcons = {
  ChromeOutlined,
  QuestionOutlined,
};

// ==============================|| MENU ITEMS - CALENDAR ||============================== //

const calendar: MenuGroupType = {
  id: generate(),
  title: "Calendar",
  type: "group",
  children: [
    {
      id: "monthly-view",
      title: "My Calendar",
      type: "item",
      url: URLCalendar(),
      icon: calendarIcons.ChromeOutlined,
    },
  ],
};

export default calendar;
