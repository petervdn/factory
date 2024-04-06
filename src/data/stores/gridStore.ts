import { create } from "zustand";
import { positionToId } from "../../utils/misc.ts";
import {
  type Direction,
  type GroundBlockType,
  type Position,
} from "../types.ts";

type Floor = {
  type: GroundBlockType;
  direction: Direction;
};

interface GridStoreState {
  selectedPosition: Position | null;
  floors: Record<string, Floor | undefined>;
  setSelectedPosition(position: Position | null): void;
  addFloor(position: Position, floor: Floor): boolean;
}

export const useGridStore = create<GridStoreState>((set) => ({
  selectedPosition: null,
  setSelectedPosition: (position): void => {
    set(() => ({ selectedPosition: position }));
  },
  floors: {},
  addFloor: (position, floor): boolean => {
    const positionId = positionToId(position);
    set((state) => ({ floors: { ...state.floors, [positionId]: floor } }));
    return true;
  },
}));
