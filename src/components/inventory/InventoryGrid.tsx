import React from "react";

export interface InventoryGridProps {
  slots: (string | null)[];
}

export const InventoryGrid: React.FC<InventoryGridProps> = ({ slots }) => (
  <div className="grid grid-cols-4 gap-2">
    {slots.map((slot, i) => (
      <div key={i} className="w-16 h-16 bg-gray-800 border border-gray-600 flex items-center justify-center">
        {slot && <img src={slot} alt="item" className="w-10 h-10" />}
      </div>
    ))}
  </div>
);
