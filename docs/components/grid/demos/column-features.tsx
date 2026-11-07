import type { ReactNode } from 'react';
import { Box, Col, Container, Row } from 'react-bootstrap-pro';

function GridCell({ children }: { children: ReactNode }) {
  return (
    <Box className='h-100 rounded border bg-body-tertiary text-center' p={3}>
      {children}
    </Box>
  );
}

export function ColumnFeaturesDemo() {
  return (
    <Container fluid>
      <Box d='grid' gap={4}>
        <Row
          alignItems='center'
          justifyContent={{ xs: 'center', md: 'between' }}
          gutter={3}
          style={{ minHeight: '8rem' }}
        >
          <Col span={{ xs: 6, md: 4 }}>
            <GridCell>Aligned row</GridCell>
          </Col>
          <Col span={{ xs: 6, md: 4 }} alignSelf='end'>
            <GridCell>Aligned column</GridCell>
          </Col>
        </Row>
        <Row gutter={3}>
          <Col span={{ xs: 6, sm: 3 }}>
            <GridCell>First</GridCell>
          </Col>
          <Col span={{ xs: 6, sm: 3 }}>
            <GridCell>Second</GridCell>
          </Col>
          <Box className='w-100' d={{ xs: 'none', md: 'block' }} aria-hidden='true' />
          <Col span={{ xs: 6, sm: 3 }} order={{ md: 1 }}>
            <GridCell>Third, reordered</GridCell>
          </Col>
          <Col span={{ xs: 6, sm: 3 }}>
            <GridCell>Fourth</GridCell>
          </Col>
        </Row>
        <Row gutter={3}>
          <Col span={9}>
            <GridCell>9 columns</GridCell>
          </Col>
          <Col span={4}>
            <GridCell>4 columns wrap because the total exceeds 12</GridCell>
          </Col>
        </Row>
        <Col span={{ xs: 6, md: 3 }} className='rounded border bg-body-tertiary text-center' p={3}>
          Standalone column
        </Col>
      </Box>
    </Container>
  );
}
