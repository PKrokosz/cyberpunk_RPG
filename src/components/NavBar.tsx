import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar: React.FC = () => {
  const items = [
    { label: 'Terminal', path: '/terminal' },
    { label: 'Journal', path: '/journal' },
    { label: 'Character', path: '/character' },
    { label: 'Inventory', path: '/inventory' },
    { label: 'Map', path: '/map' }
  ];

  return (
    <nav className="fixed top-0 w-full flex justify-around bg-black/70 p-4 shadow-glow z-50">
      {items.map(item => (
        <Link
          key={item.path}
          to={item.path}
          className="text-neon-magenta px-4 py-2 rounded hover:shadow-glow transition"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
