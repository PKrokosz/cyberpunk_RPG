import { TerminalInput } from "./TerminalInput";
import { useTerminal } from "../store/useTerminal";

export const TerminalView = () => {
  const history = useTerminal((s) => s.history);
  return (
    <div className="h-screen bg-black text-green-400 font-mono p-4 overflow-y-auto scanline-overlay">
      {history.map((l, i) => (
        <pre key={i} className="whitespace-pre-wrap leading-snug">{l}</pre>
      ))}
      <TerminalInput />
    </div>
  );
};
