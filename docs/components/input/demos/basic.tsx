import { FormLabel, Input } from 'react-bootstrap-pro';

export function InputBasicDemo() {
  return (
    <>
      <FormLabel htmlFor='input-email' mb={2}>
        Email address
      </FormLabel>
      <Input type='email' id='input-email' placeholder='name@example.com' autoComplete='email' />
    </>
  );
}
