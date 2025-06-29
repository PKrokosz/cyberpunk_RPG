import React from 'react';
import { useStore, Store } from '../store/useStore';

export const Journal: React.FC = () => {
  const journal = useStore((state: Store) => state.journal);

  return (
    <div className="bg-gray-900 p-6 rounded-lg max-w-md mx-auto text-left space-y-4">
      <h2 className="text-2xl font-bold text-neon-cyan mb-4">Journal</h2>
      {journal.map((entry, idx: number) => (
        <div key={idx} className="border-b border-gray-700 pb-2">
          <p className="text-sm text-gray-400">
            {new Date(entry.date).toLocaleDateString()}
          </p>
          <p>{entry.text}</p>
        </div>
      ))}
    </div>
  );
};
