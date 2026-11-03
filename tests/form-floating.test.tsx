import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { FormControl, FormFloating } from '../src';

test('renders floating labels with the always variant', async () => {
  const screen = await render(
    <>
      <FormFloating data-testid='floating'>
        <label htmlFor='floating-test'>Email address</label>
        <FormControl type='email' id='floating-test' placeholder='name@example.com' />
      </FormFloating>
      <FormFloating always data-testid='floating-always'>
        <label htmlFor='floating-always'>Password</label>
        <FormControl type='password' id='floating-always' placeholder='Password' />
      </FormFloating>
    </>,
  );

  const floating = screen.getByTestId('floating').element();
  expect(screen.getByTestId('floating')).toHaveClass('form-floating');
  expect(screen.getByTestId('floating-always')).toHaveClass(
    'form-floating',
    'form-floating-always',
  );
  expect(floating.firstElementChild?.tagName).toBe('LABEL');
  expect(floating.querySelector('label')).toHaveAttribute('for', 'floating-test');
  expect(floating.querySelector('input')).toHaveClass('form-control');
});
