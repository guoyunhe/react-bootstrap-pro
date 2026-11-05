import { useState } from 'react';
import {
  Box,
  Button,
  Col,
  Form,
  FormControl,
  FormFeedback,
  FormField,
  FormFieldContent,
  FormLabel,
  FormText,
  InputGroup,
  InputGroupText,
  Radio,
  Row,
  Switch,
  SwitchInput,
} from 'react-bootstrap-pro';

export function ValidationCustomDemo() {
  const [message, setMessage] = useState('');

  return (
    <Form
      validation
      onSubmit={(event) => {
        event.preventDefault();
        setMessage(
          event.currentTarget.checkValidity()
            ? 'The form is valid.'
            : 'Please fix the highlighted fields.',
        );
      }}
    >
      <Row gutter={3} mb={3}>
        <Col span={{ md: 6 }}>
          <FormField>
            <FormLabel htmlFor='validation-custom-name'>Name</FormLabel>
            <FormControl
              id='validation-custom-name'
              defaultValue='Mark Otto'
              required
              aria-describedby='validation-custom-name-feedback'
            />
            <FormFeedback id='validation-custom-name-feedback'>Full name is required</FormFeedback>
          </FormField>
        </Col>
        <Col span={{ md: 6 }}>
          <FormField>
            <FormLabel htmlFor='validation-custom-donation'>Donation amount</FormLabel>
            <InputGroup>
              <InputGroupText>$</InputGroupText>
              <FormControl
                type='number'
                id='validation-custom-donation'
                defaultValue={100}
                required
                aria-describedby='validation-custom-donation-feedback'
              />
            </InputGroup>
            <FormFeedback id='validation-custom-donation-feedback'>
              Please enter a donation amount
            </FormFeedback>
          </FormField>
        </Col>
      </Row>
      <FormField mb={3}>
        <FormLabel htmlFor='validation-custom-address'>Address</FormLabel>
        <FormControl
          id='validation-custom-address'
          defaultValue='1234 Main St'
          required
          aria-describedby='validation-custom-address-feedback'
        />
        <FormFeedback id='validation-custom-address-feedback'>
          Please enter a mailing address
        </FormFeedback>
      </FormField>
      <Row gutter={3} mb={3}>
        <Col span={{ md: 6 }}>
          <FormField>
            <FormLabel htmlFor='validation-custom-city'>City</FormLabel>
            <FormControl
              id='validation-custom-city'
              required
              aria-describedby='validation-custom-city-feedback'
            />
            <FormFeedback id='validation-custom-city-feedback'>Please provide a city</FormFeedback>
          </FormField>
        </Col>
        <Col span={{ md: 4 }}>
          <FormField>
            <FormLabel htmlFor='validation-custom-state'>State</FormLabel>
            <FormControl
              component='select'
              id='validation-custom-state'
              defaultValue=''
              required
              aria-describedby='validation-custom-state-feedback'
            >
              <option value='' disabled>
                Choose…
              </option>
              <option>...</option>
            </FormControl>
            <FormFeedback id='validation-custom-state-feedback'>Please select a state</FormFeedback>
          </FormField>
        </Col>
        <Col span={{ md: 2 }}>
          <FormField>
            <FormLabel htmlFor='validation-custom-zip'>Zip</FormLabel>
            <FormControl
              id='validation-custom-zip'
              required
              aria-describedby='validation-custom-zip-feedback'
            />
            <FormFeedback id='validation-custom-zip-feedback'>Required</FormFeedback>
          </FormField>
        </Col>
      </Row>
      <Box component='fieldset' mb={3}>
        <FormLabel component='legend'>Shipping method</FormLabel>
        <FormField mb={1}>
          <Radio
            id='validation-custom-radio-1'
            name='validation-custom-shipping'
            required
            aria-describedby='validation-custom-radio-feedback'
          />
          <FormFieldContent>
            <label htmlFor='validation-custom-radio-1'>Standard</label>
            <FormText component='small'>Arrives in 5-7 business days.</FormText>
          </FormFieldContent>
        </FormField>
        <FormField>
          <Radio
            id='validation-custom-radio-2'
            name='validation-custom-shipping'
            required
            aria-describedby='validation-custom-radio-feedback'
          />
          <FormFieldContent>
            <label htmlFor='validation-custom-radio-2'>Express</label>
            <FormText component='small'>Arrives in 2-3 business days.</FormText>
          </FormFieldContent>
          <FormFeedback id='validation-custom-radio-feedback'>
            Please select a shipping method
          </FormFeedback>
        </FormField>
      </Box>
      <FormField mb={3}>
        <Switch>
          <SwitchInput id='validation-custom-switch' />
        </Switch>
        <label htmlFor='validation-custom-switch'>Subscribe to newsletter</label>
      </FormField>
      <Button type='submit' variant='solid' theme='primary'>
        Submit form
      </Button>
      {message && (
        <FormText component='output' d='block' mt={2}>
          {message}
        </FormText>
      )}
    </Form>
  );
}
