import { type ReactElement, useMemo } from "react";
import { type Floor } from "../../data/stores/gridStore.ts";

type Props = {
  floor: Floor;
};

export function GridCellFloor({ floor }: Props): ReactElement {
  const content = useMemo(() => {
    if (floor.type === "destroyer") {
      return "X";
    }
    if (floor.type === "conveyor") {
      switch (floor.direction) {
        case "up": {
          return "↑";
        }
        case "down": {
          return "↓";
        }
        case "left": {
          return "←️";
        }
        case "right": {
          return "→️";
        }
        default: {
          // eslint-disable-next-line no-console
          console.error(`Unhandled direction${floor.direction}`);
        }
      }
    }
  }, [floor.direction, floor.type]);
  return (
    <div
      style={{
        fontSize: 30,
        fontWeight: "bolder",
        marginLeft: 12,
        marginTop: 2,
      }}
    >
      {content}
    </div>
  );
}
