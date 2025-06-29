# cyberpunk_RPG

A small web-based terminal interface inspired by Cyberpunk aesthetics. The app loads journal entries and modular pages that emulate an in-universe computer terminal.

## Running the project

Install dependencies first and then run a single command that starts both Tailwind and Vite in watch mode:

1. `npm install` – fetch project dependencies.
2. `npm run dev` – compile CSS and launch the development server.

Use this command for day-to-day development. After running the production build
you may preview the compiled site with `npm start`, which internally calls
`vite preview`.

To type-check the TypeScript sources without emitting compiled files, run:

```bash
npm run build:ts
```

Vite will serve the app at `http://localhost:5173/`.

## Directory overview

- **src/js/** – vanilla JavaScript modules used by the custom `<glitchwave-terminal>` element:
  - `glitchwave-terminal.js` – renders the terminal UI.
  - `journal.js` – loads a user's journal entries from the `data/` folder using a sanitized filename.
  - `modules.js` – dynamic loader for HTML modules.
  - `profile.js` – displays user profile information.
- **src/** – React/TypeScript components that implement a richer interface.
- **modules/** – HTML fragments loaded by the terminal via `modules.js`. Each file represents a page, such as `hermes_page.html` or `remor_page.html`.
- **data/** – JSON files with journal data.
- **style.css** – base Tailwind styles; **animations.css** – CRT scanline and glitch effects loaded in `index.html`.
- **legacy/** – older HTML prototypes kept for reference only.

The project is intended as a lightweight prototype; feel free to expand the modules or modify the styles to fit your campaign.

## React routes

The React interface defines four main routes under `src/pages`:

- `/terminal` – renders `TerminalPage` and is also accessible as the root `/`.
- `/inventory` – shows the player's items via `InventoryGrid`.
- `/character` – displays stats through `CharacterSheet`.
- `/map` – placeholder map view for future expansion.

## Build and deploy

Before building for production, ensure dependencies are installed with:

```bash
npm install
```

Then run the build command:

```bash
npm run build
```

To preview the compiled site locally run:

```bash
npm start
```

This command serves the contents of the `dist/` folder via `vite preview`.
Vite will serve the production build at `http://localhost:4173/`.

This outputs the compiled site to the `dist/` directory. To deploy on GitHub Pages,
commit the contents of `dist/` to the `gh-pages` branch of your repository and push it:

```bash
git subtree push --prefix dist origin gh-pages
```

GitHub will serve the page at `https://<user>.github.io/cyberpunk_RPG/`.
