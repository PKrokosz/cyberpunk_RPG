import React, { useState } from 'react';
import { BaseGrid, BuildModal } from '../components/Base';
import { ResourceProvider } from '../context/ResourceContext';
import { RoomsProvider } from '../context/RoomsContext';

const BasePage: React.FC = () => {
  const [show, setShow] = useState(false);
  return (
    <ResourceProvider>
      <RoomsProvider>
        <div className="p-4">
          <button className="mb-2" onClick={() => setShow(!show)}>
            Build
          </button>
          {show && <BuildModal onSelect={() => setShow(false)} />}
          <BaseGrid />
        </div>
      </RoomsProvider>
    </ResourceProvider>
  );
};

export default BasePage;
