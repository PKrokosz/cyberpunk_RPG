import React from 'react';
import HUDLayout from './components/HUDLayout';
import TerminalPage from './pages/TerminalPage';
import JournalPage from './pages/JournalPage';
import CharacterPage from './pages/CharacterPage';
import InventoryPage from './pages/InventoryPage';
import MapPage from './pages/MapPage';
import SystemPage from './pages/SystemPage';
import LandingPage from './pages/LandingPage';
import Game from './pages/Game';
import Journal from './pages/Journal';
import Character from './pages/Character';
import Inventory from './pages/Inventory';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="game" element={<Game />} />
        <Route path="journal" element={<Journal />} />
        <Route path="character" element={<Character />} />
        <Route path="inventory" element={<Inventory />} />
        <Route element={<HUDLayout />}>
          <Route path="terminal" element={<TerminalPage />} />
          <Route path="map" element={<MapPage />} />
          <Route path="system" element={<SystemPage />} />
          <Route path="journal-old" element={<JournalPage />} />
          <Route path="character-old" element={<CharacterPage />} />
          <Route path="inventory-old" element={<InventoryPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
