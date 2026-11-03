import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFoot,
  TableHead,
  TableHeader,
  TableRow,
} from '../src';

function renderTable(props: object = {}) {
  return render(
    <Table data-testid='table' {...props}>
      <TableCaption>List of users</TableCaption>
      <TableHead>
        <TableRow>
          <TableHeader scope='col'>#</TableHeader>
          <TableHeader scope='col'>First</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableHeader scope='row'>1</TableHeader>
          <TableCell>Mark</TableCell>
        </TableRow>
      </TableBody>
      <TableFoot>
        <TableRow>
          <TableCell>Footer</TableCell>
          <TableCell>Footer</TableCell>
        </TableRow>
      </TableFoot>
    </Table>,
  );
}

test('renders a basic table', async () => {
  const screen = await renderTable();
  const table = screen.getByTestId('table').element();

  expect(table.tagName).toBe('TABLE');
  expect(table).toHaveClass('table');
  expect(table.querySelector('caption')?.textContent).toBe('List of users');
  expect(table.querySelectorAll('thead th')).toHaveLength(2);
  expect(table.querySelector('tbody th')?.getAttribute('scope')).toBe('row');
  expect(table.querySelectorAll('tfoot td')).toHaveLength(2);
  expect(table.parentElement).toBe(screen.container);
});

test('applies accent and border modifiers', async () => {
  const screen = await renderTable({
    striped: true,
    stripedColumns: true,
    hover: true,
    bordered: true,
    small: true,
    captionTop: true,
  });
  const table = screen.getByTestId('table').element();

  expect(table).toHaveClass(
    'table-striped',
    'table-striped-columns',
    'table-hover',
    'table-bordered',
    'table-sm',
    'caption-top',
  );
});

test('applies a theme and box props', async () => {
  const screen = await renderTable({ theme: 'success', verticalAlign: 'middle', marginBottom: 0 });
  const table = screen.getByTestId('table').element();

  expect(table).toHaveClass('theme-success', 'align-middle', 'mb-0');
});

test('wraps card and responsive tables', async () => {
  const screen = await renderTable({ card: true, responsive: true });
  const table = screen.getByTestId('table').element();
  const wrapper = screen.container.firstElementChild;

  expect(wrapper).not.toBe(table);
  expect(wrapper).toHaveClass('table-responsive', 'table-card');
  expect(wrapper?.firstElementChild).toBe(table);

  await screen.rerender(
    <Table data-testid='table' responsive='md'>
      <TableBody />
    </Table>,
  );
  expect(screen.container.firstElementChild).toHaveClass('md:table-responsive');
});

test('stacks rows with a responsive wrapper', async () => {
  const screen = await render(
    <Table data-testid='table' stacked='md'>
      <TableBody>
        <TableRow>
          <TableCell cell='Name'>backdrop</TableCell>
          <TableCell cell='Type'>boolean</TableCell>
        </TableRow>
      </TableBody>
    </Table>,
  );
  const table = screen.getByTestId('table').element();

  expect(table).toHaveClass('md:table-stacked');
  expect(screen.container.firstElementChild).toHaveClass('table-responsive');
  expect(table.querySelector('td')?.getAttribute('data-cell')).toBe('Name');
});

test('renders active rows and cells', async () => {
  const screen = await render(
    <Table>
      <TableBody>
        <TableRow active>
          <TableCell active>Cell</TableCell>
        </TableRow>
      </TableBody>
    </Table>,
  );

  expect(screen.container.querySelector('tr')).toHaveClass('table-active');
  expect(screen.container.querySelector('td')).toHaveClass('table-active');
});

test('renders group dividers', async () => {
  const screen = await render(
    <Table>
      <TableHead divider />
      <TableBody divider />
      <TableFoot divider />
    </Table>,
  );

  expect(screen.container.querySelector('thead')).toHaveClass('table-group-divider');
  expect(screen.container.querySelector('tbody')).toHaveClass('table-group-divider');
  expect(screen.container.querySelector('tfoot')).toHaveClass('table-group-divider');
});
