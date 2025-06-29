import React from 'react';
import { useStore, Store } from '../store/useStore';

export const CharacterSheet: React.FC = () => {
  const character = useStore((state: Store) => state.character);

  return (
    <div className="bg-gray-900 p-6 rounded-lg max-w-md mx-auto text-left">
      <h2 className="text-2xl font-bold text-neon-magenta mb-4">{character.name}</h2>
      <p className="mb-2"><strong>Class:</strong> {character.clazz}</p>
      <div className="space-y-1">
        {(Object.entries(character.stats) as [string, number][])
          .map(([stat, value]) => (
          <p key={stat}>
            <strong>{stat.charAt(0).toUpperCase() + stat.slice(1)}:</strong> {value}
          </p>
        ))}
      </div>
    </div>
  );
};
