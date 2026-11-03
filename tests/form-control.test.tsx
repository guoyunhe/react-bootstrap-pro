import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { FormControl } from '../src';

test('renders form controls with sizes and alternate elements', async () => {
  const screen = await render(
    <>
      <FormControl
        id='form-email'
        type='email'
        size='lg'
        aria-describedby='form-email-help'
        data-testid='control'
      />
      <FormControl component='select' data-testid='select'>
        <option>One</option>
      </FormControl>
    </>,
  );

  expect(screen.getByTestId('control')).toHaveClass('form-control', 'form-control-lg');
  expect(screen.getByTestId('control').element()).toHaveAttribute('type', 'email');
  expect(screen.getByTestId('select').element().tagName).toBe('SELECT');
  expect(screen.getByTestId('select')).toHaveClass('form-control');
});

test('renders adorned controls with ghost inputs', async () => {
  const screen = await render(
    <FormControl component='label' adorn size='sm' data-testid='adorn'>
      <span className='form-adorn-icon' aria-hidden='true' />
      <FormControl ghost placeholder='Search...' aria-label='Search' data-testid='ghost' />
    </FormControl>,
  );

  const wrapper = screen.getByTestId('adorn').element();
  expect(wrapper.tagName).toBe('LABEL');
  expect(wrapper).toHaveClass('form-control', 'form-control-sm', 'form-adorn');
  expect(wrapper).not.toHaveClass('form-adorn-end');
  expect(screen.getByTestId('ghost')).toHaveClass('form-ghost');
  expect(screen.getByTestId('ghost')).not.toHaveClass('form-control');
});

test('positions adornments at the end', async () => {
  const screen = await render(
    <FormControl component='label' adornEnd data-testid='adorn'>
      <FormControl ghost placeholder='Amount' aria-label='Amount' />
    </FormControl>,
  );

  expect(screen.getByTestId('adorn')).toHaveClass('form-control', 'form-adorn', 'form-adorn-end');
});

test('renders plaintext controls without the form-control class', async () => {
  const screen = await render(
    <FormControl plaintext readOnly data-testid='plaintext' defaultValue='name@example.com' />,
  );

  expect(screen.getByTestId('plaintext')).toHaveClass('form-control-plaintext');
  expect(screen.getByTestId('plaintext')).not.toHaveClass('form-control');
});

test('applies a validation state', async () => {
  const screen = await render(<FormControl aria-label='Name' validation='invalid' />);

  expect(screen.container.querySelector('input')).toHaveClass('form-control', 'is-invalid');
});

test('applies a validation state to an adorned control', async () => {
  const screen = await render(
    <FormControl component='label' adorn validation='invalid' aria-label='Search'>
      <FormControl ghost placeholder='Search' aria-label='Search input' />
    </FormControl>,
  );
  const wrapper = screen.container.querySelector('.form-adorn');

  expect(wrapper).toHaveClass('form-control', 'form-adorn', 'is-invalid');
});
