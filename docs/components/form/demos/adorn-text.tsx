import { Box, Input } from 'react-bootstrap-pro';

export function FormAdornTextDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <Box component='label' classNameBefore='form-control form-adorn'>
        <Box component='span' className='form-adorn-text' aria-hidden='true'>
          $
        </Box>
        <Input ghost placeholder='0.00' aria-label='Amount' />
      </Box>
      <Box component='label' classNameBefore='form-control form-adorn form-adorn-end'>
        <Box component='span' className='form-adorn-text' aria-hidden='true'>
          USD
        </Box>
        <Input ghost placeholder='Amount' aria-label='Amount in USD' />
      </Box>
      <Box component='label' classNameBefore='form-control form-adorn'>
        <Box component='span' className='form-adorn-text' aria-hidden='true'>
          https://
        </Box>
        <Input ghost placeholder='example.com' aria-label='Website address' />
      </Box>
      <Box component='label' classNameBefore='form-control form-adorn form-adorn-end'>
        <Box component='span' className='form-adorn-text' aria-hidden='true'>
          @example.com
        </Box>
        <Input ghost placeholder='username' aria-label='Email username' />
      </Box>
    </Box>
  );
}
