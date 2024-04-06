import { type ReactElement, useCallback, useMemo } from "react";
import { useGridStore } from "../../data/stores/gridStore.ts";
import { positionToId } from "../../utils/misc.ts";
import { FloorAdder } from "../floor-adder/FloorAdder.tsx";

export function Inspector(): ReactElement {
  const selectedPosition = useGridStore((state) => state.selectedPosition);
  const rotateFloor = useGridStore((state) => state.rotateFloor);
  const floors = useGridStore((state) => state.floors);
  const floorForSelectedPosition = useMemo(() => {
    if (!selectedPosition) {
      return;
    }
    return floors[positionToId(selectedPosition)];
  }, [floors, selectedPosition]);

  const onRotateClick = useCallback(() => {
    if (selectedPosition) {
      rotateFloor(selectedPosition);
    }
  }, [rotateFloor, selectedPosition]);

  return (
    <div style={{ width: 300 }}>
      {selectedPosition && (
        <>
          <h3>
            Selected: {selectedPosition.x},{selectedPosition.y}
          </h3>
          <h4>Floor</h4>
          {floorForSelectedPosition ? (
            <>
              <p>{floorForSelectedPosition.type}</p>
              <button type="button" onClick={onRotateClick}>
                rotate
              </button>
            </>
          ) : (
            <p>Empty</p>
          )}
          <div>
            <FloorAdder position={selectedPosition} />
          </div>
        </>
      )}
    </div>
  );
}
