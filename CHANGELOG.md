<!-- markdownlint-disable MD024 -->

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

> [!NOTE]
> This package was renamed from `@moritz-grimm/eslint-config-moritz-grimm` to
> `@moritz-grimm/eslint-config` on 2026-03-08. Version numbering was reset to 1.0.0
> under the new name. The pre-rename version history is listed separately below.

---

## [2.1.0] - 2026-04-18

### Added

- Added `@typescript-eslint/comma-dangle: ["warn", "always-multiline"]` rule. TypeScript files missing trailing commas in multiline constructs will now produce a **warning**.

## [2.0.0] - 2026-03-10

### Breaking Changes

- Added `camelcase: "error"` rule. Any identifier using `snake_case` or other non-camelCase naming will now produce an ESLint **error**.

> [!NOTE]
> Although the CHANGELOG was initially written with the label `1.0.3`, `package.json`
> was already bumped to `2.0.0` at this point because adding a new `"error"`-level rule
> is a breaking change for existing consumers. The label has been corrected here to
> match the published version.

### Added

- Added CHANGELOG.md

### Changed

- `eqeqeq` rule documentation in RULES.md corrected from `"warn"` to `"error"` to match the actual config (the rule itself was already `"error"` since the modularization in the pre-rename era)

---

## [1.0.2] - 2026-03-08

### Changed

- Corrected old package name references in RULES.md to use `@moritz-grimm/eslint-config`
- Updated `package-lock.json` to reflect the new package name and version

---

## [1.0.1] - 2026-03-08

### Changed

- Updated installation instructions and all import paths in README.md to use the new package name `@moritz-grimm/eslint-config`

---

## [1.0.0] - 2026-03-08

### Changed

- Renamed package from `@moritz-grimm/eslint-config-moritz-grimm` to `@moritz-grimm/eslint-config`
- Reset version numbering to 1.0.0

This release carries over all features from `@moritz-grimm/eslint-config-moritz-grimm@1.2.0`.

---

## Pre-Rename Versions (`@moritz-grimm/eslint-config-moritz-grimm`)

### [1.2.0] - 2026-02-28

#### Changed

- Updated `@typescript-eslint/explicit-member-accessibility` rule to exclude constructors via the `"no-public"` override, so constructors no longer require an explicit accessibility modifier

---

### [1.1.0] - 2026-02-28

#### Added

- `@typescript-eslint/explicit-member-accessibility` rule set to `"warn"` in the TypeScript config, warning when class members lack an explicit visibility modifier (`public`, `private`, `protected`)

#### Changed

- Fixed import paths in README.md to use the scoped package name `@moritz-grimm/eslint-config-moritz-grimm`

#### Changed

- Corrected wrong import statements in documentation
- Added Bun installation instructions to README.md

---

### [1.0.1] - 2025-11-13

#### Added

- Modular config architecture: the monolithic `eslint.config.ts` was split into separate importable modules:
  - `configs/eslint.base.config.js` (core JavaScript linting rules)
  - `configs/eslint.stylistic.config.js` (code formatting rules via `@stylistic/eslint-plugin`)
  - `configs/eslint.typescript.config.js` (TypeScript-specific type-checked rules)
  - `configs/eslint.ignores.config.js` (shared ignore patterns)
  - `eslint.config.js` (combined entry point that re-exports all modules)
- Package exports for modular imports (`./base`, `./stylistic`, `./typescript`)
- Comprehensive `RULES.md` documenting every rule with examples
- Rewritten `README.md` with detailed usage and installation instructions
- npm and GitHub Packages publish workflows (GitHub Actions)
- Manual workflow dispatch trigger for npm publishing
- Repository metadata in `package.json` (`homepage`, `bugs`, `repository`)
- `publishConfig` with `"access": "public"` for scoped package publishing
- `publish:all` script for publishing to both npm and GitHub Packages

#### Changed

- Package name changed from `eslint-config-moritz-grimm` (unscoped) to `@moritz-grimm/eslint-config-moritz-grimm` (scoped)
- Config format changed from TypeScript (`eslint.config.ts`) to JavaScript (`eslint.config.js`)
- `eqeqeq` rule severity upgraded from `"warn"` to `"error"` in the base config
- Base config `files` pattern narrowed from `**/*.{js,mjs,cjs,ts,mts,cts}` to `**/*.{js,mjs,cjs}` (TypeScript files are now handled by the dedicated TypeScript module)
- Stylistic config `files` pattern broadened to include JSX/TSX: `**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}`
- Package declared as `"type": "module"`
- Peer dependency for TypeScript relaxed from `>=5.9.3` to `>=5.0.0`

#### Removed

- `tsconfig.json` (no longer needed since config is plain JavaScript)
- `export.js` entry point (replaced by package exports)

---

### [1.0.0] - 2025-11-13

Initial release.

#### Added

- ESLint 9 flat config for JavaScript and TypeScript projects
- TypeScript type-checked linting via `typescript-eslint/recommendedTypeChecked`
- TypeScript-specific rules:
  - `@typescript-eslint/no-explicit-any`: `"warn"`
  - `@typescript-eslint/explicit-function-return-type`: `"warn"`
  - `@typescript-eslint/no-floating-promises`: `"error"`
  - `@typescript-eslint/no-unsafe-member-access`: `"warn"`
  - `@typescript-eslint/no-unused-vars`: `"warn"`
- Base code quality rules:
  - `eqeqeq`: `["warn", "always"]`
  - `no-undef`: `"error"`
  - `no-unreachable`: `"error"`
  - `no-duplicate-imports`: `"warn"`
  - `prefer-const`: `"warn"`
- Stylistic rules via `@stylistic/eslint-plugin`:
  - `stylistic/semi`: `["warn", "always"]`
  - `stylistic/indent`: `["warn", 4]`
  - `stylistic/brace-style`: `["warn", "1tbs", { allowSingleLine: true }]`
  - `curly`: `["warn", "multi-line"]` (allows omitting braces for single-line statements)
  - `stylistic/comma-dangle`: `["warn", "always-multiline"]`
  - `stylistic/object-curly-spacing`: `["warn", "always"]`
  - `stylistic/keyword-spacing`: `["warn", { before: true, after: true }]`
  - `stylistic/space-before-function-paren`: `["warn", { anonymous: "never", named: "never", asyncArrow: "never", catch: "always" }]`
  - `stylistic/no-trailing-spaces`: `"warn"`
  - `stylistic/eol-last`: `["warn", "always"]`
  - `stylistic/no-multi-spaces`: `"warn"`
  - `stylistic/quotes`: `["warn", "double", { allowTemplateLiterals: "always" }]`
- Global variable support for both browser and Node.js environments
- Ignore patterns for `node_modules`, `dist`, and `build` directories
- MIT license
- GitHub Actions lint workflow
