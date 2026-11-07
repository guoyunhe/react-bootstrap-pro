import { Col, Container, Row } from 'react-bootstrap-pro';

export function GridRowColsAutoDemo() {
  return (
    <Container fluid className='text-center'>
      <Row cols='auto'>
        {[1, 2, 3, 4].map((item) => (
          <Col key={item} className='border bg-body-tertiary py-3'>
            Column
          </Col>
        ))}
      </Row>
    </Container>
  );
}
