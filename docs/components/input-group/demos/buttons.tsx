import { InputGroupButton, Input, InputGroup } from 'react-bootstrap-pro';

export function InputGroupButtonsDemo() {
  return (
    <InputGroup>
      <InputGroupButton
        type='button'
        variant='outline'
        theme='secondary'

        id='input-group-button-1'
      >
        Button
      </InputGroupButton>
      <Input
        type='text'
        aria-label='Example text with button addon'
        aria-describedby='input-group-button-1'
      />
    </InputGroup>
  );
}
