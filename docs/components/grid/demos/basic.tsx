import { Col, Container, Row } from 'react-bootstrap-pro';

export function GridBasicDemo() {
  return (
    <Container fluid className='text-center'>
      <Row>
        <Col className='border bg-body-tertiary py-3'>Column</Col>
        <Col className='border bg-body-tertiary py-3'>Column</Col>
        <Col className='border bg-body-tertiary py-3'>Column</Col>
      </Row>
    </Container>
  );
}
