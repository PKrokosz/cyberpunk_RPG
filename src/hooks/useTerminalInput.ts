import { useState } from 'react';

export function useTerminalInput(processor: (input: string) => string) {
  const [history, setHistory] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const output = processor(input);
    setHistory((prev) => [...prev, `> ${input}`, output]);
    setInput('');
  };

  return { history, input, setInput, handleSubmit };
}
