# Spela På Spåret

A small React app for tracking bets on the Swedish TV show *På Spåret*.

## Requirements

Node 24 (see [`.nvmrc`](.nvmrc)). With nvm:

```sh
nvm use
npm install
```

## Available scripts

### `npm start` / `npm run dev`

Runs the app in development mode on [http://localhost:3000](http://localhost:3000) with hot module replacement.

### `npm run build`

Type-checks the project and builds it for production into the `build` folder.

### `npm run preview`

Serves the contents of `build` locally, to check a production build before deploying.

### `npm run lint` / `npm run lint:fix`

Lints the project with ESLint.

### `npm run format` / `npm run format:check`

Formats (or checks) source files with Prettier.

## Tooling

- **Vite** for dev server and bundling
- **MUI** (Material UI, including X Charts) for components and charts
- **TypeScript**, **ESLint** and **Prettier**

## Importing bets from CSV

`scripts/parse-csv.js` converts an exported form response CSV into the `Gambler[]`
structure used by the app:

```sh
node scripts/parse-csv.js <input.csv> src/constants/gamblers.ts
```
