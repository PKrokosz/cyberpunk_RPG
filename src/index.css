// Projekt: cyberpunk-rpg-hub
// Etap 1: Szkielet folderu /src

// Struktura po Etapie 2 (dodano NavBar):
// src/
// ├── main.tsx
// ├── App.tsx
// ├── globals.css
// ├── index.css        // (zostanie wygenerowany przez Tailwind)
// └── components/
//     └── NavBar.tsx

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

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <main className="pt-20 px-8">
        <h1 className="text-4xl font-bold text-neon-cyan mb-6">
          Welcome to Glitchwave Terminal
        </h1>
        {/* Kolejne komponenty: PlayButton, InventoryGrid, CharacterSheet, Journal */}
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
