import 'bootstrap/dist/css/bootstrap.css';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { InputGroupAddonsDemo } from '../docs/components/input-group/demos/addons';
import { InputGroupBorderRadiusDemo } from '../docs/components/input-group/demos/border-radius';
import { InputGroupButtonAddonsDemo } from '../docs/components/input-group/demos/button-addons';
import { InputGroupFieldDemo } from '../docs/components/input-group/demos/field';
import { InputGroupFileDemo } from '../docs/components/input-group/demos/file';
import { InputGroupMenusDemo } from '../docs/components/input-group/demos/menus';
import { InputGroupSegmentedDemo } from '../docs/components/input-group/demos/segmented';
import { InputGroupSelectDemo } from '../docs/components/input-group/demos/select';
import { InputGroupTextareaDemo } from '../docs/components/input-group/demos/textarea';

test('InputGroup examples associate controls and use Bootstrap add-ons', async () => {
  const screen = await render(
    <>
      <InputGroupFieldDemo />
      <InputGroupTextareaDemo />
      <InputGroupSelectDemo />
      <InputGroupFileDemo />
      <InputGroupAddonsDemo />
      <InputGroupButtonAddonsDemo />
      <InputGroupBorderRadiusDemo />
    </>,
  );
  expect(screen.getByLabelText('Your vanity URL')).toHaveAttribute(
    'aria-describedby',
    'input-group-field-prefix input-group-field-help',
  );
  expect(screen.getByLabelText('With textarea').element().tagName).toBe('TEXTAREA');
  expect(screen.container.querySelector('#group-select-start')).toHaveAccessibleName('Options');
  expect(screen.container.querySelector('#group-select-end')).toHaveAccessibleName('Options');
  expect(screen.container.querySelector('#group-file-start')).toHaveAccessibleName('Upload');
  expect(screen.container.querySelector('#group-file-end')).toHaveAccessibleName('Upload');
  expect(screen.container.querySelectorAll('.input-group-btn')).toHaveLength(10);
  expect(screen.container.querySelectorAll('.input-group-text')).toHaveLength(13);
  const hidden = screen.container.querySelector('.input-group-ignore');
  expect(hidden).toHaveClass('d-none');
  expect(getComputedStyle(hidden as Element).display).toBe('none');
});

test('menu examples toggle independently and return focus after an action', async () => {
  const screen = await render(
    <>
      <InputGroupMenusDemo />
      <InputGroupSegmentedDemo />
    </>,
  );
  const leading = screen.container.querySelector<HTMLButtonElement>(
    "[aria-controls='input-group-menu-start']",
  )!;
  const trailing = screen.container.querySelector<HTMLButtonElement>(
    "[aria-controls='input-group-menu-end']",
  )!;
  const segmented = screen.container.querySelector<HTMLButtonElement>(
    "[aria-controls='input-group-segmented-end']",
  )!;
  expect(leading).toHaveAttribute('aria-expanded', 'false');
  leading.click();
  await expect.element(leading).toHaveAttribute('aria-expanded', 'true');
  expect(trailing).toHaveAttribute('aria-expanded', 'false');
  expect(screen.container.querySelector('#input-group-menu-start')).toHaveClass('show');
  segmented.click();
  await expect.element(segmented).toHaveAttribute('aria-expanded', 'true');
  expect(leading).toHaveAttribute('aria-expanded', 'true');
  const action = screen.container.querySelector<HTMLButtonElement>(
    '#input-group-menu-start .menu-item',
  )!;
  action.click();
  await expect.element(leading).toHaveAttribute('aria-expanded', 'false');
  expect(document.activeElement).toBe(leading);
  expect(segmented).toHaveAttribute('aria-expanded', 'true');
  const segmentedAction = screen.container.querySelector<HTMLButtonElement>(
    '#input-group-segmented-end .menu-item',
  )!;
  segmentedAction.focus();
  segmentedAction.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
  await expect.element(segmented).toHaveAttribute('aria-expanded', 'false');
  expect(document.activeElement).toBe(segmented);
});
