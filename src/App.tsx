import React from 'react';
import { NavBar } from './components/NavBar';
import TerminalPage from './pages/TerminalPage';
import JournalPage from './pages/JournalPage';
import CharacterPage from './pages/CharacterPage';
import InventoryPage from './pages/InventoryPage';
import MapPage from './pages/MapPage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/cyberpunk_RPG">
      <div className="min-h-screen bg-black text-green-400 font-mono">
        <NavBar />
        <main className="pt-20 px-8 space-y-12 mb-12">
          <Routes>
            <Route path="/" element={<TerminalPage />} />
            <Route path="/terminal" element={<TerminalPage />} />
            <Route path="/journal" element={<JournalPage />} />
            <Route path="/character" element={<CharacterPage />} />
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
