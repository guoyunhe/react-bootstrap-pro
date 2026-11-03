import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { FormField, Range } from '../src';

test('renders range tracks with fill, bubble and ticks', async () => {
  const screen = await render(
    <FormField>
      <Range
        id='range-test'
        min={0}
        max={100}
        defaultValue={60}
        bubble
        format={(value) => `${value}%`}
        ticks={[
          { value: 0, label: 'Low' },
          { value: 100, label: 'High' },
        ]}
        theme='primary'
        data-testid='range'
      />
    </FormField>,
  );

  const wrapper = screen.getByTestId('range').element() as HTMLElement;
  const input = wrapper.querySelector('input') as HTMLInputElement;

  expect(wrapper).toHaveClass('form-range', 'theme-primary');
  expect(input.type).toBe('range');
  expect(input.getAttribute('min')).toBe('0');
  expect(input.getAttribute('max')).toBe('100');
  expect(input.value).toBe('60');
  await expect.poll(() => wrapper.style.getPropertyValue('--bs-range-fill')).toBe('0.6');
  expect(wrapper.querySelector('.form-range-bubble .tooltip-inner')?.textContent).toBe('60%');
  expect(wrapper.querySelectorAll('.form-range-tick')).toHaveLength(2);
  expect(wrapper.querySelector('.form-range-tick-label')?.textContent).toBe('Low');
});
