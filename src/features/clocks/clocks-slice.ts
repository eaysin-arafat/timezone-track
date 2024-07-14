import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Clock {
  id: string;
  title: string;
  date: string; // Assuming date is stored as a string for simplicity
  timezone: string;
  offset: number;
  utc: string;
  events: string[]; // Assuming events are stored as an array of strings for simplicity
}

const initialState: Clock[] = [];

export const clocksSlice = createSlice({
  name: "clocks",
  initialState,
  reducers: {
    createClock: (state, action: PayloadAction<Clock>) => {
      state.push(action.payload);
    },
    updateClock: (state, action: PayloadAction<Clock>) => {
      const index = state.findIndex((clock) => clock.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteClock: (state, action: PayloadAction<string>) => {
      state.splice(
        state.findIndex((clock) => clock.id === action.payload),
        1
      );
    },
    deleteAllClocks: (state) => {
      state.length = 0;
    },
  },
});

export const { createClock, updateClock, deleteClock, deleteAllClocks } =
  clocksSlice.actions;
