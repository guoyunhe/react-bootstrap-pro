import { BiEnvelope, BiSearch } from 'react-bootstrap-icons-pro';
import { Box, FormLabel, Input } from 'react-bootstrap-pro';

export function FormAdornBasicDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <Box>
        <FormLabel htmlFor='form-adorn-search'>Search</FormLabel>
        <Box component='label' classNameBefore='form-control form-adorn'>
          <Box className='form-adorn-icon' aria-hidden='true'>
            <BiSearch />
          </Box>
          <Input ghost type='search' id='form-adorn-search' placeholder='Search...' />
        </Box>
      </Box>
      <Box>
        <FormLabel htmlFor='form-adorn-email'>Email address</FormLabel>
        <Box component='label' classNameBefore='form-control form-adorn form-adorn-end'>
          <Box className='form-adorn-icon' aria-hidden='true'>
            <BiEnvelope />
          </Box>
          <Input ghost type='email' id='form-adorn-email' placeholder='you@example.com' />
        </Box>
      </Box>
    </Box>
  );
}
