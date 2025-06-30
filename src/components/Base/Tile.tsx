import React from 'react';

interface TileProps {
  state: string;
}

export const Tile: React.FC<TileProps> = ({ state }) => {
  const icon = state === 'EMPTY' ? '' : state;
  return (
    <div className="w-12 h-12 border border-cyan-600 flex items-center justify-center">
      {icon && <span className="text-xs">{icon}</span>}
    </div>
  );
};
