import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Input, InputGroup, InputGroupButton, InputGroupText, Select } from '../src';

test('composes input groups with text addons and sizes', async () => {
  const screen = await render(
    <InputGroup size='lg' data-testid='input-group'>
      <InputGroupText data-testid='addon'>@</InputGroupText>
      <Input type='text' aria-label='Username' />
      <InputGroupText component='label' htmlFor='input-group-select' data-testid='addon-label'>
        Options
      </InputGroupText>
      <Select id='input-group-select' defaultValue=''>
        <option value=''>Choose...</option>
        <option value='1'>One</option>
      </Select>
    </InputGroup>,
  );

  const group = screen.getByTestId('input-group').element() as HTMLElement;
  expect(group).toHaveClass('input-group', 'input-group-lg');
  expect(screen.getByTestId('addon')).toHaveClass('input-group-text');
  expect(screen.getByTestId('addon-label').element().tagName).toBe('LABEL');
  expect(screen.getByTestId('addon-label').element()).toHaveAttribute('for', 'input-group-select');
  expect(group.querySelector('input')).toHaveClass('form-control');
  expect(group.querySelector('select')).toHaveClass('form-control');
});

test('input group buttons preserve Button behavior and polymorphic props', async () => {
  let clicks = 0;
  const screen = await render(
    <InputGroup>
      <InputGroupButton
        variant='outline'
        theme='secondary'
        className='custom-button'
        classNameBefore='before-button'
        onClick={() => clicks++}
      >
        Search
      </InputGroupButton>
      <InputGroupButton component='a' href='#help' disabled>
        Help
      </InputGroupButton>
    </InputGroup>,
  );
  const button = screen.getByRole('button', { name: 'Search' });
  expect(button.element().tagName).toBe('BUTTON');
  expect(button).toHaveAttribute('type', 'button');
  expect(button).toHaveClass(
    'btn',
    'btn-outline',
    'theme-secondary',
    'input-group-btn',
    'custom-button',
    'before-button',
  );
  await button.click();
  expect(clicks).toBe(1);
  const link = screen.getByRole('link', { name: 'Help' });
  expect(link).toHaveClass('btn', 'input-group-btn', 'disabled');
  expect(link).toHaveAttribute('href', '#help');
  expect(link).toHaveAttribute('aria-disabled', 'true');
  expect(link).toHaveAttribute('tabindex', '-1');
});
