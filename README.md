# cyberpunk_RPG

A small web-based terminal interface inspired by Cyberpunk aesthetics. The app loads journal entries and modular pages that emulate an in-universe computer terminal.

## Running the project

Install dependencies:

```bash
npm install
```

Compile the Tailwind CSS, then start the dev server:

```bash
npm run build:css
npm run dev
```

To type-check the TypeScript sources without emitting compiled files, run:

```bash
npm run build:ts
```

Vite will serve the app at `http://localhost:5173/`.

## Directory overview

- **js/** – JavaScript modules. Key files include:
  - `glitchwave-terminal.js` – custom element that renders the terminal UI.
  - `journal.js` – loads a user's journal entries from the `data/` folder using a sanitized filename.
  - `modules.js` – dynamic loader for HTML modules.
  - `profile.js` – displays user profile information.
- **src/** – React/TypeScript components that implement a richer interface.
- **modules/** – HTML fragments loaded by the terminal via `modules.js`. Each file represents a page, such as `hermes_page.html` or `remor_page.html`.
- **data/** – JSON files with journal data.
- **style.css** – base Tailwind styles; **animations.css** – CRT scanline and glitch effects loaded in `index.html`.

The project is intended as a lightweight prototype; feel free to expand the modules or modify the styles to fit your campaign.

## Build and deploy

To build the production bundle run:

```bash
npm run build:css
npm run build
```

To preview the compiled site locally run:

```bash
npm start
```

Vite will serve the production build at `http://localhost:4173/`.

This outputs the compiled site to the `dist/` directory. To deploy on GitHub Pages,
commit the contents of `dist/` to the `gh-pages` branch of your repository and push it:

```bash
git subtree push --prefix dist origin gh-pages
```

GitHub will serve the page at `https://<user>.github.io/cyberpunk_RPG/`.
