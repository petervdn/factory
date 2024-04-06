import { type ReactElement, useCallback, useMemo } from "react";
import { gridCellSize, gridCellPadding } from "../../data/constants.ts";
import { useGridStore } from "../../data/stores/gridStore.ts";
import { type Position } from "../../data/types.ts";
import { positionToId } from "../../utils/misc.ts";
import { GridCellFloor } from "./GridCellFloor.tsx";

type Props = {
  position: Position;
};

export function GridCell({ position }: Props): ReactElement {
  const setSelectedPosition = useGridStore(
    (state) => state.setSelectedPosition,
  );
  const selectedPosition = useGridStore((state) => state.selectedPosition);

  const isSelected =
    selectedPosition?.x === position.x && selectedPosition?.y === position.y;

  const onClick = useCallback(() => {
    setSelectedPosition(position);
  }, [position, setSelectedPosition]);

  const floors = useGridStore((state) => state.floors);
  const floorForCell = useMemo(
    () => floors[positionToId(position)],
    [floors, position],
  );

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      onClick={onClick}
      style={{
        backgroundColor: "#eee",
        outline: isSelected ? "1px solid #888" : undefined,
        height: gridCellSize,
        width: gridCellSize,
        margin: `0 ${gridCellPadding}px ${gridCellPadding}px 0`,
        color: "#aaa",
        fontSize: 10,
        position: "relative",
      }}
    >
      {/*<div style={{ position: "absolute", left: 0, right: 0 }}>*/}
      {/*  {position.x}-{position.y}*/}
      {/*</div>*/}
      {floorForCell && (
        <div style={{ position: "absolute", left: 0, right: 0 }}>
          <GridCellFloor floor={floorForCell} />
        </div>
      )}
    </div>
  );
}
