import React, { createContext, useContext, useState } from 'react';
import data from '../data/resources.json';

export interface Resources {
  credits: number;
  echo: number;
  parts: number;
}

interface ResourceContextValue {
  resources: Resources;
  spend: (cost: Partial<Resources>) => boolean;
}

const ResourceContext = createContext<ResourceContextValue | undefined>(undefined);

export const ResourceProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [resources, setResources] = useState<Resources>(data);

  const spend = (cost: Partial<Resources>) => {
    const can = Object.entries(cost).every(([k, v]) => (resources as any)[k] >= (v || 0));
    if (!can) return false;
    setResources((prev) => ({
      credits: prev.credits - (cost.credits || 0),
      echo: prev.echo - (cost.echo || 0),
      parts: prev.parts - (cost.parts || 0),
    }));
    return true;
  };

  return (
    <ResourceContext.Provider value={{ resources, spend }}>
      {children}
    </ResourceContext.Provider>
  );
};

export const useResources = () => {
  const ctx = useContext(ResourceContext);
  if (!ctx) throw new Error('ResourceContext missing');
  return ctx;
};
