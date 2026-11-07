import {
  Box,
  Button,
  Checkbox,
  Col,
  FormField,
  Input,
  InputGroup,
  InputGroupText,
  Row,
  Select,
} from 'react-bootstrap-pro';

export function FormLayoutInlineDemo() {
  return (
    <Box component='form' onSubmit={(event) => event.preventDefault()}>
      <Row cols={{ lg: 'auto' }} gutter={3} alignItems='center'>
        <Col span={12}>
          <InputGroup>
            <InputGroupText>@</InputGroupText>
            <Input id='layout-inline-username' placeholder='Username' aria-label='Username' />
          </InputGroup>
        </Col>
        <Col span={12}>
          <Select id='layout-inline-preference' aria-label='Preference' defaultValue=''>
            <option value=''>Choose...</option>
            <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
          </Select>
        </Col>
        <Col span={12}>
          <FormField>
            <Checkbox id='layout-inline-check' />
            <label htmlFor='layout-inline-check'>Remember me</label>
          </FormField>
        </Col>
        <Col span={12}>
          <Button type='submit' variant='solid' theme='primary'>
            Submit
          </Button>
        </Col>
      </Row>
    </Box>
  );
}
