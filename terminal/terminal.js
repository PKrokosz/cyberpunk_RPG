const output = document.getElementById('terminal-output');
const input = document.getElementById('command-input');
const USER = 'KROKIET';

function writeLine(text) {
  output.textContent += `\n${text}`;
  output.scrollTop = output.scrollHeight;
}

async function handleCommand(cmd) {
  const [base, ...args] = cmd.trim().split(/\s+/);
  switch ((base || '').toLowerCase()) {
    case 'journal':
      if (args[0] === 'read') {
        try {
          const resp = await fetch('../data/journal_KROKIET.json');
          if (!resp.ok) throw new Error('journal not found');
          const entries = await resp.json();
          entries.forEach(e => writeLine(e.text));
        } catch (err) {
          writeLine(`[ERROR] ${err.message}`);
        }
      } else {
        writeLine('Usage: journal read');
      }
      break;
    case 'scan':
      writeLine('Running network scan...');
      setTimeout(() => writeLine('Scan complete. No threats detected.'), 500);
      break;
    case 'echo':
      if (args[0] === 'send') {
        writeLine(args.slice(1).join(' '));
      } else {
        writeLine('Usage: echo send <message>');
      }
      break;
    case 'whoami':
      writeLine(USER);
      break;
    case 'travel':
      writeLine('Initiating travel sequence...');
      break;
    case 'help':
      writeLine('Available commands: journal read, scan, echo send, whoami, travel');
      break;
    default:
      writeLine(`[ERROR] Unknown command '${cmd}'`);
  }
}

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const cmd = input.value;
    writeLine('> ' + cmd);
    handleCommand(cmd);
    input.value = '';
  }
});
input.focus();
