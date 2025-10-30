import { create } from "zustand";
//zutand exclusive
interface MacbookStore {
  color: string;
  setColor: (color: string) => void;

  scale: number;
  setScale: (scale: number) => void;

  reset: () => void;
}

const useMacbookStore = create<MacbookStore>((set) => ({
  color: "#2e2c2e", //change number change material
  setColor: (color) => set({ color }),

  scale: 0.08,
  setScale: (scale) => set({ scale }),

  reset: () => set({ color: "#2e2c2e", scale: 0.08 }),
}));

export default useMacbookStore;
