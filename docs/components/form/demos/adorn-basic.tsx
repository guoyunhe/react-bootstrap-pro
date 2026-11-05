import { BiEnvelope, BiSearch } from 'react-bootstrap-icons-pro';
import { Box, FormControl, FormLabel } from 'react-bootstrap-pro';

export function FormAdornBasicDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <Box>
        <FormLabel htmlFor='form-adorn-search'>Search</FormLabel>
        <FormControl component='label' adorn>
          <Box className='form-adorn-icon' aria-hidden='true'>
            <BiSearch />
          </Box>
          <FormControl ghost type='search' id='form-adorn-search' placeholder='Search...' />
        </FormControl>
      </Box>
      <Box>
        <FormLabel htmlFor='form-adorn-email'>Email address</FormLabel>
        <FormControl component='label' adorn adornEnd>
          <Box className='form-adorn-icon' aria-hidden='true'>
            <BiEnvelope />
          </Box>
          <FormControl ghost type='email' id='form-adorn-email' placeholder='you@example.com' />
        </FormControl>
      </Box>
    </Box>
  );
}
