import journal from "../../data/journal.json";
import { useTerminal } from "../store/useTerminal";

type Cmd = (args: string[]) => void;

const cmds: Record<string, Cmd> = {
  help: () => {
    useTerminal.getState().addLine("Available: journal list | journal read <id> | echo send <text> | travel <zone>");
  },
  journal: (args) => {
    if (args[0] === "list") {
      journal.forEach((e) => useTerminal.getState().addLine(`${e.id}: ${e.title} (${e.date})`));
    } else if (args[0] === "read") {
      const entry = journal.find((e) => e.id === Number(args[1]));
      if (entry) useTerminal.getState().addLine(`[${entry.title}] ${entry.content}`);
      else useTerminal.getState().addLine("[ERR] Entry not found");
    }
  },
  echo: (args) => {
    const text = args.slice(1).join(" ");
    useTerminal.getState().addLine(`[ECHO] ${text}`);
  },
  travel: (args) => {
    useTerminal.getState().addLine(`Initiating travel to ${args[0]}… Hold tight, choom.`);
  }
};

export const executeCommand = (raw: string) => {
  const parts = raw.trim().split(/\s+/);
  const cmd = parts[0].toLowerCase();
  const args = parts.slice(1);
  if (cmds[cmd]) cmds[cmd](args);
  else useTerminal.getState().addLine(`[ERR] Unknown command: ${cmd}`);
};
