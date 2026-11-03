import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { PageLink, Pagination, PaginationItem } from '../src';

test('composes pagination items and links', async () => {
  const screen = await render(
    <Pagination data-testid='pagination'>
      <PaginationItem active>
        <PageLink href='/1'>1</PageLink>
      </PaginationItem>
    </Pagination>,
  );

  expect(screen.getByTestId('pagination')).toHaveClass('pagination');
  expect(screen.getByRole('link', { name: '1' })).toHaveClass('page-link');
});
