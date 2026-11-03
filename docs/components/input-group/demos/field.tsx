import {
  FormControl,
  FormField,
  FormLabel,
  FormText,
  InputGroup,
  InputGroupText,
} from 'react-bootstrap-pro';

export function InputGroupFieldDemo() {
  return (
    <FormField>
      <FormLabel htmlFor='input-group-field'>Your vanity URL</FormLabel>
      <InputGroup>
        <InputGroupText>https://example.com/</InputGroupText>
        <FormControl type='text' id='input-group-field' placeholder='username' />
      </InputGroup>
      <FormText component='small'>Choose a unique URL for your profile.</FormText>
    </FormField>
  );
}
