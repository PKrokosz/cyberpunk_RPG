import React, { useEffect } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'glitchwave-terminal': any;
    }
  }
}

export {};

const TerminalPage: React.FC = () => {
  useEffect(() => {
    import('../js/glitchwave-terminal.js');
  }, []);

  return (
    <div className="p-6">
      {React.createElement('glitchwave-terminal', { user: 'KROKIET' })}
    </div>
  );
};

export default TerminalPage;
