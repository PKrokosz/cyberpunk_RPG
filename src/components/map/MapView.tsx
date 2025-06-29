import React, { useState } from "react";
import mapData from "../../data/map.json";

export const MapView: React.FC = () => {
  const [selected, setSelected] = useState<[number, number] | null>(null);

  return (
    <div className="grid grid-cols-10 gap-1">
      {mapData.map((row, y) =>
        row.map((tile: number, x: number) => (
          <div
            key={`${x}-${y}`}
            className={`w-8 h-8 ${tile ? "bg-green-700" : "bg-gray-700"} ${selected && selected[0] === x && selected[1] === y ? "ring-2 ring-yellow-500" : ""}`}
            onClick={() => setSelected([x, y])}
            title={`(${x},${y})`}
          />
        ))
      )}
    </div>
  );
};
