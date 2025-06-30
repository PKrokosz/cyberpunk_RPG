import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { parseCommand } from '@/utils/terminalParser';
import { useTerminalInput } from '../hooks/useTerminalInput';
import districts from '@/data/night_city_districts_v3.json';
import { NightCityContext } from '@/context/NightCityContext';

export default function Terminal() {
  const navigate = useNavigate();
  const { selectedDistrict } = useContext(NightCityContext);
  const { history, input, setInput, handleSubmit } = useTerminalInput((cmd) => {
    const normalized = cmd.trim().toLowerCase();
    if (normalized === 'city jump') {
      navigate('/map');
      return '[SWITCH] map';
    }
    if (normalized === 'city locate') {
      return selectedDistrict ? `CURRENT DISTRICT: ${selectedDistrict}` : 'NO LOCATION';
    }
    if (normalized.startsWith('district info')) {
      const parts = normalized.split(/\s+/);
      const id = parts[2];
      const d = (districts as any).find((x: any) => x.id === id);
      return d ? JSON.stringify(d) : '[ERR] unknown id';
    }
    const output = parseCommand(cmd);
    if (output.startsWith('[SWITCH]')) {
      const dest = output.split(' ')[1];
      navigate(`/${dest}`);
    }
    return output;
  });

  return (
    <div className="terminal-container p-4 text-green-400 bg-black h-full font-mono overflow-y-auto">
      <div className="terminal-output">
        {history.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mt-2">
        <span className="text-green-500">&gt;</span>
        <input
          type="text"
          className="bg-black text-green-400 outline-none ml-2 w-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
        />
      </form>
    </div>
  );
}
