import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Progress, ProgressBar } from '../src';

test('exposes accessible progress values', async () => {
  const screen = await render(
    <Progress label='Upload' value={40} data-testid='progress'>
      <ProgressBar value={40} />
    </Progress>,
  );

  expect(screen.getByRole('progressbar', { name: 'Upload' })).toHaveAttribute(
    'aria-valuenow',
    '40',
  );
  expect(
    screen.getByRole('progressbar', { name: 'Upload' }).element().querySelector('.progress-bar'),
  ).toHaveStyle({
    width: '40%',
  });
});
