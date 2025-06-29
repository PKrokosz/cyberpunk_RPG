import React from 'react';
import { InventorySlot } from './InventorySlot';
import { useStore, Store } from '../../store/useStore';

export const InventoryGrid: React.FC = () => {
  const inventory = useStore((state: Store) => state.inventory);

  return (
    <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
      {inventory.map((item: string | null, idx: number) => (
        <InventorySlot key={idx} item={item} />
      ))}
    </div>
  );
};
