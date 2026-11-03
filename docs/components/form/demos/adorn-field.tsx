import { BiSearch } from 'react-bootstrap-icons-pro';
import { Box, FormControl, FormField, FormLabel, FormText } from 'react-bootstrap-pro';

export function FormAdornFieldDemo() {
  return (
    <FormField>
      <FormLabel htmlFor='form-adorn-field'>Search</FormLabel>
      <FormControl component='label' adorn>
        <Box className='form-adorn-icon' aria-hidden='true'>
          <BiSearch />
        </Box>
        <FormControl ghost type='search' id='form-adorn-field' placeholder='Search...' />
      </FormControl>
      <FormText component='small'>Search across all pages and posts.</FormText>
    </FormField>
  );
}
