export function parseCommand(input: string): string {
  const trimmed = input.trim();
  if (!trimmed) return '';

  const [command, ...args] = trimmed.split(/\s+/);
  switch (command.toLowerCase()) {
    case 'help':
      return 'Available commands: help, echo, about';
    case 'echo':
      return args.join(' ');
    case 'about':
      return 'Glitchwave Terminal React prototype.';
    default:
      return `Unknown command: ${command}`;
  }
}
