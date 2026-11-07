import { InputGroup, InputGroupText, Textarea } from 'react-bootstrap-pro';

export function InputGroupTextareaDemo() {
  return (
    <InputGroup>
      <InputGroupText>With textarea</InputGroupText>
      <Textarea aria-label='With textarea' />
    </InputGroup>
  );
}
