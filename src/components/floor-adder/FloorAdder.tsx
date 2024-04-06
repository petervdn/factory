import { type ReactElement, useCallback, useMemo, useState } from "react";
import { useGridStore } from "../../data/stores/gridStore.ts";
import { type FloorType, floorTypes, type Position } from "../../data/types.ts";
import { Select } from "../select/Select.tsx";

type Props = {
  position: Position;
};

export function FloorAdder({ position }: Props): ReactElement {
  const [selectedFloorType, setSelectedFloorType] = useState<FloorType>(
    floorTypes[0],
  );

  const setFloor = useGridStore((state) => state.setFloor);

  const onFloorTypeChange = useCallback((floorType: FloorType) => {
    setSelectedFloorType(floorType);
  }, []);
  const floorOptions = useMemo(
    () =>
      floorTypes.map((floorType) => ({
        label: floorType,
        value: floorType,
      })),
    [],
  );

  const onAddClick = useCallback(() => {
    if (selectedFloorType) {
      setFloor(position, { type: selectedFloorType, direction: "up" });
    }
  }, [position, selectedFloorType, setFloor]);

  return (
    <>
      <button type="button" onClick={onAddClick}>
        Add
      </button>
      <Select
        value={selectedFloorType}
        options={floorOptions}
        onChange={onFloorTypeChange}
      />
    </>
  );
}
