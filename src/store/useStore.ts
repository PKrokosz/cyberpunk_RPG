import create from 'zustand';
import journalData from '../../data/journal_KROKIET.json';

interface Character {
  name: string;
  clazz: string;
  stats: Record<string, number>;
}

interface JournalEntry {
  date: string;
  text: string;
}

interface Store {
  character: Character;
  inventory: (string | null)[]; // ikony lub identyfikatory przedmiotów
  journal: JournalEntry[];
  setCharacter: (data: Character) => void;
  setInventory: (items: (string | null)[]) => void;
  setJournal: (entries: JournalEntry[]) => void;
}

export const useStore = create<Store>((set) => ({
  character: {
    name: 'Krokiet',
    clazz: 'NetRunner',
    stats: { tech: 8, stealth: 6, combat: 5 }
  },
  inventory: Array(16).fill(null),
  journal: journalData,
  setCharacter: (data) => set({ character: data }),
  setInventory: (items) => set({ inventory: items }),
  setJournal: (entries) => set({ journal: entries })
}));
