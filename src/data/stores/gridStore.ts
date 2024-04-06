import { create } from "zustand";
import { positionToId } from "../../utils/misc.ts";
import { type Direction, type FloorType, type Position } from "../types.ts";

type Floor = {
  type: FloorType;
  direction: Direction;
};

interface GridStoreState {
  selectedPosition: Position | null;
  floors: Record<string, Floor | undefined>;
  setSelectedPosition(position: Position | null): void;
  setFloor(position: Position, floor: Floor): boolean;
}

export const useGridStore = create<GridStoreState>((set) => ({
  selectedPosition: null,
  setSelectedPosition: (position): void => {
    set(() => ({ selectedPosition: position }));
  },
  floors: {},
  setFloor: (position, floor): boolean => {
    const positionId = positionToId(position);
    set((state) => ({ floors: { ...state.floors, [positionId]: floor } }));
    return true;
  },
}));
