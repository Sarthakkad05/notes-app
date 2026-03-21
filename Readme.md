# Notes App

A minimal Electron app built with TypeScript.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm

## Getting Started

```bash
# Clone the repo
git clone https://github.com/Sarthakkad05/notes-app.git
cd notes-app

# Install dependencies
npm install

# Build and run
npm start
```

## Project Structure

```
notes-app/
├── src/
│   ├── main/
│   │   └── main.ts        # Main process — app lifecycle and window
│   ├── preload/
│   │   └── preload.ts     # Bridge between main and renderer
│   └── renderer/
│       ├── renderer.ts    # Renderer process — builds the UI
│       └── styles.css     # App styles
├── dist/                  # Compiled output (auto-generated, not committed)
├── index.html             # App shell
├── tsconfig.json          # TypeScript config
└── package.json           # Project config and dependencies
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Build and launch the app |
| `npm run build` | Compile TypeScript to `dist/` |

## Built With

- [Electron](https://www.electronjs.org/)
- [TypeScript](https://www.typescriptlang.org/)