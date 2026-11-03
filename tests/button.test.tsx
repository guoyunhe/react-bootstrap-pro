import type { AnchorHTMLAttributes } from 'react';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Button } from '../src';

function AppLink({
  to,
  children,
  ...props
}: { to: string } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a href={to} {...props}>
      {children}
    </a>
  );
}

test('renders only the Bootstrap base class by default', async () => {
  const screen = await render(<Button>Save</Button>);
  const button = screen.getByRole('button', { name: 'Save' });

  expect(button).toHaveAttribute('class', 'btn');
  expect(button).toHaveAttribute('type', 'button');
});

test('does not infer a variant or theme when only one is provided', async () => {
  const screen = await render(
    <>
      <Button variant='outline'>Outline</Button>
      <Button theme='secondary'>Secondary</Button>
    </>,
  );

  expect(screen.getByRole('button', { name: 'Outline' })).toHaveClass('btn', 'btn-outline');
  expect(screen.getByRole('button', { name: 'Outline' })).not.toHaveClass('theme-primary');
  expect(screen.getByRole('button', { name: 'Secondary' })).toHaveClass('btn', 'theme-secondary');
  expect(screen.getByRole('button', { name: 'Secondary' })).not.toHaveClass('btn-solid');
});

test('applies the active class when active is true', async () => {
  const screen = await render(<Button active>Active</Button>);

  expect(screen.getByRole('button', { name: 'Active' })).toHaveClass('active');
});

test('applies the styled class when styled is true', async () => {
  const screen = await render(<Button styled>Styled</Button>);

  expect(screen.getByRole('button', { name: 'Styled' })).toHaveClass('btn-styled');
});

test('applies the check class when check is true', async () => {
  const screen = await render(<Button check>Check</Button>);

  expect(screen.getByRole('button', { name: 'Check' })).toHaveClass('btn-check');
});

test('supports disabled anchors', async () => {
  const screen = await render(
    <Button component='a' href='/disabled' variant='solid' theme='primary' disabled>
      Disabled link
    </Button>,
  );
  const link = screen.getByRole('link', { name: 'Disabled link' });

  expect(link).toHaveClass('btn', 'btn-solid', 'theme-primary', 'disabled');
  expect(link).toHaveAttribute('aria-disabled', 'true');
  expect(link).toHaveAttribute('tabindex', '-1');
  expect(link).toHaveAttribute('href', '/disabled');
  expect(link).not.toHaveAttribute('disabled');
});

test('supports variants, sizes, native props, and custom classes', async () => {
  const screen = await render(
    <Button
      variant='outline'
      theme='secondary'
      size='lg'
      className='custom-button'
      disabled
      type='submit'
    >
      Cancel
    </Button>,
  );
  const button = screen.getByRole('button', { name: 'Cancel' });

  expect(button).toHaveClass('btn', 'btn-outline', 'theme-secondary', 'btn-lg', 'custom-button');
  expect(button).toBeDisabled();
  expect(button).toHaveAttribute('type', 'submit');
});

test('supports Bootstrap 6 variants and themes', async () => {
  const screen = await render(
    <>
      <Button variant='subtle' theme='accent'>
        Subtle
      </Button>
      <Button variant='text' theme='info'>
        Text
      </Button>
      <Button variant='link' theme='primary'>
        Link
      </Button>
      <Button variant='link'>Default link</Button>
    </>,
  );

  expect(screen.getByRole('button', { name: 'Subtle' })).toHaveClass('btn-subtle', 'theme-accent');
  expect(screen.getByRole('button', { name: 'Text' })).toHaveClass('btn-text', 'theme-info');
  expect(screen.getByRole('button', { name: 'Link' })).toHaveClass('btn-link', 'theme-primary');
  expect(screen.getByRole('button', { name: 'Default link' })).toHaveClass('btn-link');
  expect(screen.getByRole('button', { name: 'Default link' })).not.toHaveClass('theme-primary');
});

test('forwards click handlers', async () => {
  let clickCount = 0;
  const screen = await render(<Button onClick={() => clickCount++}>Click me</Button>);

  await screen.getByRole('button', { name: 'Click me' }).click();

  expect(clickCount).toBe(1);
});

test('renders the selected component and forwards its props', async () => {
  const screen = await render(
    <>
      <Button component='a' variant='solid' theme='primary' href='/settings'>
        Settings
      </Button>
      <Button component='button' type='submit'>
        Submit
      </Button>
      <Button
        component='input'
        type='button'
        value='Input action'
        variant='solid'
        theme='secondary'
      />
      <Button component={AppLink} to='/profile' aria-label='Profile'>
        Profile
      </Button>
    </>,
  );
  const link = screen.getByRole('link', { name: 'Settings' });
  const button = screen.getByRole('button', { name: 'Submit' });
  const input = screen.getByRole('button', { name: 'Input action' });
  const customLink = screen.getByRole('link', { name: 'Profile' });

  expect(link).toHaveAttribute('href', '/settings');
  expect(link).not.toHaveAttribute('type');
  expect(button).toHaveAttribute('type', 'submit');
  expect(input).toHaveAttribute('value', 'Input action');
  expect(input).toHaveClass('btn', 'btn-solid', 'theme-secondary');
  expect(customLink).toHaveAttribute('href', '/profile');
  expect(customLink).toHaveClass('btn');
});

test('accepts box utility props', async () => {
  const screen = await render(
    <Button theme='primary' bgSubtle='primary' fgEmphasis='primary' colorScheme='dark'>
      Themed
    </Button>,
  );
  const button = screen.getByRole('button', { name: 'Themed' });

  expect(button).toHaveClass(
    'btn',
    'theme-primary',
    'bg-subtle-primary',
    'fg-emphasis-primary',
    'color-scheme-dark',
  );
});
