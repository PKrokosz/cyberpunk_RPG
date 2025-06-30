import React, { useState } from 'react';
import { BaseGrid, BuildModal } from '../components/Base';
import { ResourceProvider } from '../context/ResourceContext';

const BasePage: React.FC = () => {
  const [show, setShow] = useState(false);
  return (
    <ResourceProvider>
      <div className="p-4">
        <button className="mb-2" onClick={() => setShow(!show)}>Build</button>
        {show && <BuildModal onSelect={() => setShow(false)} />}
        <BaseGrid />
      </div>
    </ResourceProvider>
  );
};

export default BasePage;
