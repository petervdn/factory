import { ReactElement } from "react";
import { gridSize } from "../../data/constants.ts";
import { GridCell } from "./GridCell.tsx";

export function Grid(): ReactElement {
  return (
    <>
      <h1>Grid</h1>
      {Array.from({ length: gridSize.height }).map((_, row) => {
        return (
          <div
            key={row}
            style={{
              display: "flex",
            }}
          >
            {Array.from({ length: gridSize.width }).map((_, column) => {
              return <GridCell position={{ x: column, y: row }} key={column} />;
            })}
          </div>
        );
      })}
    </>
  );
}
