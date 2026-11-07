import type { FormEvent } from 'react';
import { Button, Col, FormLabel, Input, Row } from 'react-bootstrap-pro';

export function InputPlaintextInlineDemo() {
  return (
    <Row
      component='form'
      gutter={3}
      onSubmit={(event: FormEvent<HTMLFormElement>) => event.preventDefault()}
    >
      <Col span='auto'>
        <FormLabel htmlFor='input-plaintext-inline-email' visuallyHidden>
          Email
        </FormLabel>
        <Input
          id='input-plaintext-inline-email'
          plaintext
          readOnly
          defaultValue='email@example.com'
        />
      </Col>
      <Col span='auto'>
        <FormLabel htmlFor='input-plaintext-inline-password' visuallyHidden>
          Password
        </FormLabel>
        <Input id='input-plaintext-inline-password' type='password' placeholder='Password' />
      </Col>
      <Col span='auto'>
        <Button type='submit' variant='solid' theme='primary' mb={3}>
          Confirm identity
        </Button>
      </Col>
    </Row>
  );
}
