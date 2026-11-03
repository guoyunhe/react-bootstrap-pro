import type { ReactNode } from 'react';
import { Col, Row } from 'react-bootstrap-pro';

const cards = ['One', 'Two', 'Three', 'Four'];

function GridCell({ children }: { children: ReactNode }) {
  return <div className='h-100 rounded border bg-body-tertiary p-3 text-center'>{children}</div>;
}

export function GridLayoutsDemo() {
  return (
    <div className='d-grid gap-4'>
      <Row cols={{ xs: 1, sm: 2, md: 4 }} gutter={3}>
        {cards.map((card) => (
          <Col key={card}>
            <GridCell>{card}</GridCell>
          </Col>
        ))}
      </Row>
      <Row gutter={3}>
        <Col span={{ xs: 12, md: 8 }}>
          <GridCell>8 of 12 columns at medium and above</GridCell>
        </Col>
        <Col span={{ xs: 12, md: 4 }}>
          <GridCell>4 of 12 columns at medium and above</GridCell>
        </Col>
      </Row>
    </div>
  );
}
