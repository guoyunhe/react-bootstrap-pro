import { Col, Container, Row } from 'react-bootstrap-pro';

export function GridRowColsResponsiveDemo() {
  return (
    <Container fluid className='text-center'>
      <Row cols={{ xs: 1, sm: 2, md: 4 }}>
        {[1, 2, 3, 4].map((item) => (
          <Col key={item} className='border bg-body-tertiary py-3'>
            Column
          </Col>
        ))}
      </Row>
    </Container>
  );
}
