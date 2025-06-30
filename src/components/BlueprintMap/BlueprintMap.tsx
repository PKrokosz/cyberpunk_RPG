import React from 'react';
import { useRooms } from '../../context/RoomsContext';

export const BlueprintMap: React.FC = () => {
  const { rooms } = useRooms();
  return (
    <div className="grid grid-cols-5 gap-1 w-max mx-auto mt-4">
      {rooms.map((room) => (
        <div
          key={room.id}
          className="w-12 h-12 border border-neon-cyan text-[7px] flex items-center justify-center relative"
        >
          {room.npc && (
            <span className="absolute top-0 left-0 text-[6px]">{room.npc[0]}</span>
          )}
          {room.name}
        </div>
      ))}
    </div>
  );
};
