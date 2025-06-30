import React, { useState, useEffect } from 'react';
import journalData from '../data/journal.json';

const COMMANDS = [
  'journal list',
  'journal read [id]',
  'journal echo [text]',
  'journal note [id] "text"',
  'journal tag [id] tag',
  'journal update [id] [status]',
  'help',
];

const GHOST_PROMPTS = [
  'journal read 3         // try reading a quest',
  'journal echo "your log here"     // send a custom message',
  'journal note 2 "something you learned" // attach notes',
];

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
  const [cmdCount, setCmdCount] = useState(0);
  const [ghostIndex, setGhostIndex] = useState(0);
  const [lastSignature, setLastSignature] = useState('');
  const config = { signature: { autosign: false } };

  useEffect(() => {
    const interval = setInterval(() => {
      setGhostIndex((idx) => (idx + 1) % GHOST_PROMPTS.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

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
      case 'echo': {
        let msg = parts.slice(2).join(' ');
        if (msg.startsWith('-')) {
          setLastSignature(msg);
        }
        if (config.signature.autosign && lastSignature && !msg.endsWith(lastSignature)) {
          msg += ` ${lastSignature}`;
        }
        setRightLog(prev => [...prev, msg]);
        return 'ECHO';
      }
      default:
        return `[ERR] Unknown command: ${parts[1]}`;
    }
  };

  const [history, setHistory] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const output = process(input);
    setHistory((prev) => [...prev, `> ${input}`, output]);
    const newCount = cmdCount + 1;
    setCmdCount(newCount);
    if (newCount % 5 === 0) {
      setHistory((prev) => [
        ...prev,
        '[SYSTEM] Consider signing your log with journal echo "- Krokiet"',
      ]);
    }
    setInput('');
  };

  return (
    <div className="flex flex-col md:flex-row h-full bg-black text-green-400 font-mono">
      <div className="md:w-1/2 max-w-full border-r border-neon-cyan p-2 overflow-y-auto text-cyan-300">
        {history.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
        <form onSubmit={handleSubmit} className="mt-2 flex">
          <span className="mr-2 text-neon-cyan">&gt;</span>
          <input
            type="text"
            className="flex-1 bg-black outline-none placeholder-gray-500 italic"
            placeholder={GHOST_PROMPTS[ghostIndex]}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
          />
        </form>
      </div>
      <div className="md:w-1/2 max-w-full p-2">
        <div className="flex justify-between items-center border-b border-neon-cyan mb-2">
          <h2 className="text-yellow-300">Journal</h2>
          <span className="text-neon-cyan text-xs font-mono">{COMMANDS.length} COMMANDS AVAILABLE</span>
        </div>
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
