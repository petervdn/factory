import { create } from "zustand";
import { positionToId, rotateDirection } from "../../utils/misc.ts";
import { type Direction, type FloorType, type Position } from "../types.ts";

export type Floor = {
  type: FloorType;
  direction: Direction;
};

interface GridStoreState {
  selectedPosition: Position | null;
  floors: Record<string, Floor | undefined>;
  rotateFloor(position: Position): void;
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
  rotateFloor(position: Position): void {
    set((state) => {
      const positionId = positionToId(position);
      const floor = state.floors[positionId];

      if (floor) {
        return {
          floors: {
            ...state.floors,
            [positionId]: {
              ...floor,
              direction: rotateDirection(floor.direction),
            },
          },
        };
      }

      return {};
    });
  },
}));
