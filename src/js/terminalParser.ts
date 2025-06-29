// src/js/terminalParser.ts
// === GLITCHWAVE TERMINAL PARSER v1 ===
// Parser komend użytkownika w stylu retro terminala do świata RPG Glitchwave

export function setupTerminalParser(root: Document | ShadowRoot = document) {
  const terminalOutputEl = root.getElementById('terminal-shell') as HTMLElement | null;
  const commandInputEl = root.getElementById('command-input') as HTMLInputElement | null;

  if (!terminalOutputEl || !commandInputEl) return;
  const terminalOutput = terminalOutputEl;
  const commandInput = commandInputEl;

  const commands: Record<string, { description: string; execute: () => string }> = {
    help: {
      description: 'Wyświetl listę dostępnych komend',
      execute: () => `Dostępne komendy: ${Object.keys(commands).join(', ')}`,
    },
    journal: {
      description: 'Przejdź do dziennika',
      execute: () => switchTab('journal'),
    },
    char: {
      description: 'Wyświetl dane postaci',
      execute: () => switchTab('character'),
    },
    inv: {
      description: 'Otwórz ekwipunek',
      execute: () => switchTab('inventory'),
    },
    map: {
      description: 'Pokaż mapę',
      execute: () => switchTab('map'),
    },
    status: {
      description: 'Sprawdź status łącza',
      execute: () => `[STATUS] NET-LINK ACTIVE – SLOT: 0x01`,
    },
    whoami: {
      description: 'Wyświetl nazwę użytkownika',
      execute: () => `USER: KROKIET`,
    },
  };

  function handleCommand(input: string) {
    const command = input.trim().toLowerCase();
    const entry = (commands as any)[command];
    let output = '';
    if (entry) {
      output = typeof entry.execute === 'function' ? entry.execute() : '[ERROR] Brak akcji.';
    } else {
      output = `[ERROR] Nieznana komenda: '${command}'`;
    }
    printToTerminal(`> ${input}\n${output}`);
  }

  function printToTerminal(text: string) {
    const entry = document.createElement('pre');
    entry.textContent = text;
    terminalOutput.appendChild(entry);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  commandInput.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(commandInput.value);
      commandInput.value = '';
    }
  });

  function switchTab(tabId: string) {
    window.location.href = `/cyberpunk_RPG/${tabId}`;
    return `[OK] Przełączono na: ${tabId}`;
  }

  // Domyślne powitanie
  printToTerminal(
    "//=====[ GLITCHWAVE INTERFACE // SubEcho Vault ]=====\\\n[STATUS] NET-LINK ACTIVE – SLOT: 0x01\n> Wpisz 'help' aby zobaczyć komendy."
  );
}

