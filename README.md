# cyberpunk_RPG

A small web-based terminal interface inspired by Cyberpunk aesthetics. The app loads journal entries and modular pages that emulate an in-universe computer terminal.

## Running the project

Open `index.html` in a modern web browser. You can either double‑click the file or serve the folder using a simple HTTP server, for example:

```bash
npx serve .
# or
python3 -m http.server
```

Then navigate to `http://localhost:8000` (or the address printed by the server) to view the terminal.

## Directory overview

- **js/** – JavaScript modules. Key files include:
  - `glitchwave_terminal.js` – custom element that renders the terminal UI.
  - `journal.js` – loads journal entries from the `data/` folder.
  - `modules.js` – dynamic loader for HTML modules.
  - `profile.js` – displays user profile information.
- **modules/** – HTML fragments loaded by the terminal via `modules.js`. Each file represents a page, such as `hermes_page.html` or `remor_page.html`.
- **data/** – JSON files with journal data.
- **style.css** and **animations.css** – styling for the interface.

The project is intended as a lightweight prototype; feel free to expand the modules or modify the styles to fit your campaign.
