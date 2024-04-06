import { type ReactElement } from "react";
import { gridSize } from "../../data/constants.ts";
import { GridCell } from "./GridCell.tsx";

export function Grid(): ReactElement {
  return (
    <div>
      {Array.from({ length: gridSize.height }).map((_, row) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={row}
          style={{
            display: "flex",
          }}
        >
          {/* eslint-disable-next-line @typescript-eslint/no-shadow */}
          {Array.from({ length: gridSize.width }).map((_, column) => (
            // eslint-disable-next-line react/no-array-index-key
            <GridCell position={{ x: column, y: row }} key={column} />
          ))}
        </div>
      ))}
    </div>
  );
}
