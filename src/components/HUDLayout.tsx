import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const navItems = [
  { label: 'Terminal', path: '/terminal' },
  { label: 'Mapa', path: '/map' },
  { label: 'Dziennik', path: '/journal' },
  { label: 'Postać', path: '/character' },
  { label: 'System', path: '/system' },
];

const HUDLayout: React.FC = () => (
  <div className="min-h-screen flex bg-black text-green-400 font-mono">
    <aside className="w-48 bg-black/80 border-r border-neon-cyan p-4 flex flex-col space-y-4 shadow-glow">
      <div className="text-neon-magenta text-2xl font-bold mb-4">GW</div>
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `sidebar-link block px-3 py-2 rounded transition hover:shadow-glow ${
              isActive ? 'shadow-glow text-neon-cyan' : 'text-neon-magenta'
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </aside>
    <main className="flex-1 p-4">
      <div className="bg-black/70 border border-neon-cyan p-4 shadow-glow">
        <Outlet />
      </div>
    </main>
  </div>
);

export default HUDLayout;
