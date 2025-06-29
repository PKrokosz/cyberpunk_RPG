export type CommandHandler = () => string;

const commands: Record<string, CommandHandler> = {
  help: () => 'help – journal – map – inv – char – whoami',
  journal: () => '{JOURNAL}',
  map: () => '[SWITCH] map',
  inv: () => '[SWITCH] inv',
  char: () => '[SWITCH] char',
  whoami: () => 'USER: KROKIET'
};

export function parseCommand(input: string): string {
  const cmd = input.trim().toLowerCase();
  return commands[cmd]?.() ?? `[ERR] Unknown command: ${cmd}`;
}
