import { Col, Container, Row } from 'react-bootstrap-pro';

export function GridAllBreakpointsDemo() {
  return (
    <Container fluid className='text-center'>
      <Row>
        <Col className='border bg-body-tertiary py-3'>col</Col>
        <Col className='border bg-body-tertiary py-3'>col</Col>
        <Col className='border bg-body-tertiary py-3'>col</Col>
        <Col className='border bg-body-tertiary py-3'>col</Col>
      </Row>
      <Row>
        <Col span={8} className='border bg-body-tertiary py-3'>
          col-8
        </Col>
        <Col span={4} className='border bg-body-tertiary py-3'>
          col-4
        </Col>
      </Row>
    </Container>
  );
}
