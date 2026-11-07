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
        <InputGroupText>https://example.com/</InputGroupText>
        <Input type='text' id='input-group-field' placeholder='username' />
      </InputGroup>
      <FormText component='small'>Choose a unique URL for your profile.</FormText>
    </FormField>
  );
}
