import { clocksSlice } from "@/features/clocks/clocks-slice";
import { sidebarSlice } from "@/features/sidebar/sidebar";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// Combine reducers if you have multiple slices
const rootReducer = combineReducers({
  clocks: clocksSlice.reducer,
  sidebar: sidebarSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.MODE !== "production",
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
