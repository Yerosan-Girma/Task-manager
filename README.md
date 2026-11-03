# React Task Manager

A small task manager built with React and Vite. Add tasks, mark them complete, remove them, and filter the list. Your tasks are saved in the browser with `localStorage`.

## Features

- Add a task with the button or by pressing Enter.
- Toggle tasks between active and completed.
- Filter the list by all, active, or completed tasks.
- See a live completion count and progress bar.
- Keep tasks between visits using browser storage.
- Use the controls with a keyboard or assistive technology.

## Requirements

- Node.js (LTS recommended)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. The development server supports hot reloading.

## Available commands

- `npm run dev` — start the development server.
- `npm run build` — create a production build in `dist/`.
- `npm run preview` — preview the production build locally.
- `npm run lint` — run ESLint.

## Task storage

Tasks are stored in the browser's local storage under the `tasks` key. They are local to the current browser and are not synced across devices. Clearing site data removes saved tasks. If local storage is unavailable, the app still runs for the current session.
