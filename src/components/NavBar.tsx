import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar: React.FC = () => {
  const items = [
    { label: 'Terminal', path: '/terminal' },
    { label: 'Inventory', path: '/inventory' },
    { label: 'Character', path: '/character' },
    { label: 'Map', path: '/map' }
  ];
  return (
    <nav className="fixed top-0 w-full flex justify-around bg-black/70 p-4 shadow-glow z-50">
      {items.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className="text-neon-magenta px-4 py-2 rounded hover:shadow-glow transition"
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};
