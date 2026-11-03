import {
  Box,
  Button,
  FormCheck,
  FormControl,
  FormField,
  FormLabel,
  FormText,
} from 'react-bootstrap-pro';

export function FormBasicDemo() {
  return (
    <Box component='form' onSubmit={(event) => event.preventDefault()}>
      <FormField marginBottom={3}>
        <FormLabel htmlFor='form-basic-email'>Email address</FormLabel>
        <FormControl
          id='form-basic-email'
          type='email'
          placeholder='name@example.com'
          aria-describedby='form-basic-email-help'
        />
        <FormText id='form-basic-email-help'>
          We’ll never share your email with anyone else.
        </FormText>
      </FormField>
      <FormField marginBottom={3}>
        <FormLabel htmlFor='form-basic-password'>Password</FormLabel>
        <FormControl id='form-basic-password' type='password' />
      </FormField>
      <FormField marginBottom={3}>
        <FormCheck id='form-basic-check' />
        <label htmlFor='form-basic-check'>Check me out</label>
      </FormField>
      <Button type='submit' variant='solid' theme='primary'>
        Submit
      </Button>
    </Box>
  );
}
