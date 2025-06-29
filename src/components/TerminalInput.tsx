import { useState } from "react";
import { useTerminal } from "../store/useTerminal";
import { executeCommand } from "../utils/commandParser";

export const TerminalInput = () => {
  const [value, setValue] = useState("");
  const addLine = useTerminal((s) => s.addLine);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    addLine(`> ${value}`);
    executeCommand(value);
    setValue("");
  };

  return (
    <form onSubmit={onSubmit} className="w-full">
      <input
        autoFocus
        className="w-full bg-black text-green-400 font-mono outline-none placeholder:text-green-600/50"
        placeholder="> Type a command"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};
