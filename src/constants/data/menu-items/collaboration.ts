// assets

import { MenuGroupType } from "@/constants/types/menu-item";

// MENU ITEMS - COLLABORATION

const collaboration: MenuGroupType = {
  id: "collaboration",
  title: "Collaboration",
  type: "group",
  children: [
    {
      id: "shared-with-me",
      title: "Shared with Me",
      type: "item",
      url: "/collaboration/shared-with-me",
      icon: "",
    },
    {
      id: "my-shares",
      title: "My Shares",
      type: "item",
      url: "/collaboration/my-shares",
      icon: "",
    },
    {
      id: "event-discussions",
      title: "Event Discussions",
      type: "item",
      url: "/collaboration/event-discussions",
      icon: "",
    },
  ],
};

export default collaboration;
