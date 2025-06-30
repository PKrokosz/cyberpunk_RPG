import React from 'react';
import catalog from '../../data/moduleCatalog.json';
import { useResources } from '../../context/ResourceContext';
import { canAfford } from '../../utils/resources';

interface BuildModalProps {
  onSelect: (name: string) => void;
}

export const BuildModal: React.FC<BuildModalProps> = ({ onSelect }) => {
  const { resources } = useResources();
  return (
    <div className="p-4 bg-gray-800 border border-cyan-600 text-sm">
      {catalog.map((m) => (
        <button
          key={m.name}
          className="block w-full text-left disabled:opacity-50"
          disabled={!canAfford(resources, m.cost)}
          onClick={() => onSelect(m.name)}
        >
          {m.name} – {m.cost.credits}C/{m.cost.parts}P
        </button>
      ))}
    </div>
  );
};
