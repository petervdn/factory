import { type BlockType, type FloorType, type Size } from "./types.ts";

export const gridSize = { width: 15, height: 15 };
export const gridCellSize = 50;
export const gridCellPadding = 10;

type BlockDefinition = {
  size: Size;
  isStatic: boolean;
};

type FloorDefinition = {
  size: Size;
};

export const blockDefinitions: Record<BlockType, BlockDefinition> = {
  static: {
    size: { width: 1, height: 1 },
    isStatic: true,
  },
  materialA: {
    size: { width: 1, height: 1 },
    isStatic: false,
  },
  emitter: {
    size: { width: 1, height: 1 },
    isStatic: true,
  },
};
export const groundBlockDefinitions: Record<FloorType, FloorDefinition> = {
  conveyor: {
    size: { width: 1, height: 1 },
  },
  destroyer: {
    size: { width: 1, height: 1 },
  },
};
