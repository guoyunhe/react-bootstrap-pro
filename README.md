# react-components-starter

A starter for creating a React component library.

## Button

Import Bootstrap's stylesheet in your application and use the component:

```tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-components-starter';

<Button variant='solid' theme='primary' size='lg'>
  Save
</Button>;
```

`Button` accepts native button props, Bootstrap variants, themes, and the `xs`,
`sm`, or `lg` sizes. `variant` and `theme` have no defaults, so a plain
`<Button>` only receives the base `btn` class. The native button type defaults
to `type='button'`.

## Development

- Install dependencies:

```bash
npm install
```

- Run the playground:

```bash
npm run play
```

- Run the unit tests:

```bash
npm run test
```

- Build the library:

```bash
npm run build
```
