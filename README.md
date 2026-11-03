# React Task Manager

A small, responsive task manager built with React and Vite. Add tasks, mark them complete, remove them, and filter the list while tracking completion progress in real time. Tasks are saved in the current browser with `localStorage`; no account or server is required.

## Features

- Add a task with the **Add** button or Enter.
- Toggle tasks between active and completed.
- Delete individual tasks.
- Filter tasks by all, active, or completed.
- See a live completion count and progress bar.
- Keep tasks between visits with browser `localStorage`.
- Use semantic controls, keyboard focus indicators, and reduced-motion support.

See the [feature checklist](docs/FEATURES.md) for the current scope.

## Get started

### Requirements

- Node.js (current LTS recommended)
- npm (included with Node.js)

### Install and run

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. The development server refreshes as you edit files.

### Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run lint` | Check JavaScript and JSX with ESLint. |
| `npm run build` | Create the production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |

For more detail, see [Getting started](docs/GETTING_STARTED.md).

## Project structure

```text
.
├── docs/
│   ├── FEATURES.md          # Feature checklist and project scope
│   └── GETTING_STARTED.md   # Setup and verification steps
├── src/
│   ├── Componants/          # Task input, filters, list, and task item UI
│   ├── App.jsx              # State, task actions, filtering, and progress
│   ├── main.jsx             # React application entry point
│   └── style.css            # Global styles, component styles, and breakpoints
├── .editorconfig            # Shared whitespace and line-ending defaults
├── eslint.config.js         # ESLint flat configuration
├── index.html               # Vite HTML entry point
└── package.json             # Dependencies and npm scripts
```

The `Componants` directory name is retained as it exists in the source tree.

## Task storage and privacy

Tasks are serialized as JSON in this browser's `localStorage` under the `tasks` key. They persist across visits in the same browser profile, but are not synced to another browser or device and are not sent to a server by this app. Clearing the site's browser data removes them. If storage is unavailable, full, or contains invalid data, the app continues with an empty in-memory list; changes may not persist in that case.

## Accessibility and responsive layout

The app uses labeled form controls, semantic buttons, pressed states for toggle and filter controls, a labeled progress bar, and polite live regions for changing status. Visible keyboard focus styles and a reduced-motion preference are included. Layout adjustments at narrow viewport widths make the task card, input, and task controls fit smaller screens. These are implementation notes, not a claim of a complete assistive-technology audit; accessibility behavior should be checked when making UI changes.

## Lint configuration

ESLint is configured in `eslint.config.js` using the recommended JavaScript rules, React Hooks rules, and React Refresh rules. Run `npm run lint` to check the JavaScript and JSX files. Editor whitespace defaults are in `.editorconfig`.

## Project goals

- Keep everyday task actions clear and quick.
- Demonstrate a small React application with reusable components and state-driven UI.
- Keep setup lightweight and task data local to the user's browser.
- Make core interactions usable across screen sizes and with keyboard navigation.

## Contributing

Contributions and focused improvements are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) for the local workflow and review checklist.
