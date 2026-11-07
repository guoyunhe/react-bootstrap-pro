import { Box, Col, FormLabel, Input, Row } from 'react-bootstrap-pro';

export function InputPlaintextDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <Row>
        <FormLabel htmlFor='input-plaintext-email' className='sm:col-2 col-form-label'>
          Email
        </FormLabel>
        <Col span={{ sm: 10 }}>
          <Input id='input-plaintext-email' plaintext readOnly defaultValue='email@example.com' />
        </Col>
      </Row>
      <Row>
        <FormLabel htmlFor='input-plaintext-password' className='sm:col-2 col-form-label'>
          Password
        </FormLabel>
        <Col span={{ sm: 10 }}>
          <Input id='input-plaintext-password' type='password' />
        </Col>
      </Row>
    </Box>
  );
}
