import { Box, FormAdornText, FormControl, Input } from 'react-bootstrap-pro';

export function FormAdornTextDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <FormControl component='label' adorn>
        <FormAdornText aria-hidden='true'>$</FormAdornText>
        <Input ghost placeholder='0.00' aria-label='Amount' />
      </FormControl>
      <FormControl component='label' adornEnd>
        <FormAdornText aria-hidden='true'>USD</FormAdornText>
        <Input ghost placeholder='Amount' aria-label='Amount in USD' />
      </FormControl>
      <FormControl component='label' adorn>
        <FormAdornText aria-hidden='true'>https://</FormAdornText>
        <Input ghost placeholder='example.com' aria-label='Website address' />
      </FormControl>
      <FormControl component='label' adornEnd>
        <FormAdornText aria-hidden='true'>@example.com</FormAdornText>
        <Input ghost placeholder='username' aria-label='Email username' />
      </FormControl>
    </Box>
  );
}
