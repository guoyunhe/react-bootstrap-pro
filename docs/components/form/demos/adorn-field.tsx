import { BiSearch } from 'react-bootstrap-icons-pro';
import {
  FormAdornIcon,
  FormControl,
  FormField,
  FormLabel,
  FormText,
  Input,
} from 'react-bootstrap-pro';

export function FormAdornFieldDemo() {
  return (
    <FormField>
      <FormLabel htmlFor='form-adorn-field'>Search</FormLabel>
      <FormControl component='label' adorn>
        <FormAdornIcon aria-hidden='true'>
          <BiSearch />
        </FormAdornIcon>
        <Input ghost type='search' id='form-adorn-field' placeholder='Search...' />
      </FormControl>
      <FormText component='small'>Search across all pages and posts.</FormText>
    </FormField>
  );
}
