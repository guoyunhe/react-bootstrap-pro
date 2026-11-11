import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import type { StepperValue } from '../src';
import { Stepper, StepperItem } from '../src';

function ControlledStepper() {
  const [value, setValue] = useState<StepperValue>('create');

  return (
    <Stepper value={value} onChange={(_, next) => setValue(next)}>
      <StepperItem value='create'>Create</StepperItem>
      <StepperItem value='confirm'>Confirm</StepperItem>
      <StepperItem value='update'>Update</StepperItem>
    </Stepper>
  );
}

test('renders an ordered list with horizontal and breakpoint modifiers', async () => {
  const screen = await render(
    <>
      <Stepper>
        <StepperItem active>One</StepperItem>
      </Stepper>
      <Stepper horizontal>
        <StepperItem>One</StepperItem>
      </Stepper>
      <Stepper horizontal='md'>
        <StepperItem>One</StepperItem>
      </Stepper>
    </>,
  );

  const [vertical, horizontal, responsive] = [
    ...screen.container.querySelectorAll<HTMLOListElement>('ol.stepper'),
  ];

  expect(vertical).toHaveClass('stepper');
  expect(horizontal).toHaveClass('stepper-horizontal');
  expect(responsive).toHaveClass('md:stepper-horizontal');
});

test('wraps an overflowing stepper in a scroll container', async () => {
  const screen = await render(
    <Stepper horizontal overflow>
      <StepperItem>One</StepperItem>
    </Stepper>,
  );

  const wrapper = screen.container.querySelector('.stepper-overflow');
  const list = wrapper?.firstElementChild;

  expect(wrapper?.tagName).toBe('DIV');
  expect(list?.tagName).toBe('OL');
  expect(list).toHaveClass('stepper', 'stepper-horizontal');
});

test('marks active items and lets aria-current be overridden', async () => {
  const screen = await render(
    <Stepper>
      <StepperItem active aria-current='false'>
        Done
      </StepperItem>
      <StepperItem active>Current</StepperItem>
      <StepperItem>Pending</StepperItem>
    </Stepper>,
  );

  const items = [...screen.container.querySelectorAll('li')];

  expect(items[0]).toHaveClass('active');
  expect(items[0]).toHaveAttribute('aria-current', 'false');
  expect(items[1]).toHaveAttribute('aria-current', 'step');
  expect(items[2]).not.toHaveAttribute('aria-current');
});

test('renders interactive steps when component changes', async () => {
  const screen = await render(
    <Stepper component='div'>
      <StepperItem component='a' href='#step' active>
        One
      </StepperItem>
    </Stepper>,
  );

  const link = screen.container.querySelector('a.stepper-item');

  expect(screen.container.querySelector('div.stepper')).not.toBeNull();
  expect(link).toHaveAttribute('href', '#step');
  expect(link).toHaveAttribute('aria-current', 'step');
});

test('derives completed and current steps from the value', async () => {
  const screen = await render(
    <Stepper value='confirm'>
      <StepperItem value='create'>Create</StepperItem>
      <StepperItem value='confirm'>Confirm</StepperItem>
      <StepperItem value='update'>Update</StepperItem>
      <StepperItem value='finish'>Finish</StepperItem>
    </Stepper>,
  );

  const [create, confirm, update, finish] = [...screen.container.querySelectorAll('li')];

  expect(create).toHaveClass('active');
  expect(confirm).toHaveClass('active');
  expect(update).not.toHaveClass('active');
  expect(finish).not.toHaveClass('active');
  expect(create).not.toHaveAttribute('aria-current');
  expect(confirm).toHaveAttribute('aria-current', 'step');
  expect(create).not.toHaveAttribute('role');
});

test('lets the controlled value override the active prop', async () => {
  const screen = await render(
    <Stepper value='first'>
      <StepperItem value='first'>One</StepperItem>
      <StepperItem value='second' active>
        Two
      </StepperItem>
    </Stepper>,
  );

  const [, second] = [...screen.container.querySelectorAll('li')];

  expect(second).not.toHaveClass('active');
  expect(second).not.toHaveAttribute('aria-current');
});

test('changes the active step when a step is clicked', async () => {
  const screen = await render(<ControlledStepper />);
  const items = [...screen.container.querySelectorAll('li')];

  expect(items[0]).toHaveClass('active');
  await screen.getByRole('button', { name: 'Update' }).click();

  expect(items[0]).toHaveClass('active');
  expect(items[1]).toHaveClass('active');
  expect(items[2]).toHaveClass('active');
  expect(items[2]).toHaveAttribute('aria-current', 'step');
});

test('activates a step with the keyboard', async () => {
  const screen = await render(<ControlledStepper />);
  const confirm = screen.getByRole('button', { name: 'Confirm' }).element();
  const update = screen.getByRole('button', { name: 'Update' }).element();

  confirm.dispatchEvent(
    new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true }),
  );

  await expect.poll(() => confirm.getAttribute('aria-current')).toBe('step');
  expect(confirm).toHaveClass('active');

  update.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', bubbles: true, cancelable: true }));

  await expect.poll(() => update.getAttribute('aria-current')).toBe('step');
  expect(update).toHaveClass('active');
});
