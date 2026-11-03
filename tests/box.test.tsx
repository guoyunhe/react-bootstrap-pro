import type { AnchorHTMLAttributes } from 'react';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Box, Col, Container, Row } from '../src';

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

test('renders a plain div by default', async () => {
  const screen = await render(<Box data-testid='box'>Content</Box>);
  const box = screen.getByTestId('box');

  expect(box.element().tagName).toBe('DIV');
  expect(box.element().getAttribute('class')).toBeNull();
});

test('applies foreground utilities', async () => {
  const screen = await render(
    <>
      <Box data-testid='fg' fg='primary' />
      <Box data-testid='fg-emphasis' fgEmphasis='danger' />
      <Box data-testid='fg-contrast' fgContrast='warning' />
      <Box data-testid='fg-opacity' fg='secondary' fgOpacity={50} />
      <Box data-testid='fg-reset' fg='reset' />
    </>,
  );

  expect(screen.getByTestId('fg')).toHaveClass('fg-primary');
  expect(screen.getByTestId('fg-emphasis')).toHaveClass('fg-emphasis-danger');
  expect(screen.getByTestId('fg-contrast')).toHaveClass('fg-contrast-warning');
  expect(screen.getByTestId('fg-opacity')).toHaveClass('fg-secondary', 'fg-50');
  expect(screen.getByTestId('fg-reset')).toHaveClass('fg-reset');
});

test('applies background utilities', async () => {
  const screen = await render(
    <>
      <Box data-testid='bg' bg='primary' />
      <Box data-testid='bg-subtle' bgSubtle='accent' />
      <Box data-testid='bg-muted' bgMuted='info' />
      <Box data-testid='bg-opacity' bg='inverse' bgOpacity={70} />
      <Box data-testid='bg-gradient' bg='success' gradient />
      <Box data-testid='bg-transparent' bg='transparent' />
    </>,
  );

  expect(screen.getByTestId('bg')).toHaveClass('bg-primary');
  expect(screen.getByTestId('bg-subtle')).toHaveClass('bg-subtle-accent');
  expect(screen.getByTestId('bg-muted')).toHaveClass('bg-muted-info');
  expect(screen.getByTestId('bg-opacity')).toHaveClass('bg-inverse', 'bg-70');
  expect(screen.getByTestId('bg-gradient')).toHaveClass('bg-success', 'bg-gradient');
  expect(screen.getByTestId('bg-transparent')).toHaveClass('bg-transparent');
});

test('applies theme utilities', async () => {
  const screen = await render(
    <>
      <Box data-testid='theme' theme='primary' themeStyle='contrast' />
      <Box data-testid='theme-subtle' theme='success' themeStyle='subtle' themeBorder />
      <Box data-testid='theme-reset' themeReset />
    </>,
  );

  expect(screen.getByTestId('theme')).toHaveClass('theme-primary', 'theme-contrast');
  expect(screen.getByTestId('theme-subtle')).toHaveClass(
    'theme-success',
    'theme-subtle',
    'theme-border',
  );
  expect(screen.getByTestId('theme-reset')).toHaveClass('theme-reset');
});

test('applies color scheme utilities', async () => {
  const screen = await render(
    <>
      <Box data-testid='light' colorScheme='light' />
      <Box data-testid='dark' colorScheme='dark' />
      <Box data-testid='auto' colorScheme='auto' />
    </>,
  );

  expect(screen.getByTestId('light')).toHaveClass('color-scheme-light');
  expect(screen.getByTestId('dark')).toHaveClass('color-scheme-dark');
  expect(screen.getByTestId('auto')).toHaveClass('color-scheme-auto');
});

test('merges custom classes after utility classes', async () => {
  const screen = await render(<Box data-testid='box' bg='body' className='p-3 rounded' />);

  expect(screen.getByTestId('box').element().className).toBe('bg-body p-3 rounded');
});

test('renders the selected component and forwards its props', async () => {
  const screen = await render(
    <>
      <Box component='a' href='/docs' fg='primary'>
        Docs
      </Box>
      <Box component={AppLink} to='/profile' bgSubtle='primary'>
        Profile
      </Box>
    </>,
  );

  expect(screen.getByRole('link', { name: 'Docs' })).toHaveAttribute('href', '/docs');
  expect(screen.getByRole('link', { name: 'Docs' })).toHaveClass('fg-primary');
  expect(screen.getByRole('link', { name: 'Profile' })).toHaveAttribute('href', '/profile');
  expect(screen.getByRole('link', { name: 'Profile' })).toHaveClass('bg-subtle-primary');
});

test('layout components inherit box utilities', async () => {
  const screen = await render(
    <Container fluid bg='body' fg='2' data-testid='container'>
      <Row theme='primary' themeStyle='subtle' data-testid='row'>
        <Col bg='1' data-testid='col'>
          Content
        </Col>
      </Row>
    </Container>,
  );

  expect(screen.getByTestId('container')).toHaveClass('container-fluid', 'bg-body', 'fg-2');
  expect(screen.getByTestId('row')).toHaveClass('row', 'theme-primary', 'theme-subtle');
  expect(screen.getByTestId('col')).toHaveClass('col', 'bg-1');
});
