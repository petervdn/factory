import { type ReactElement, useMemo } from "react";
import { useGridStore } from "../../data/stores/gridStore.ts";
import { positionToId } from "../../utils/misc.ts";

export function Inspector(): ReactElement {
  const selectedPosition = useGridStore((state) => state.selectedPosition);

  const floors = useGridStore((state) => state.floors);
  const floorForSelectedPosition = useMemo(() => {
    if (!selectedPosition) {
      return;
    }
    return floors[positionToId(selectedPosition)];
  }, [floors, selectedPosition]);

  return (
    <div style={{ width: 300, backgroundColor: "#eee" }}>
      {selectedPosition && (
        <>
          <h3>
            Selected: {selectedPosition.x},{selectedPosition.y}
          </h3>
          <h4>Floor</h4>
          {floorForSelectedPosition ? floorForSelectedPosition.type : "Empty"}
        </>
      )}
    </div>
  );
}
