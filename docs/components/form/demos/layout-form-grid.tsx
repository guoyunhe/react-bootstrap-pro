import { Col, FormControl, Row } from 'react-bootstrap-pro';

export function FormLayoutGridDemo() {
  return (
    <Row>
      <Col>
        <FormControl placeholder='First name' aria-label='First name' />
      </Col>
      <Col>
        <FormControl placeholder='Last name' aria-label='Last name' />
      </Col>
    </Row>
  );
}
