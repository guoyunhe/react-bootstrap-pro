import { Textarea } from 'react-bootstrap-pro';

export function TextareaBasicDemo() {
  return (
    <div>
      <label htmlFor='textarea-comments'>Comments</label>
      <Textarea id='textarea-comments' rows={3} placeholder='Leave a comment here' />
    </div>
  );
}
