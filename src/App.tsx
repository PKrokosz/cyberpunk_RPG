import React from 'react';
import HUDLayout from './components/HUDLayout';
import TerminalPage from './pages/TerminalPage';
import JournalPage from './pages/JournalPage';
import CharacterPage from './pages/CharacterPage';
import InventoryPage from './pages/InventoryPage';
import MapPage from './pages/MapPage';
import SystemPage from './pages/SystemPage';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <Routes>
        <Route element={<HUDLayout />}> 
          <Route index element={<TerminalPage />} />
          <Route path="terminal" element={<TerminalPage />} />
          <Route path="map" element={<MapPage />} />
          <Route path="journal" element={<JournalPage />} />
          <Route path="character" element={<CharacterPage />} />
          <Route path="system" element={<SystemPage />} />
          <Route path="inventory" element={<InventoryPage />} />
        </Route>
      </Routes>
    </div>

  );
};

export default App;
