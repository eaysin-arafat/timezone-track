// project import
import calendar from "./calendar";
import clocks from "./clock";
import dashboard from "./dashboard";
import events from "./events";
import indexClockEvents from "./index-clock-event";
import pages from "./page";
import security from "./security";
import support from "./support";
import userSettings from "./user-settings";
import utilities from "./utilities";

// MENU ITEMS

const menuItems = {
  items: [
    dashboard,
    indexClockEvents,
    pages,
    clocks,
    events,
    calendar,
    userSettings,
    utilities,
    security,
    support,
  ],
};

export default menuItems;
