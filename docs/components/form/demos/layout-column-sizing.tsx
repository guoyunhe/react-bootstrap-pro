import { Col, Input, Row } from 'react-bootstrap-pro';

export function FormLayoutColumnSizingDemo() {
  return (
    <Row gutter={3}>
      <Col span={{ sm: 7 }}>
        <Input placeholder='City' aria-label='City' />
      </Col>
      <Col span={{ sm: true }}>
        <Input placeholder='State' aria-label='State' />
      </Col>
      <Col span={{ sm: true }}>
        <Input placeholder='Zip' aria-label='Zip' />
      </Col>
    </Row>
  );
}
