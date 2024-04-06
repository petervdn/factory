import { create } from "zustand";
interface GridStoreState {
  bears: number;
  increase: (by: number) => void;
}

export const useGridStore = create<GridStoreState>((set) => ({
  bears: 0,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
}));
