// assets
import { MenuGroupType } from "@/constants/types/menu-item";
import { URLEvent, URLEvents } from "@/routes/router-link";
import {
  BellOutlined,
  CalendarOutlined,
  PlusCircleOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { generate } from "shortid";

// icons
const eventIcons = {
  CalendarOutlined,
  PlusCircleOutlined,
  ShareAltOutlined,
  BellOutlined,
};

// ==============================|| MENU ITEMS - EVENTS ||============================== //

const events: MenuGroupType = {
  id: "events",
  title: "Events",
  type: "group",
  children: [
    {
      id: generate(),
      title: "All Events",
      type: "item",
      url: URLEvents(),
      icon: eventIcons.CalendarOutlined,
    },
    {
      id: generate(),
      title: "Events",
      type: "item",
      url: URLEvent(),
      icon: eventIcons.CalendarOutlined,
    },
    {
      id: "add-new-event",
      title: "Add New Event",
      type: "item",
      url: "/events/add-new",
      icon: eventIcons.PlusCircleOutlined,
    },
    // {
    //   id: 'shared-events',
    //   title: 'Shared Events',
    //   type: 'item',
    //   url: '/events/shared',
    //   icon: eventIcons.ShareAltOutlined
    // },
    // {
    //   id: 'reminders-notifications',
    //   title: 'Reminders & Notifications',
    //   type: 'item',
    //   url: '/events/reminders',
    //   icon: eventIcons.BellOutlined
    // }
  ],
};

export default events;
