import { type Position } from "../data/types.ts";

export function positionToId(position: Position): string {
  return `${position.x}x${position.y}`;
}

export function idToPosition(id: string): Position {
  const [x, y] = id.split("x");
  return { x: Number(x), y: Number(y) };
}
