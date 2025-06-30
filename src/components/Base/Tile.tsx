import React from 'react';
import { Room } from '../../context/RoomsContext';

interface TileProps {
  room: Room;
}

export const Tile: React.FC<TileProps> = ({ room }) => {
  const statusClass =
    room.status === 'BUILT'
      ? 'border-cyan-400'
      : room.status === 'UPGRADE_READY'
      ? 'border-yellow-400 animate-pulse'
      : 'border-cyan-800';
  return (
    <div
      className={`w-12 h-12 border flex items-center justify-center ${statusClass}`}
      title={`${room.name} — ${room.type}`}
    >
      {room.npc && <span className="text-[8px]">{room.npc}</span>}
    </div>
  );
};
