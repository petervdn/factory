import { type ReactElement, useCallback } from "react";
import { gridCellSize, gridCellPadding } from "../../data/constants.ts";
import { useGridStore } from "../../data/stores/gridStore.ts";
import { type Position } from "../../data/types.ts";

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
      }}
    >
      {position.x}-{position.y}
    </div>
  );
}
