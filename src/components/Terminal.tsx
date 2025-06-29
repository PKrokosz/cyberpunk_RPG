import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { parseCommand } from '@/utils/terminalParser';

export default function Terminal() {
  const [history, setHistory] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const output = parseCommand(input);
    if (output.startsWith('[SWITCH]')) {
      const dest = output.split(' ')[1];
      navigate(`/${dest}`);
    }
    setHistory([...history, `> ${input}`, output]);
    setInput('');
  };

  return (
    <div className="terminal-container p-4 text-green-400 bg-black h-full font-mono overflow-y-auto">
      <div className="terminal-output">
        {history.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
      </div>
      <form onSubmit={handleInput} className="mt-2">
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
