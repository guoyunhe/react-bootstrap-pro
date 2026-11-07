import { Col, Container, Row } from 'react-bootstrap-pro';

export function GridMixMatchDemo() {
  return (
    <Container fluid className='text-center'>
      <Row>
        <Col span={{ md: 8 }} className='border bg-body-tertiary py-3'>
          md:col-8
        </Col>
        <Col span={{ xs: 6, md: 4 }} className='border bg-body-tertiary py-3'>
          col-6 md:col-4
        </Col>
      </Row>
      <Row>
        {[1, 2, 3].map((item) => (
          <Col key={item} span={{ xs: 6, md: 4 }} className='border bg-body-tertiary py-3'>
            col-6 md:col-4
          </Col>
        ))}
      </Row>
      <Row>
        <Col span={6} className='border bg-body-tertiary py-3'>
          col-6
        </Col>
        <Col span={6} className='border bg-body-tertiary py-3'>
          col-6
        </Col>
      </Row>
    </Container>
  );
}
