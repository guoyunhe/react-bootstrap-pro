import { Col, FormControl, Row } from 'react-bootstrap-pro';

export function FormLayoutColumnSizingDemo() {
  return (
    <Row gutter={3}>
      <Col span={{ sm: 7 }}>
        <FormControl placeholder='City' aria-label='City' />
      </Col>
      <Col span={{ sm: true }}>
        <FormControl placeholder='State' aria-label='State' />
      </Col>
      <Col span={{ sm: true }}>
        <FormControl placeholder='Zip' aria-label='Zip' />
      </Col>
    </Row>
  );
}
