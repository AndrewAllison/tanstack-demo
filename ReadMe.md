# TypeScript/React Monorepo

A modern monorepo setup using pnpm, TypeScript, React, and Vite with comprehensive development tooling.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run Storybook
pnpm storybook:web
```

## 📁 Project Structure

```
.
├── apps/
│   └── web/              # React web application
│       ├── src/          # Source code
│       ├── public/       # Static assets
│       └── package.json  # App-specific dependencies
├── packages/
│   └── utils/           # Shared utilities
│       ├── src/         # Source code
│       └── package.json # Package-specific dependencies
├── types/               # Shared TypeScript types
├── package.json         # Root workspace configuration
└── pnpm-workspace.yaml  # pnpm workspace configuration
```

## 🛠️ Development Tools

### Core Technologies

- [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Next generation frontend tooling

### Code Quality

- [ESLint](https://eslint.org/) - Code linting
- [Prettier](https://prettier.io/) - Code formatting
- [Husky](https://typicode.github.io/husky/) - Git hooks
- [lint-staged](https://github.com/okonet/lint-staged) - Pre-commit checks
- [Commitizen](https://commitizen.github.io/cz-cli/) - Standardized commits
- [Changesets](https://github.com/changesets/changesets) - Version management

## 📋 Available Scripts

### Development

```bash
pnpm dev              # Start development server
pnpm storybook:web    # Start Storybook for web app
```

### Building

```bash
pnpm build            # Build all packages
pnpm build:tsc        # Build TypeScript
```

### Code Quality

```bash
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix ESLint issues
pnpm typecheck        # Run TypeScript type checking
pnpm test             # Run tests
```

### Git & Versioning

```bash
pnpm commit           # Interactive commit with Commitizen
pnpm changesets       # Version management
pnpm changesets:auto  # Automatic semantic versioning
```

### Maintenance

```bash
pnpm clean            # Clean build artifacts
```

## 🔧 Configuration

### ESLint

- Flat config format (ESLint 9)
- TypeScript integration
- React-specific rules
- Accessibility checks
- Import sorting
- Prettier integration

### TypeScript

- Strict mode enabled
- Path aliases configured
- Monorepo-aware configuration

### Git Hooks

- Pre-commit: lint-staged runs ESLint and Prettier
- Commit message: Commitizen enforces conventional commits

## 📦 Package Management

### Adding Dependencies

```bash
# Add to root workspace
pnpm add -w <package>

# Add to specific package
pnpm --filter <package-name> add <dependency>
```

### Workspace Commands

```bash
# Run command in all packages
pnpm -r <command>

# Run command in specific package
pnpm --filter <package-name> <command>
```

## 🔄 Git Workflow

1. Create a new branch
2. Make changes
3. Stage changes
4. Run `pnpm commit` for interactive commit
5. Push changes
6. Create PR

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

Types:

- feat: New feature
- fix: Bug fix
- docs: Documentation changes
- style: Code style changes
- refactor: Code refactoring
- test: Test changes
- chore: Maintenance tasks

## 🧪 Testing

- Vitest for unit testing
- Component testing setup
- Coverage reporting

## 📚 Documentation

- Storybook for component documentation
- TypeScript types for API documentation
- JSDoc comments for complex functions

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:3000
# Add other environment variables as needed
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Run tests and linting
5. Commit your changes
6. Push to the branch
7. Create a Pull Request

## 📝 License

ISC License - see [LICENSE](LICENSE) for details
