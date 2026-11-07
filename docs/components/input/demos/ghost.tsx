import { BiSearch } from 'react-bootstrap-icons-pro';
import { FormAdornIcon, FormControl, FormField, FormLabel, Input } from 'react-bootstrap-pro';

export function InputGhostDemo() {
  return (
    <FormField>
      <FormLabel htmlFor='input-ghost-search'>Search</FormLabel>
      <FormControl component='label' adorn>
        <FormAdornIcon aria-hidden='true'>
          <BiSearch />
        </FormAdornIcon>
        <Input ghost type='search' id='input-ghost-search' placeholder='Search docs' />
      </FormControl>
    </FormField>
  );
}
