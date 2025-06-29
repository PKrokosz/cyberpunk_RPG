// Projekt: cyberpunk-rpg-hub
// Etap 4: Panel ekwipunku (InventoryGrid)
// Struktura po Etapie 4:
// src/
// ├── main.tsx
// ├── App.tsx
// ├── globals.css
// ├── index.css        // (wygenerowany przez Tailwind)
// └── components/
//     ├── NavBar.tsx
//     ├── PlayButton.tsx
//     └── Inventory/
//         ├── InventoryGrid.tsx
//         └── InventorySlot.tsx

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

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <main className="pt-20 px-8 text-center">
        <h1 className="text-4xl font-bold text-neon-cyan mb-6">
          Welcome to Glitchwave Terminal
        </h1>
        <div className="my-8">
          <PlayButton />
        </div>
        <section className="my-8">
          <InventoryGrid />
        </section>
        {/* Kolejne komponenty: CharacterSheet, Journal */}
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
