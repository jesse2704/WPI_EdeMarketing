# Copilot Instructions for WPI_EdeMarketing

## Project Overview

WPI_EdeMarketing is a marketing web application project. The codebase targets a JavaScript/Node.js stack, as reflected by the `.gitignore` configuration.

## Tech Stack

- **Runtime**: Node.js
- **Language**: JavaScript (or TypeScript)
- **Package Manager**: npm or yarn
- **Framework**: To be determined as the project evolves

## Project Structure

```
.github/          # GitHub configuration and workflows
src/              # Application source code
public/           # Static assets
tests/            # Test files
```

## Coding Conventions

- Use **camelCase** for variable and function names.
- Use **PascalCase** for class and component names.
- Use **UPPER_SNAKE_CASE** for constants.
- Prefer `const` over `let`; avoid `var`.
- Use ES modules (`import`/`export`) rather than CommonJS (`require`/`module.exports`).
- Keep functions small and focused on a single responsibility.
- Write descriptive variable and function names — avoid abbreviations.

## Code Style

- Use 2-space indentation.
- Use single quotes for strings unless the string contains single quotes.
- Always add a trailing newline at the end of files.
- Avoid commented-out code in commits — remove it or use a proper TODO comment.

## Testing

- Place tests in the `tests/` directory, mirroring the `src/` structure.
- Name test files with `.test.js` (or `.test.ts`) suffix.
- Write unit tests for all business logic functions.
- Aim for meaningful test coverage rather than 100% coverage for its own sake.

## Git Workflow

- Commit messages should be clear and descriptive (e.g., `feat: add product listing page`).
- Use conventional commits format: `type(scope): description`.
  - Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.
- Keep pull requests focused on a single feature or fix.
- Do not commit secrets, credentials, or `.env` files (they are already in `.gitignore`).

## Environment Variables

- Use `.env` files for local development (these are git-ignored).
- Provide a `.env.example` file documenting all required environment variables without actual values.

## Security

- Never hardcode API keys, passwords, or tokens in source code.
- Validate and sanitize all user inputs.
- Keep dependencies up to date and avoid packages with known vulnerabilities.

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```
