
/**
 * Simple terminal command parser used by the React Terminal component.
 * Supported commands: help, journal, map, inv, char, whoami.
 */

export type CommandHandler = (args?: string[]) => string;

export const commands: Record<string, CommandHandler> = {
  help: () => 'help – journal – map – inv – char – base – whoami',
  journal: () => '{JOURNAL}',
  map: () => '[SWITCH] map',
  inv: () => '[SWITCH] inv',
  char: () => '[SWITCH] char',
  base: () => '[SWITCH] base',
  whoami: () => 'USER: KROKIET',
};

/**
 * Parses user input and returns a terminal response.
 * Unknown commands produce an error string.
 */
export function parseCommand(input: string): string {
  const [base, ...args] = input.trim().toLowerCase().split(/\s+/);
  const handler = commands[base];
  return handler ? handler(args) : `[ERR] Unknown command: ${base}`;
}
