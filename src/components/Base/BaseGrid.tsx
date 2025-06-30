import React from 'react';
import baseState from '../../data/baseState.json';
import { Tile } from './Tile';

export const BaseGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-5 gap-1 w-max mx-auto mt-4">
      {baseState.grid.map((value, idx) => (
        <Tile key={idx} state={value} />
      ))}
    </div>
  );
};
