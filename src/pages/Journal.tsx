import React, { useState, useEffect } from 'react';
import { useTerminalInput } from '../hooks/useTerminalInput';
import journalData from '../data/journal.json';

interface Quest {
  id: number;
  title: string;
  status: string;
  summary: string;
}

interface JournalProps {
  initialData?: Quest[];
}

const STORAGE_KEY = 'gw_journal_v1';

const Journal: React.FC<JournalProps> = ({ initialData = journalData }) => {
  const [quests, setQuests] = useState<Quest[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : initialData;
  });

  const [rightLog, setRightLog] = useState<string[]>([]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(quests));
  }, [quests]);

  const process = (cmd: string): string => {
    const parts = cmd.trim().split(' ');
    if (parts[0] !== 'journal') {
      return '[ERR] Unknown command';
    }
    switch (parts[1]) {
      case 'help':
        setRightLog([
          'Available commands:',
          'journal help',
          'journal read [id]',
          'journal list',
          'journal echo [text]'
        ]);
        return 'OK';
      case 'list': {
        const lines = quests.map(q => `${q.id}\t${q.title}\t${q.status}`);
        setRightLog(['ID\tTitle\tStatus', ...lines]);
        return `Listed ${quests.length} quests`;
      }
      case 'read': {
        const id = Number(parts[2]);
        const quest = quests.find(q => q.id === id);
        if (!quest) return `[ERR] Quest ${parts[2]} not found`;
        setRightLog([
          `#${quest.id} ${quest.title}`,
          `Status: ${quest.status}`,
          quest.summary
        ]);
        return `Displayed quest ${id}`;
      }
      case 'echo':
        setRightLog(prev => [...prev, parts.slice(2).join(' ')]);
        return 'ECHO';
      default:
        return `[ERR] Unknown command: ${parts[1]}`;
    }
  };

  const { history, input, setInput, handleSubmit } = useTerminalInput(process);

  return (
    <div className="flex h-full bg-black text-green-400 font-mono">
      <div className="w-1/2 border-r border-neon-cyan p-2 overflow-y-auto text-cyan-300">
        {history.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
        <form onSubmit={handleSubmit} className="mt-2 flex">
          <span className="mr-2 text-neon-cyan">&gt;</span>
          <input
            type="text"
            className="flex-1 bg-black outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
          />
        </form>
      </div>
      <div className="w-1/2 p-2">
        <h2 className="text-yellow-300 border-b border-neon-cyan mb-2">Journal</h2>
        {rightLog.map((line, idx) => (
          <div key={idx} className={line.startsWith('[ERR]') ? 'text-red-500' : 'text-white'}>
            {line}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journal;
