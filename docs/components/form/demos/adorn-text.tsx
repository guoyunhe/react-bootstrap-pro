import { Box, FormControl } from 'react-bootstrap-pro';

export function FormAdornTextDemo() {
  return (
    <Box display='flex' flexDirection='column' gap={3}>
      <FormControl component='label' adorn>
        <Box component='span' className='form-adorn-text' aria-hidden='true'>
          $
        </Box>
        <FormControl ghost placeholder='0.00' aria-label='Amount' />
      </FormControl>
      <FormControl component='label' adorn adornEnd>
        <Box component='span' className='form-adorn-text' aria-hidden='true'>
          USD
        </Box>
        <FormControl ghost placeholder='Amount' aria-label='Amount in USD' />
      </FormControl>
      <FormControl component='label' adorn>
        <Box component='span' className='form-adorn-text' aria-hidden='true'>
          https://
        </Box>
        <FormControl ghost placeholder='example.com' aria-label='Website address' />
      </FormControl>
      <FormControl component='label' adorn adornEnd>
        <Box component='span' className='form-adorn-text' aria-hidden='true'>
          @example.com
        </Box>
        <FormControl ghost placeholder='username' aria-label='Email username' />
      </FormControl>
    </Box>
  );
}
