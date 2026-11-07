import { Col, Container, Row } from 'react-bootstrap-pro';

export function GridColumnWidthDemo() {
  return (
    <Container fluid className='text-center'>
      <Row>
        <Col className='border bg-body-tertiary py-3'>1 of 3</Col>
        <Col span={6} className='border bg-body-tertiary py-3'>
          2 of 3 (wider)
        </Col>
        <Col className='border bg-body-tertiary py-3'>3 of 3</Col>
      </Row>
      <Row>
        <Col className='border bg-body-tertiary py-3'>1 of 3</Col>
        <Col span={5} className='border bg-body-tertiary py-3'>
          2 of 3 (wider)
        </Col>
        <Col className='border bg-body-tertiary py-3'>3 of 3</Col>
      </Row>
    </Container>
  );
}
