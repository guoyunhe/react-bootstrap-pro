import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { ChipInput } from '../src';

function typeInto(input: HTMLInputElement, value: string) {
  const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set;
  setter?.call(input, value);
  input.dispatchEvent(new Event('input', { bubbles: true }));
}

function press(target: HTMLElement, key: string, init: KeyboardEventInit = {}) {
  target.dispatchEvent(
    new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true, ...init }),
  );
}

test('adds chips with Enter and the separator', async () => {
  const changes: string[][] = [];
  const screen = await render(
    <ChipInput
      defaultValue={['JavaScript']}
      onChange={(values) => changes.push(values)}
      placeholder='Add more…'
      aria-label='Skills'
      data-testid='chips'
    />,
  );

  const container = screen.getByTestId('chips').element();
  const input = container.querySelector('input') as HTMLInputElement;

  expect(container).toHaveClass('chip-input');
  expect(container.querySelectorAll('.chip')).toHaveLength(1);

  typeInto(input, 'TypeScript');
  press(input, 'Enter');
  await expect.poll(() => container.querySelectorAll('.chip')).toHaveLength(2);
  expect(changes.at(-1)).toEqual(['JavaScript', 'TypeScript']);

  typeInto(input, 'React,');
  await expect.poll(() => container.querySelectorAll('.chip')).toHaveLength(3);
  expect(changes.at(-1)).toEqual(['JavaScript', 'TypeScript', 'React']);
  expect(input.value).toBe('');
});

test('removes chips with the dismiss button and Backspace', async () => {
  const screen = await render(
    <ChipInput defaultValue={['One', 'Two']} aria-label='Tags' data-testid='chips' />,
  );

  const container = screen.getByTestId('chips').element();
  const input = container.querySelector('input') as HTMLInputElement;

  await container.querySelector<HTMLElement>('.chip-dismiss')?.click();
  await expect.poll(() => container.querySelectorAll('.chip')).toHaveLength(1);
  expect(container.querySelector('.chip')?.textContent).toContain('Two');

  typeInto(input, '');
  input.focus();
  press(input, 'Backspace');
  const lastChip = container.querySelector<HTMLElement>('.chip') as HTMLElement;
  await expect.poll(() => lastChip.classList.contains('active')).toBe(true);
  press(lastChip, 'Backspace');
  await expect.poll(() => container.querySelectorAll('.chip')).toHaveLength(0);
});

test('respects duplicates, maxChips and disabled state', async () => {
  const screen = await render(
    <>
      <ChipInput
        defaultValue={['One']}
        allowDuplicates={false}
        maxChips={2}
        aria-label='Tags'
        data-testid='limited'
      />
      <ChipInput
        defaultValue={['Locked']}
        disabled
        aria-label='Disabled tags'
        data-testid='disabled'
      />
    </>,
  );

  const limited = screen.getByTestId('limited').element();
  const input = limited.querySelector('input') as HTMLInputElement;

  typeInto(input, 'One');
  press(input, 'Enter');
  await expect.poll(() => limited.querySelectorAll('.chip')).toHaveLength(1);

  typeInto(input, 'Two');
  press(input, 'Enter');
  typeInto(input, 'Three');
  press(input, 'Enter');
  await expect.poll(() => limited.querySelectorAll('.chip')).toHaveLength(2);

  const disabled = screen.getByTestId('disabled').element();
  expect(disabled.querySelector('input')).toHaveProperty('disabled', true);
  expect(disabled.querySelectorAll('.chip-dismiss')[0]).toHaveProperty('disabled', true);
});

test('applies a validation state to the ghost input', async () => {
  const screen = await render(<ChipInput id='tags' aria-label='Tags' validation='invalid' />);

  expect(screen.container.querySelector('input')).toHaveClass('form-ghost', 'is-invalid');
});
