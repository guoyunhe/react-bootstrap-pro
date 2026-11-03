import { BiPerson } from 'react-bootstrap-icons-pro';
import { expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-react';

import { Chip } from '../src';

test('renders chip variants, icon, image and dismiss button', async () => {
  const onDismiss = vi.fn();

  const screen = await render(
    <>
      <Chip data-testid='basic'>Basic chip</Chip>
      <Chip icon={<BiPerson />} data-testid='icon'>
        With icon
      </Chip>
      <Chip image={{ src: 'https://example.com/avatar.png', alt: '' }} data-testid='image'>
        With avatar
      </Chip>
      <Chip theme='primary' active data-testid='active'>
        Active
      </Chip>
      <Chip disabled data-testid='disabled'>
        Disabled
      </Chip>
      <Chip onDismiss={onDismiss} data-testid='dismissible'>
        Dismissible
      </Chip>
    </>,
  );

  expect(screen.getByTestId('basic')).toHaveClass('chip');
  expect(screen.getByTestId('icon').element().querySelector('.chip-icon svg')).not.toBeNull();
  expect(screen.getByTestId('image').element().querySelector('img')).toHaveClass('chip-img');
  expect(screen.getByTestId('active')).toHaveClass('chip', 'theme-primary', 'active');
  expect(screen.getByTestId('disabled')).toHaveClass('chip', 'disabled');

  const dismiss = screen.getByRole('button', { name: 'Remove' });
  expect(dismiss).toHaveClass('chip-dismiss');
  await dismiss.click();
  expect(onDismiss).toHaveBeenCalledOnce();
});
