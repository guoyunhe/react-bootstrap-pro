import { Col, Container, Row } from 'react-bootstrap-pro';

export function GridRowColsOverrideDemo() {
  return (
    <Container fluid className='text-center'>
      <Row cols={4}>
        {[1, 2, 3, 4].map((item) => (
          <Col
            key={item}
            span={item === 3 ? 6 : undefined}
            className='border bg-body-tertiary py-3'
          >
            Column
          </Col>
        ))}
      </Row>
    </Container>
  );
}
