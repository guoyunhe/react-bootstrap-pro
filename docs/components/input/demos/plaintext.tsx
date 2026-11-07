import { Box, Col, FormLabel, Input, Row } from 'react-bootstrap-pro';

export function InputPlaintextDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <Row>
        <Col component={FormLabel} span={{ sm: 2 }} htmlFor='input-plaintext-email' col>
          Email
        </Col>
        <Col span={{ sm: 10 }}>
          <Input id='input-plaintext-email' plaintext readOnly defaultValue='email@example.com' />
        </Col>
      </Row>
      <Row>
        <Col component={FormLabel} span={{ sm: 2 }} htmlFor='input-plaintext-password' col>
          Password
        </Col>
        <Col span={{ sm: 10 }}>
          <Input id='input-plaintext-password' type='password' />
        </Col>
      </Row>
    </Box>
  );
}
