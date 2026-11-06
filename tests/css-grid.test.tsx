import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Grid, GridItem } from '../src';

test('renders a CSS grid with columns, rows, and inherited Box utilities', async () => {
  const screen = await render(
    <Grid
      columns={3}
      rows={2}
      gap={3}
      p={2}
      textAlign='center'
      className='custom-grid'
      style={{ color: 'red', '--bs-columns': 5, '--bs-gap': '1rem' }}
      data-testid='grid'
    />,
  );
  const grid = screen.getByTestId('grid');

  expect(grid.element().getAttribute('class')).toBe('grid p-2 gap-3 text-center custom-grid');
  expect(grid.element().style.getPropertyValue('--bs-columns')).toBe('3');
  expect(grid.element().style.getPropertyValue('--bs-rows')).toBe('2');
  expect(grid.element().style.getPropertyValue('--bs-gap')).toBe('1rem');
  expect(grid.element().style.color).toBe('red');
});

test('sets the CSS grid gap from the gridGap prop', async () => {
  const screen = await render(
    <Grid gridGap='0.5rem 1rem' style={{ '--bs-gap': '1rem' }} data-testid='grid' />,
  );

  expect(screen.getByTestId('grid').element().style.getPropertyValue('--bs-gap')).toBe(
    '0.5rem 1rem',
  );
});

test('supports responsive CSS grid item spans and starts', async () => {
  const screen = await render(
    <Grid>
      <GridItem
        span={{ xs: 6, md: 4 }}
        start={{ sm: 2 }}
        d='block'
        className='custom-item'
        data-testid='grid-item'
      />
    </Grid>,
  );

  expect(screen.getByTestId('grid-item')).toHaveClass(
    'g-col-6',
    'md:g-col-4',
    'sm:g-start-2',
    'd-block',
    'custom-item',
  );
});
