import { FormFloating, Input, InputGroup, InputGroupText } from 'react-bootstrap-pro';

export function FloatingLabelsInputGroupDemo() {
  return (
    <InputGroup>
      <InputGroupText>@</InputGroupText>
      <FormFloating>
        <label htmlFor='floating-input-group'>Username</label>
        <Input type='text' id='floating-input-group' placeholder='Username' />
      </FormFloating>
    </InputGroup>
  );
}
