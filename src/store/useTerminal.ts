import { create } from "zustand";

export interface TerminalState {
  history: string[];
  addLine: (line: string) => void;
}

export const useTerminal = create<TerminalState>((set) => ({
  history: ["[SYS] Boot sequence initiated."],
  addLine: (line) => set((s) => ({ history: [...s.history, line] }))
}));
