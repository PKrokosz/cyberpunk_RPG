// Projekt: cyberpunk-rpg-hub
// Etap 8: Animacje z Framer Motion
// Dodajemy animacje wejścia i hover dla kluczowych komponentów.

// ========= File: src/main.tsx =========
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ========= File: src/App.tsx =========
import React from 'react';
import { motion } from 'framer-motion';
import { NavBar } from './components/NavBar';
import { PlayButton } from './components/PlayButton';
import { InventoryGrid } from './components/Inventory/InventoryGrid';
import { CharacterSheet } from './components/CharacterSheet';
import { Journal } from './components/Journal';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function App() {
  return (
    <motion.div
      className="min-h-screen bg-black text-white"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <NavBar />
      <main className="pt-20 px-8 text-center space-y-12 mb-12">
        <motion.h1
          className="text-4xl font-bold text-neon-cyan"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          Welcome to Glitchwave Terminal
        </motion.h1>
        <PlayButton />
        <InventoryGrid />
        <CharacterSheet />
        <Journal />
      </main>
    </motion.div>
  );
}

// ========= File: src/components/NavBar.tsx =========
import React from 'react';
import { motion } from 'framer-motion';

const navVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120 } }
};

export const NavBar: React.FC = () => {
  const items = ['Character', 'Inventory', 'Settings'];
  return (
    <motion.nav
      className="fixed top-0 w-full flex justify-around bg-black/70 p-4 shadow-glow z-50"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      {items.map((item) => (
        <motion.button
          key={item}
          className="text-neon-magenta px-4 py-2 rounded hover:shadow-glow transition"
          whileHover={{ scale: 1.1 }}
        >
          {item}
        </motion.button>
      ))}
    </motion.nav>
  );
};

// ========= File: src/components/PlayButton.tsx =========
import React from 'react';
import { motion } from 'framer-motion';

export const PlayButton: React.FC = () => (
  <motion.button
    className="bg-neon-cyan text-black font-bold py-4 px-8 rounded-lg shadow-glow"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
  >
    Start Session
  </motion.button>
);

// ========= File: src/components/Inventory/InventoryGrid.tsx =========
import React from 'react';
import { motion } from 'framer-motion';
import { InventorySlot } from './InventorySlot';
import { useStore } from '../../store/useStore';

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};

export const InventoryGrid: React.FC = () => {
  const inventory = useStore((state) => state.inventory);
  return (
    <motion.div
      className="grid grid-cols-4 gap-4 max-w-md mx-auto"
      variants={gridVariants}
      initial="hidden"
      animate="show"
    >
      {inventory.map((item, idx) => (
        <InventorySlot key={idx} item={item} />
      ))}
    </motion.div>
  );
};

// ========= File: src/components/Inventory/InventorySlot.tsx =========
import React from 'react';
import { motion } from 'framer-motion';

export const InventorySlot: React.FC<{ item: string | null }> = ({ item }) => (
  <motion.div
    className="w-16 h-16 bg-gray-800 border-2 border-gray-600 rounded flex items-center justify-center"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    transition={{ type: 'spring', stiffness: 200 }}
  >
    {item && <img src={item} alt="item" className="w-10 h-10" />}    
  </motion.div>
);

// ========= File: src/components/CharacterSheet.tsx =========
import React from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../store/useStore';

export const CharacterSheet: React.FC = () => {
  const character = useStore((state) => state.character);
  return (
    <motion.div
      className="bg-gray-900 p-6 rounded-lg max-w-md mx-auto text-left"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <h2 className="text-2xl font-bold text-neon-magenta mb-4">{character.name}</h2>
      <p className="mb-2"><strong>Class:</strong> {character.clazz}</p>
      <div className="space-y-1">
        {Object.entries(character.stats).map(([stat, value]) => (
          <p key={stat}><strong>{stat.charAt(0).toUpperCase() + stat.slice(1)}:</strong> {value}</p>
        ))}
      </div>
    </motion.div>
  );
};

// ========= File: src/components/Journal.tsx =========
import React from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../store/useStore';

export const Journal: React.FC = () => {
  const journal = useStore((state) => state.journal);
  return (
    <motion.div
      className="bg-gray-900 p-6 rounded-lg max-w-md mx-auto text-left space-y-4"
      initial="hidden"
      animate="show"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
    >
      <motion.h2
        className="text-2xl font-bold text-neon-cyan mb-4"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Journal
      </motion.h2>
      {journal.map((entry, idx) => (
        <motion.div
          key={idx}
          className="border-b border-gray-700 pb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: idx * 0.1 }}
        >
          <p className="text-sm text-gray-400">{new Date(entry.date).toLocaleDateString()}</p>
          <p>{entry.text}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};
