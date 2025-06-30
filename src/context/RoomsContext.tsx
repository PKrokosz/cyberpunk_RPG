import React, { createContext, useContext, useEffect, useState } from 'react';
import defaultRooms from '../data/rooms.json';

export interface Room {
  id: number;
  x: number;
  y: number;
  name: string;
  type: string;
  npc: string;
  status: string;
  color: string;
}

interface RoomsContextValue {
  rooms: Room[];
  updateRoom: (id: number, patch: Partial<Room>) => void;
  saveRooms: () => void;
}

const RoomsContext = createContext<RoomsContextValue | undefined>(undefined);

const STORAGE_KEY = 'gw_rooms_v1';

export const RoomsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [rooms, setRooms] = useState<Room[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as Room[]) : (defaultRooms as Room[]);
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(rooms));
  }, [rooms]);

  const updateRoom = (id: number, patch: Partial<Room>) => {
    setRooms((prev) => prev.map((r) => (r.id === id ? { ...r, ...patch } : r)));
  };

  const saveRooms = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(rooms));
  };

  return (
    <RoomsContext.Provider value={{ rooms, updateRoom, saveRooms }}>
      {children}
    </RoomsContext.Provider>
  );
};

export const useRooms = () => {
  const ctx = useContext(RoomsContext);
  if (!ctx) throw new Error('RoomsContext missing');
  return ctx;
};
