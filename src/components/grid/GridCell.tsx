import { gridCellSize, gridCellPadding } from "../../data/constants.ts";
import { ReactElement } from "react";

type Props = {
  position: { x: number; y: number };
};

export function GridCell({ position }: Props): ReactElement {
  return (
    <div
      style={{
        backgroundColor: "#eee",
        height: gridCellSize,
        width: gridCellSize,
        margin: `0 ${gridCellPadding}px ${gridCellPadding}px 0`,
        color: "#aaa",
        fontSize: 10,
      }}
    >
      {position.x}-{position.y}
    </div>
  );
}
