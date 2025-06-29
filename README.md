# cyberpunk_RPG

A small web-based terminal interface inspired by Cyberpunk aesthetics. The app loads journal entries and modular pages that emulate an in-universe computer terminal.

## Running the project

Install dependencies:

```bash
npm install
```

Before starting the dev server, compile the Tailwind CSS:

```bash
npm run build:css
npm run dev
```

To compile the TypeScript sources without bundling, run:

```bash
npm run build:ts
```

Vite will serve the app at `http://localhost:5173/`.

## Directory overview

- **js/** – JavaScript modules. Key files include:
  - `glitchwave_terminal.js` – custom element that renders the terminal UI.
  - `journal.js` – loads a user's journal entries from the `data/` folder using a sanitized filename.
  - `modules.js` – dynamic loader for HTML modules.
  - `profile.js` – displays user profile information.
- **modules/** – HTML fragments loaded by the terminal via `modules.js`. Each file represents a page, such as `hermes_page.html` or `remor_page.html`.
- **data/** – JSON files with journal data.
- **style.css** and **animations.css** – styling for the interface.

The project is intended as a lightweight prototype; feel free to expand the modules or modify the styles to fit your campaign.

## Build and deploy

To build the production bundle run:

```bash
npm run build:css
npm run build
```

This outputs the compiled site to the `dist/` directory. To deploy on GitHub Pages,
commit the contents of `dist/` to the `gh-pages` branch of your repository and push it:

```bash
git subtree push --prefix dist origin gh-pages
```

GitHub will serve the page at `https://<user>.github.io/cyberpunk_RPG/`.
