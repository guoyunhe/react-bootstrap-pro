import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { FormFeedback } from '../src';

test('renders invalid feedback by default', async () => {
  const screen = await render(<FormFeedback id='name-feedback'>Required</FormFeedback>);
  const feedback = screen.container.firstElementChild;

  expect(feedback).toHaveClass('invalid-feedback');
  expect(feedback?.getAttribute('id')).toBe('name-feedback');
  expect(feedback?.textContent).toBe('Required');
});

test('renders valid feedback', async () => {
  const screen = await render(<FormFeedback type='valid'>Looks great!</FormFeedback>);

  expect(screen.container.firstElementChild).toHaveClass('valid-feedback');
});

test('renders tooltip feedback', async () => {
  const screen = await render(
    <FormFeedback type='invalid' tooltip>
      Required
    </FormFeedback>,
  );

  expect(screen.container.firstElementChild).toHaveClass('tooltip', 'invalid-tooltip');
});

test('accepts box props', async () => {
  const screen = await render(
    <FormFeedback type='valid' className='custom' display='block'>
      Looks great!
    </FormFeedback>,
  );

  expect(screen.container.firstElementChild).toHaveClass('valid-feedback', 'custom', 'd-block');
});
