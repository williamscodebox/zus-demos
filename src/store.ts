import { create } from "zustand";

type CounterStore = {
  count: number;
  incerment: () => void;
  decrement: () => void;
};

export const useCounter = create<CounterStore>((set) => ({
  count: 0,

  incerment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
