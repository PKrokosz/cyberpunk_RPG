import React from 'react';

export const NavBar: React.FC = () => {
  const items = ['Character', 'Inventory', 'Settings'];
  return (
    <nav className="fixed top-0 w-full flex justify-around bg-black/70 p-4 shadow-glow z-50">
      {items.map(item => (
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
