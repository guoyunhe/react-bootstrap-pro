import {
  Box,
  Button,
  Checkbox,
  Col,
  FormField,
  FormLabel,
  Input,
  Row,
  Select,
} from 'react-bootstrap-pro';

export function FormLayoutGuttersDemo() {
  return (
    <Box component='form' onSubmit={(event) => event.preventDefault()}>
      <Row gutter={3}>
        <Col span={{ md: 6 }}>
          <FormLabel htmlFor='layout-gutter-email'>Email</FormLabel>
          <Input type='email' id='layout-gutter-email' />
        </Col>
        <Col span={{ md: 6 }}>
          <FormLabel htmlFor='layout-gutter-password'>Password</FormLabel>
          <Input type='password' id='layout-gutter-password' />
        </Col>
        <Col span={12}>
          <FormLabel htmlFor='layout-gutter-address'>Address</FormLabel>
          <Input id='layout-gutter-address' placeholder='1234 Main St' />
        </Col>
        <Col span={12}>
          <FormLabel htmlFor='layout-gutter-address2'>Address 2</FormLabel>
          <Input id='layout-gutter-address2' placeholder='Apartment, studio, or floor' />
        </Col>
        <Col span={{ md: 6 }}>
          <FormLabel htmlFor='layout-gutter-city'>City</FormLabel>
          <Input id='layout-gutter-city' />
        </Col>
        <Col span={{ md: 4 }}>
          <FormLabel htmlFor='layout-gutter-state'>State</FormLabel>
          <Select id='layout-gutter-state' defaultValue=''>
            <option value=''>Choose...</option>
            <option>...</option>
          </Select>
        </Col>
        <Col span={{ md: 2 }}>
          <FormLabel htmlFor='layout-gutter-zip'>Zip</FormLabel>
          <Input id='layout-gutter-zip' />
        </Col>
        <Col span={12}>
          <FormField>
            <Checkbox id='layout-gutter-check' />
            <label htmlFor='layout-gutter-check'>Check me out</label>
          </FormField>
        </Col>
        <Col span={12}>
          <Button type='submit' variant='solid' theme='primary'>
            Sign in
          </Button>
        </Col>
      </Row>
    </Box>
  );
}
