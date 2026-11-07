import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { SelectBasicDemo } from '../docs/components/select/demos/basic';
import { SelectMultipleDemo } from '../docs/components/select/demos/multiple';
import { SelectNativeSizeDemo } from '../docs/components/select/demos/native-size';

test('select demos cover the upstream basic, multiple and size examples', async () => {
  const screen = await render(
    <>
      <SelectBasicDemo />
      <SelectMultipleDemo />
      <SelectNativeSizeDemo />
    </>,
  );
  const basic = screen.getByLabelText('Example select').element();
  const multiple = screen.getByLabelText('Multiple select').element();
  const sized = screen.getByLabelText('Size 3 select').element();

  expect(basic).toHaveClass('form-control');
  expect(multiple).toHaveClass('form-control');
  expect(multiple).toHaveAttribute('multiple');
  expect(sized).toHaveClass('form-control');
  expect(sized).toHaveAttribute('size', '3');
  expect(basic.querySelectorAll('option')).toHaveLength(4);
  expect(multiple.querySelectorAll('option')).toHaveLength(4);
  expect(sized.querySelectorAll('option')).toHaveLength(4);
});
