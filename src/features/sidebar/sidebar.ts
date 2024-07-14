// menuSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SidebarType {
  openedItem: string;
  openedHorizontalItem: string | null;
  isDrawerOpen: boolean;
  isComponentDrawerOpened: boolean;
}

const initialState: SidebarType = {
  openedItem: "dashboard",
  openedHorizontalItem: null,
  isDrawerOpen: true,
  isComponentDrawerOpened: true,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setDashboardDrawerOpen(state, action: PayloadAction<boolean>) {
      state.isDrawerOpen = action.payload;
    },
    setActiveItem(state, action: PayloadAction<string>) {
      state.openedItem = action.payload;
    },
  },
});

export const { setDashboardDrawerOpen, setActiveItem } = sidebarSlice.actions;
