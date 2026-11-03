import { Col, FormControl, FormFloating, Row } from 'react-bootstrap-pro';

export function FloatingLabelsLayoutDemo() {
  return (
    <Row gutter={2}>
      <Col>
        <FormFloating>
          <label htmlFor='floating-layout-email'>Email address</label>
          <FormControl
            type='email'
            id='floating-layout-email'
            placeholder='name@example.com'
            defaultValue='mdo@example.com'
          />
        </FormFloating>
      </Col>
      <Col>
        <FormFloating>
          <label htmlFor='floating-layout-select'>Works with selects</label>
          <FormControl
            component='select'
            id='floating-layout-select'
            defaultValue=''
            aria-label='Floating label select in grid example'
          >
            <option value=''>Open this select menu</option>
            <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
          </FormControl>
        </FormFloating>
      </Col>
    </Row>
  );
}
