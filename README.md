# Portfolio Template

A forkable personal portfolio template built with **React**, **Vite**, and **TypeScript**.

## Purpose

- Serve as a reusable portfolio foundation
- Separate **content from presentation**
- Allow customization via typed data, not component edits

## Core ideas

- Pages render from **user-defined data**
- Each page owns its **schema and layout**
- Forks update content while sharing the same codebase
- TypeScript enforces structure and prevents breakage

## Tech

- React
- Vite
- TypeScript
- React Router
- CSS (global styles + component modules)

## Customization

Edit files in `src/user/` to:

- change text
- add blocks
- update links
- control page content

No component changes required.

## Development

```bash
npm install
npm run dev
```

## Deployment

The static page can be easily deployed to Github Pages:

```bash
npm install
npm run deploy
```