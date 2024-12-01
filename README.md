# TypeScript NPM Package Template

A modern, efficient template for creating NPM packages using TypeScript.

## Why This Template?

- 🚀 Zero configuration setup
- 📦 Modern module bundling with tsup
- 🔍 Type-safe by default
- ⚡ Ultra-fast development with Bun
- 🧪 Comprehensive testing setup with Vitest
- 🔄 Continuous Integration ready


## Getting Started

1. Clone this template
2. Install dependencies:
   ```sh
   bun install
   ```
3. Start development:
   ```sh
   bun run dev
   ```
4. Build your package:
   ```sh
   bun run build
   ```
5. Publish your package:
   ```sh
   bun run local-release
   ```

## Project Structure

```
├── src/             # Source code with tests
├── dist/            # Built package (generated)
├── .github/         # GitHub workflows
└── .changeset/      # Changeset configs
```

## Important Resources

- [TSConfig Reference](https://www.typescriptlang.org/tsconfig)
- [Bun Documentation](https://bun.sh/docs)
- [Vitest Documentation](https://vitest.dev/)
- [tsup Documentation](https://tsup.egoist.dev/)
- [TypeScript Config Cheat Sheet](https://www.totaltypescript.com/tsconfig-cheat-sheet)

## License

MIT © Vivek Patel
