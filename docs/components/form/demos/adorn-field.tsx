import { BiSearch } from 'react-bootstrap-icons-pro';
import { Box, FormField, FormLabel, FormText, Input } from 'react-bootstrap-pro';

export function FormAdornFieldDemo() {
  return (
    <FormField>
      <FormLabel htmlFor='form-adorn-field'>Search</FormLabel>
      <Box component='label' classNameBefore='form-control form-adorn'>
        <Box className='form-adorn-icon' aria-hidden='true'>
          <BiSearch />
        </Box>
        <Input ghost type='search' id='form-adorn-field' placeholder='Search...' />
      </Box>
      <FormText component='small'>Search across all pages and posts.</FormText>
    </FormField>
  );
}
