# Project Guidelines

## Implementation

- Never import Bootstrap JavaScript. Implement interactive behavior in React; third-party libraries may be used.

## Documentation

- Use `docs/components/accordion/` as the structural template for component documentation.
- Use icons from `react-bootstrap-icons-pro` for icon glyphs instead of hand-written inline SVG.
- When adding a component or changing a component interface, update `CHANGELOG.md` in the same change.

### Language parity

- Keep English and Chinese documentation under `docs/` in sync. Whenever one version changes, update its corresponding other-language document in the same change.
- Translate Chinese section headings and explanatory text, including reference headings; leave technical names and identifiers unchanged.

### Examples/Demos

- Keep each component document's examples as close as possible to a one-to-one match with upstream documentation, preserving example coverage and order and linking each rendered example to its source.
- Use `tsx src='./demos/…'` code fences to reference the actual demo implementation instead of duplicating snippets, and keep those references aligned in both languages.
- Give each rendered demo its own source file and export only that demo component from the file; do not combine separate demos in one source file.

### API

- In API sections, use plain-text component names for subsection headings; do not wrap them in inline-code backticks.
- Document the props of every component. When one document covers multiple components, give each component its own level-three heading in the API section.
- State each component's default element and distinguish its own props from inherited native or base-component props; link to the relevant base documentation.

### Behavior and accessibility

- Document native browser behavior, accessibility considerations, and fallback behavior where relevant.
