import { Col, Container, Row } from 'react-bootstrap-pro';

export function GridNestingDemo() {
  return (
    <Container fluid className='text-center'>
      <Row>
        <Col span={{ sm: 3 }} className='border bg-body-tertiary py-3'>
          Level 1: sm:col-3
        </Col>
        <Col span={{ sm: 9 }}>
          <Row>
            <Col span={{ xs: 8, sm: 6 }} className='border bg-body-tertiary py-3'>
              Level 2: col-8 sm:col-6
            </Col>
            <Col span={{ xs: 4, sm: 6 }} className='border bg-body-tertiary py-3'>
              Level 2: col-4 sm:col-6
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
