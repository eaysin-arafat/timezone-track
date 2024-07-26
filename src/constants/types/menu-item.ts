/* eslint-disable @typescript-eslint/no-explicit-any */
// Define interface for a single event item
export interface MenuItemType {
  id: string;
  title: string;
  type: "item";
  url: string;
  icon: any;
  onClick?: (data?: any) => void;
  breadcrumbs?: boolean;
  target?: boolean;
  external?: boolean;
  isRoute?: boolean;
}

// Define interface for the events group
export interface MenuGroupType {
  id: string;
  title: string;
  type: "group";
  children: MenuItemType[];
}
