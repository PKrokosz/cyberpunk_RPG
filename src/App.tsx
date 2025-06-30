import React, { Suspense, lazy } from 'react';
import HUDLayout from './components/HUDLayout';
import { Routes, Route } from 'react-router-dom';

const TerminalPage = lazy(() => import('./pages/TerminalPage'));
const JournalPage = lazy(() => import('./pages/JournalPage'));
const CharacterPage = lazy(() => import('./pages/CharacterPage'));
const InventoryPage = lazy(() => import('./pages/InventoryPage'));
const NightCityMap = lazy(() => import('./components/NightCityMap'));
const DistrictView = lazy(() => import('./pages/DistrictView'));
const SystemPage = lazy(() => import('./pages/SystemPage'));
const LandingPage = lazy(() => import('./pages/LandingPage'));
const Game = lazy(() => import('./pages/Game'));
const Journal = lazy(() => import('./pages/Journal'));
const Character = lazy(() => import('./pages/Character'));
const Inventory = lazy(() => import('./pages/Inventory'));
const BasePage = lazy(() => import('./pages/BasePage'));

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="game" element={<Game />} />
          <Route path="journal" element={<Journal />} />
          <Route path="character" element={<Character />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="base" element={<BasePage />} />
          <Route element={<HUDLayout />}>
            <Route path="terminal" element={<TerminalPage />} />
            <Route path="map" element={<NightCityMap />} />
            <Route path="map/:id" element={<DistrictView />} />
            <Route path="system" element={<SystemPage />} />
            <Route path="journal-old" element={<JournalPage />} />
            <Route path="character-old" element={<CharacterPage />} />
            <Route path="inventory-old" element={<InventoryPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
