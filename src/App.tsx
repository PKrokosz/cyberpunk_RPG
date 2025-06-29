import React from 'react';
import { NavBar } from './components/NavBar';
import { PlayButton } from './components/PlayButton';
import { InventoryGrid } from './components/Inventory/InventoryGrid';
import { CharacterSheet } from './components/CharacterSheet';
import { Journal } from './components/Journal';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <main className="pt-20 px-8 text-center space-y-12 mb-12">
        <h1 className="text-4xl font-bold text-neon-cyan">
          Welcome to Glitchwave Terminal
        </h1>
        <PlayButton />
        <InventoryGrid />
        <CharacterSheet />
        <Journal />
      </main>
    </div>
  );
};

export default App;
