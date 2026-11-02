# react-components-starter

A starter for creating a React component library.

## Button

Import Bootstrap's stylesheet in your application and use the component:

```tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-components-starter';

<Button variant='primary' size='lg'>
  Save
</Button>;
```

`Button` accepts native button props, Bootstrap variants (including outline
variants), and the `sm` or `lg` sizes. It defaults to the `primary` variant and
`type='button'`.

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
