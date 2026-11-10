import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Progress, ProgressStacked } from '../src';

test('renders an accessible progress bar from a single component', async () => {
  const screen = await render(<Progress label='Upload' value={40} />);

  const progress = screen.getByRole('progressbar', { name: 'Upload' });
  const bar = progress.element().querySelector('.progress-bar');

  expect(progress).toHaveAttribute('aria-valuenow', '40');
  expect(progress).toHaveAttribute('aria-valuemin', '0');
  expect(progress).toHaveAttribute('aria-valuemax', '100');
  expect(bar).toHaveStyle({ width: '40%' });
});

test('applies bar content, modifiers and barProps', async () => {
  const screen = await render(
    <Progress label='Upload' value={40} striped animated barProps={{ bg: 'success' }}>
      40%
    </Progress>,
  );

  const bar = screen
    .getByRole('progressbar', { name: 'Upload' })
    .element()
    .querySelector('.progress-bar');

  expect(bar).toHaveClass('progress-bar-striped', 'progress-bar-animated', 'bg-success');
  expect(bar?.textContent).toBe('40%');
});

test('lets bar width utilities override the value width', async () => {
  const screen = await render(<Progress label='Upload' value={40} barProps={{ w: 75 }} />);

  const bar = screen
    .getByRole('progressbar', { name: 'Upload' })
    .element()
    .querySelector('.progress-bar');

  expect(bar).toHaveClass('w-75');
  expect(bar).not.toHaveAttribute('style');
});

test('renders stacked segments as accessible progress bars', async () => {
  const screen = await render(
    <ProgressStacked label='Project files'>
      <Progress label='Segment one' value={15} />
      <Progress label='Segment two' value={30} theme='success' />
    </ProgressStacked>,
  );

  expect(screen.getByRole('group', { name: 'Project files' })).toBeInTheDocument();

  const first = screen.getByRole('progressbar', { name: 'Segment one' });
  const second = screen.getByRole('progressbar', { name: 'Segment two' });

  expect(first).toHaveAttribute('aria-valuenow', '15');
  expect(first).toHaveStyle({ width: '15%' });
  expect(second).toHaveClass('theme-success');
  expect(second).toHaveStyle({ width: '30%' });
  expect(first.element().querySelector('.progress-bar')).not.toHaveAttribute('style');
});
