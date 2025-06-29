// js/journal.js
import { loadJournal } from './loadJournal.js';
export const Journal = {
  /**
   * Initialize Journal module for given user and container element
   * @param {string} user - username for loading journal data
   * @param {HTMLElement} container - DOM element to render terminal entries
   */
  async init(user, container) {
    try {
      const entries = await loadJournal(user);
      this.renderEntries(entries, container);
    } catch (err) {
      container.innerHTML = `<div class="error">[ERROR] ${err.message}</div>`;
    }
  },

  /**
   * Render journal entries into the terminal shell
   * @param {Array<Object>} entries - list of journal entries
   * @param {HTMLElement} container - target DOM element
   */
  renderEntries(entries, container) {
    // Clear existing content
    container.innerHTML = '';
    // Iterate over each entry
    entries.forEach(entry => {
      let className = '';
      let text = entry.text;
      // Assign CSS class based on entry type
      switch (entry.type) {
        case 'prompt':
          className = 'prompt-line';
          break;
        case 'system':
          className = 'prompt-line system';
          break;
        case 'data':
          className = 'prompt-line data';
          break;
        case 'glitch':
          className = 'prompt-line glitch';
          break;
        case 'log':
          className = 'log-block info';
          break;
        case 'zapis':
          className = 'log-block zapis';
          break;
        default:
          className = 'log-block';
      }
      // Create and append element for each entry
      const div = document.createElement('div');
      div.className = className;
      div.textContent = text;
      container.appendChild(div);
    });
  }
};
