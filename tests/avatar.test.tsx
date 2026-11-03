import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Avatar, AvatarStatus } from '../src';

test('renders avatar modifiers and status', async () => {
  const screen = await render(
    <Avatar size='lg' subtle data-testid='avatar'>
      AB
      <AvatarStatus status='online' />
    </Avatar>,
  );

  expect(screen.getByTestId('avatar')).toHaveClass('avatar', 'avatar-lg', 'avatar-subtle');
  expect(screen.getByTestId('avatar').element().querySelector('.avatar-status')).toHaveClass(
    'avatar-status',
    'status-online',
  );
});
