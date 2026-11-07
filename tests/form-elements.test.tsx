import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { FormAdornIcon, FormAdornText, FormControl, Input, Select, Textarea } from '../src';

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
  expect(screen.getByTestId('select')).toHaveClass('form-control');
});

test('renders a textarea with textarea props and Bootstrap sizing', async () => {
  const screen = await render(<Textarea size='sm' rows={4} data-testid='textarea' />);

  expect(screen.getByTestId('textarea').element().tagName).toBe('TEXTAREA');
  expect(screen.getByTestId('textarea').element()).toHaveAttribute('rows', '4');
  expect(screen.getByTestId('textarea')).toHaveClass('form-control', 'form-control-sm');
});

test('renders adorned controls with ghost inputs', async () => {
  const screen = await render(
    <FormControl component='label' adorn size='sm' data-testid='adorn'>
      <FormAdornIcon aria-hidden='true' />
      <Input ghost placeholder='Search...' aria-label='Search' data-testid='ghost' />
    </FormControl>,
  );

  const wrapper = screen.getByTestId('adorn').element();
  expect(wrapper.tagName).toBe('LABEL');
  expect(wrapper).toHaveClass('form-control', 'form-control-sm', 'form-adorn');
  expect(wrapper).not.toHaveClass('form-adorn-end');
  expect(screen.getByTestId('ghost')).toHaveClass('form-ghost');
  expect(screen.getByTestId('ghost')).not.toHaveClass('form-control');
});

test('renders adorn icons with native and Box props', async () => {
  const screen = await render(
    <>
      <FormAdornIcon data-testid='default-icon'>Icon</FormAdornIcon>
      <FormAdornIcon
        component='span'
        data-testid='custom-icon'
        aria-hidden='true'
        classNameBefore='before'
        className='custom'
        ms={2}
      >
        Icon
      </FormAdornIcon>
    </>,
  );
  const defaultIcon = screen.getByTestId('default-icon').element();
  const customIcon = screen.getByTestId('custom-icon').element();

  expect(defaultIcon.tagName).toBe('DIV');
  expect(defaultIcon).toHaveClass('form-adorn-icon');
  expect(defaultIcon).not.toHaveAttribute('aria-hidden');
  expect(customIcon.tagName).toBe('SPAN');
  expect(customIcon).toHaveClass('form-adorn-icon', 'before', 'custom', 'ms-2');
  expect(customIcon).toHaveAttribute('aria-hidden', 'true');
});

test('renders adorn text with native and Box props', async () => {
  const screen = await render(
    <>
      <FormAdornText data-testid='default-text'>USD</FormAdornText>
      <FormAdornText
        component='div'
        data-testid='custom-text'
        aria-hidden='true'
        classNameBefore='before'
        className='custom'
        ms={2}
      >
        $
      </FormAdornText>
    </>,
  );
  const defaultText = screen.getByTestId('default-text').element();
  const customText = screen.getByTestId('custom-text').element();

  expect(defaultText.tagName).toBe('SPAN');
  expect(defaultText).toHaveClass('form-adorn-text');
  expect(defaultText).toHaveTextContent('USD');
  expect(defaultText).not.toHaveAttribute('aria-hidden');
  expect(customText.tagName).toBe('DIV');
  expect(customText).toHaveClass('form-adorn-text', 'before', 'custom', 'ms-2');
  expect(customText).toHaveAttribute('aria-hidden', 'true');
});

test('clicking adorn text focuses its ghost input', async () => {
  const screen = await render(
    <FormControl component='label' adorn>
      <FormAdornText data-testid='text' aria-hidden='true'>
        $
      </FormAdornText>
      <Input ghost aria-label='Amount in dollars' />
    </FormControl>,
  );

  await screen.getByTestId('text').click();
  expect(document.activeElement).toBe(
    screen.getByRole('textbox', { name: 'Amount in dollars' }).element(),
  );
});

test('positions adornments at the end', async () => {
  const screen = await render(
    <FormControl component='label' adornEnd data-testid='adorn'>
      <Input ghost placeholder='Amount' aria-label='Amount' />
    </FormControl>,
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
    <FormControl component='label' adorn validation='invalid' aria-label='Search'>
      <Input ghost placeholder='Search' aria-label='Search input' />
    </FormControl>,
  );
  const wrapper = screen.container.querySelector('.form-adorn');

  expect(wrapper).toHaveClass('form-control', 'form-adorn', 'is-invalid');
});

test('renders FormControl as a div and forwards Box props and custom classes', async () => {
  const screen = await render(
    <FormControl
      data-testid='control-wrapper'
      className='custom'
      classNameBefore='before'
      size='lg'
      validation='valid'
      w={12}
    >
      Content
    </FormControl>,
  );
  const wrapper = screen.getByTestId('control-wrapper').element();
  expect(wrapper.tagName).toBe('DIV');
  expect(wrapper).toHaveClass(
    'form-control',
    'form-control-lg',
    'is-valid',
    'w-12',
    'before',
    'custom',
  );
  expect(wrapper).not.toHaveClass('form-adorn');
  expect(wrapper).not.toHaveAttribute('validation');
  expect(wrapper).not.toHaveAttribute('size');
});

test('clicking the adorned label focuses its ghost input', async () => {
  const screen = await render(
    <FormControl component='label' adorn data-testid='wrapper'>
      <FormAdornIcon data-testid='icon' aria-hidden='true'>
        Search
      </FormAdornIcon>
      <Input ghost aria-label='Search' />
    </FormControl>,
  );

  await screen.getByTestId('icon').click();
  expect(document.activeElement).toBe(screen.getByRole('textbox', { name: 'Search' }).element());
  expect(screen.getByTestId('wrapper').element()).not.toHaveAttribute('adorn');
});
