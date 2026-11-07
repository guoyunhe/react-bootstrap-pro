import { Col, Container, Row } from 'react-bootstrap-pro';

export function GridStackedDemo() {
  return (
    <Container fluid className='text-center'>
      <Row>
        <Col span={{ sm: 8 }} className='border bg-body-tertiary py-3'>
          sm:col-8
        </Col>
        <Col span={{ sm: 4 }} className='border bg-body-tertiary py-3'>
          sm:col-4
        </Col>
      </Row>
      <Row>
        <Col span={{ sm: true }} className='border bg-body-tertiary py-3'>
          sm:col
        </Col>
        <Col span={{ sm: true }} className='border bg-body-tertiary py-3'>
          sm:col
        </Col>
        <Col span={{ sm: true }} className='border bg-body-tertiary py-3'>
          sm:col
        </Col>
      </Row>
    </Container>
  );
}
