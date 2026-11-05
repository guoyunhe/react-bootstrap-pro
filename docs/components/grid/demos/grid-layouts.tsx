import type { ReactNode } from 'react';
import { Box, Col, Row } from 'react-bootstrap-pro';

const cards = ['One', 'Two', 'Three', 'Four'];

function GridCell({ children }: { children: ReactNode }) {
  return (
    <Box className='h-100 rounded border bg-body-tertiary text-center' p={3}>
      {children}
    </Box>
  );
}

export function GridLayoutsDemo() {
  return (
    <Box d='grid' gap={4}>
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
    </Box>
  );
}
