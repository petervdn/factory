export const blockTypes = ["static", "materialA", "emitter"] as const;
export const floorTypes = ["conveyor", "destroyer"] as const;

export type BlockType = (typeof blockTypes)[number];
export type FloorType = (typeof floorTypes)[number];

export type Position = { x: number; y: number };
export type Size = { width: number; height: number };
export type Direction = "up" | "down" | "left" | "right";
