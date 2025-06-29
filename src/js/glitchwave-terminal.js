// js/glitchwave-terminal.js
import { Journal } from './journal.js';
import { Profile } from './profile.js';
import { Modules } from './modules.js';
import { setupTerminalParser } from './terminalParser.ts';

const base = import.meta.env.BASE_URL;
const template = document.createElement('template');
template.innerHTML = `
  <style>
    @import '${base}tailwind.build.css';
  </style>
  <div class="glitchwave-terminal">
    <header class="terminal-header">//====[ GLITCHWAVE INTERFACE // SubEcho Vault ]====\\</header>
    <div class="terminal-shell" id="terminal-shell"></div>
    <div class="mt-4 w-full">
      <input id="command-input" type="text" placeholder="> Type a command" class="w-full bg-black border border-green-600 text-green-400 px-4 py-2 placeholder-green-600 focus:outline-none" />
    </div>
    <aside class="profile-pane" id="profile-pane"></aside>
    <footer class="terminal-footer">[STATUS] NET-LINK ACTIVE — SLOT: 0x01</footer>
  </div>
`;

class GlitchwaveTerminal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }).append(template.content.cloneNode(true));
  }

  async connectedCallback() {
    const user = this.getAttribute('user') || 'KROKIET';
    const shell = this.shadowRoot.getElementById('terminal-shell');
    const pane = this.shadowRoot.getElementById('profile-pane');
    await Profile.init(user, pane);
    await Journal.init(user, shell);
    setupTerminalParser(this.shadowRoot);
  }
}

customElements.define('glitchwave-terminal', GlitchwaveTerminal);
