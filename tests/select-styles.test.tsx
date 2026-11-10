import 'bootstrap/dist/css/bootstrap.css';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Select } from '../src';

test('matches Bootstrap 6 select styles, sizes and validation', async () => {
  const screen = await render(
    <div style={{ width: 400 }}>
      <Select data-testid='select' aria-label='Select'>
        <option>One</option>
      </Select>
      <Select data-testid='small' size='sm' aria-label='Small select'>
        <option>One</option>
      </Select>
      <Select data-testid='large' size='lg' aria-label='Large select'>
        <option>One</option>
      </Select>
      <Select data-testid='invalid' validation='invalid' aria-label='Invalid select'>
        <option>One</option>
      </Select>
      <Select data-testid='multiple' multiple aria-label='Multiple select'>
        <option>One</option>
      </Select>
      <Select data-testid='native-size' htmlSize={4} aria-label='Native size select'>
        <option>One</option>
      </Select>
      <select className='form-control' data-testid='reference' aria-label='Reference select'>
        <option>One</option>
      </select>
    </div>,
  );
  const select = screen.getByTestId('select').element();
  const small = screen.getByTestId('small').element();
  const large = screen.getByTestId('large').element();
  const invalid = screen.getByTestId('invalid').element();
  const multiple = screen.getByTestId('multiple').element();
  const nativeSize = screen.getByTestId('native-size').element();
  const style = getComputedStyle(select);
  const reference = getComputedStyle(screen.getByTestId('reference').element());

  expect(select).toHaveClass('form-control');
  expect(select).not.toHaveClass('form-select');
  expect(small).toHaveClass('form-control', 'form-control-sm');
  expect(large).toHaveClass('form-control', 'form-control-lg');
  expect(invalid).toHaveClass('form-control', 'is-invalid');
  expect(style.width).toBe(reference.width);
  expect(style.borderColor).toBe(reference.borderColor);
  expect(style.backgroundImage).toBe(reference.backgroundImage);
  expect(style.backgroundImage).not.toBe('none');
  expect(getComputedStyle(multiple).backgroundImage).toBe('none');
  expect(nativeSize).toHaveAttribute('size', '4');
  expect(nativeSize).toHaveClass('form-control');
  expect(small).not.toHaveAttribute('size');
  expect(parseFloat(getComputedStyle(small).fontSize)).toBeLessThan(parseFloat(style.fontSize));
  expect(parseFloat(getComputedStyle(small).minHeight)).toBeLessThan(parseFloat(style.minHeight));
  expect(parseFloat(getComputedStyle(large).minHeight)).toBeGreaterThan(
    parseFloat(style.minHeight),
  );
  expect(getComputedStyle(invalid).borderColor).not.toBe(style.borderColor);
});
