import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Col, Row } from '../src';

test('renders a row with gutters and alignment', async () => {
  const screen = await render(
    <Row gutter={3} gutterX={2} gutterY={4} alignItems='center' cols={{ lg: 'auto' }} />,
  );
  const row = screen.container.firstElementChild;

  expect(row).toHaveClass('row', 'g-3', 'gx-2', 'gy-4', 'align-items-center', 'lg:row-cols-auto');
});

test('renders equal width columns by default', async () => {
  const screen = await render(
    <Row>
      <Col />
      <Col />
    </Row>,
  );

  const columns = [...(screen.container.firstElementChild?.children ?? [])];
  expect(columns).toHaveLength(2);
  expect(columns[0]).toHaveClass('col');
  expect(columns[1]).toHaveClass('col');
});

test('supports responsive spans and automatic width', async () => {
  const screen = await render(
    <Row>
      <Col span={{ xs: 12, sm: 7, md: true }} />
      <Col span='auto' />
    </Row>,
  );

  const [first, second] = [...(screen.container.firstElementChild?.children ?? [])];
  expect(first).toHaveClass('col-12', 'sm:col-7', 'md:col');
  expect(second).toHaveClass('col-auto');
});

test('supports offsets, order, and alignment', async () => {
  const screen = await render(
    <Row>
      <Col span={{ sm: 10 }} offset={{ sm: 2 }} order={{ md: 'last' }} alignSelf='center' />
    </Row>,
  );

  const column = screen.container.firstElementChild?.firstElementChild;
  expect(column).toHaveClass('sm:col-10', 'sm:offset-2', 'md:order-last', 'align-self-center');
});
