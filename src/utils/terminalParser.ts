
/**
 * Simple terminal command parser used by the React Terminal component.
 * Supported commands: help, journal, map, inv, char, whoami.
 */

export type CommandHandler = () => string;

export const commands: Record<string, CommandHandler> = {
  help: () => 'help – journal – map – inv – char – whoami',
  journal: () => '{JOURNAL}',
  map: () => '[SWITCH] map',
  inv: () => '[SWITCH] inv',
  char: () => '[SWITCH] char',
  whoami: () => 'USER: KROKIET',
};

/**
 * Parses user input and returns a terminal response.
 * Unknown commands produce an error string.
 */
export function parseCommand(input: string): string {
  const cmd = input.trim().toLowerCase();
  const handler = commands[cmd];
  return handler ? handler() : `[ERR] Unknown command: ${cmd}`;
}
