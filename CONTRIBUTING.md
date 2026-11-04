# Contributing

Thanks for helping improve React Bootstrap Pro. This guide covers the
development workflow and conventions used in this repository.

## Prerequisites

- Node.js `^22`, `^24`, `^26`, or `>=27`
- pnpm `>=12.16.1`

Install the project dependencies before making changes:

```sh
pnpm install
```

## Development

- Run the documentation site with `pnpm docs:dev`.
- Run the playground with `pnpm play`.
- Run the test suite with `pnpm exec vitest run`.
- Build the documentation site with `pnpm docs:build`.

## Adding or changing components

- Implement components in `src/components/` and export their public API through
  `src/components/index.ts` and `src/index.ts`.
- Add or update tests in `tests/`.
- Add or update component documentation and demos in
  `docs/components/<component>/`. Keep the English and Chinese documentation
  in sync when changing an existing documented component.
- Follow the patterns and formatting used by nearby components and docs.

## Checks

Before opening a pull request, run the checks relevant to your changes. The
full set is:

```sh
pnpm exec vitest run
pnpm typecheck
pnpm lint
pnpm format:check
pnpm build
```

If you change documentation, also verify that the documentation site builds:

```sh
pnpm docs:build
```

In your pull request, summarize the change and list the checks you ran.
