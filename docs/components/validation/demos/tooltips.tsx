import {
  Box,
  Button,
  Form,
  FormControl,
  FormFeedback,
  FormField,
  FormLabel,
} from 'react-bootstrap-pro';

export function ValidationTooltipsDemo() {
  return (
    <Form validation onSubmit={(event) => event.preventDefault()}>
      <Box d='flex' flexDirection='column' gap={10}>
        <FormField>
          <FormLabel htmlFor='validation-tooltip-name'>Name</FormLabel>
          <FormControl
            id='validation-tooltip-name'
            defaultValue='Mark Otto'
            required
            aria-describedby='validation-tooltip-name-feedback'
          />
          <FormFeedback tooltip id='validation-tooltip-name-feedback'>
            Full name is required
          </FormFeedback>
        </FormField>
        <FormField>
          <FormLabel htmlFor='validation-tooltip-city'>City</FormLabel>
          <FormControl
            id='validation-tooltip-city'
            required
            aria-describedby='validation-tooltip-city-feedback'
          />
          <FormFeedback tooltip id='validation-tooltip-city-feedback'>
            Please provide a city
          </FormFeedback>
        </FormField>
        <FormField>
          <FormLabel htmlFor='validation-tooltip-zip'>Zip</FormLabel>
          <FormControl
            id='validation-tooltip-zip'
            required
            aria-describedby='validation-tooltip-zip-feedback'
          />
          <FormFeedback tooltip id='validation-tooltip-zip-feedback'>
            Required
          </FormFeedback>
        </FormField>
        <Box>
          <Button type='submit' variant='solid' theme='primary'>
            Submit form
          </Button>
        </Box>
      </Box>
    </Form>
  );
}
