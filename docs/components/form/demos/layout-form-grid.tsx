import { Col, Input, Row } from 'react-bootstrap-pro';

export function FormLayoutGridDemo() {
  return (
    <Row>
      <Col>
        <Input placeholder='First name' aria-label='First name' />
      </Col>
      <Col>
        <Input placeholder='Last name' aria-label='Last name' />
      </Col>
    </Row>
  );
}
