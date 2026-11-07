import {
  Box,
  Col,
  FormFeedback,
  FormField,
  FormLabel,
  Input,
  InputGroup,
  InputGroupText,
  Row,
  Select,
} from 'react-bootstrap-pro';

export function ValidationServerSideDemo() {
  return (
    <Box>
      <Row gutter={3} mb={3}>
        <Col span={{ md: 6 }}>
          <FormField>
            <FormLabel htmlFor='validation-server-name'>Name</FormLabel>
            <Input
              id='validation-server-name'
              defaultValue='Mark Otto'
              validation='valid'
              aria-describedby='validation-server-name-valid validation-server-name-invalid'
            />
            <FormFeedback type='valid' id='validation-server-name-valid'>
              Looks great!
            </FormFeedback>
            <FormFeedback id='validation-server-name-invalid'>Full name is required</FormFeedback>
          </FormField>
        </Col>
        <Col span={{ md: 6 }}>
          <FormField>
            <FormLabel htmlFor='validation-server-donation'>Donation amount</FormLabel>
            <InputGroup>
              <InputGroupText>$</InputGroupText>
              <Input
                type='number'
                id='validation-server-donation'
                validation='invalid'
                aria-describedby='validation-server-donation-valid validation-server-donation-invalid'
              />
            </InputGroup>
            <FormFeedback type='valid' id='validation-server-donation-valid'>
              Looks great!
            </FormFeedback>
            <FormFeedback id='validation-server-donation-invalid'>
              Please enter a donation amount
            </FormFeedback>
          </FormField>
        </Col>
      </Row>
      <FormField mb={3}>
        <FormLabel htmlFor='validation-server-address'>Address</FormLabel>
        <Input
          id='validation-server-address'
          defaultValue='1234 Main St'
          validation='valid'
          aria-describedby='validation-server-address-valid validation-server-address-invalid'
        />
        <FormFeedback type='valid' id='validation-server-address-valid'>
          Looks great!
        </FormFeedback>
        <FormFeedback id='validation-server-address-invalid'>
          Please enter a mailing address
        </FormFeedback>
      </FormField>
      <Row gutter={3}>
        <Col span={{ md: 6 }}>
          <FormField>
            <FormLabel htmlFor='validation-server-city'>City</FormLabel>
            <Input
              id='validation-server-city'
              validation='invalid'
              aria-describedby='validation-server-city-feedback'
            />
            <FormFeedback id='validation-server-city-feedback'>Please provide a city</FormFeedback>
          </FormField>
        </Col>
        <Col span={{ md: 4 }}>
          <FormField>
            <FormLabel htmlFor='validation-server-state'>State</FormLabel>
            <Select
              id='validation-server-state'
              defaultValue=''
              validation='invalid'
              aria-describedby='validation-server-state-feedback'
            >
              <option value='' disabled>
                Choose…
              </option>
              <option>...</option>
            </Select>
            <FormFeedback id='validation-server-state-feedback'>Please select a state</FormFeedback>
          </FormField>
        </Col>
        <Col span={{ md: 2 }}>
          <FormField>
            <FormLabel htmlFor='validation-server-zip'>Zip</FormLabel>
            <Input
              id='validation-server-zip'
              validation='invalid'
              aria-describedby='validation-server-zip-feedback'
            />
            <FormFeedback id='validation-server-zip-feedback'>Required</FormFeedback>
          </FormField>
        </Col>
      </Row>
    </Box>
  );
}
