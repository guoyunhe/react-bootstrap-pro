import { FormFloating, Textarea } from 'react-bootstrap-pro';

export function TextareaFloatingDemo() {
  return (
    <FormFloating>
      <label htmlFor='textarea-floating'>Comments</label>
      <Textarea id='textarea-floating' placeholder='Leave a comment here' />
    </FormFloating>
  );
}
