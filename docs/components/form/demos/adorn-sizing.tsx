import { BiSearch } from 'react-bootstrap-icons-pro';
import { Box, FormControl } from 'react-bootstrap-pro';

export function FormAdornSizingDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <FormControl component='label' adorn size='sm'>
        <Box className='form-adorn-icon' aria-hidden='true'>
          <BiSearch />
        </Box>
        <FormControl ghost placeholder='Small input' aria-label='Small input' />
      </FormControl>
      <FormControl component='label' adorn>
        <Box className='form-adorn-icon' aria-hidden='true'>
          <BiSearch />
        </Box>
        <FormControl ghost placeholder='Default input' aria-label='Default input' />
      </FormControl>
      <FormControl component='label' adorn size='lg'>
        <Box className='form-adorn-icon' aria-hidden='true'>
          <BiSearch />
        </Box>
        <FormControl ghost placeholder='Large input' aria-label='Large input' />
      </FormControl>
    </Box>
  );
}
