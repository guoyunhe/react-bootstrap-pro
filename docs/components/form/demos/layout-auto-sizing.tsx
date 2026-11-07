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

export function FormLayoutAutoSizingDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <Box component='form' onSubmit={(event) => event.preventDefault()}>
        <Row gutterX={3} gutterY={2} alignItems='center'>
          <Col span='auto'>
            <Input id='layout-auto-name' placeholder='Jane Doe' aria-label='Name' />
          </Col>
          <Col span='auto'>
            <InputGroup>
              <InputGroupText>@</InputGroupText>
              <Input id='layout-auto-username' placeholder='Username' aria-label='Username' />
            </InputGroup>
          </Col>
          <Col span='auto'>
            <Select id='layout-auto-preference' aria-label='Preference' defaultValue=''>
              <option value=''>Choose...</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </Select>
          </Col>
          <Col span='auto'>
            <FormField>
              <Checkbox id='layout-auto-check' />
              <label htmlFor='layout-auto-check'>Remember me</label>
            </FormField>
          </Col>
          <Col span='auto'>
            <Button type='submit' variant='solid' theme='primary'>
              Submit
            </Button>
          </Col>
        </Row>
      </Box>
      <Box component='form' onSubmit={(event) => event.preventDefault()}>
        <Row gutterX={3} gutterY={2} alignItems='center'>
          <Col span={{ sm: 3 }}>
            <Input id='layout-auto-size-name' placeholder='Jane Doe' aria-label='Name' />
          </Col>
          <Col span={{ sm: 3 }}>
            <InputGroup>
              <InputGroupText>@</InputGroupText>
              <Input id='layout-auto-size-username' placeholder='Username' aria-label='Username' />
            </InputGroup>
          </Col>
          <Col span={{ sm: 3 }}>
            <Select id='layout-auto-size-preference' aria-label='Preference' defaultValue=''>
              <option value=''>Choose...</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </Select>
          </Col>
          <Col span='auto'>
            <FormField>
              <Checkbox id='layout-auto-size-check' />
              <label htmlFor='layout-auto-size-check'>Remember me</label>
            </FormField>
          </Col>
          <Col span='auto'>
            <Button type='submit' variant='solid' theme='primary'>
              Submit
            </Button>
          </Col>
        </Row>
      </Box>
    </Box>
  );
}
