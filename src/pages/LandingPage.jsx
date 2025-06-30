import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <div className="min-h-screen bg-black text-green-400 font-mono flex items-center justify-center">
    <div className="border-4 border-neon-magenta rounded-2xl p-8 w-96 text-center shadow-glow">
      <h1 className="text-xl mb-6 neon-glow">// WELCOME TO G.L.I.T.C.H.W.A.V.E //</h1>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Link to="/game" className="py-2 px-4 font-bold rounded bg-cyan-500 hover:bg-cyan-400 text-black">PLAY RPG</Link>
        <Link to="/journal" className="py-2 px-4 font-bold rounded bg-purple-500 hover:bg-purple-400 text-black">JOURNAL</Link>
        <Link to="/character" className="py-2 px-4 font-bold rounded bg-pink-500 hover:bg-pink-400 text-black">CHARACTER</Link>
        <Link to="/inventory" className="py-2 px-4 font-bold rounded bg-blue-500 hover:bg-blue-400 text-black">INVENTORY</Link>
      </div>
      <div className="text-neon-magenta text-sm">
        NEURAL ACCESS KEY VERIFIED<br />
        SLOT: #X1 / USER: KROKIET
      </div>
    </div>
  </div>
);

export default LandingPage;
