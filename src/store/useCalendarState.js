import { create } from "zustand";

export const useCalendarState = create((set) => ({
  calendarState: "CALENDAR",
  setCalendarState: (val) => set(() => ({ calendarState: val })),
}));
