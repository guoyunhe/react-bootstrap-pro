import {
  Box,
  Button,
  Col,
  Form,
  FormControl,
  FormField,
  FormLabel,
  InputGroup,
  InputGroupText,
  Row,
} from 'react-bootstrap-pro';

export function ValidationBrowserDefaultsDemo() {
  return (
    <Form noValidate={false} onSubmit={(event) => event.preventDefault()}>
      <Row gutter={3} marginBottom={3}>
        <Col span={{ md: 6 }}>
          <FormField>
            <FormLabel htmlFor='validation-default-name'>Name</FormLabel>
            <FormControl id='validation-default-name' defaultValue='Mark Otto' required />
          </FormField>
        </Col>
        <Col span={{ md: 6 }}>
          <FormField>
            <FormLabel htmlFor='validation-default-donation'>Donation amount</FormLabel>
            <InputGroup>
              <InputGroupText>$</InputGroupText>
              <FormControl
                type='number'
                id='validation-default-donation'
                defaultValue={100}
                required
              />
            </InputGroup>
          </FormField>
        </Col>
      </Row>
      <FormField marginBottom={3}>
        <FormLabel htmlFor='validation-default-address'>Address</FormLabel>
        <FormControl id='validation-default-address' defaultValue='1234 Main St' required />
      </FormField>
      <Row gutter={3} marginBottom={3}>
        <Col span={{ md: 6 }}>
          <FormField>
            <FormLabel htmlFor='validation-default-city'>City</FormLabel>
            <FormControl id='validation-default-city' required />
          </FormField>
        </Col>
        <Col span={{ md: 4 }}>
          <FormField>
            <FormLabel htmlFor='validation-default-state'>State</FormLabel>
            <FormControl component='select' id='validation-default-state' defaultValue='' required>
              <option value='' disabled>
                Choose…
              </option>
              <option>...</option>
            </FormControl>
          </FormField>
        </Col>
        <Col span={{ md: 2 }}>
          <FormField>
            <FormLabel htmlFor='validation-default-zip'>Zip</FormLabel>
            <FormControl id='validation-default-zip' required />
          </FormField>
        </Col>
      </Row>
      <Box marginBottom={3}>
        <Button type='submit' variant='solid' theme='primary'>
          Submit form
        </Button>
      </Box>
    </Form>
  );
}
