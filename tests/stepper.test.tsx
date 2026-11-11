import 'bootstrap/dist/css/bootstrap.css';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Stepper, StepperItem } from '../src';

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
