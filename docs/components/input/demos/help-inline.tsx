import { Col, FormLabel, FormText, Input, Row } from 'react-bootstrap-pro';

export function InputHelpInlineDemo() {
  return (
    <Row gutter={3} alignItems='center'>
      <Col span='auto'>
        <FormLabel htmlFor='input-password-inline' className='col-form-label'>
          Password
        </FormLabel>
      </Col>
      <Col span='auto'>
        <Input
          id='input-password-inline'
          type='password'
          aria-describedby='input-password-inline-help'
        />
      </Col>
      <Col span='auto'>
        <FormText component='span' id='input-password-inline-help'>
          Must be 8–20 characters long.
        </FormText>
      </Col>
    </Row>
  );
}
