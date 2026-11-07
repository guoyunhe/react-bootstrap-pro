import {
  FormField,
  FormLabel,
  FormText,
  Input,
  InputGroup,
  InputGroupText,
} from 'react-bootstrap-pro';

export function InputGroupFieldDemo() {
  return (
    <FormField>
      <FormLabel htmlFor='input-group-field'>Your vanity URL</FormLabel>
      <InputGroup>
        <InputGroupText id='input-group-field-prefix'>https://example.com/</InputGroupText>
        <Input
          type='text'
          id='input-group-field'
          placeholder='username'
          aria-describedby='input-group-field-prefix input-group-field-help'
        />
      </InputGroup>
      <FormText component='small' id='input-group-field-help'>
        Choose a unique URL for your profile.
      </FormText>
    </FormField>
  );
}
