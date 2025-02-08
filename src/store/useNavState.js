import { create } from "zustand";

export const useNavState = create((set) => ({
  navState: "START",
  setNavState: (val) => set(() => ({ navState: val })),
}));
