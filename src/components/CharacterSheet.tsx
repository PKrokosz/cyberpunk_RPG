// Projekt: cyberpunk-rpg-hub
// Etap 6: Dziennik (Journal)
// Struktura po Etapie 6:
// src/
// ├── main.tsx
// ├── App.tsx
// ├── globals.css
// ├── index.css        // (wygenerowany przez Tailwind)
// └── components/
//     ├── NavBar.tsx
//     ├── PlayButton.tsx
//     ├── Inventory/
//     │   ├── InventoryGrid.tsx
//     │   └── InventorySlot.tsx
//     ├── CharacterSheet.tsx
//     └── Journal.tsx

// ===== File: src/main.tsx =====
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ===== File: src/App.tsx =====
import React from 'react';
import { NavBar } from './components/NavBar';
import { PlayButton } from './components/PlayButton';
import { InventoryGrid } from './components/Inventory/InventoryGrid';
import { CharacterSheet } from './components/CharacterSheet';
import { Journal } from './components/Journal';

function App() {
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
}

export default App;

// ===== File: src/globals.css =====
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Podstawowe style aplikacji */
body {
  margin: 0;
  font-family: sans-serif;
}

// ===== File: src/index.css =====
/* Ten plik wygeneruje Tailwind: npm run tailwind */

// ===== File: src/components/NavBar.tsx =====
import React from 'react';

export const NavBar: React.FC = () => {
  const items = ['Character', 'Inventory', 'Settings'];
  return (
    <nav className="fixed top-0 w-full flex justify-around bg-black/70 p-4 shadow-glow z-50">
      {items.map((item) => (
        <button
          key={item}
          className="text-neon-magenta px-4 py-2 rounded hover:shadow-glow transition"
        >
          {item}
        </button>
      ))}
    </nav>
  );
};

// ===== File: src/components/PlayButton.tsx =====
import React from 'react';

export const PlayButton: React.FC = () => (
  <button
    className="bg-neon-cyan text-black font-bold py-4 px-8 rounded-lg shadow-glow hover:scale-105 transform transition"
  >
    Start Session
  </button>
);

// ===== File: src/components/Inventory/InventoryGrid.tsx =====
import React from 'react';
import { InventorySlot } from './InventorySlot';

export const InventoryGrid: React.FC = () => {
  const slots = Array.from({ length: 16 }, (_, i) => i);
  return (
    <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
      {slots.map((id) => (
        <InventorySlot key={id} />
      ))}
    </div>
  );
};

// ===== File: src/components/Inventory/InventorySlot.tsx =====
import React from 'react';

export const InventorySlot: React.FC = () => (
  <div className="w-16 h-16 bg-gray-800 border-2 border-gray-600 rounded flex items-center justify-center">
    {/* Ikona przedmiotu */}
  </div>
);

// ===== File: src/components/CharacterSheet.tsx =====
import React from 'react';

export const CharacterSheet: React.FC = () => {
  const character = {
    name: 'Krokiet',
    clazz: 'NetRunner',
    stats: { tech: 8, stealth: 6, combat: 5 }
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg max-w-md mx-auto text-left">
      <h2 className="text-2xl font-bold text-neon-magenta mb-4">{character.name}</h2>
      <p className="mb-2"><strong>Class:</strong> {character.clazz}</p>
      <div className="space-y-1">
        {Object.entries(character.stats).map(([stat, value]) => (
          <p key={stat}><strong>{stat.charAt(0).toUpperCase() + stat.slice(1)}:</strong> {value}</p>
        ))}
      </div>
    </div>
  );
};

// ===== File: src/components/Journal.tsx =====
import React from 'react';
import journalData from '../../data/journal_KROKIET.json';

export const Journal: React.FC = () => (
  <div className="bg-gray-900 p-6 rounded-lg max-w-md mx-auto text-left space-y-4">
    <h2 className="text-2xl font-bold text-neon-cyan mb-4">Journal</h2>
    {journalData.entries.map((entry: any, idx: number) => (
      <div key={idx} className="border-b border-gray-700 pb-2">
        <p className="text-sm text-gray-400">{new Date(entry.date).toLocaleDateString()}</p>
        <p>{entry.text}</p>
      </div>
    ))}
  </div>
);
