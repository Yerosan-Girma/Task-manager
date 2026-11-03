# Contributing

Thanks for your interest in improving this project. Small, focused changes that keep the task manager simple and accessible are welcome.

## Before making a change

1. Check the existing issues and pull requests for related work.
2. Keep changes focused and preserve the current add, complete, delete, filter, progress, and local-storage behavior unless the change explicitly proposes otherwise.
3. Avoid committing generated output such as `dist/` or installed dependencies.
4. Update the README or docs when behavior, setup, or project scope changes.
5. Follow the repository's `.editorconfig` defaults and existing CSS section organization.

## Local workflow

```bash
npm install
npm run dev
npm run lint
npm run build
```

Please run the lint and production build checks before opening a pull request. Include a short summary of what changed and how you checked it. For user-facing changes, describe the expected behavior and, where useful, include a screenshot or reproduction steps.

## Review checklist

- [ ] The change is focused and preserves unrelated behavior.
- [ ] Keyboard and narrow-screen use have been considered for UI changes.
- [ ] Documentation is updated when needed.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.
