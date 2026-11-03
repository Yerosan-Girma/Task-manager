# Task Manager

A React-based task manager that helps you organize daily work with a simple, responsive interface. You can add new tasks, mark them complete, delete them, filter by status, and track progress in real time. Tasks persist in the browser using `localStorage`, so they remain available after refresh.

## Features

- Add new tasks with a single input field
- Mark tasks as complete or active
- Remove individual tasks
- Clear all completed tasks
- Reset the list to start fresh
- Filter tasks by:
  - All
  - Active
  - Completed
- Live completion progress tracking
- Persistent data saved in the browser
- Responsive, clean UI built with React and CSS

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- localStorage for persistence

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Run the app locally

```bash
npm run dev
```

This starts the Vite development server. Open the local URL shown in the terminal (typically `http://localhost:5173`) to view the app.

### Build for production

```bash
npm run build
```

### Lint the project

```bash
npm run lint
```

## Project Structure

```text
Task-manager/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── style.css
│   └── Componants/
│       ├── Filter.jsx
│       ├── TaskInput.jsx
│       └── TaskList.jsx
├── docs/
├── README.md
├── CHANGELOG.md
├── CONTRIBUTING.md
└── .gitignore
```

## Usage

1. Enter a task in the input box.
2. Press Enter or click the add button.
3. Use the filter buttons to view all, active, or completed tasks.
4. Click a task to mark it complete or incomplete.
5. Use the clear completed option to remove finished tasks quickly.

## Notes

The app stores tasks in the browser's local storage under the key `tasks`, so the data persists between refreshes and browser sessions on the same device.

## License

This project is open for personal and educational use. See the repository for any project-specific licensing details.
