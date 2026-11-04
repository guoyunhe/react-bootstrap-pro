import { expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-react';

import { PasswordStrength } from '../src';

function getMeter(screen: { container: HTMLElement }) {
  return screen.container.querySelector<HTMLElement>('.strength, .strength-bar') as HTMLElement;
}

function activeSegments(screen: { container: HTMLElement }) {
  return screen.container.querySelectorAll('.strength-segment.active').length;
}

test('renders four empty segments', async () => {
  const screen = await render(<PasswordStrength value='' data-testid='meter' />);

  expect(getMeter(screen)).toHaveClass('strength');
  expect(screen.container.querySelectorAll('.strength-segment')).toHaveLength(4);
  expect(activeSegments(screen)).toBe(0);
  expect(getMeter(screen).hasAttribute('data-bs-strength')).toBe(false);
  expect(screen.container.querySelector('.strength-text')).toBeNull();
});

test('fills segments according to the password strength', async () => {
  const screen = await render(<PasswordStrength value='abc' />);
  await expect.poll(() => getMeter(screen).getAttribute('data-bs-strength')).toBe('weak');
  expect(activeSegments(screen)).toBe(1);

  await screen.rerender(<PasswordStrength value='abcdefghijkl' />);
  await expect.poll(() => getMeter(screen).getAttribute('data-bs-strength')).toBe('fair');
  expect(activeSegments(screen)).toBe(2);

  await screen.rerender(<PasswordStrength value='Abcdefgh1234' />);
  await expect.poll(() => getMeter(screen).getAttribute('data-bs-strength')).toBe('good');
  expect(activeSegments(screen)).toBe(3);

  await screen.rerender(<PasswordStrength value='Abcdefgh1234!!' />);
  await expect.poll(() => getMeter(screen).getAttribute('data-bs-strength')).toBe('strong');
  expect(activeSegments(screen)).toBe(4);
});

test('renders the progress bar variant', async () => {
  const screen = await render(<PasswordStrength value='Abcdefgh1234' variant='bar' />);
  const meter = getMeter(screen);

  expect(meter).toHaveClass('strength-bar');
  expect(meter).not.toHaveClass('strength');
  expect(meter.getAttribute('data-bs-strength')).toBe('good');
  expect(screen.container.querySelectorAll('.strength-segment')).toHaveLength(0);
});

test('shows text feedback with an accessible live region', async () => {
  const screen = await render(<PasswordStrength value='abc' showText />);
  const text = screen.container.querySelector('.strength-text') as HTMLElement;

  expect(text.textContent).toBe('Weak');
  expect(text.getAttribute('data-bs-strength')).toBe('weak');
  expect(text.getAttribute('aria-live')).toBe('polite');

  await screen.rerender(<PasswordStrength value='' showText />);
  await expect.poll(() => text.textContent).toBe('');
});

test('supports custom messages', async () => {
  const screen = await render(
    <PasswordStrength value='Abcdefgh1234!!' showText messages={{ strong: 'Excellent!' }} />,
  );

  expect(screen.container.querySelector('.strength-text')?.textContent).toBe('Excellent!');
});

test('renders a static level without a value', async () => {
  const screen = await render(<PasswordStrength strength='good' />);

  expect(getMeter(screen).getAttribute('data-bs-strength')).toBe('good');
  expect(activeSegments(screen)).toBe(3);
});

test('applies a custom minimum length', async () => {
  const screen = await render(<PasswordStrength value='abcdefghijkl' minLength={12} />);

  // minimum length (+1) and lowercase (+1)
  await expect.poll(() => getMeter(screen).getAttribute('data-bs-strength')).toBe('weak');
});

test('allows disabling or reweighting criteria', async () => {
  const screen = await render(<PasswordStrength value='ABCDEFGH' weights={{ uppercase: 0 }} />);

  await expect.poll(() => getMeter(screen).getAttribute('data-bs-strength')).toBe('weak');
});

test('applies custom thresholds', async () => {
  const screen = await render(<PasswordStrength value='abcdefgh' thresholds={[1, 2, 3]} />);

  // minimum length (+1) and lowercase (+1)
  await expect.poll(() => getMeter(screen).getAttribute('data-bs-strength')).toBe('fair');
});

test('supports a custom scorer', async () => {
  const screen = await render(
    <PasswordStrength value='abc' scorer={() => 7} thresholds={[2, 4, 6]} />,
  );

  await expect.poll(() => getMeter(screen).getAttribute('data-bs-strength')).toBe('strong');
});

test('reports level changes', async () => {
  const onChange = vi.fn();
  const screen = await render(<PasswordStrength value='abc' onChange={onChange} />);

  await expect.poll(() => onChange.mock.calls.length).toBe(1);
  expect(onChange).toHaveBeenLastCalledWith('weak', 1);

  await screen.rerender(<PasswordStrength value='abcd' onChange={onChange} />);
  expect(onChange).toHaveBeenCalledTimes(1);

  await screen.rerender(<PasswordStrength value='abcdefghijkl' onChange={onChange} />);
  await expect.poll(() => onChange.mock.calls.length).toBe(2);
  expect(onChange).toHaveBeenLastCalledWith('fair', 3);
});

test('passes box props and class names to the meter', async () => {
  const screen = await render(
    <PasswordStrength value='abc' className='my-meter' mt={2} data-testid='meter' />,
  );
  const meter = screen.getByTestId('meter').element();

  expect(meter).toHaveClass('strength', 'my-meter', 'mt-2');
});
