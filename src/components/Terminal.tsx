import React from 'react';
import { useNavigate } from 'react-router-dom';
import { parseCommand } from '@/utils/terminalParser';
import { useTerminalInput } from '../hooks/useTerminalInput';

export default function Terminal() {
  const navigate = useNavigate();
  const { history, input, setInput, handleSubmit } = useTerminalInput((cmd) => {
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
