import React from 'react';
import { useRooms } from '../../context/RoomsContext';
import { Tile } from './Tile';

export const BaseGrid: React.FC = () => {
  const { rooms } = useRooms();
  return (
    <div className="grid grid-cols-5 gap-1 w-max mx-auto mt-4">
      {rooms.map((room) => (
        <Tile key={room.id} room={room} />
      ))}
    </div>
  );
};
