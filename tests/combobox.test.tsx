import { expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-react';

import { Combobox, type ComboboxOption } from '../src';

function typeInto(input: HTMLInputElement, value: string) {
  const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set;
  setter?.call(input, value);
  input.dispatchEvent(new Event('input', { bubbles: true }));
}

const countries: ComboboxOption[] = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
];

test('renders the toggle, placeholder and menu items', async () => {
  const onChange = vi.fn();
  const screen = await render(
    <Combobox
      id='country'
      name='country'
      placeholder='Pick a country…'
      options={countries}
      onChange={onChange}
      data-testid='combobox'
    />,
  );

  const root = screen.getByTestId('combobox').element();
  const toggle = root.querySelector('.combobox-toggle') as HTMLButtonElement;
  const hidden = root.querySelector<HTMLInputElement>('input[type=hidden]');

  expect(toggle).toHaveClass('form-control', 'combobox-toggle');
  expect(toggle).toHaveAttribute('aria-haspopup', 'listbox');
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  expect(toggle.textContent).toContain('Pick a country…');
  expect(toggle.querySelector('.combobox-value')).toHaveClass('combobox-placeholder');
  expect(toggle.querySelector('.combobox-caret')).not.toBeNull();
  expect(hidden).toHaveProperty('name', 'country');
  expect(hidden).toHaveProperty('value', '');

  await toggle.click();
  expect(toggle).toHaveAttribute('aria-expanded', 'true');
  expect(toggle).toHaveClass('show');

  const menu = root.querySelector('.menu') as HTMLElement;
  expect(menu).toHaveClass('menu', 'show');
  const items = [...root.querySelectorAll('[role=option]')];
  expect(items).toHaveLength(3);

  await (items[0] as HTMLElement).click();
  await expect.poll(() => toggle.textContent).toContain('United States');
  expect(toggle.querySelector('.combobox-value')).not.toHaveClass('combobox-placeholder');
  expect(hidden).toHaveProperty('value', 'us');
  expect(onChange).toHaveBeenCalledWith('us');
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
});

test('supports multiple selection and renders the count', async () => {
  const screen = await render(
    <Combobox name='skills' multiple options={countries} placeholder='Select skills…' />,
  );

  const root = screen.container;
  const toggle = root.querySelector('.combobox-toggle') as HTMLButtonElement;
  await toggle.click();

  const items = [...root.querySelectorAll('[role=option]')];
  await (items[0] as HTMLElement).click();
  await (items[1] as HTMLElement).click();

  await expect.poll(() => toggle.textContent).toContain('2 selected');
  expect(toggle).toHaveAttribute('aria-expanded', 'true');
  expect(items[0]).toHaveClass('selected');
  expect(items[0]).toHaveAttribute('aria-selected', 'true');
  expect(root.querySelector<HTMLInputElement>('input[type=hidden]')).toHaveProperty(
    'value',
    'us,uk',
  );

  await (items[0] as HTMLElement).click();
  await expect.poll(() => toggle.textContent).toContain('United Kingdom');
});

test('filters options with the search field', async () => {
  const screen = await render(<Combobox search options={countries} placeholder='Pick…' />);

  const root = screen.container;
  const toggle = root.querySelector('.combobox-toggle') as HTMLButtonElement;
  await toggle.click();

  const search = root.querySelector<HTMLInputElement>('.combobox-search-input');
  expect(search).not.toBeNull();
  await expect.poll(() => document.activeElement).toBe(search);

  typeInto(search as HTMLInputElement, 'king');
  await expect.poll(() => root.querySelectorAll('[role=option]').length).toBe(1);
  expect(root.querySelector('[role=option]')?.textContent).toBe('United Kingdom');

  typeInto(search as HTMLInputElement, 'zzz');
  await expect.poll(() => root.querySelector('.combobox-no-results')).not.toBeNull();
});

test('navigates with the keyboard and toggles with Escape', async () => {
  const screen = await render(<Combobox options={countries} placeholder='Pick…' />);

  const root = screen.container;
  const toggle = root.querySelector('.combobox-toggle') as HTMLButtonElement;

  toggle.dispatchEvent(
    new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true, cancelable: true }),
  );
  await expect.poll(() => toggle.getAttribute('aria-expanded')).toBe('true');
  await expect.poll(() => document.activeElement?.textContent).toBe('United States');

  const active = document.activeElement as HTMLElement;
  active.dispatchEvent(
    new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true, cancelable: true }),
  );
  await expect.poll(() => document.activeElement?.textContent).toBe('United Kingdom');

  (document.activeElement as HTMLElement).dispatchEvent(
    new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true }),
  );
  await expect.poll(() => toggle.textContent).toContain('United Kingdom');
});

test('renders groups, check icons and disabled options', async () => {
  const screen = await render(
    <Combobox
      check
      defaultValue='html'
      placeholder='Pick a language…'
      groups={[
        {
          label: 'Frontend',
          options: [
            { value: 'html', label: 'HTML' },
            { value: 'css', label: 'CSS', disabled: true },
          ],
        },
        { label: 'Backend', options: [{ value: 'go', label: 'Go' }] },
      ]}
    />,
  );

  const root = screen.container;
  const toggle = root.querySelector('.combobox-toggle') as HTMLButtonElement;
  expect(toggle.textContent).toContain('HTML');

  await toggle.click();
  expect([...root.querySelectorAll('.menu-header')].map((header) => header.textContent)).toEqual([
    'Frontend',
    'Backend',
  ]);

  const html = [...root.querySelectorAll('[role=option]')].find(
    (item) => item.textContent === 'HTML',
  );
  expect(html).toHaveClass('selected');
  expect(html?.querySelector('.menu-item-check')).not.toBeNull();

  const css = [...root.querySelectorAll('[role=option]')].find(
    (item) => item.textContent === 'CSS',
  ) as HTMLButtonElement;
  expect(css).toHaveProperty('disabled', true);
  expect(css).toHaveAttribute('aria-disabled', 'true');
});

test('applies a validation state', async () => {
  const screen = await render(
    <Combobox aria-label='Country' options={countries} validation='invalid' />,
  );
  const toggle = screen.container.querySelector('.combobox-toggle');

  expect(toggle).toHaveClass('is-invalid');
  expect(screen.container.firstElementChild).toHaveClass('is-invalid');
});
