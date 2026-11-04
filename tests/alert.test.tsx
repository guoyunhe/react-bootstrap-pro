import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Alert, AlertHeading } from '../src';

test('renders alert modifiers and preserves custom tags', async () => {
  const screen = await render(
    <Alert component='section' instant data-testid='alert'>
      Notice
    </Alert>,
  );

  expect(screen.getByTestId('alert').element().tagName).toBe('SECTION');
  expect(screen.getByTestId('alert')).toHaveClass('alert', 'alert-instant');
});

test('renders alert headings through the AlertHeading subcomponent', async () => {
  const screen = await render(
    <Alert theme='success'>
      <AlertHeading component='h2' mb={0} data-testid='alert-heading'>
        Well done!
      </AlertHeading>
    </Alert>,
  );

  const heading = screen.getByTestId('alert-heading');
  expect(heading.element().tagName).toBe('H2');
  expect(heading).toHaveClass('alert-heading', 'mb-0');
});
