import { Box, Col, FormControl, FormLabel, Row } from 'react-bootstrap-pro';

export function FormLayoutHorizontalSizingDemo() {
  return (
    <Box component='form' onSubmit={(event) => event.preventDefault()}>
      <Row gutter={3} marginBottom={3}>
        <Col span={{ sm: 2 }}>
          <FormLabel col='sm' htmlFor='layout-label-sm'>
            Email
          </FormLabel>
        </Col>
        <Col span={{ sm: 10 }}>
          <FormControl
            type='email'
            size='sm'
            id='layout-label-sm'
            placeholder='col-form-label-sm'
          />
        </Col>
      </Row>
      <Row gutter={3} marginBottom={3}>
        <Col span={{ sm: 2 }}>
          <FormLabel col htmlFor='layout-label-default'>
            Email
          </FormLabel>
        </Col>
        <Col span={{ sm: 10 }}>
          <FormControl type='email' id='layout-label-default' placeholder='col-form-label' />
        </Col>
      </Row>
      <Row gutter={3}>
        <Col span={{ sm: 2 }}>
          <FormLabel col='lg' htmlFor='layout-label-lg'>
            Email
          </FormLabel>
        </Col>
        <Col span={{ sm: 10 }}>
          <FormControl
            type='email'
            size='lg'
            id='layout-label-lg'
            placeholder='col-form-label-lg'
          />
        </Col>
      </Row>
    </Box>
  );
}
