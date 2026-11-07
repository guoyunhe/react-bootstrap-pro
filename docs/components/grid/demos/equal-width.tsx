import { Col, Container, Row } from 'react-bootstrap-pro';

export function GridEqualWidthDemo() {
  return (
    <Container fluid className='text-center'>
      <Row>
        <Col className='border bg-body-tertiary py-3'>1 of 2</Col>
        <Col className='border bg-body-tertiary py-3'>2 of 2</Col>
      </Row>
      <Row>
        <Col className='border bg-body-tertiary py-3'>1 of 3</Col>
        <Col className='border bg-body-tertiary py-3'>2 of 3</Col>
        <Col className='border bg-body-tertiary py-3'>3 of 3</Col>
      </Row>
    </Container>
  );
}
