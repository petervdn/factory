import { type BlockType, type GroundBlockType, type Size } from "./types.ts";

export const gridSize = { width: 15, height: 15 };
export const gridCellSize = 50;
export const gridCellPadding = 10;

type BlockDefinition = {
  size: Size;
  isStatic: boolean;
  isFloorBlock: boolean;
};

export const blockDefinitions: Record<BlockType, BlockDefinition> = {
  static: {
    size: { width: 1, height: 1 },
    isStatic: true,
    isFloorBlock: false,
  },
  materialA: {
    size: { width: 1, height: 1 },
    isStatic: false,
    isFloorBlock: false,
  },
  emitter: {
    size: { width: 1, height: 1 },
    isStatic: true,
    isFloorBlock: false,
  },
};
export const groundBlockDefinitions: Record<GroundBlockType, BlockDefinition> =
  {
    conveyor: {
      size: { width: 1, height: 1 },
      isStatic: false,
      isFloorBlock: true,
    },
  };
