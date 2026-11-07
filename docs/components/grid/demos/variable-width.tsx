import { Col, Container, Row } from 'react-bootstrap-pro';

export function GridVariableWidthDemo() {
  return (
    <Container fluid className='text-center'>
      <Row justifyContent={{ md: 'center' }}>
        <Col span={{ xs: true, lg: 2 }} className='border bg-body-tertiary py-3'>
          1 of 3
        </Col>
        <Col span={{ md: 'auto' }} className='border bg-body-tertiary py-3'>
          Variable width content
        </Col>
        <Col span={{ xs: true, lg: 2 }} className='border bg-body-tertiary py-3'>
          3 of 3
        </Col>
      </Row>
      <Row>
        <Col className='border bg-body-tertiary py-3'>1 of 3</Col>
        <Col span={{ md: 'auto' }} className='border bg-body-tertiary py-3'>
          Variable width content
        </Col>
        <Col span={{ xs: true, lg: 2 }} className='border bg-body-tertiary py-3'>
          3 of 3
        </Col>
      </Row>
    </Container>
  );
}
