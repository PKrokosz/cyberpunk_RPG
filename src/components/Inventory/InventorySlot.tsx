import React from 'react';

export interface InventorySlotProps {
  item: string | null;
}

export const InventorySlot: React.FC<InventorySlotProps> = ({ item }) => (
  <div className="w-16 h-16 bg-gray-800 border-2 border-gray-600 rounded flex items-center justify-center">
    {item && <img src={item} alt="item" className="w-10 h-10" />}
  </div>
);

