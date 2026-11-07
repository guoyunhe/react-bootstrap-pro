import { BiEnvelope, BiSearch } from 'react-bootstrap-icons-pro';
import { Box, FormAdornIcon, FormControl, FormLabel, Input } from 'react-bootstrap-pro';

export function FormAdornBasicDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <Box>
        <FormLabel htmlFor='form-adorn-search'>Search</FormLabel>
        <FormControl component='label' adorn>
          <FormAdornIcon aria-hidden='true'>
            <BiSearch />
          </FormAdornIcon>
          <Input ghost type='search' id='form-adorn-search' placeholder='Search...' />
        </FormControl>
      </Box>
      <Box>
        <FormLabel htmlFor='form-adorn-email'>Email address</FormLabel>
        <FormControl component='label' adornEnd>
          <FormAdornIcon aria-hidden='true'>
            <BiEnvelope />
          </FormAdornIcon>
          <Input ghost type='email' id='form-adorn-email' placeholder='you@example.com' />
        </FormControl>
      </Box>
    </Box>
  );
}
