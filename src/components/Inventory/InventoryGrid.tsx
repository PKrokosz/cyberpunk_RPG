import React from 'react';
import { InventorySlot } from './InventorySlot';
import { useStore } from '../../store/useStore';

export const InventoryGrid: React.FC = () => {
  const inventory = useStore(state => state.inventory);

  return (
    <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
      {inventory.map((item, idx) => (
        <InventorySlot key={idx} item={item} />
      ))}
    </div>
  );
};
