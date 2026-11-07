import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Box, Input, Select, Textarea } from '../src';

test('renders Input and Select with their dedicated native elements', async () => {
  const screen = await render(
    <>
      <Input
        id='form-email'
        type='email'
        size='lg'
        aria-describedby='form-email-help'
        data-testid='control'
      />
      <Select data-testid='select'>
        <option>One</option>
      </Select>
    </>,
  );

  expect(screen.getByTestId('control')).toHaveClass('form-control', 'form-control-lg');
  expect(screen.getByTestId('control').element()).toHaveAttribute('type', 'email');
  expect(screen.getByTestId('select').element().tagName).toBe('SELECT');
  expect(screen.getByTestId('select')).toHaveClass('form-select');
});

test('renders a textarea with textarea props and Bootstrap sizing', async () => {
  const screen = await render(<Textarea size='sm' rows={4} data-testid='textarea' />);

  expect(screen.getByTestId('textarea').element().tagName).toBe('TEXTAREA');
  expect(screen.getByTestId('textarea').element()).toHaveAttribute('rows', '4');
  expect(screen.getByTestId('textarea')).toHaveClass('form-control', 'form-control-sm');
});

test('renders adorned controls with ghost inputs', async () => {
  const screen = await render(
    <Box
      component='label'
      data-testid='adorn'
      classNameBefore='form-control form-adorn form-control-sm'
    >
      <span className='form-adorn-icon' aria-hidden='true' />
      <Input ghost placeholder='Search...' aria-label='Search' data-testid='ghost' />
    </Box>,
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
    <Box
      component='label'
      data-testid='adorn'
      classNameBefore='form-control form-adorn form-adorn-end'
    >
      <Input ghost placeholder='Amount' aria-label='Amount' />
    </Box>,
  );

  expect(screen.getByTestId('adorn')).toHaveClass('form-control', 'form-adorn', 'form-adorn-end');
});

test('renders plaintext controls without the form-control class', async () => {
  const screen = await render(
    <Input plaintext readOnly data-testid='plaintext' defaultValue='name@example.com' />,
  );

  expect(screen.getByTestId('plaintext')).toHaveClass('form-control-plaintext');
  expect(screen.getByTestId('plaintext')).not.toHaveClass('form-control');
});

test('applies a validation state', async () => {
  const screen = await render(<Input aria-label='Name' validation='invalid' />);

  expect(screen.container.querySelector('input')).toHaveClass('form-control', 'is-invalid');
});

test('applies a validation state to an adorned control', async () => {
  const screen = await render(
    <Box component='label' aria-label='Search' classNameBefore='form-control form-adorn is-invalid'>
      <Input ghost placeholder='Search' aria-label='Search input' />
    </Box>,
  );
  const wrapper = screen.container.querySelector('.form-adorn');

  expect(wrapper).toHaveClass('form-control', 'form-adorn', 'is-invalid');
});
