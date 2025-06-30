import React from 'react';
import { RoomsProvider } from '../context/RoomsContext';
import { BlueprintMap } from '../components/BlueprintMap';

const MapPage: React.FC = () => (
  <RoomsProvider>
    <div className="p-6 text-neon-magenta font-mono">
      <BlueprintMap />
    </div>
  </RoomsProvider>
);

export default MapPage;
