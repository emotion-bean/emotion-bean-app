import { create } from "zustand";

export const useNavState = create((set) => ({
  navState: "CALENDAR",
  setNavState: (val) => set(() => ({ navState: val })),
}));
