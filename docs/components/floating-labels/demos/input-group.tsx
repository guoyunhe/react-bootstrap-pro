import { FormControl, FormFloating, InputGroup, InputGroupText } from 'react-bootstrap-pro';

export function FloatingLabelsInputGroupDemo() {
  return (
    <InputGroup>
      <InputGroupText>@</InputGroupText>
      <FormFloating>
        <label htmlFor='floating-input-group'>Username</label>
        <FormControl type='text' id='floating-input-group' placeholder='Username' />
      </FormFloating>
    </InputGroup>
  );
}
