import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { TerminalView } from './components/TerminalView';
import { InventoryGrid } from './components/inventory/InventoryGrid';
import { CharacterSheet } from './components/character/CharacterSheet';
import { MapView } from './components/map/MapView';
import inventory from './data/inventory.json';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <main className="pt-20 px-8">
        <Routes>
          <Route path="/" element={<Navigate to="/terminal" />} />
          <Route path="/terminal" element={<TerminalView />} />
          <Route path="/inventory" element={<InventoryGrid slots={inventory} />} />
          <Route path="/character" element={<CharacterSheet />} />
          <Route path="/map" element={<MapView />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
