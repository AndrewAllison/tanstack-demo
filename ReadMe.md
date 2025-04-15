# TypeScript/React Monorepo

A modern monorepo setup using pnpm, TypeScript, React, and Vite.

## Project Structure

```
.
├── apps/
│   └── web/          # React web application
├── packages/
│   └── utils/        # Shared utilities
└── types/            # Shared TypeScript types
```

## Prerequisites

- Node.js (LTS version)
- pnpm (latest version)

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start the development server:
   ```bash
   pnpm dev
   ```

3. Build the project:
   ```bash
   pnpm build
   ```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build all packages
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint issues
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm test` - Run tests
- `pnpm clean` - Clean build artifacts

## Tech Stack

- [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [ESLint](https://eslint.org/) - Code linting
- [Prettier](https://prettier.io/) - Code formatting
