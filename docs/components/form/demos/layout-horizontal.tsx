import {
  Box,
  Button,
  Checkbox,
  Col,
  FormField,
  FormLabel,
  Input,
  Radio,
  Row,
} from 'react-bootstrap-pro';

export function FormLayoutHorizontalDemo() {
  return (
    <Box component='form' onSubmit={(event) => event.preventDefault()}>
      <Row gutter={3} mb={3}>
        <Col span={{ sm: 2 }}>
          <FormLabel col htmlFor='layout-horizontal-email'>
            Email
          </FormLabel>
        </Col>
        <Col span={{ sm: 10 }}>
          <Input type='email' id='layout-horizontal-email' />
        </Col>
      </Row>
      <Row gutter={3} mb={3}>
        <Col span={{ sm: 2 }}>
          <FormLabel col htmlFor='layout-horizontal-password'>
            Password
          </FormLabel>
        </Col>
        <Col span={{ sm: 10 }}>
          <Input type='password' id='layout-horizontal-password' />
        </Col>
      </Row>
      <Box component='fieldset' mb={3}>
        <Row gutter={3}>
          <Col span={{ sm: 2 }}>
            <FormLabel component='legend' col pt={0}>
              Radios
            </FormLabel>
          </Col>
          <Col span={{ sm: 10 }}>
            <Box>
              <FormField mb={1}>
                <Radio
                  name='layout-horizontal-radios'
                  id='layout-horizontal-radio-1'
                  value='option1'
                />
                <label htmlFor='layout-horizontal-radio-1'>First radio</label>
              </FormField>
              <FormField mb={1}>
                <Radio
                  name='layout-horizontal-radios'
                  id='layout-horizontal-radio-2'
                  value='option2'
                />
                <label htmlFor='layout-horizontal-radio-2'>Second radio</label>
              </FormField>
              <FormField>
                <Radio
                  name='layout-horizontal-radios'
                  id='layout-horizontal-radio-3'
                  value='option3'
                  disabled
                />
                <label htmlFor='layout-horizontal-radio-3'>Third disabled radio</label>
              </FormField>
            </Box>
          </Col>
        </Row>
      </Box>
      <Row gutter={3} mb={3}>
        <Col span={{ sm: 10 }} offset={{ sm: 2 }}>
          <FormField>
            <Checkbox id='layout-horizontal-check' />
            <label htmlFor='layout-horizontal-check'>Example checkbox</label>
          </FormField>
        </Col>
      </Row>
      <Button type='submit' variant='solid' theme='primary'>
        Sign in
      </Button>
    </Box>
  );
}
